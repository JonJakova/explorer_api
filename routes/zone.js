const express = require("express");
const router = express.Router();
const Zone = require("../models/zone");

// Get all zones
router.get("/", async (req, res) => {
    try {
        const zones = await Zone.find();
        return res.json(zones);
    } catch (err) {
        return res.status(500).json({ msg: err.message })
    }
});

// Create zone
router.post("/", async (req, res) => {
    const zone = new Zone(req.body);

    try {
        const newZone = await zone.save();
        return res.status(201).json(newZone)
    } catch (err) {
        return res.status(400).json({ msg: err.message });
    }
});

// Update zone
router.patch("/:id", getZone, async (req, res) => {
    if (req.body.name != null) {
        res.name = req.body.name;
    }
    if (req.body.description != null) {
        res.description = req.body.description;
    }

    try {
        const updatedZone = await res.zone.save();
        return res.json(updatedZone);
    } catch (err) {
        return res.status(400).json({ msg: err.message });
    }
});

// Delete Zone
router.delete("/:id", getZone, async (req, res) => {
    try {
        await res.zone.remove();
        return res.json({ msg: "Zone delete successfully!" });
    } catch (err) {
        return res.status(500).json({ msg: err.message });
    }
});

// Check if Zone from id exist and set Zone to res
async function getZone(req, res, next) {
    let zone;
    try {
        zone = await Zone.findById(req.params.id);
        if (zone == null) {
            return res.status(404).json({ msg: "No Zone found!" });
        }
    } catch (err) {
        return res.status(500).json({ msg: err.message });
    }

    res.zone = zone;
    next();
}

module.exports = router;