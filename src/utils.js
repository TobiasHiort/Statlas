/*jshint esversion: 6 */
//////////////////// LET!!!!!!!  ////////////////////////////////
function interpolateGradient(start_color, goal_color, steps) {
    let gradient_array = [];

    for (let i = 0; i <= steps; i++) {
      res_r = Math.round(start_color[0] + (((goal_color[0] - start_color[0]) * i) / steps));
      res_g = Math.round(start_color[1] + (((goal_color[1] - start_color[1]) * i) / steps));
      res_b = Math.round(start_color[2] + (((goal_color[2] - start_color[2]) * i) / steps));

      gradient_array[i] = [res_r, res_g, res_b];
    }

    return gradient_array;
}

function hexToRGB(hex) {
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function(m, r, g, b) {
        return r + r + g + g + b + b;
    });

    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

    return [parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16)]; // edited, no null
}

function formatNumber(n, decimals, suffix_type) {
  for (let i = 0; i < RANGES.length; i++) {
    if (n >= RANGES[i].divider) {
      var n_divided = (n / RANGES[i].divider);
      var n_divided_rounded = this.roundDec(n_divided, decimals);

      if (suffix_type === 'scientific') {
          return {value: n_divided_rounded.toString(), suffix: RANGES[i].suffix_scientific};
      } else if (suffix_type === 'simple') {
          return {value: n_divided_rounded.toString(), suffix: RANGES[i].suffix_simple};
      }
    }
  }
  return {value: n.toString(), suffix: ''};
}

function roundDec(value, decimals) {
    return Number(Math.round(value + 'e2') + 'e-2').toFixed(decimals);
}

function componentToHex(c) {
    let hex = c.toString(16);
    return hex.length == 1 ? '0' + hex : hex;
}

function RGBToHex(rgb) {
    //console.log('0x' + this.componentToHex(rgb[0]) + this.componentToHex(rgb[1]) + this.componentToHex(rgb[2]))
    //console.log(rgb)
    return '0x' + this.componentToHex(rgb[0]) + this.componentToHex(rgb[1]) + this.componentToHex(rgb[2]);
}

function convertColor(col) {
    return '0x' + col.slice(1);
}

function tweenAlpha(obj, alpha_val) {
    game.add.tween(obj).to({ alpha: alpha_val}, 150, 'Linear', true);
}

//FPS PROBLEM HERE BACKUPREMOVE:
function printCardDataBACKUPREMOVE(card, value, unit, no_value_conversion) {
    if (!no_value_conversion) {
        var value_short = formatNumber(value, 1, 'simple');
    } else {
        var value_short = {value: value, suffix: ''}; // must be var
    }

    if (no_value_conversion && unit === '') {
        let font_size = 10; // change to largest/smallest(?)

        while (true) {
            let card_style_value_tmp = {font: font_size + 'px Roboto', fill: COLOR['BLACK'], align: 'center', boundsAlignH: 'left', boundsAlignV: 'top', wordWrap: true, wordWrapWidth: 101};

            // CHAAAAAAAANGE, probably causes fps problems here
            var tmp_value = game.add.text(card['position']['x'], card['position']['y'] + CARD_TEXT_YPAD, value_short['value'], card_style_value_tmp);
            tmp_value.setTextBounds(0, 0, 101, 26);
            var bounds_value = tmp_value.getLocalBounds();

            if (bounds_value['width'] < 101 && bounds_value['height'] < 26 && font_size <= 18) {
                tmp_value.destroy();
                font_size += 1;
            } else {
                //tmp_value.alpha = 0.0
                this.tweenAlpha(tmp_value, 1.0);
                tmp_value.lineSpacing = -(font_size * 0.65);
                break;
            }
        }
    } else {
        var tmp_value = game.add.text(card['position']['x'], card['position']['y'] + CARD_TEXT_YPAD, value_short['value'], CARD_STYLE_VALUE);
        ///tmp_value.alpha = 0.0
        //tmp_value.setTextBounds(0, 0, 104, 0)
        this.tweenAlpha(tmp_value, 1.0);
        var bounds_value = tmp_value.getLocalBounds();
    }

    // fix $ prefix here somewhere?
    var tmp_suffix = game.add.text(card['position']['x'] + bounds_value['width'] + CARD_TEXT_PADDING, card['position']['y'] + CARD_TEXT_YPAD, value_short['suffix'] + unit, CARD_STYLE_UNIT);
    tmp_suffix.alpha = 0.0;
    //tmp_value.alpha = 0.0
    this.tweenAlpha(tmp_suffix, 1.0);
    var bounds_unit = tmp_suffix.getLocalBounds();

    let card_half = (bounds_unit['width'] + bounds_value['width']) / 2;
    tmp_value.x = tmp_value.x - card_half;
    tmp_suffix.x = tmp_suffix.x - card_half;

    //if unit === '$'

    return {value: tmp_value, suffix: tmp_suffix};
}

function tweenTint(obj, start_color, end_color, time) {
    let color_blend = {step: 0};
    let color_tween = game.add.tween(color_blend).to({step: 100}, time);

    color_tween.onUpdateCallback(function() {
        obj.tint = Phaser.Color.interpolateColor(start_color, end_color, 100, color_blend.step);
    });

    obj.tint = start_color;
    color_tween.start();
}

// for country fill/gradient get!!!!!!! replace width with GRAD_LEN or whatver?=
function getRGBgradient(obj, width, perc) {
    rgb = obj.getPixelRGB(Math.round(width * perc) - 1, 0); // -1 for hor length
    return {r: rgb['r'], g: rgb['g'], b: rgb['b']};
}

// remove
function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '0x';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// remove
function getRandomColor2() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// remove?
function getObject(obj) {
    console.log(obj);
}

function getCountryName(obj, data) {
    return data[obj['key'].slice(0, -5)]['name_long']; // discard _fill
}
