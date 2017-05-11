import ZERO from "../character/zero"
import TRAINING_DUMMY from "../character/training_dummy"
import BAYOU from "../background/bayou"

import {ZeroLightSlash} from "../../../models/skills/player/zero_active_skills"
import {SlimeStandardAttack} from "../../../models/skills/npc/slime_skills"
import {SOUND_LETTER_TYPED, SOUND_SWORD_SLASH} from "../../../constants/audio_constants"

const STAGE_WIDTH = 450;
const STAGE_HEIGHT = 240;
const STAGE_EDGE_LEFT_BARRIER_OFFSET = 3;
const STAGE_EDGE_RIGHT_BARRIER_OFFSET = 60;
const STAGE_EDGE_FLOOR_BARRIER_OFFSET = 0;

var zero_copy = _.cloneDeep(ZERO);
zero_copy.charSheet.skills = [];
var dummy_copy = _.cloneDeep(TRAINING_DUMMY);
dummy_copy.charSheet.skills = [SlimeStandardAttack];

var trainingScene1Data = {
  id: "training_scene_1",
  name: "Training scene 1",
  width: 450,
  height: 240,
  borders: {
    left: STAGE_EDGE_LEFT_BARRIER_OFFSET,
    right: STAGE_WIDTH + STAGE_EDGE_RIGHT_BARRIER_OFFSET,
    floor: STAGE_HEIGHT + STAGE_EDGE_FLOOR_BARRIER_OFFSET
  },

  background: BAYOU,

  combatants: {
    player: zero_copy,
    npc: dummy_copy
  },

  audio: {
    sounds: [
      SOUND_LETTER_TYPED,
      SOUND_SWORD_SLASH
    ]
  },
  tutorial: {
    steps: [
      {type: 'wait', duration: 3000},
      {type: 'modal', modalData: {
        headerContent: "Defend yourself!",
        modalContent: "Now we'll practice defending yourself.  The training dummy will attempt to attack you by sending words your way. Type the words successfully to guard against them.  If they hit you, you will receive damage.",
        footerContent: "Press space to continue..."
      }},
      {type: 'wait_input', input: "SPACE"},

      {type: 'end'}
    ]
  }
}
export default trainingScene1Data
