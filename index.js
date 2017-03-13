
const rules = [
    {input: 'firstInput', shouldExictWith: 'secondInput', shouldNotExictWith: 'thirdInput'}
];


const Rule = function(rule){
    this.rule = rule;
};

Rule.prototype.isRulesEnforcedOn = function(inputs) {
    this.inputs = inputs; 
    return this.meetShouldExistRule() && this.meetShouldNotExistRule();
};

Rule.prototype.meetShouldExistRule =  function(){
    const rule = this.rule; 
    const inputs = this.inputs; 
    var flag = true;

    if (rule.hasOwnProperty('shouldExist')){
        if (rule.shouldExist.constructor !== Array){
            console.error('shouldExist must be an array'); 
            flag = false;
        } else {
            rule.shouldExist.forEach(function(shouldExistInput){
                if (!inputs.hasOwnProperty(shouldExistInput)){
                    console.log('\t>> Not Found: ', shouldExistInput);
                    flag = false; 
                } else {
                    console.log('\t>> Found: ' + shouldExistInput); 
                }
            });
        }
    }
    return flag;
};

Rule.prototype.meetShouldNotExistRule =  function(){
    const rule = this.rule; 
    const inputs = this.inputs; 
    var flag = true;

    if (rule.hasOwnProperty('shouldNotExist')){
        if (rule.shouldNotExist.constructor !== Array){
            console.error('shouldNotExist must be an array'); 
            flag = false;
        } else {
            rule.shouldNotExist.forEach(function(shouldNotExistInput){
                if (inputs.hasOwnProperty(shouldNotExistInput)){
                    console.log('\t>> Not Found: ', shouldNotExistInput);
                    flag = false; 
                } else {
                    console.log('\t>> Found: ' + shouldNotExistInput); 
                }
            });
        }
    }
    return flag;
};


module.exports = {
   Rule 
}; 