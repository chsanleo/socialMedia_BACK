const Utils = {
    isNullOrEmpty(variable) {
        return (variable == null || variable === "" || variable === " ");
    },

    randomString(lenght){
        let result='';
        let universe = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890abcdefghijklmnopqrstuvwxyz!?()[]{}$&%-+';
        let universeArray = universe.split('');
        let universeLength = universeArray.length-1;

        for(let i = 0; i<lenght; i++){
            result += universeArray[Math.floor((Math.random() * universeLength) + 1)];
        }
        return result;
    },

    pushUnic(items, item){
        if(this.items.indexOf(item) === -1) { return this.items.push(item); }
    }
};
module.exports = Utils;