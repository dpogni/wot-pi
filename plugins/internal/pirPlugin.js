var resources = require('./../resources/model');


var internal, sensor;
var model = resources.pi.sensors.pir;
var pluginName = resources.pi.sensors.pir.name;
var localParams = {'simulate': false, 'frequency' : 2000};

exports.start = function (params) {
  localParams = params;
  if (localParams.simulate) {
    simulate();
  } else {
    connectHardware();
  }
};

exports.stop = function () {
  if (localParams.simulate) {
    clearInterval(interval);
  } else {
    sensor.unexport();
  }
  console.info(`${pluginName} plugin stopped!`);
};

function connectHardware() {
  var Gpio = require('onoff').Gpio;
  sensor = new Gpio(model.gpio, 'in', 'both');
  sensor.watch(function (err, value) {
    if (err) exit(err);
    model.value = !!value;
    showValue();
  });
  console.info(`Hardware ${luginName} sensor started!`);
};

function showValue() {
  console.info(model.value ? 'there is somone! : 'not anymore!');
};
