
var singleNumber = function(nums) {
    let unique = 0;
    for (let num of nums) {
        unique ^= num;
    }
    return unique;  
};