function isLeft(c) {
    return c === '{' || c === '(' || c === '[';
}


function isRight(c) {
    return c === '}' || c === ']' || c === ')';
}

function validPair(l,r) {
    const one = l === '{' && r === '}';
    const two = l === '(' && r === ')';
    const three = l === '[' && r === ']';
    return one || two || three;
}
Array.prototype.top = function() {
    return this.length === 0 ? null : this[this.length-1];
}
var isValid = function(s) {
    let stack = [];
    for(const c of s) {
        if(isLeft(c)) {
            stack.push(c);
        }
        else if(isRight(c)) {
            if(stack.length===0) {
                return false;
            }
            const top = stack.top();
            if(!validPair(top,c)) {
                return false;
            }
            stack.pop();
        }
    }
    return stack.length===0;
};


console.log(isValid("{}{}"))