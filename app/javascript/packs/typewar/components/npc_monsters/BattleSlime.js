require('crafty');

Crafty.c("BattleSlime", {
  init: function (){ 
    this.requires("2D, BattleCharacter, BattleNPCEnemy, BattleSlimeAnim");
  },

  battleSlime: function (){ return this; },
  //  initDefaultSkills: function (){
  //    this.addComponent("NPCSkillManager").
  //      nPCSkillManager(["SlimeStandard", "SlimeGlob"]);
  //  }
});
