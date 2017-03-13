const _ = require('lodash'); 
const expect = require('chai').expect; 
const { Rule } = require('./index');


describe('isRuleEnforcedOn', function(){
    it('shouldExist return true', function() {
        const result = new Rule({ 
                shouldExist: ['secondInput', 'thirdInput']
            }
        ).isRulesEnforcedOn({secondInput: {}, thirdInput: {}});
        expect(result).to.equal(true);
    });

    it('shouldExist return false', function() {

        const result = new Rule(
            { shouldExist: ['secondInput', 'thirdInput']}
        ).isRulesEnforcedOn({secondInput: {}});
        expect(result).to.equal(false);
    });


    it('shouldNotExist return true', function() {
        const result = new Rule({ 
                shouldNotExist: ['secondInput', 'thirdInput']
            }
        ).isRulesEnforcedOn({firstInput: {}});
        expect(result).to.equal(true);
    }); 
    it('shouldNotExist return false', function() {
         const result = new Rule({ 
                shouldNotExist: ['secondInput', 'thirdInput']
            }
        ).isRulesEnforcedOn({secondInput: {}});
    }); 
});