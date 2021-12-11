const mqtt = require('mqtt');

const clientId = 'mqttjs_' + Math.random().toString(16).substr(2, 8);
const options = {
    clientId: clientId,
    protocolId: 'MQTT',
  }

//initialize the MQTT client
client = mqtt.connect('ws://broker.emqx.io:8083/mqtt',options);
  client.on('connect', function () {
    console.log('Connected MQTT');
});

client.on('error', function (error) {
    console.log(error);
});


module.exports = client;
