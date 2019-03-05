let preloaderState = {
  preload: function () {
    // boot
    game.stage.backgroundColor = COLOR['BLUE_OCEAN'];
    game.add.image(0, 0, 'world_shadow');
    let preloadBar = game.add.image(0, 0, 'world_preloader');
    game.load.setPreloadSprite(preloadBar);

    // gui
    game.load.image('menu_bg', 'assets/gui/backgrounds/menu_bg.png');
    game.load.image('menu_outer_bg', 'assets/gui/backgrounds/menu_outer_bg.png');
    game.load.image('menu_constant', 'assets/gui/backgrounds/menu_constant.png');
    game.load.image('gradient_shadow', 'assets/gui/backgrounds/gradient_shadow.png');
    game.load.image('gradient_divider', 'assets/gui/backgrounds/gradient_divider.png');

    game.load.image('menu_prod_bg', 'assets/gui/backgrounds/menu_prod_bg.png');

    game.load.image('menu_faker', 'assets/gui/backgrounds/menu_faker.png');

    game.load.image('menu_bridge1', 'assets/gui/backgrounds/menu_bridge1.png');
    game.load.image('menu_bridge2', 'assets/gui/backgrounds/menu_bridge2.png');
    game.load.image('menu_bridge3', 'assets/gui/backgrounds/menu_bridge3.png');

    //game.load.image('menu_sep', 'assets/gui/backgrounds/menu_sep.png');

    // buttons
    game.load.image('btn_demographics', 'assets/gui/menu/btn_demographics.png');
    game.load.image('btn_demographics_text', 'assets/gui/menu/btn_demographics_text.png');
    game.load.image('btn_economics', 'assets/gui/menu/btn_economics.png');
    game.load.image('btn_economics_text', 'assets/gui/menu/btn_economics_text.png');
    game.load.image('btn_education', 'assets/gui/menu/btn_education.png');
    game.load.image('btn_education_text', 'assets/gui/menu/btn_education_text.png');
    game.load.image('btn_health', 'assets/gui/menu/btn_health.png');
    game.load.image('btn_health_text', 'assets/gui/menu/btn_health_text.png');
    game.load.image('btn_environment', 'assets/gui/menu/btn_environment.png');
    game.load.image('btn_environment_text', 'assets/gui/menu/btn_environment_text.png');
    game.load.image('btn_energy', 'assets/gui/menu/btn_energy.png');
    game.load.image('btn_energy_text', 'assets/gui/menu/btn_energy_text.png');
    game.load.image('btn_military', 'assets/gui/menu/btn_military.png');
    game.load.image('btn_military_text', 'assets/gui/menu/btn_military_text.png');

    // buttons energy
    game.load.image('btn_energy_electricityproduction', 'assets/gui/menu/energy/electricityproduction.png');
    game.load.image('btn_energy_accesstoelectricity', 'assets/gui/menu/energy/accesstoelectricity.png');
    game.load.image('btn_energy_oil', 'assets/gui/menu/energy/oil.png');
    game.load.image('btn_energy_coal', 'assets/gui/menu/energy/coal.png');
    game.load.image('btn_energy_naturalgas', 'assets/gui/menu/energy/naturalgas.png');
    game.load.image('btn_energy_renewablesources', 'assets/gui/menu/energy/renewablesources.png');
    game.load.image('btn_energy_hydropower', 'assets/gui/menu/energy/hydropower.png');
    game.load.image('btn_energy_nuclearpower', 'assets/gui/menu/energy/nuclearpower.png');

    // card
    game.load.image('card_ring', 'assets/gui/card/icons/card_ring.png');
    game.load.image('card_area', 'assets/gui/card/icons/card_area.png');
    game.load.image('card_capital', 'assets/gui/card/icons/card_capital.png');
    game.load.image('card_currency', 'assets/gui/card/icons/card_currency.png');
    game.load.image('card_government', 'assets/gui/card/icons/card_government.png');
    game.load.image('card_leader', 'assets/gui/card/icons/card_leader.png');
    game.load.image('card_language', 'assets/gui/card/icons/card_language.png');
    game.load.image('card_population', 'assets/gui/card/icons/card_population.png');
    game.load.image('card_religion', 'assets/gui/card/icons/card_religion.png');
    game.load.image('card_www', 'assets/gui/card/icons/card_www.png');

    game.load.image('card', 'assets/gui/card/card.png');
    game.load.image('card_horz', 'assets/gui/card/card_horz.png');
    //game.load.image('flag_stroke', 'assets/gui/card/flag_stroke.png');
    game.load.image('flag_corner1', 'assets/gui/card/flag_corner1.png');
    game.load.image('flag_corner2', 'assets/gui/card/flag_corner2.png');
    game.load.image('flag_corner3', 'assets/gui/card/flag_corner3.png');
    game.load.image('flag_corner4', 'assets/gui/card/flag_corner4.png');

    // slider
    game.load.image('slider_circle', 'assets/slider/circle.png');
    game.load.image('slider_line', 'assets/slider/line.png');
    game.load.image('slider_dot', 'assets/slider/dot.png');

    // cache JSON data
    this.data = game.cache.getJSON('data_boot');

    // countries
    for (let country in this.data) {
      game.load.image(`${country}_fill`, `assets/countries/fill/${country}.png`);
      game.load.image(`${country}_stroke`, `assets/countries/stroke/${country}.png`);
    }
    //game.load.image('world_shadow', 'assets/countries/world_shadow.png'); // loaded in boot

    // flags
    for (let country in this.data) {
      game.load.image(`${country}_flag`, `assets/flags/${country}.png`);
    }
  },

  create: function () {
    game.state.start('statlas', true, false, this.data); // (key, clearWorld/bg, clearCache, parameter (catched with init()))
  }
};
