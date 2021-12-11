const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BedLig2DataSchema = new Schema({
    title: {
        type: String,
        require: true
    },
    state: {
        type: String,
        require: true
    },
    date: {
        type: String,
        default: Date.now
    }
});
module.exports = mongoose.model('BedroomLights2Data',BedLig2DataSchema);
