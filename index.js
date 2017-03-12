
const rules = [
    {input: 'firstInput', shouldExictWith: 'secondInput', shouldNotExictWith: 'thirdInput'}
];


const MachinePackRules = function(rules){
    if (rules.constructor !== Array){
        throw new Error('Rules must be an array'); 
    }
    this.rules = rules; 
};

MachinePackRules.prototype.isRulesEnforced = function(inputs) {
    if (!this.rules){
        console.error('No rules provided');
        return false; 
    }
};


module.exports = {
   MachinePackRules 
}; 