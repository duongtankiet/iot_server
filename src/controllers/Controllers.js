const Warning = require('../models/Warning');
var client = require('../routes/emq');
const Singleton = require('../singleton');
const { controlDevices } = require('./ControllersDevices');


let id1 = null;
let id2 = null;
let id3 = null;
let id4 = null;
let id5 = null;
let id6 = null;



exports.controllers = async (req,res) =>{
    // console.log(req.params);
    
    // Gọi API cập nhật data Air
    if(req.params.state === 'on' && req.params.title ==='Air'){
        const saveAir = await controlDevices.airconditionalOn();
        res.json(saveAir);
        client.publish("ondevice","Air");
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
    if(req.params.state === 'off' && req.params.title ==='Air'){
        const saveAir = await controlDevices.airconditionalOff();
        res.json(saveAir);
        client.publish("offdevice","Air");
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

    // Gọi API cập nhật data Bat
    if(req.params.state === 'on' && req.params.title ==='Bat'){
        const saveBat = await controlDevices.bathroomlightsOn();
        res.json(saveBat);
        client.publish("ondevice","Bat");
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
    if(req.params.state === 'off' && req.params.title ==='Bat'){
        const saveBat = await controlDevices.bathroomlightsOff();
        res.json(saveBat);
        client.publish("offdevice","Bat");
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

    // Gọi API cập nhật data Bed1
    if(req.params.state === 'on' && req.params.title ==='Bed1'){
        const saveBed1 = await controlDevices.bedroomlights1On();
        res.json(saveBed1);
        client.publish("ondevice","Bedone");
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
    if(req.params.state === 'off' && req.params.title ==='Bed1'){
        const saveBed1 = await controlDevices.bedroomlights1Off();
        res.json(saveBed1);
        client.publish("offdevice","Bedone");
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

    // Gọi API cập nhật data Bed2
    if(req.params.state === 'on' && req.params.title ==='Bed2'){
        const saveBed2 = await controlDevices.bedroomlights2On();
        res.json(saveBed2);
        client.publish("ondevice","Bedtwo");
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
    if(req.params.state === 'off' && req.params.title ==='Bed2'){
        const saveBed2 = await controlDevices.bedroomlights2Off();
        res.json(saveBed2);
        client.publish("offdevice","Bedtwo");
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

    // Gọi API cập nhật data Kit
    if(req.params.state === 'on' && req.params.title ==='Kit'){
        const saveKit = await controlDevices.kitchenLightsOn();
        res.json(saveKit);
        client.publish("ondevice","Kit");
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
    if(req.params.state === 'off' && req.params.title ==='Kit'){
        const saveKit = await controlDevices.kitchenLightsOff();
        res.json(saveKit);
        client.publish("offdevice","Kit");
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

    // Gọi API cập nhật data Par
    if(req.params.state === 'on' && req.params.title ==='Liv'){
        const saveLiv = await controlDevices.livingroomLightOn();
        res.json(saveLiv);
        client.publish("ondevice","Liv");
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
    if(req.params.state === 'off' && req.params.title ==='Liv'){
        const saveLiv = await controlDevices.livingroomLightOff();
        res.json(saveLiv);
        client.publish("offdevice","Liv");
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

}
