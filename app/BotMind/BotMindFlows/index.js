import {
  optionCards,
  selectField,
  tagsField,
  textField,
  disabledFieldText,
  endOfConversation,
} from '../StateFormatter';
import * as RTypes from '../responseTypes';
import DialogueFromUser from '../../components/DialogueFromUser';

/* Importar funcion de app.js */

const common_greetings = /(^hello|^hllo|^hi|^hey|^hola|^sup)\b\s?.*$/i;
const common_greetings_negative = /(?!(^hello|^hi|^hey|^hllo|^sup|^hola)\b)\w+/i;

/* Crear variable contador de turno */
/* Crear variable que reciba el mensaje de la funcion importada de app.js */

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
    input: textField() /* *selectField(['Universidad', 'Biblioteca']) */,
    answers: [
      {
        nextId: 'req',
      },
    ],
  },
  req: {
    botPrompt: 'Dato',
    input: textField(),
    answers: [
      {
        answers: common_greetings,
        nextId: 'res',
      },
    ],
  },
  res: {
    botPrompt: 'Hola',
    input: textField(),
    answers: [
      {
        answers: common_greetings_negative,
        nextId: 'req',
      },
    ],
  },
};

export default questions;
