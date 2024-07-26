/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if (s.length % 2 === 1) return false 
    let mobj = {"{":"}","[":"]", "(":")"};
    let mstack = [];
    for (let i = 0; i < s.length; i++){
        if(s[i] in mobj)
            mstack.push(s[i])
        else{
            if(mstack.length === 0)
                return false;
            if (mobj[mstack[mstack.length - 1]] !== s[i] )
                return false;
            else
                mstack.pop()
        } 
    }
    if (mstack.length > 0)
        return false
    return true
}