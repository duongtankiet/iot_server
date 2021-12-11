var AirConditionalData = require('../models/AirConditionalData');
var BathroomLightsData = require('../models/BathroomLightsData');
var BedroomLights1Data = require('../models/BedroomLights1Data');
var BedroomLights2Data = require('../models/BedroomLights2Data');
const HouseData = require('../models/HouseData');
var KitchenLightsData = require('../models/KitchenLightsData');
var LivingroomLightData = require('../models/LivingroomLightData');

const controlDevices = {
    // Them Data Air
    airconditionalOn: async () => {
        const AirConditional = new AirConditionalData({
            title: 'AirConditional',
            state: 'ON',
            date: new Date()
        });
        // console.log('Luu DB on Par');
        return await AirConditional.save();
    },
    airconditionalOff: async () => {
        const AirConditional = new AirConditionalData({
            title: 'AirConditional',
            state: 'OFF',
            date: new Date()
        });
        // console.log('Luu DB on Par');
        return await AirConditional.save();
    },

    // Them Data Bat
    bathroomlightsOn: async () => {
        const BathroomLights = new BathroomLightsData({
            title: 'BathroomLights',
            state: 'ON',
            date: new Date()
        });
        // console.log('Luu DB on Par');
        return await BathroomLights.save();
    },
    bathroomlightsOff: async () => {
        const BathroomLights = new BathroomLightsData({
            title: 'BathroomLights',
            state: 'OFF',
            date: new Date()
        });
        // console.log('Luu DB on Par');
        return await BathroomLights.save();
    },

    // Them Data Bed1
    bedroomlights1On: async () => {
        const BedroomLights1 = new BedroomLights1Data({
            title: 'BedroomLights1',
            state: 'ON',
            date: new Date()
        });
        // console.log('Luu DB on Par');
        return await BedroomLights1.save();
    },
    bedroomlights1Off: async () => {
        const BedroomLights1 = new BedroomLights1Data({
            title: 'BedroomLights1',
            state: 'OFF',
            date: new Date()
        });
        // console.log('Luu DB on Par');
        return await BedroomLights1.save();
    },

    // Them Data Bed2
    bedroomlights2On: async () => {
        const BedroomLights2 = new BedroomLights2Data({
            title: 'BedroomLights2',
            state: 'ON',
            date: new Date()
        });
        // console.log('Luu DB on Par');
        return await BedroomLights2.save();
    },
    bedroomlights2Off: async () => {
        const BedroomLights2 = new BedroomLights2Data({
            title: 'BedroomLights2',
            state: 'OFF',
            date: new Date()
        });
        // console.log('Luu DB on Par');
        return await BedroomLights2.save();
    },

    // Them Data House
    houseHusband: async () => {
        const House = new HouseData({
            title: 'House',
            state: 'Husband',
            date: new Date()
        });
        // console.log('Luu DB on Par');
        return await House.save();
    },
    houseWife : async () => {
        const House = new HouseData({
            title: 'House',
            state: 'Wife',
            date: new Date()
        });
        // console.log('Luu DB on Par');
        return await House.save();
    },
    houseChildren : async () => {
        const House = new HouseData({
            title: 'House',
            state: 'Children',
            date: new Date()
        });
        // console.log('Luu DB on Par');
        return await House.save();
    },

    // Them Data Kit
    kitchenLightsOn: async () => {
        const KitchenLights = new KitchenLightsData({
            title: 'KitchenLights',
            state: 'ON' ,
            date: new Date()
        });
        // console.log('Luu DB on Par');
        return await KitchenLights.save();
    },
    kitchenLightsOff: async () => {
        const KitchenLights = new KitchenLightsData({
            title: 'KitchenLights',
            state: 'OFF' ,
            date: new Date()
        });
        // console.log('Luu DB on Par');
        return await KitchenLights.save();
    },

    // Them Data Par
    livingroomLightOn: async () => {
        const LivingroomLight = new LivingroomLightData({
            title: 'LivingroomLight',
            state: 'ON',
            date: new Date()
        });
        // console.log('Luu DB on Par');
        return await LivingroomLight.save();
            
        
    },
    livingroomLightOff: async () => {
        const LivingroomLight = new LivingroomLightData({
            title: 'LivingroomLight',
            state: 'OFF',
            date: new Date()
        });
        // console.log('Luu DB off Par');
        return await LivingroomLight.save();
    }


  }
  
  module.exports = {controlDevices};
