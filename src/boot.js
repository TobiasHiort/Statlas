var bootState = {
	preload: function(){
        game.load.image('world_shadow', 'assets/countries/world_shadow.png');
		game.load.image('world_preloader', 'assets/gui/backgrounds/world_preloader.png');
        game.load.json('data_boot', 'assets/data.json');
	},
	create: function() {
        // phaser settings
    	game.input.maxPointers = 1;
    	game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    	game.scale.pageAlignHorizontally = true;
    	game.scale.pageAlignVertically = true;
        game.stage.disableVisibilityChange = true;
        game.sound.mute = true;

        // preloader state
		game.state.start('preloader');
	}
};
