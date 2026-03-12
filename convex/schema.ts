import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  // Users table
  users: defineTable({
    name: v.string(),
    email: v.string(),
    username: v.string(),
    avatar: v.optional(v.string()),
    coins: v.number(),
    gems: v.number(),
    xp: v.number(),
    rank: v.string(),
    createdAt: v.number(),
  }).index("by_email", ["email"])
    .index("by_username", ["username"]),

  // Players table — all 500+ cards
  players: defineTable({
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
  }).index("by_tier", ["tier"])
    .index("by_nation", ["nation"]),

  // User card collections
  user_cards: defineTable({
    userId: v.id("users"),
    playerId: v.id("players"),
    quantity: v.number(),
    is_favorite: v.boolean(),
    obtained_at: v.number(),
  }).index("by_user", ["userId"])
    .index("by_player", ["playerId"]),

  // Match history
  matches: defineTable({
    userId: v.id("users"),
    opponent: v.string(),
    result: v.string(),
    score: v.string(),
    team: v.any(),
    scenario: v.string(),
    analysis: v.optional(v.string()),
    playedAt: v.number(),
  }).index("by_user", ["userId"]),

  // Card market listings
  market_listings: defineTable({
    sellerId: v.id("users"),
    playerId: v.id("players"),
    price: v.number(),
    listing_type: v.string(),
    status: v.string(),
    createdAt: v.number(),
    expiresAt: v.number(),
  }).index("by_player", ["playerId"])
    .index("by_seller", ["sellerId"])
    .index("by_status", ["status"]),

  // Packs
  packs: defineTable({
    userId: v.id("users"),
    pack_type: v.string(),
    cards_received: v.array(v.id("players")),
    opened_at: v.number(),
  }).index("by_user", ["userId"]),
});