class Opponent {
  constructor (side) {
    this.side = side;
  }

  moveOrAttack () {
    const decision = Math.round(Math.random());
    if (this.side.game.steps === 0 || decision === 0) {
      this.chooseOffense();
    }
    else if (decision === 1) {
      this.side.move();
    }
  }

  repairOrAttack () {
    const decision = Math.round(Math.random());
    if (this.side.wallHealth === 100 || decision === 0 || this.side.game.steps < 2) {
      this.side.fireVolley();
    }
    else if (decision === 1) {
      this.side.repair
    }
  }

  chooseOffense () {
    const decision = Math.round(Math.random());
    if (this.side.game.steps > 1) {
      if (decision === 0) {
        this.side.launchCatapult();
      }
      else if (decision === 1) {
        this.side.fireVolley();
      }
    }
  }
}
