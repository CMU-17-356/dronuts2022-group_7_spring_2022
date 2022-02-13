import { expect } from 'chai';
import { Customer } from '../../helpers';

describe('customer', function() {
    it('should be invalid if name is empty', function(done) {
        var c = new Customer();
 
        c.validate(function(e) {
            expect(err.errors.name).to.exist;
            done();
        });
    });
});