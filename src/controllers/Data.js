var AirConditionalData = require('../models/AirConditionalData');
var BathroomLightsData = require('../models/BathroomLightsData');
var BedroomLights1Data = require('../models/BedroomLights1Data');
var BedroomLights2Data = require('../models/BedroomLights2Data');
var KitchenLightsData = require('../models/KitchenLightsData');
var LivingroomLightData = require('../models/LivingroomLightData');
const HouseData = require('../models/HouseData');

exports.data = async (req,res) => {
    if(req.params.title === 'Air'){
        try {
            const dataAirConditional = await AirConditionalData.find();
            res.json(dataAirConditional);
        } catch(err) {
            res.json({message: err});
        }
    }

    if(req.params.title === 'Bat'){
        try {
            const dataBatConditional = await BathroomLightsData.find();
            res.json(dataBatConditional);
        } catch(err) {
            res.json({message: err});
        }
    }

    if(req.params.title === 'Bed1'){
        try {
            const dataBed1Conditional = await BedroomLights1Data.find();
            res.json(dataBed1Conditional);
        } catch(err) {
            res.json({message: err});
        }
    }

    if(req.params.title === 'Bed2'){
        try {
            const dataBed2Conditional = await BedroomLights2Data.find();
            res.json(dataBed2Conditional);
        } catch(err) {
            res.json({message: err});
        }
    }

    if( req.params.title === 'House'){
        try {
            const dataHouse = await HouseData.find();
            res.json(dataHouse);
        } catch(err) {
            res.json({message: err});
        }
    }

    if(req.params.title === 'Kit'){
        try {
            const dataKitConditional = await KitchenLightsData.find();
            res.json(dataKitConditional);
        } catch(err) {
            res.json({message: err});
        }
    }

    if( req.params.title === 'Liv'){
        try {
            const dataLivConditional = await LivingroomLightData.find();
            res.json(dataLivConditional);
        } catch(err) {
            res.json({message: err});
        }
    }
    
};