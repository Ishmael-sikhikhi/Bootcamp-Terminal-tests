module.exports = function (year) {
  var date = new Date();
  var myYear = date.getFullYear() - year;
  return myYear;
}