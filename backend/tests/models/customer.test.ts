import { Customer } from '../../helpers';
import { expect } from "chai";
import{ CallbackError, Error } from 'mongoose';



describe('customer', function() {
    it('should be invalid if name is empty', function(done) {
        var m = new Customer();
 
        m.validate(function(err: CallbackError) {

            expect(err).to.not.be.null;
            done();
        });
    });
});