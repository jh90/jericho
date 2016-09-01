class Opponent {
  constructor(side) {
    this.side = side;
  }
  moveOrAttack() {
    const decision = Math.round(Math.random());
    if (this.side.steps === 0 || decision === 0) {
      return 'attack';
    }
    else if (decision === 1) {
      return 'move';
    }
  }
  moveOrRepair() {
    const decision = Math.round(Math.random());
    if (this.side.wallHealth === 100 || decision === 0) {
      return 'attack';
    }
    else if (decision === 1) {
      return 'repair';
    }
  }
  chooseDefense() {
    const decision = Math.round(Math.random());
    if (this.side.steps > 0) {
      return 'volley';
    }
    else if (decision === 0) {
      return 'volley';
    }
    else if (decision === 1) {
      return 'oil';
    }
  }
  chooseOffense() {
    const decision = Math.round(Math.random());
    if (this.side.steps > 2) {
      if(decision === 0) {
        return 'catapult';
      }
      else if (decision === 1) {
        return 'volley'
      }
    }
    else if (this.side.steps > 0) {
      return 'volley';
    }
  }
}
