export default class Character {
  constructor(name, type) {
    this.name = name;
    this.type = type;
    this.stoned = false;
    this.attack = 0;
  }

  setStoned(value) {
    this.stoned = Boolean(value);
  }

  getStones() {
    return this.stoned;
  }

  setAttack(value) {
    this.attack = parseInt(value, 10);
  }

  getAttack(distance) {
    const parsedDistance = Number(distance);
    if (!Number.isInteger(parsedDistance) || parsedDistance < 1) {
      throw new Error('Некорректная дистанция');
    }
    if (parsedDistance > 10) {
      return 0;
    }
    let attack = (this.attack * (11 - parsedDistance)) / 10;
    if (this.stoned) {
      attack -= 5 * Math.log2(parsedDistance);
    }
    if (attack < 0) {
      attack = 0;
    }
    return Math.round(attack);
  }
}
