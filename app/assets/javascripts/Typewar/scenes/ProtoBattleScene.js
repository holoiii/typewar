var global_bg, global_enemy, global_player; // DEBUG;

var ProtoBattleScene = Backbone.Model.extend({
  defaults: {
    scene_id: 'prototype_battle'
  },

  initialize: function (){
    var self,
      enemy_npc,
      player,
      statusBar;

    self = this;
    Crafty.scene(self.get('scene_id'), function (){
      self.initSprites();
      enemy_npc = self.initEnemyNPC();
      player = self.initPC();
      self.initBackground();
      self.initStageEdges();
      self.initCamera();
      self.initBattleManager({player: player, enemies: [enemy_npc]});
      self.initStatusBar(player, enemy_npc);
      self.initInputManager();
    });
  },

  initBackground: function (){
    //Crafty.background("black");
    //Crafty.background("url('assets/Typewar/backgrounds/Fighting-Game-Background-GIFs-2.gif')");
    global_bg = Crafty.e("2D, DOM, Image, BattleBackground")
      .battleBackground("assets/Typewar/backgrounds/Fighting-Game-Background-GIFs-2.gif", 800, 336)
      .attr({x: -26, y: -60, z: 0});
  },

  initBattleManager: function (options){
    Typewar.Engine.BattleManager = new Typewar.Models.BattleManager(options);
  },

  initCamera: function (){
    Crafty.viewport.scale(1.75);
  },

  initPC: function (){
    player = Crafty.e("2D, DOM, BattlePlayer, BattlePlayerAnim, pl_st0")
    player.attr({ x: 20, y: 180 })
      .battlePlayerAnim()
      .battlePlayer();
    global_player = player;

    return player;
  },

  initEnemyNPC: function (){
    var slime_char_sheet = new Typewar.Models.CharacterSheet;
    slime_char_sheet.set('name', 'Chaos slime');

    slime_char_sheet 
    enemy_npc = Crafty.e("2D, DOM, BattleNPCEnemy, BattleSlimeAnim, slime_st0")
      .attr({x: 520, y: 220})
      .battleSlimeAnim()
      .battleNPCEnemy(slime_char_sheet);
    global_enemy = enemy_npc; // DEBUG:

    return enemy_npc;
  },

  initSprites: function (){
    Sprite.create('player');
    Sprite.create('slime');
  },

  initStageEdges: function (){
    var width, height;

    width = Typewar.viewportWidth;
    height = Typewar.viewportHeight;

    // Left edge
    Crafty.e("2D, Collision, BattleStageEdge")
      .attr({x: 0, y: 0, w: 5, h: height })
      .collision([[0,0], [0, height], [5, height], [5, 0]]);

//    // Right edge
//    Crafty.e("2D, Collision, BattleStageEdge")
//      .attr({x: width, y: 0, w: 5, h: height })
//      .collision([[0,0], [0, height], [5, height], [5, 0]]);
  },

  initInputManager: function (){
    Typewar.Engine.InputManager = new Typewar.Models.BattleInputManager;
  },

  initStatusBar: function(player, enemy) {
    var statusBar = new Typewar.Views.StatusBarView();
    statusBar.addEntity(player);
    statusBar.addEntity(enemy);

    statusBar.render();
  },

  play: function (){
    Crafty.scene(this.get('scene_id'));
  }
});
