const { idText } = require('typescript');
const hello = require('./hello.js');

test('Says hello to', () => {

    const a = 'Ignat'

    expect(hello.sayTo('Ignat')).toBe('Hello, Ignat!');

});
