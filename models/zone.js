const mongoose = require("mongoose");

const zoneSchema = new mongoose.Schema
    (
        {
          name:
          {
              type: String,
              required: true
          },
          description:
          {
              type: String
          }
        }
    );

module.exports = mongoose.model("Zone", zoneSchema);