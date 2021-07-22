module.exports = function(str){
    var myStr = str.split(', ');
    var myNewArray = [];
    for (var i = 0; i < myStr.length; i++){
        if (myStr[i].startsWith('CJ')){
              myNewArray.push(myStr[i]);
          }
    }
    return myNewArray.length;
}