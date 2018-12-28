
stages.game = function () { };

stages.game.prototype = {

    preload: function () {
        this.load.spritesheet('cards', assets.mazo1, 59.92, 80.25, 52);
    },
    create: function () {
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        console.log("Into: GAME stage");


        this.card1;
        this.card2;

        this.arr = [this.card1, this.card2];

        ///////////////////////////////////////
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
        ///////////////////////////////////////
        
        setCards(52, [1, 2, 3]);

    }
}

function setCards(cant, arr) {

    var positionX = game.world.width / (arr.length + 1),
        columnX = 0,
        positionY = 100,
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