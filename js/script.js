// import {wordsCount, getWords} from "./modules/words";
import {EmailParser} from './modules/hw';
import "@babel/polyfill";

// window.addEventListener('DOMContentLoaded', function() {
//     let text = "   kk iuou  iui ee www ";
//     this.console.log(wordsCount(text));
//     for (let word of getWords(text)) {
//         this.console.log(word);
//     }
// });

window.addEventListener('DOMContentLoaded', function() {
    let parser = new EmailParser('sevasun@gmail.com');
    console.log(parser.name);
    console.log(parser.domain);
    console.log(parser.isCorrect);

    parser.email = "gfgf@nz";
    console.log(parser.name);
    console.log(parser.domain);
    console.log(parser.isCorrect);
});