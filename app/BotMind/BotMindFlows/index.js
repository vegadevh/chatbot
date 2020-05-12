import {
  optionCards,
  selectField,
  tagsField,
  textField,
  disabledFieldText,
  endOfConversation,
} from '../StateFormatter';
import * as RTypes from '../responseTypes';
import myRequest from 'app';
import DialogueFromUser from "../../components/DialogueFromUser";

const common_greetings = /(^hello|^hllo|^hi|^hey|^hola|^sup)\b\s?.*$/i;
const common_greetings_negative = /(?!(^hello|^hi|^hey|^hllo|^sup|^hola)\b)\w+/i;

var i=0;

const questions = {

  start: {
    botPrompt: 'Hola, soy un <strong>chatbot</strong>. ¿En que puedo ayudarte?',
    answers: [
      {
        nextId: 'select',
      },
    ],
  },
  select: {
    botPrompt: 'Puedes buscar informacion sabre la <strong>Universidad</strong> y tambien sobre la <strong>biblioteca</strong>:',
    varName: 'userName',
    input: textField() /**selectField(['Universidad', 'Biblioteca'])*/,
    answers: [
			{ nextId: 'tags' },
    ],
  },
  while (True) {
    req: {
      botPrompt: myRequest(i,DialogueFromUser.propTypes.dialogue),
          input: tagsField(),
          answers: [
          { nextId: 'res' },
          ],
    };
    res: {
      botPrompt: myRequest(i,DialogueFromUser.propTypes.dialogue),
          input: tagsField(),
          answers: [
        { nextId: 'req' },
      ],
    };
  }
};

export default questions;
