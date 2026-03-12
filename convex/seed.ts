import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const seedAllPlayers = mutation({
  args: {},
  handler: async (ctx) => {
    const players = [
      {
        name: "Sachin Tendulkar",
        nation: "India",
        nation_code: "IND",
        role: "Batsman",
        batting_style: "Right-hand bat",
        bowling_style: "Right-arm off break",
        tier: "goat",
        stats: {
          test: { matches: 200, runs: 15921, average: 53.8, hundreds: 51, fifties: 68, highest_score: 248, wickets: 46, bowling_average: 54.2, economy: 2.8 },
          odi: { matches: 463, runs: 18426, average: 44.8, hundreds: 49, fifties: 96, highest_score: 200, wickets: 154, bowling_average: 44.5, economy: 5.1 },
          t20: { matches: 1, runs: 10, average: 10.0, hundreds: 0, fifties: 0, highest_score: 10, wickets: 0 },
        },
        ratings: { batting: 99, bowling: 55, fielding: 88, captaincy: 78, test_suitability: 99, odi_suitability: 99, t20_suitability: 75 },
        card: { tier: "goat", accent_color: "#FFD700", glow_color: "#FFD700", card_number: "001", edition: "Base" },
      },
      {
        name: "MS Dhoni",
        nation: "India",
        nation_code: "IND",
        role: "Wicket-keeper Batsman",
        batting_style: "Right-hand bat",
        bowling_style: "Right-arm medium",
        tier: "goat",
        stats: {
          test: { matches: 90, runs: 4876, average: 38.1, hundreds: 6, fifties: 33, highest_score: 224, wickets: 0 },
          odi: { matches: 350, runs: 10773, average: 50.6, hundreds: 10, fifties: 73, highest_score: 183, wickets: 1, bowling_average: 20.0, economy: 5.3 },
          t20: { matches: 98, runs: 1617, average: 37.6, hundreds: 0, fifties: 2, highest_score: 56, wickets: 0 },
        },
        ratings: { batting: 92, bowling: 20, fielding: 99, captaincy: 99, test_suitability: 88, odi_suitability: 99, t20_suitability: 97 },
        card: { tier: "goat", accent_color: "#FFD700", glow_color: "#FFD700", card_number: "003", edition: "Base" },
      },
      {
        name: "Virat Kohli",
        nation: "India",
        nation_code: "IND",
        role: "Batsman",
        batting_style: "Right-hand bat",
        bowling_style: "Right-arm medium",
        tier: "legendary",
        stats: {
          test: { matches: 113, runs: 8848, average: 48.8, hundreds: 29, fifties: 30, highest_score: 254, wickets: 0 },
          odi: { matches: 292, runs: 13848, average: 58.1, hundreds: 50, fifties: 72, highest_score: 183, wickets: 4, economy: 5.9 },
          t20: { matches: 125, runs: 4188, average: 52.7, hundreds: 1, fifties: 38, highest_score: 122, wickets: 0 },
        },
        ratings: { batting: 97, bowling: 22, fielding: 95, captaincy: 88, test_suitability: 96, odi_suitability: 99, t20_suitability: 94 },
        card: { tier: "legendary", accent_color: "#E8750A", glow_color: "#E8750A", card_number: "006", edition: "Base" },
      },
      {
        name: "Rohit Sharma",
        nation: "India",
        nation_code: "IND",
        role: "Batsman",
        batting_style: "Right-hand bat",
        bowling_style: "Right-arm off break",
        tier: "epic",
        stats: {
          test: { matches: 67, runs: 4301, average: 40.6, hundreds: 12, fifties: 16, highest_score: 212, wickets: 1 },
          odi: { matches: 264, runs: 10709, average: 48.9, hundreds: 31, fifties: 57, highest_score: 264, wickets: 8, economy: 5.1 },
          t20: { matches: 159, runs: 4231, average: 32.1, hundreds: 4, fifties: 29, highest_score: 118, wickets: 0 },
        },
        ratings: { batting: 91, bowling: 20, fielding: 88, captaincy: 85, test_suitability: 88, odi_suitability: 95, t20_suitability: 96 },
        card: { tier: "epic", accent_color: "#9B30FF", glow_color: "#9B30FF", card_number: "011", edition: "Base" },
      },
      {
        name: "Mitchell Starc",
        nation: "Australia",
        nation_code: "AUS",
        role: "Bowler",
        batting_style: "Left-hand bat",
        bowling_style: "Left-arm fast",
        tier: "rare",
        stats: {
          test: { matches: 96, runs: 1560, average: 13.7, hundreds: 0, fifties: 1, highest_score: 99, wickets: 395, bowling_average: 27.6, economy: 3.3 },
          odi: { matches: 109, runs: 529, average: 12.8, hundreds: 0, fifties: 0, highest_score: 52, wickets: 235, bowling_average: 22.0, economy: 5.4 },
          t20: { matches: 57, runs: 127, average: 9.1, hundreds: 0, fifties: 0, highest_score: 23, wickets: 79, bowling_average: 18.6, economy: 7.9 },
        },
        ratings: { batting: 22, bowling: 93, fielding: 78, captaincy: 40, test_suitability: 97, odi_suitability: 92, t20_suitability: 85 },
        card: { tier: "rare", accent_color: "#2E86DE", glow_color: "#2E86DE", card_number: "018", edition: "Base" },
      },
      {
        name: "Ross Taylor",
        nation: "New Zealand",
        nation_code: "NZL",
        role: "Batsman",
        batting_style: "Right-hand bat",
        bowling_style: "Right-arm off break",
        tier: "common",
        stats: {
          test: { matches: 112, runs: 7683, average: 44.6, hundreds: 19, fifties: 35, highest_score: 290, wickets: 1 },
          odi: { matches: 236, runs: 8607, average: 47.8, hundreds: 21, fifties: 55, highest_score: 181, wickets: 10, economy: 4.9 },
          t20: { matches: 102, runs: 1909, average: 26.5, hundreds: 0, fifties: 11, highest_score: 63, wickets: 0 },
        },
        ratings: { batting: 82, bowling: 18, fielding: 80, captaincy: 65, test_suitability: 88, odi_suitability: 85, t20_suitability: 75 },
        card: { tier: "common", accent_color: "#7A8FA8", glow_color: "#7A8FA8", card_number: "021", edition: "Base" },
      },
    ]

    for (const player of players) {
      await ctx.db.insert("players", player)
    }
    return { seeded: players.length }
  },
});