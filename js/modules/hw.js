function watchObj(node, callback){
    /* return new Proxy(node, {...}) */
    return node;
}

class EmailParser{
    constructor(email){
        this.email = email;
    };
    get name() {
        return this.isCorrect ? this.email.substring(0, this.email.indexOf('@')) : null;
    };

    get domain() {
        return this.isCorrect ? this.email.substr(this.email.indexOf('@') + 1) : null;
    };

    get isCorrect() {
        let validate = 	
        /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/;
        return validate.test(this.email.toUpperCase());
    }; 
};

export {watchObj, EmailParser};