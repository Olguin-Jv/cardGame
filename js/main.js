var game = new Phaser.Game(800, 600, Phaser.AUTO);
    game.parent = 'game-container';
    game.transparent = true;

var assets = {
    menuBackground: './assets/view/menu-bkg.jpg',
    button2: './assets/UI/button2.png',
    mazo1: './assets/game/mazo1.png',
    mazo2: './assets/game/mazo2.png'
}

game.state.add('menu', stages.menu);
game.state.add('game', stages.game);

game.state.start('game');