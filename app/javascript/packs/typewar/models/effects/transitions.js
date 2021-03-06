// Scene transition effects

Crafty.c("FadeoutTransition", {
  init: function (){
    this.requires("2D, DOM");
  },
  fadeoutTransition: function (){return this;},
  fadeout: function (){
    var $element;

    $element = $(this._element);
    $element.addClass("transition-end-state");
  }
});

Crafty.c("FadeinTransition", {
  init: function (){
    this.requires("2D, DOM");
  },
  fadeinTransition: function (){return this;},
  fadein: function (){
    $(this._element).addClass("transition-end-state");
  }
});

export class Fadeout {
  static execute(args){
    var { fulfill, reject } = args;

    window.setTimeout(() => {
      if(!fulfill){ return; }
      fulfill();
    }, 3000);

    // create a mask over the canvas and increase its opacity until black
    Crafty.e("FadeoutTransition, 2D, DOM").
      attr({x: 0, y: 0, z: 9999999, w: Crafty.stage.elem.offsetWidth, h: Crafty.stage.elem.offsetHeight}).
      fadeoutTransition().
      fadeout();
  }
}

export class Fadein {
  static execute(args) {
    var { fulfill, reject } = args;

    window.setTimeout(() => {
      if(!fulfill){ return; }
      fulfill();
    }, 3000);

    Crafty.e("FadeinTransition, 2D, DOM").
      attr({x: 0, y: 0, z: 9999999, w: Crafty.stage.elem.offsetWidth, h: Crafty.stage.elem.offsetHeight}).
      fadeinTransition().
      fadein();
  }
}
