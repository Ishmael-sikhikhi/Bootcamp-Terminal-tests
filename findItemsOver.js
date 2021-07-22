module.exports = function(productList,threshold){
  var productList1 = [];
    for(var i=0;i<productList.length; i++){
      if(productList[i].qty > threshold){
             productList1.push(productList[i]);
         }
  }
  return productList1;
}