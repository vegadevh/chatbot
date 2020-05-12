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

const common_greetings = /(^hello|^hllo|^hi|^hey|^hola|^sup)\b\s?.*$/i;
const common_greetings_negative = /(?!(^hello|^hi|^hey|^hllo|^sup|^hola)\b)\w+/i;

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
  while (condition) {
    tags: {
      botPrompt: ,
      varName: 'userName',
      input: tagsField(['Do go on..', 'Amazing!', "I'm loving this!", '🍕']),
      answers: [
        { nextId: 'bagsSystem' },
      ],
    },
    reponse:{
      botPrompt: 
    }


  }
};

export default questions;
