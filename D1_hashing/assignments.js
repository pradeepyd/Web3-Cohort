const crypto = require('crypto');

function hashfind(prefix){
    let input = 0;
    while(true){
        let inputStr = input.toString();
        newStr = '100xdevs'+inputStr;
        let hash = crypto.createHash('sha256').update(newStr).digest('hex');
        if(hash.startsWith(prefix)){
            return {input:newStr,hash:hash};
        }
        input++;
    }
}

// let prefix = '00000';
const prefixNumber = hashfind('00000');
console.log(`${prefixNumber.input}`);
console.log(`${prefixNumber.hash}`);