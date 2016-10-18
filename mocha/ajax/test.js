chai.should();

describe('MyAPI', function() {
 it('should send given data as JSON body', function() {
    var data = { hello: 'world' };
    var dataJson = JSON.stringify(data);

    myapi.post(data, function() { });

    this.requests[0].requestBody.should.equal(dataJson);
});
});
