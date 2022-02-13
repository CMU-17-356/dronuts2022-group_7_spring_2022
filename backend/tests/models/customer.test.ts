<<<<<<< HEAD
import { expect } from 'chai';
import { Customer } from '../../helpers';

describe('customer', function() {
    it('should be invalid if name is empty', function(done) {
        var c = new Customer();
 
        c.validate(function(e) {
            expect(err.errors.name).to.exist;
=======
import { Customer } from '../../helpers';
import { expect } from "chai";
import{ CallbackError, Error } from 'mongoose';



describe('meme', function() {
    it('should be invalid if name is empty', function(done) {
        var m = new Customer();
 
        m.validate(function(err: CallbackError) {

            expect(err).to.not.be.null;
>>>>>>> a822e16b7ab739ce22d2a078f4752332485f9d28
            done();
        });
    });
});