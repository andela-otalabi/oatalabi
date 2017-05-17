var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FinalSchema = new Schema({
    name: {
        type: String,
        unique: true
    },

    quantity: {
        type: Number
    }
});

var FinalModel = mongoose.model('Final', FinalSchema);

FinalSchema.pre("save", function(next) {   
    FinalModel.findOne({name : this.name}, 'name', function(err, results) {
        if (err) {
            next(err);
        } else if(results) {
            self.invalidate("name", "Name exists!");
            next(new Error("Name exists"));
        } else {
            next();
        }
    })
});

module.exports = FinalModel;