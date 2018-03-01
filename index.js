function shout(string) {
  return string.toUpperCase()
}
function whisper(string) {
 return string.toLowerCase()
}
describe('Hello world', function () {
it('says hello', function () {
    spyOn(console,'log').and.callThrough();
    comp.helloWorld();
    expect(console.log).toHaveBeenCalled();
    });
});
