
stages.game = function () { };

stages.game.prototype = {
    preload: function () {
        this.load.spritesheet('cards', assets.mazo1, 59.92, 80.25, 52);
    },
    create: function () {
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        console.log("Into: GAME stage");
        
        
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
        

    }
}
