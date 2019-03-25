import { Jovo } from "jovo-core";

export class IntroDialogue {
  static async wellcome(jovo: Jovo, isNewPlayer: boolean) {
    if (isNewPlayer) {
      console.log('CMS response',jovo.$cms);
      jovo.$speech.t('intro.newplayer');
      jovo.tell(jovo.$speech);
     
    }
  }
}
