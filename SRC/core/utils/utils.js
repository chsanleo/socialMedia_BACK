const Utils = {
    isNullOrEmpty(variable) {
        return (variable == null || variable === "" || variable === " ");
    },

    randomString(lenght) {
        let result = '';
        let universe = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890abcdefghijklmnopqrstuvwxyz!?()[]{}$&%-+';
        let universeArray = universe.split('');
        let universeLength = universeArray.length - 1;

        for (let i = 0; i < lenght; i++) {
            result += universeArray[Math.floor((Math.random() * universeLength) + 1)];
        }
        return result;
    },

    pushUnic(items, item) {
        if (items.lenght === 0) { return items.push(item); }
        if (items.find(res => res === item)) { return items.push(item); }
    }
};
module.exports = Utils;