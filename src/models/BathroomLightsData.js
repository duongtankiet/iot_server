const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BatLigDataSchema = new Schema({
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
module.exports = mongoose.model('BathroomLightsData',BatLigDataSchema);
