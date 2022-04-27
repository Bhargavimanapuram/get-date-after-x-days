const addDays = require("date-fns/addDays");
module.exports = function (days) {
  const result = addDays(new Date("22 Aug 2020"), days);
  return result;
};
