import arMessages from './messages/ar.json';
import caMessages from './messages/ca.json';
// no need to import en messages-- they are in the defaultMessage field
import dedeMessages from './messages/de_DE.json';
import es419Messages from './messages/es_419.json';
import frMessages from './messages/fr.json';
import heMessages from './messages/he.json';
import hiMessages from './messages/hi.json';
import idMessages from './messages/id.json';
import ititMessages from './messages/it_IT.json';
import kokrMessages from './messages/ko_kr.json';
import mnMessages from './messages/mn.json';
import plMessages from './messages/pl.json';
import ptbrMessages from './messages/pt_br.json';
import ptptMessages from './messages/pt_PT.json';
import ruMessages from './messages/ru.json';
import thMessages from './messages/th.json';
import ukMessages from './messages/uk.json';
import zhcnMessages from './messages/zh_CN.json';

const messages = {
  ar: arMessages,
  es: es419Messages, // Prospectus uses es language code for spanish, added `es` option and pointed to es-419 strings.
  'es-419': es419Messages,
  fr: frMessages,
  'zh-cn': zhcnMessages,
  'it-it': ititMessages,
  'pt-pt': ptptMessages,
  'de-de': dedeMessages,
  ca: caMessages,
  he: heMessages,
  id: idMessages,
  'ko-kr': kokrMessages,
  pl: plMessages,
  'pt-br': ptbrMessages,
  ru: ruMessages,
  th: thMessages,
  uk: ukMessages,
  hi: hiMessages,
  mn: mnMessages,
};

export default messages;
