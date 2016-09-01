class Defender {
  constructor (game) {
    this.fighters =
    this.archers =
    this.steps =
    this.wallHealth = 100;
    this.control = null;
    this.human = true;
    this.game = game;
  }

  renderDisplay () {

  }

  repair () {
    if (this.steps > 0 && this.wallHealth != 100) {
      this.wallHealth += 10;
    }
    //animate
    this.game.play('A');
  }

  fireVolley () {
    //damage calc
    //animate
    this.game.relayDamage(damage,'A');
    this.game.play('A');
  }

  pourBoilingOil () {
    //damage calc
    //animate
    this.game.relayDamage(damage,'A');
    this.game.play('A');
  }

}

/*for each attack type:
- calculate damage
- animation
- game.relayDamage(damage,'A')
- game.play('A')
