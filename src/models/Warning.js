const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WarningSchema = new Schema({
    title: {
        type: String,
        require: true
    },
    isWarning:{
        type: String,
        default: ""
    }
});
module.exports = mongoose.model('Warning',WarningSchema);
