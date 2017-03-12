
const rules = [
    {input: 'firstInput', shouldExictWith: 'secondInput', shouldNotExictWith: 'thirdInput'}
];


const MachinePackRules = function(rules){
    if (rules.constructor !== Array){
        throw new Error('Rules must be an array'); 
    }
    this.rules = rules; 
};

MachinePackRules.prototype.isRulesEnforcedOn = function(inputs) {
    var flag = true;
    console.log('\t>> Rules: ', this.rules);
    if (!this.rules){
        console.error('No rules provided');
        flag = false; 
    }

    this.rules.forEach(function(rule) {
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
    });
    return flag;
};


module.exports = {
   MachinePackRules 
}; 