const _ = require('lodash'); 
const expect = require('chai').expect; 
const { MachinePackRules } = require('./index');


describe('shouldExictWith', function(){
    it('The meet Constrains Test', function() {

        const result = new MachinePackRules({ 
                shouldExist: ['secondInput', 'thirdInput']
            }
        ).isRulesEnforcedOn({secondInput: {}, thirdInput: {}});
        expect(result).to.equal(true);
    });

    it('The `do not` meet constrains test', function() {

        const result = new MachinePackRules(
            { shouldExist: ['secondInput', 'thirdInput']}
        ).isRulesEnforcedOn({secondInput: {}});
        expect(result).to.equal(false);
    });
});