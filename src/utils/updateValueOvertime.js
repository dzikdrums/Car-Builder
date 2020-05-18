const updateValue = (finalValue, seconds, callback) => {
  var startTime = new Date().getTime();
  var milliseconds = seconds * 1000;

  (function update() {
    var currentTime = new Date().getTime();
    var value = (finalValue * (currentTime - startTime)) / milliseconds;

    if (value >= finalValue) value = finalValue;
    else setTimeout(update, 0);

    callback && callback(value);
  })();
};

export default updateValue;
