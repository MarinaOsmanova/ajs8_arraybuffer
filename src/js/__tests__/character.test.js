import Character from '../character';

test('name and type must match the passed parameters', () => {
  const warrior = new Character('warrior1', 'Daemon');
  expect(warrior.name).toEqual('warrior1');
  expect(warrior.type).toEqual('Daemon');
});

test('getStones must give set values', () => {
  const warrior = new Character('warrior1', 'Daemon');
  expect(warrior.getStones()).toEqual(false);
  warrior.setStoned(1);
  expect(warrior.getStones()).toEqual(true);
});

test('getAttack: incorrect distance should throw an exception', () => {
  const warrior = new Character('warrior1', 'Daemon');
  expect(() => warrior.getAttack('big distance')).toThrow('Некорректная дистанция');
});

test('getAttack: negative or zero distance should throw an exception', () => {
  const warrior = new Character('warrior1', 'Daemon');
  expect(() => warrior.getAttack(-10)).toThrow('Некорректная дистанция');
  expect(() => warrior.getAttack(0)).toThrow('Некорректная дистанция');
});

test('getAttack: attack too far away should be zero', () => {
  const warrior = new Character('warrior1', 'Daemon');
  warrior.setAttack(100);
  expect(warrior.getAttack('11')).toEqual(0);
});

test('getAttack: closest attack should be 100%', () => {
  const warrior = new Character('warrior1', 'Daemon');
  warrior.setAttack(100);
  expect(warrior.getAttack(1)).toEqual(100);
});

test('getAttack: attack at a distance should decrease', () => {
  const warrior = new Character('warrior1', 'Daemon');
  warrior.setAttack(100);
  expect(warrior.getAttack(10)).toEqual(10);
  expect(warrior.getAttack(4)).toEqual(70);
});

test('getAttack: attack with stoned should decrease', () => {
  const warrior = new Character('warrior1', 'Daemon');
  warrior.setAttack(100);
  warrior.setStoned(true);
  expect(warrior.getAttack(3)).toEqual(72);
  expect(warrior.getAttack(4)).toEqual(60);
});

test('getAttack: attack must not be less than zero', () => {
  const warrior = new Character('warrior1', 'Daemon');
  warrior.setAttack(100);
  warrior.setStoned(true);
  expect(warrior.getAttack(10)).toEqual(0);
});
