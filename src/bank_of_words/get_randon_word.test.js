const getRandomNumber = require("./get_random_number");

test("get randon number max value 5", () => {
  expect(getRandomNumber()).toBeLessThan(5);
});
