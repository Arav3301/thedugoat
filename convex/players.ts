import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

// Get all players
export const getAll = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("players").collect();
  },
});

// Get players by tier
export const getByTier = query({
  args: { tier: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("players")
      .withIndex("by_tier", (q) => q.eq("tier", args.tier))
      .collect();
  },
});

// Add a player (admin use)
export const addPlayer = mutation({
  args: {
    name: v.string(),
    nation: v.string(),
    nation_code: v.string(),
    role: v.string(),
    batting_style: v.string(),
    bowling_style: v.string(),
    tier: v.string(),
    stats: v.any(),
    ratings: v.any(),
    card: v.any(),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("players", args);
  },
});

// Seed all players from local data
export const seedPlayers = mutation({
  args: { players: v.array(v.any()) },
  handler: async (ctx, args) => {
    for (const player of args.players) {
      await ctx.db.insert("players", player)
    }
    return { seeded: args.players.length }
  },
});