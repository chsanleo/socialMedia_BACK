const Utils = {
    isNullOrEmpty(variable) {
        return (variable == null || variable === "" || variable === " ");
    },

    randomString(lenght){
        let result='';
        let universe = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890abcdefghijklmnopqrstuvwxyz!?()[]{}$&%-+';
        let universeArray = universe.split('');
        let universeLength = universeArray.length;

        for(let i = 0; i<lenght; i++){
            result += universeArray[Math.floor((Math.random() * universeLength) + 1)];
        }
        return result;
    }
};
module.exports = Utils;