var httpServer = require('./servers/http'), //#A
  resources = require('./resources/model');
 
var server = httpServer.listen(resources.pi.port, function () { //#B
  console.info('Your WoT Pi is up and running on port %s', resources.pi.port); //#C
});
