const repeatString = function(str, num) {

if (num < 0){
    return 'ERROR';
}else {
for (i = 0; i <= num; i++){
    return str.repeat(num);
}

}
}
module.exports = repeatString;
