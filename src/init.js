let game = new Phaser.Game(RES_X, RES_Y, Phaser.CANVAS, 'gameDiv', { preload: preload, create: create });

WebFontConfig = {
  google: {families: ['Roboto: medium, regular']}
};

function preload() {
  game.load.script('webfont', '//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js');
};

function create() {
  game.state.add('boot', bootState);
  game.state.add('preloader', preloaderState);
  game.state.add('statlas', statlasState);

  game.state.start('boot');
};
