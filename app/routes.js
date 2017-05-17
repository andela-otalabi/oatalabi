var controller = require('./controller');

module.exports = function(app){
    app.route('/api/final').get(controller.getFinals);
    app.route('/api/final').post(controller.createFinal);
    app.route('/api/final/:id').get(controller.getFinal);
}