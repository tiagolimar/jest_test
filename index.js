function helloworld(text) {
    if(text === undefined){
        return "Hello World!";
    }
    if(typeof text !== "string"){
        return "Função aceita apenas string como argumento!"
    }
    return `Hello ${text}!`
}

module.exports = helloworld;