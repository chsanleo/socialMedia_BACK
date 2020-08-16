const Utils = {
    isNullOrEmpty(variable) {
        return (variable == null || variable === "" || variable === " ");
    },

    randomString(lenght){
        let result='';
        let universe = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890abcdefghijklmnopqrstuvwxyz!?()[]{}$&%-+';
        let universeLenght = universe.lenght;
        for(let i = 0; i<lenght; i++){
            result += universe.chatAt(Math.floor(Math.random()*universeLenght));
        }
        return result;
    }
};
module.exports = Utils;