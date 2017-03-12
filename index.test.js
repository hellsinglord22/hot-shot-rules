const _ = require('lodash'); 
const expect = require('chai').expect; 
const { MachinePackRules } = require('./index');


describe('shouldExictWith', function(){
    it('Meet shouldExistWith constrains', function() {

        const result = new MachinePackRules([
            { shouldExist: ['secondInput', 'thirdInput']}
        ]).isRulesEnforcedOn({secondInput: {}, thirdInput: {}});
        expect(result).to.equal(true);
    });

    it('Does not meet shouldExistWith constrains', function() {

        const result = new MachinePackRules([
            { shouldExist: ['secondInput', 'thirdInput']}
        ]).isRulesEnforcedOn({secondInput: {}});
        expect(result).to.equal(false);
    });
});