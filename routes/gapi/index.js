const router = require("express").Router();
const gbookRoutes = require("./gbooks");

// Book routes
router.use("/gbooks", gbookRoutes);

module.exports = router;
