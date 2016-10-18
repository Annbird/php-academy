describe("test", function() {

  it("возводит в n-ю степень", function() {
    assert.equal(test(3, 3), 27);
  });

});

describe("func", function() {

  describe("возводит в степень", function() {

    function makeTest(x) {
      var expected = x * x * x;
      it("при возведении " + x + " в степень 3 результат: " + expected, function() {
        assert.equal(func(x, 3), expected);
      });
    }

    for (var x = 1; x <= 5; x++) {
      makeTest(x);
    }

  });

  it("при возведении в -  результат NaN", function() {
    assert(isNaN(func(2, -1)), "func(2, -1) не NaN");
  });

  it("при возведении в дробь результат NaN", function() {
    assert(isNaN(func(2, 1.5)), "func(2, -1.5) не NaN");
  });

});
