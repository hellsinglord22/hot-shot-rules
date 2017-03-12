
const rules = [
    {input: 'firstInput', shouldExictWith: 'secondInput', shouldNotExictWith: 'thirdInput'}
];


const MachinePackRules = function(rule){
    this.rule = rule;
};

MachinePackRules.prototype.isRulesEnforcedOn = function(inputs) {
    var flag = true; 
    this.inputs = inputs; 
    flag = this.meetShouldExistRule();
    return flag;
};

MachinePackRules.prototype.meetShouldExistRule =  function(){
    const rule = this.rule; 
    const inputs = this.inputs; 
    var flag = true;
    console.log('\t>> Rules: ', rule);

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


module.exports = {
   MachinePackRules 
}; 