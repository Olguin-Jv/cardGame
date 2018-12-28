
stages.game = function () { };

stages.game.prototype = {

    preload: function () {
        this.load.spritesheet('cards', assets.mazo1, 59.92, 80.25, 52);
        this.load.image('bg', assets.menuBackground);
    },
    create: function () {
        
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.add.image(0,0,'bg')
        console.log("Into: GAME stage");


        this.card1;
        this.card2;
        this.card3;

        this.arr = [this.card1, this.card2, this.card3];

        
        setCards(52, this.arr, game.world.centerY);

    }
}

function setCards(cant, arr, positionY) {

    var positionX = game.world.width / (arr.length + 1),
        columnX = 0;
        frames = randomCardArray(cant, arr.length);
    console.log(`Set cards\nPositionX: ${positionX}\npositionY: ${positionY}\nFrames: ${frames}`)

    for (var i = 0; i < arr.length; i++) {
        columnX += positionX;
        console.log(`Carta puesta en X:${columnX}`);
        drawCard(arr[i], columnX, positionY, frames[i]);
    }

}

function drawCard(elem, x, y, frameIdx) {
    elem = game.add.sprite(x, y, 'cards');
    elem.anchor.setTo(.5, .5);
    elem.frame = frameIdx;
}

function randomCardArray(spriteSheetLenght, cantCards) { //función de prueba
    var lastCard,
        arr = [];
    for (var i = 0; i < cantCards; i++) {
        var newCard = Math.floor(Math.random() * spriteSheetLenght) + 0;
        if (arr.indexOf(newCard) == -1) {
            arr.push(newCard);
            lastCard = newCard;
        }
        else {
            ++cantCards
        }
    }
    console.log(`Se eligieron ${arr.length} cartas de un total de ${spriteSheetLenght}`);
    console.log(`La selección se hizo en un total de ${cantCards} intentos.`)
    console.log("Loop Ended");
    return arr;
}