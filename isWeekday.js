module.exports = function (passedStr) {
  if (passedStr.startsWith('S')) {
    return false;
  }

  return true;
}