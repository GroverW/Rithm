// DON'T WORRY ABOUT WRITING THESE TESTS!

// This test file is just here for you to help you think about
// how you can break apart the logic of the application into
// smaller, more easily testable pieces.

it('should validate edge lengths', function () {
  expect(validateEdge(2)).toBe(true);
  // TODO: handle more validation cases here
  expect(validateEdge(55)).toBe(false);
  expect(validateEdge(2.2)).toBe(false);
  expect(validateEdge(-34)).toBe(false);
});

it('should calculate areas', function () {
  // TODO
  expect(calculateArea(5,5)).toBe(12.5)
});

it('should calculate hypotenuses', function () {
  // TODO
  expect(calculateHypotenuse(5,5)).toBe(7);
});

it('should craft correct message', function () {
  // we'd like to have tests like this:  
  //
  expect(printHypotenuseAndArea(5, 6)).toEqual(
      "Hypotenuse is 5 and area is 6.");
  
  // TODO test "big triangles" here
  expect(printHypotenuseAndArea(8,51)).toEqual(
    "Hypotenuse is 8 and area is 51. That's a really big triangle!"
  )

});

it('should generate correct results', function () {
  // we'd like to have tests like this:
  // 
  expect(getResultsFromSideLengths(3, 4)).toEqual(
    {aMsg: "A is Valid", bMsg: "B is Valid", msg: "Hypotenuse is 5 and area is 6."});
    
  // TODO test an invalid submission here
  expect(getResultsFromSideLengths(0,1)).toEqual(
    {aMsg: "Invalid!", bMsg: "Invalid!", msg: "Please enter valid sides!"}
  )
});


