const mongoose = require("mongoose");

const zoneSchema = new mongoose.Schema
    (
        {
          name:
          {
              type: String,
              required: true
          },
          slug:
          {
              type: String,
              required: true
          },
          description:
          {
              type: String
          },
          cover:
          {
              type: String
          },
          album:
          {
              type: [String]
          }
        }
    );

module.exports = mongoose.model("Zone", zoneSchema);