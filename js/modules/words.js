function cleanText(str) {
    let text = str.trim();
    return text;
}

function wordsCount(str) {
    let text = cleanText(str);
    let counter = 0;
    let start = 0;
    // while(text.indexOf(' ') != -1) {
    //     start = start + text.indexOf(' ') + 1;
    //     counter++;
    // }
    return text.indexOf(' ');
}

export {wordsCount};