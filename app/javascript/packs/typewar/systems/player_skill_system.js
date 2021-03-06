import TextLibrarian from "../util/text_librarian"

require("../components/PlayerSkillManager");

function initPlayerSkillSystem(Crafty){
  var skill_managers;

  skill_managers = Crafty("PlayerSkillManager").get();

  _.each(skill_managers, (curr_skill_manager) => {
    curr_skill_manager.playerSkillManager();
    initSkills(curr_skill_manager);
    curr_skill_manager.renderSkillManager();
  });

  bindCleanupSkills(skill_managers);
}

function bindCleanupSkills(skillManagers){
  _.each(skillManagers, (currSkillManager) => {
    currSkillManager.bind("Remove", function (){
      var skill_manager_view;
      _.each(currSkillManager.getSkills(), (curr_skill) => {
        curr_skill.destroy();
      });
      skill_manager_view = currSkillManager.getSkillManagerView();
      skill_manager_view.cleanupSkillViews();
      skill_manager_view.remove();
      currSkillManager._skills = null;
    });
  });
}

function playerSkillSystem(Crafty){
  var skill_entities, completed_skill_entities;

  // NOTE: There is a potential problem/issue here:
  // Querying for completed skills in this manner does not guarantee order
  // so in theory, if two skills trigger within the same execution frame
  // they could occur out of order.  It's probly such a small edge case that
  // it doesn't matter, but it's possible and worth noting in case it becomes
  // an issue...
  skill_entities = Crafty("BattlePCSkill TextFragment").get();
  completed_skill_entities = _.filter(skill_entities, (curr) => {
    return curr.isComplete();
  });

  _.each(completed_skill_entities, (curr_entity) => {
    curr_entity.processed();
    executeSkill(curr_entity);
  });
}

// private

function buildSkill(entity, skillDef){
  return Crafty.e("BattlePCSkill, TextFragment")
           .textFragment(TextLibrarian.retrieve(entity.getVocabulary(), skillDef.textOptions))
           .battlePCSkill(entity, skillDef);
}

function executeSkill(skillEntity){
  var target;

  target = skillEntity.getTarget();

  _.each(skillEntity.skill.effects, (effectData) => {
    var effect_klass, effect_args, skill_args;

    effect_klass = effectData.klass
    effect_args = effectData;
    skill_args = {
      target: target,
      source: skillEntity.getOwner(),
      skill: skillEntity
    }
    skill_args = _.merge(skillEntity.getSkillDef(), skill_args, effect_args);

//    console.log("DEBUG: PLAYER SKILL SYSTEM PROCESSING, About to execute skill effect --------->>", effect_klass, skill_args);
    effect_klass.execute(skill_args);
  });
}

function initSkills(entity){
  var new_skill_ent;
  _.each(entity.getSkillset(), (curr_skill_def) => {
    new_skill_ent = buildSkill(entity, curr_skill_def);
    entity.getSkills().push(new_skill_ent);
  });
}

export {initPlayerSkillSystem, playerSkillSystem}
