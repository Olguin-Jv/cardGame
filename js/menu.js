var stages = {};

stages.menu = function () { };
stages.menu.prototype = {
    preload: function () {
        this.load.image('menuBackground', assets.menuBackground);
        this.load.image('button2', assets.button2)
    },
    create: function () {
        this.add.image(0, 0, 'menuBackground');
        console.log("Into: GAME stage");
        this.button = this.add.button(game.world.centerX, game.world.centerY, 'button2', goGame);
        this.button.anchor.setTo(.5, .5);
    },
    update: function () { }
}

function goGame() {
    game.state.start('game');
}