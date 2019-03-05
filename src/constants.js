// statlas
const RES_X = 1920;
const RES_Y = 1080;

const GRAD_LEN = 1072;
const GRAD_HEIGHT = 24;
const GRAD_XPOS = 478;
const GRAD_XPAD = 5;
const GRAD_YPAD = 42;
const GRAD_SLICES = 10;

const CARD_TEXT_YPAD = 53 - 26 - 1;

const BRIDGE_STEP = 4; // for including each true side color with 3 in between

const CARD_TEXT_PADDING = 1;

const CARD_COUNTRY_PADDING = 35;

// centered card icons, y and x
const CARD_COL1_X = 70;
const CARD_COL2_X = 177;
const CARD_COL3_X = 282;
const CARD_ROW1_Y = 843;
const CARD_ROW2_Y = 926;
const CARD_ROW3_Y = 1010;

// menu buttons
const BTN_MENU_Y_TOP = 70;
const BTN_MENU_Y_BOTTOM = 652;

// menu buttons energy
const BTN_MENU_ENERGY_Y_TOP = 51;
const BTN_MENU_ENERGY_Y_BOTTOM = 671;

// button menu
const BTN_MENU_X = 1839;
const BTN_MENU_ENERGY_X = 1820;

function btnMenuCalc(idx, n_items, bottom, top) {
  return top + (((bottom - top) / n_items) * idx);
}
const BTN_MENU_Y = {
  'DEMOGRAPHICS': btnMenuCalc(0, 6, BTN_MENU_Y_BOTTOM, BTN_MENU_Y_TOP),
  'ECONOMICS': btnMenuCalc(1, 6, BTN_MENU_Y_BOTTOM, BTN_MENU_Y_TOP),
  'EDUCATION': btnMenuCalc(2, 6, BTN_MENU_Y_BOTTOM, BTN_MENU_Y_TOP),
  'HEALTH': btnMenuCalc(3, 6, BTN_MENU_Y_BOTTOM, BTN_MENU_Y_TOP),
  'ENVIRONMENT': btnMenuCalc(4, 6, BTN_MENU_Y_BOTTOM, BTN_MENU_Y_TOP),
  'ENERGY': btnMenuCalc(5, 6, BTN_MENU_Y_BOTTOM, BTN_MENU_Y_TOP),
  'MILITARY': btnMenuCalc(6, 6, BTN_MENU_Y_BOTTOM, BTN_MENU_Y_TOP)
};

const BTN_MENU_ENERGY_Y = {
  'ELECTRICITYPRODUCTION': btnMenuCalc(0, 7, BTN_MENU_ENERGY_Y_BOTTOM, BTN_MENU_ENERGY_Y_TOP),
  'ACCESSTOELECTRICITY': btnMenuCalc(1, 7, BTN_MENU_ENERGY_Y_BOTTOM, BTN_MENU_ENERGY_Y_TOP),
  'OIL': btnMenuCalc(2, 7, BTN_MENU_ENERGY_Y_BOTTOM, BTN_MENU_ENERGY_Y_TOP),
  'COAL': btnMenuCalc(3, 7, BTN_MENU_ENERGY_Y_BOTTOM, BTN_MENU_ENERGY_Y_TOP),
  'NATURALGAS': btnMenuCalc(4, 7, BTN_MENU_ENERGY_Y_BOTTOM, BTN_MENU_ENERGY_Y_TOP),
  'RENEWABLESOURCES': btnMenuCalc(5, 7, BTN_MENU_ENERGY_Y_BOTTOM, BTN_MENU_ENERGY_Y_TOP),
  'HYDROPOWER': btnMenuCalc(6, 7, BTN_MENU_ENERGY_Y_BOTTOM, BTN_MENU_ENERGY_Y_TOP),
  'NUCLEARPOWER': btnMenuCalc(7, 7, BTN_MENU_ENERGY_Y_BOTTOM, BTN_MENU_ENERGY_Y_TOP)
};

// hex colors
const COLOR = {
  'WHITE': '#FFFFFF',
  'BLACK': '#000000',
  'GRAY': '#D6D6D6',

  'UNIT': '#B4E0F3',
  'BLUE_OCEAN': '#68C0E6',

  'MENU_ACTIVE': '#333333',
  'MENU_NONACTIVE_BG': '#434343',
  'MENU_NONACTIVE': '#999999' // CHANGENAMEEEEEEEEEEEz
};

// font styles
const STYLE_BOOT = { font: '1px Roboto Thin', fill: COLOR['WHITE'], align: 'center', boundsAlignH: 'center', boundsAlignV: 'middle', wordWrap: true, wordWrapWidth: 313 };
const STYLE_NUM_L = { font: '31px Roboto Medium', fill: COLOR['WHITE'], boundsAlignH: 'right', boundsAlignV: 'top' };
const STYLE_UNIT_L = { font: '31px Roboto Medium', fill: COLOR['UNIT'], boundsAlignH: 'right', boundsAlignV: 'top' };
const STYLE_NUM_R = { font: '31px Roboto Medium', fill: COLOR['WHITE'], boundsAlignH: 'left', boundsAlignV: 'top' };
const STYLE_UNIT_R = { font: '31px Roboto Medium', fill: COLOR['UNIT'], boundsAlignH: 'left', boundsAlignV: 'top' };
const GRADIENT_STEP_STYLE = { font: '15px Roboto Light', fill: COLOR['WHITE'], boundsAlignH: 'center', boundsAlignV: 'middle' };
const CARD_STYLE_VALUE = { font: '18px Roboto Medium', fill: COLOR['BLACK'], align: 'center', boundsAlignH: 'left', boundsAlignV: 'top', wordWrap: true, wordWrapWidth: 101 };
const CARD_STYLE_UNIT = { font: '18px Roboto Medium', fill: COLOR['GRAY'], align: 'center', boundsAlignH: 'left', boundsAlignV: 'top', wordWrap: true, wordWrapWidth: 101 };
//const CARD_STYLE_COUNTRY = {font: font_size + 'px Roboto Regular', fill: COLOR['BLACK'], align: 'center', boundsAlignH: 'center', boundsAlignV: 'middle', wordWrap: true, wordWrapWidth: this.current_flag.width};
const STYLE_YEARS =  {font: '10px Roboto Medium', fill: "#ffffff", boundsAlignH: 'center', boundsAlignV: 'middle'};

// number ranges
const RANGES = [
  { divider: 1e18, suffix_scientific: 'P', suffix_simple: 'P' },
  { divider: 1e15, suffix_scientific: 'E', suffix_simple: 'E' },
  { divider: 1e12, suffix_scientific: 'T', suffix_simple: 'T' },
  { divider: 1e9, suffix_scientific: 'G', suffix_simple: 'B' },
  { divider: 1e6, suffix_scientific: 'M', suffix_simple: 'M' },
  { divider: 1e3, suffix_scientific: 'k', suffix_simple: 'K' }
];

// slider
const dot_dist = 18;
const dot_pad = 35;
const n_start_year = 1960
const n_end_year = 2016
const n_years = n_end_year - n_start_year + 1
