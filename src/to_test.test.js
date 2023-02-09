const {Diff_Btn_Choose, AddTailPosition, RandomNumberGenerator} = require('./to_test.js');

test('should output difficulty chosen', ()=>{
    const diff = Diff_Btn_Choose('2');
    expect(diff).toBe(2);
})

test('should change the position', ()=>{
    const [x, y] = AddTailPosition('left', 5, 5);
    expect(x).toBe(6);
    expect(y).toBe(5);
})

test('should change the position', ()=>{
    const [x, y] = AddTailPosition('down', 5, 5);
    expect(x).toBe(5);
    expect(y).toBe(4);
})

test('should change the position', ()=>{
    const [x, y] = AddTailPosition('up', 5, 5);
    expect(x).toBe(5);
    expect(y).toBe(6);
})

test('should output int number', ()=>{
    const num = RandomNumberGenerator(200);
    expect(num).toBeLessThan(200);
})
