function cleanText(str) {
    let text = str.trim().replace(/  +/, " ");
    return text;
}

function wordsCount(str) {
    let text = cleanText(str);
    let counter = 0;
    while(text.indexOf(' ') > -1) {
        counter++;
        text = text.substr(text.indexOf(' ') + 1);
    }
    if (counter > 0) {
        counter++;
    }
    return counter;
}

function* getWords(str) {
    let text = cleanText(str) + " ";
    let start = 0;
    let current = text.indexOf(' ', start);
    while(current !== -1) {
        yield text.substr(start, current - start);
        start = current + 1;
        current = text.indexOf(' ', start);
    }
}

export {wordsCount, getWords};