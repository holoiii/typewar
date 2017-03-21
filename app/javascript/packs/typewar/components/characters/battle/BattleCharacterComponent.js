/* A component for common functionality between all battle entities */

require('crafty');

Crafty.c("BattleCharacter", {
  charSheet: null,
  _currentTarget: null,
  _model: null,

  init: function (){
    this.requires("2D");
  },

  battleCharacter: function (charSheet){
    this.charSheet = charSheet;
    this.z = 5;

    return this;
  },

  remove: function (destroyed){
    this.z = -9999;
  },

  getHP: function (){
    return this.getStatus().hp;
  },

  getName: function (){
    return this.charSheet.data.name;
  },

  getStatus: function (){
    return this.charSheet.data.status;
  },

  getTarget: function (){
    return this._currentTarget;
  },

  getVocabulary: function (){
    return this.charSheet.data.vocabulary;
  },

  setHP: function (newHP){
    this.getStatus().hp = newHP;
  },

  getPercentHP: function (){
    return 100 * (this.getStatus().hp / this.getStatus().maxHp);
  },

  setTarget: function (target){
    this._currentTarget = target;
  },

  updateStatus: function() {
    this.trigger("UpdateStatus");
  }
});
