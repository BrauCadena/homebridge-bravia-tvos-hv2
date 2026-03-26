/**
 * v5
 *
 * @url https://github.com/BrauCadena/homebridge-bravia-tvos-hv2
 * @author BrauCadena <braulio.cadena1987@gmail.com>
 *
 **/

'use strict';

module.exports = (api) => {
  let BraviaOSPlatform = require('./src/platform.js')(api);
  api.registerPlatform('homebridge-bravia-tvos-hv2', 'BraviaOSPlatform', BraviaOSPlatform, true);
};