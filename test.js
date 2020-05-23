const {filter_list} = require('./main');

test("test 1", () => {
    const answer = filter_list([1, 2, 'a', 'b']);
    expect(answer).toEqual ([1, 2]);
});

test("test 2", () => {
    const answer = filter_list([1, 2, 'aasf', '1', '123', 123]);
    expect(answer).toEqual ([1, 2, 123]);
});