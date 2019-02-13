import {wordsCount, getWords} from "./modules/words";
import "@babel/polyfill";

window.addEventListener('DOMContentLoaded', function() {
    let text = "   kk iuou  iui ee www ";
    this.console.log(wordsCount(text));
    for (let word of getWords(text)) {
        this.console.log(word);
    }
});