var Final = require('./model');

module.exports = {
    getFinals: function(req, res){
        Final.find(function(err, finals){
            if(err){
                res.send(err)
            }
            res.json(finals);
        })
    },

    getFinal: function(req, res){
        Final.findById(req.params.id, function(err, final){
            if(err){
                res.send(err);
            }
            res.json(final);
        })
    },

    createFinal: function(req, res){
        var final = new Final(req.body);
        final.name = req.body.name;
        final.quantity = req.body.quantity;

        final.save(function(err){
            if(err){
                res.send(err)
            }
            res.json({
                message: 'successfully saved'
            })
        })
    },

    updateFinal: function(req, res){
        Final.findById({_id: req.params.id}, function(err, final){
            if(err){
                res.send(err);
            }
            final.name = req.body.name;
            final.quantity = req.body.quantity;

            final.save(function(err){
                if(err){
                    res.send(err)
                }
                res.send('updated !');
            })
        })
    }

}

