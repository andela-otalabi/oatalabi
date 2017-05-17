var chai = require('chai');
var chaiHttp = require('chai-http');
var should = require('should');
var Final = require('../app/model');
var server = require('../index');

var controller = require('../app/controller');

describe('final controller', function(){
    it('should have final controller', function(){
        should.exist(controller);
    })

    it('should have method get all', function(){
        should.exist(controller.getFinals)
    })
});

describe('final routes', function(){
    beforeEach(function(done){
        Final.remove({}, function(err){
            done();
        })
    })

    chai.use(chaiHttp);

    describe('GET /api/final', function(){
        it('should get all finals', function(done){
            chai.request(server).get('/api/final').end(function(err, res){
                res.statusCode.should.be.eql(200);
                res.body.should.be.instanceof(Array);
                done();
            })
        })
    })

    describe('POST /api/final', function(){
        it('should create a final', function(done){
            var final = {
                name: 'two',
                quantity: 7
            }
            chai.request(server).post('/api/final').send(final).end(function(err, res){
                res.statusCode.should.be.eql(200);
                res.body.should.be.instanceof(Object);
                res.body.should.have.properties('message');
                done();
            })
        })
    })

})