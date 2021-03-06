/* Sprite: a model encapsulating all the sprites in the project.
 * This is basically little more than a data container and can probably
 * degrade down to a json.. however this also handles creation of the
 * sprite.
 */
/**
    examples:             
    'sprites_name' : {
         'file' : 'path/to/file',
         'tile' : width,
         'tileh' : height,
         'elements': {
             'sprite_name' : [0, 0]
         }
    },
**/

import * as Images from "./images"

const images = {
  'player': {
    'file': Images.IMG_SPR_PLAYER_TEST,
    'tile': 108,
    'tileh': 76,
    'elements': {
      'pl_st0':   [0,0],
      'pl_st1':   [1,0],
      'pl_st2':   [2,0],
      'pl_st3':   [3,0],
      'pl_st4':   [4,0],
      'pl_st5':   [5,0],
      'pl_st6':   [6,0],
      'pl_hit0':  [0,1],
      'pl_hit1':  [1,1],
      'pl_hit2':  [2,1],
      'pl_hit3':  [3,1],
      'pl_hit4':  [4,1],
      'pl_hit5':  [5,1],
      'pl_hit6':  [6,1],
      'pl_att00': [0,2],
      'pl_att01': [1,2],
      'pl_att02': [2,2],
      'pl_att03': [3,2],
      'pl_att04': [4,2],
      'pl_att05': [5,2],
      'pl_att06': [6,2],
      'pl_blk00': [0,3],
      'pl_blk01': [1,3],
      'pl_blk02': [2,3],
      'pl_blk03': [3,3],
      'pl_blk04': [4,3],
      'pl_blk05': [5,3],
      'pl_blk06': [6,3]
    }
  },

  'player_zero': {
    'file': Images.IMG_SPR_PLAYER_ZERO,
    'tile': 80,
    'tileh': 72,
    'elements': {
      'plz_st0':   [0,0],
      'plz_st1':   [0,1],
      'plz_st2':   [0,2],
      'plz_st3':   [0,3],
      'plz_st4':   [0,4],

      'plz_att00':  [1,0],
      'plz_att01':  [1,1],
      'plz_att02':  [1,2],
      'plz_att03':  [1,3],
      'plz_att04':  [1,4],
      'plz_att05':  [1,5],
      'plz_att06':  [1,6],
      'plz_att07':  [1,7],
      'plz_att08':  [1,8],

      'plz_att10':  [2,0],
      'plz_att11':  [2,1],
      'plz_att12':  [2,2],
      'plz_att13':  [2,3],
      'plz_att14':  [2,4],
      'plz_att15':  [2,5],
      'plz_att16':  [2,6],

      'plz_att20':  [3,0],
      'plz_att21':  [3,1],
      'plz_att22':  [3,2],
      'plz_att23':  [3,3],
      'plz_att24':  [3,4],
      'plz_att25':  [3,5],
      'plz_att26':  [3,6],
      'plz_att27':  [3,7],
      'plz_att28':  [3,8],

      'plz_att30':  [4,0],
      'plz_att31':  [4,1],
      'plz_att32':  [4,2],
      'plz_att33':  [4,3],
      'plz_att34':  [4,4],
      'plz_att35':  [4,5],
      'plz_att36':  [4,6],
      'plz_att37':  [4,7],
      'plz_att38':  [4,8],

      'plz_dodge00': [5,0],
      'plz_dodge01': [5,1],
      'plz_dodge02': [5,2],
      'plz_dodge03': [5,3],
      'plz_dodge04': [5,4],
      'plz_dodge05': [5,5],
      'plz_dodge06': [5,6],
      'plz_dodge07': [5,7],

      'plz_hit00':  [6,0],
      'plz_hit01':  [6,1],
      'plz_hit10':  [7,0],
      'plz_hit11':  [7,1],

      'plz_dash0': [8,0],
      'plz_dash1': [8,1],
      'plz_dash2': [8,2],
      'plz_dash3': [8,3],

      'plz_jump0': [9,0],
      'plz_jump1': [9,1],
      'plz_jump2': [9,2],
      'plz_jump3': [9,3],
      'plz_jump4': [9,4],
      'plz_jump5': [9,5],
      'plz_jump6': [9,6],

      'plz_in0':    [10,0],
      'plz_in1':    [10,1],
      'plz_in2':    [10,2],
      'plz_in3':    [10,3],
      'plz_in4':    [10,4],
      'plz_in5':    [10,5],
      'plz_in6':    [10,6],
      'plz_in7':    [10,7],
      'plz_in8':    [10,8],
      'plz_in9':    [10,9],
      'plz_in10':   [10,10],
      'plz_in11':   [10,11],
      'plz_in12':   [10,12],
      'plz_in13':   [10,13],

      'plz_charge0': [11,0],
      'plz_charge1': [11,1],
      'plz_charge2': [11,2],
      'plz_charge3': [11,3],
      'plz_charge4': [11,4],
      'plz_charge5': [11,5],
      'plz_charge6': [11,6],
      'plz_charge7': [11,7]
    }
  },

  'slime': {
    'file': Images.IMG_SPR_NPC_SLIME,
    'tile': 42,
    'elements': {
      'slime_st0':     [0,0],
      'slime_st1':     [1,0],
      'slime_st2':     [2,0],
      'slime_st3':     [3,0],
      'slime_st4':     [4,0],
      'slime_hit0':    [0,1],
      'slime_hit1':    [1,1],
      'slime_hit2':    [2,1],
      'slime_hit3':    [3,1],
      'slime_hit4':    [4,1],
      'slime_hit5':    [5,1],
      'slime_hit6':    [6,1],
      'slime_hit6':    [7,1],
      'slime_att00':   [0,2],
      'slime_att01':   [1,2],
      'slime_att02':   [2,2],
      'slime_att03':   [3,2],
      'slime_att04':   [4,2],
      'slime_att05':   [5,2],
      'slime_att06':   [6,2],
      'slime_att06':   [7,2],
      'slime_blk00':   [0,3],
      'slime_blk01':   [1,3],
      'slime_blk02':   [2,3],
      'slime_blk03':   [3,3],
      'slime_blk04':   [4,3],
      'slime_blk05':   [5,3],
      'slime_blk06':   [6,3],
      'slime_blk07':   [7,3],
      'slime_att200':  [0,4],
      'slime_att201':  [1,4],
      'slime_att202':  [2,4],
      'slime_att203':  [3,4],
      'slime_att204':  [4,4],
      'slime_att205':  [5,4],
      'slime_att206':  [6,4],
      'slime_att207':  [7,4]
    }
  }
}
export default class Sprite {
  constructor(){ }

  static create(key){
    var element;

    if(key == undefined){ return false; } 
    element = images[key];
    if(element['tileh'] == undefined){
      Crafty.sprite(element['tile'], element['file'], element['elements']);
    }else{
      Crafty.sprite(element['tile'], element['tileh'], element['file'], element['elements']);
    
    }
    return true;
  }

  static getPaths(){
    var array = [], i=0;
    _.each(images, function(element, key){ 
      array[i] = element['file']
      i++;
    });
    return array;
  }
}
