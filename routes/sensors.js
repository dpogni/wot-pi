var express = require('express'),
  router = express.Router(), //#A
  resources = require('./../resources/model');
router.route('/').get(function (req, res, next) { //#B
  res.send(resources.pi.sensors);  //#C
});
router.route('/pir').get(function (req, res, next) { //#D
  res.send(resources.pi.sensors.pir);
});
router.route('/temperature').get(function (req, res, next) { //#E
  res.send(resources.pi.sensors.temperature);
});
router.route('/humidity').get(function (req, res, next) { //#E
  res.send(resources.pi.sensors.humidity);
});
module.exports = router;
