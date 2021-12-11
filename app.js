const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const env = require('dotenv/config');
const mqtt = require('mqtt');
const cors = require('cors');
const router = require('./src/routes/index');
const client = require('./src/routes/emq');
const { controlDevices } = require('./src/controllers/ControllersDevices');
const Warning = require('./src/models/Warning');
const Singleton = require('./src/singleton');

let id1 = null;
let id2 = null;
let id3 = null;
let id4 = null;
let id5 = null;
let id6 = null; 


app.use(cors());
app.use(bodyParser.json());


//Connected mongoDB
const mongooses = mongoose.connect(process.env.DB_CONNECTION, {useNewUrlParser: true}, () => {
    console.log('Connected mongoDB')
});


// Routes
app.use('/', router);



client.subscribe('esp8266todevice');

client.on('message', async (topic, message) => {
    console.log('Received message:', topic, message.toString());
    
    //Cập nhật data khi có nút ấn offlife từ esp
    if(message.toString()==='onAir'){
        const saveAir = await controlDevices.airconditionalOn();
        res.json(saveAir);
        //Cập nhật cảnh báo
        id1 = setInterval(async() => {
            Singleton.activeTime1 += 1;
            if(Singleton.activeTime1 ===10){
                // warning('AirConditional','Su dung qua 8 tieng roi');
                try{
                    const update = await Warning.updateOne({_id:"618e9bb0115689fe17c54dd7"}, {$set: {isWarning:"Su dung qua 8 tieng roi"}});
                    res.json(update);
                 }catch (err){
                    res.json({message: err});
                 }
            }

        }, 1000);
    }
    if(message.toString()==='offAir'){
        const saveAir = await controlDevices.airconditionalOff();
        res.json(saveAir);
        //Cập nhật cảnh báo
        clearInterval(id1);
        // warning('AirConditional','Device is off');
        try{
            const update = await Warning.updateOne({_id:"618e9bb0115689fe17c54dd7"}, {$set: {isWarning:"No warning"}});
            res.json(update);
         }catch (err){
             res.json({message: err});
         }
        
    }

    if(message.toString()==='onBat'){
        const saveBat = await controlDevices.bathroomlightsOn();
        res.json(saveBat);
        // Cập nhật cảnh báo
        id2 = setInterval(async() => {
            Singleton.activeTime2 += 1;
            if(Singleton.activeTime2 ===10){
                // warning('Bathroomlights','Su dung qua 8 tieng roi');
                try{
                    const update = await Warning.updateOne({_id:"618e9bd307f2b1e8bdf16e1b"}, {$set: {isWarning:"Su dung qua 8 tieng roi"}});
                    res.json(update);
                 }catch (err){
                     res.json({message: err});
                 }
            }

        }, 1000);
        
    }
    if(message.toString()==='offBat'){
        const saveBat = await controlDevices.bathroomlightsOff();
        res.json(saveBat);
        //Cập nhật cảnh báo
        clearInterval(id2);
        // warning('Bathroomlights','Device is off');
        try{
            const update = await Warning.updateOne({_id:"618e9bd307f2b1e8bdf16e1b"}, {$set: {isWarning:"No warning"}});
            res.json(update);
         }catch (err){
             res.json({message: err});
         }
        
    }

    if(message.toString()==='onBedone'){
        const saveBed1 = await controlDevices.bedroomlights1On();
        res.json(saveBed1);
        // Cập nhật cảnh báo
        id3 = setInterval(async() => {
            Singleton.activeTime3 += 1;
            if(Singleton.activeTime3 ===10){
                // warning('Bedroomlights1','Su dung qua 8 tieng roi');
                try{
                    const update = await Warning.updateOne({_id:"618e9be0553a385d6aae795e"}, {$set: {isWarning:"Su dung qua 8 tieng roi"}});
                    res.json(update);
                 }catch (err){
                     res.json({message: err});
                 }
            }

        }, 1000);
        
    }
    if(message.toString()==='offBedone'){
        const saveBed1 = await controlDevices.bedroomlights1Off();
        res.json(saveBed1);
        //Cập nhật cảnh báo
        clearInterval(id3);
        // warning('Bedroomlights1','Device is off');
        try{
            const update = await Warning.updateOne({_id:"618e9be0553a385d6aae795e"}, {$set: {isWarning:"No warning"}});
            res.json(update);
         }catch (err){
             res.json({message: err});
         }
       
    }
   
    if(message.toString()==='onBedtwo'){
        const saveBed2 = await controlDevices.bedroomlights2On();
        res.json(saveBed2);
        // Cập nhật cảnh báo
        id4 = setInterval(async() => {
            Singleton.activeTime4 += 1;
            if(Singleton.activeTime4 ===10){
                // warning('Bedroomlights2','Su dung qua 8 tieng roi');
                try{
                    const update = await Warning.updateOne({_id:"618e9bed08d09dcd202978a0"}, {$set: {isWarning:"Su dung qua 8 tieng roi"}});
                    res.json(update);
                 }catch (err){
                     res.json({message: err});
                 }
            }

        }, 1000);
        
    }
    if(message.toString()==='offBedtwo'){
        const saveBed2 = await controlDevices.bedroomlights2Off();
        res.json(saveBed2);
        //Cập nhật cảnh báo
        clearInterval(id4);
        // warning('Bedroomlights2','Device is off');
        try{
            const update = await Warning.updateOne({_id:"618e9bed08d09dcd202978a0"}, {$set: {isWarning:"No warning"}});
            res.json(update);
         }catch (err){
             res.json({message: err});
         }
       
    }

    if(message.toString()==='Husband'){
        const saveHusband = await controlDevices.houseHusband();
        res.json(saveHusband);
        // Cập nhật cảnh báo
        try{
            const update = await Warning.updateOne({_id:"618fdbfcaa9b166ef14aaf20"}, {$set: {isWarning:"Husband is at home"}});
            res.json(update);
         }catch (err){
             res.json({message: err});
         }
        
    }
    if(message.toString()==='Wife'){
        const saveWife = await controlDevices.houseWife();
        res.json(saveWife);
        // Cập nhật cảnh báo
        try{
            const update = await Warning.updateOne({_id:"618fdbfcaa9b166ef14aaf20"}, {$set: {isWarning:"Wife is at home"}});
            res.json(update);
         }catch (err){
             res.json({message: err});
         }
       
    }
    if(message.toString()==='Children'){
        const saveChildren = await controlDevices.houseChildren();
        res.json(saveChildren);
        // Cập nhật cảnh báo
        try{
            const update = await Warning.updateOne({_id:"618fdbfcaa9b166ef14aaf20"}, {$set: {isWarning:"Children is at home"}});
            res.json(update);
         }catch (err){
             res.json({message: err});
         }
        
    }

    if(message.toString()==='onKit'){
        const saveKit = await controlDevices.kitchenLightsOn();
        res.json(saveKit);
        // Cập nhật cảnh báo
        id5 = setInterval(async() => {
            Singleton.activeTime5 += 1;
            if(Singleton.activeTime5 ===10){
                // warning('KitchenLights','Su dung qua 8 tieng roi');
                try{
                    const update = await Warning.updateOne({_id:"618e9bf7f34759bb4a98a161"}, {$set: {isWarning:"Su dung qua 8 tieng roi"}});
                    res.json(update);
                 }catch (err){
                     res.json({message: err});
                 }
            }

        }, 1000);
        
    }
    if(message.toString()==='offKit'){
        const saveKit = await controlDevices.kitchenLightsOff();
        res.json(saveKit);
        //Cập nhật cảnh báo
        clearInterval(id5);
        // warning('KitchenLights','Device is off');
        try{
            const update = await Warning.updateOne({_id:"618e9bf7f34759bb4a98a161"}, {$set: {isWarning:"No warning"}});
            res.json(update);
         }catch (err){
             res.json({message: err});
         }
        
    }

    if(message.toString()==='onLiv'){
        const savePar = await controlDevices.parlourLampsOn();
        res.json(savePar);
        // Cập nhật cảnh báo
        id6 = setInterval(async() => {
            Singleton.activeTime6 += 1;
            if(Singleton.activeTime6 ===10){
                // warning('ParlourLamps','Su dung qua 8 tieng roi');
                try{
                    const update = await Warning.updateOne({_id:"618e9b40d60bb07f32e7985b"}, {$set: {isWarning:"Su dung qua 8 tieng roi"}});
                    res.json(update);
                 }catch (err){
                     res.json({message: err});
                 }
            }

        }, 1000);
        

    }
    if(message.toString()==='offLiv'){
        const savePar = await controlDevices.parlourLampsOff();
        res.json(savePar);
        //Cập nhật cảnh báo
        clearInterval(id6);
        // warning('ParlourLamps','Device is off');
        try{
            const update = await Warning.updateOne({_id:"618e9b40d60bb07f32e7985b"}, {$set: {isWarning:"No warning"}});
            res.json(update);
         }catch (err){
             res.json({message: err});
         }

        
    }

});

app.listen(2000);
