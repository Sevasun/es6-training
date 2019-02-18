function watchObj(node, callback){
    /* return new Proxy(node, {...}) */
    return node;
}

class EmailParser{
    constructor(email){
        this.email = email;

        Object.defineProperty(this, 'name', {
            get() {
                if(this.email.indexOf('@') >= 0) {
                    return this.email.substring(0, this.email.indexOf('@'));
                } else {
                    return this.email;
                }
            }
        });

        Object.defineProperty(this, 'domain', {
            get() {
                if(this.email.indexOf('@') >= 0) {
                    return this.email.substr(this.email.indexOf('@') + 1);
                } else {
                    return this.email;
                }
            }
        });

        Object.defineProperty(this, 'isCorrect', {
            get() {
                let validate = 	
                /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/;
                console.log(`${validate.test(this.email)} !!!!!`);
                if(validate.test(this.email.toUpperCase())) {
                    return true;
                } else {
                    return false;
                }
            }
        });
    };    
};

export {watchObj, EmailParser};