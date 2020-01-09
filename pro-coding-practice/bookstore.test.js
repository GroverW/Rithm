it('should price books correctly', function () {
  // TODO    
  expect(getPrice(books[1])).toBe(10.8);
  expect(getPrice(books[0])).toBe(5.4);
});

// TODO: additional tests here ...
it('should sell books correctly', function() {
  expect(books[3].copies).toBe(4);
  sellBook(books[3]);
  expect(books[3].copies).toBe(3);
});

it('should throw error if not enough books', function() {
  expect(function() { sellBook(books[2]) }).toThrow(new Error("Not enough copies on hand!"));
});