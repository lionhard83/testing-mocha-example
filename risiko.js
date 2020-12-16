// var lib = require('npm-mirko-stevejobsacademy');
// var throwDice = lib.throwDice;

var { throwDice } = require('npm-mirko-stevejobsacademy');


exports.risiko = (nAtt, nDef) => {
    var att = throwDice(nAtt).sort().reverse();
    var def = throwDice(nDef).sort().reverse();
    var arrFin  = [...new Array(Math.min(nAtt, nDef))].map((_, index) => {
        return {
            att: att[index], 
            def: def[index]
        }
    });
    var armyLoses = arrFin.reduce((acc, item) => {
        if (item.att > item.def) {
            return  {
                nArmyAttLoses: acc.nArmyAttLoses,
                nArmyDefLoses: acc.nArmyDefLoses + 1,
            }
        } else {
            return  {
                nArmyAttLoses: acc.nArmyAttLoses + 1,
                nArmyDefLoses: acc.nArmyDefLoses,
            }
        }
    }, {nArmyAttLoses: 0, nArmyDefLoses: 0});
    return {
        ...armyLoses,  // nArmyAttLoses: armyLoses.nArmyAttLoses,
                       // nArmyDefLoses: armyLoses.nArmyDefLoses,
        att, // att: att,
        def, // def: def,
    }
}
console.log(this.risiko(3,2));