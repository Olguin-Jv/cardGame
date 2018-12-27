var arregloDeCartas = ['1', '2', '3', '4', '5', '6', '7'];


//retorna determinada cantidad de elementos al azar desde un arreglo dado
function randomCardPicker(arr, numCartas) {
    var result = [];
    for (var i = 0; i < numCartas; i++) {
        var newValue = Math.floor(Math.random() * arr.length) + 0;
        console.log(newValue);
        result.push(arr[newValue]);
    };
    console.log(result);
    return result;
}

//funcion que dibuja en pantalla las cartas dadas



/**
 * EL JUEGO TOMA CARTAS AL AZAR
 * -
 * SE MUESTRAN UN MOMENTO EN LA MESA
 * -
 * LAS CARTAS SE VAN
 * -
 * SE VUELVEN A MOSTRAR LAS CARTAS PERO CON UNA DIFERENTE
 * -------
 * PARA ESTO SE VUELVE A TOMAR EL ARREGLO OBTENIDO AL AZAR, 
 * SE LE ELIMINA UN ELEMENTO AL AZAR Y SE LO REEMPLAZA POR OTRO
 * TAMBIEN AL MOMENTO DE MOSTRAR OTRA VEZ LAS CARTAS
 * TIENEN QUE POSICIONARSE EN UBICACIONES AL AZAR
 */


//DIBUJA UNA CARTA EN PANTALLA
var card1 = this.add.sprite(game.world.centerX, game.world.centerY, 'cards');
card1.anchor.setTo(.5,.5);
card1.frame = 2;
    

//FUNCION QUE DIBUJA TODAS LAS CARTAS EN PANTALLA
var positionX = 50,
positionY = game.world.centerY,
limit = 0;

for (var i = 0; i <= 51; i++) {
if (limit === 13) {
    positionX = 50;
    positionY += 50;
    limit = 0;
}
var sprite = this.add.sprite(positionX, positionY, 'cards');
sprite.anchor.setTo(.5, .5);


limit++;
sprite.frame = i;
positionX += 45;
};

function randomCardArray(spriteSheetLenght, cantCards) { //función de prueba
    var lastCard;
    arr = []
for (var i = 0; i < cantCards; i++) {
    var newCard = Math.floor(Math.random() * spriteSheetLenght) + 0;
    if (newCard != lastCard) {
        arr.push(newCard);
        lastCard = newCard;
    }
    else { cantCards++ }
}
console.log(`Se eligieron ${arr.length} de un total de ${spriteSheetLenght}`);
console.log(arr);
console.log("loop Ended");
}