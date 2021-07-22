module.exports = function (regNumber, regLocation) {
  if (regNumber.endsWith(regLocation)) {
    return true;
  }
  return false;
}