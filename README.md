# Hot Shot Rules
Hot Shot Rules, is a library where you difine a `complex rule` between an object and array easily . 


## Example on how to use 
```.js
const { Rule } = require('hot-shot-rule'); 
const firstInputRule = new Rule({shouldExist: ['secondInput', 'thirdInput']});

isRuleEnforcedOn({secondInput: {}, thirdInput: {} }); // return true because second and third input exist 
isRuleEnforcedOn({secondInput: {}, thirdInput: {} }); // return false because second input exist but third input don't exist 
```

## Support 
The library support currently two options, `shouldExist` and `shouldNotExist`.

Both can use on its own or togther like this `new Rule( {shouldExist: [], shouldNotExist: [])`
