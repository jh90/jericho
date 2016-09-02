class Defender {
  constructor (game) {
    this.fighters = 50;
    this.archers = 20;
    this.wallHealth = 100;
    this.control = null;
    this.human = true;
    this.game = game;
  }

  renderDisplay () {
    //buttons: VOLLEY, OIL, REPAIR
    //no OIL before step0
    //no REPAIR after step2
  }

  repair () {
    let repairs = 5 + Math.round(Math.random() * 5);
    if (this.game.steps > 0 && this.wallHealth != 100) {
      this.wallHealth += repairs;
    }
    //animate-?
    this.game.play('A');
  }

  fireVolley () {
    let damage = Math.round(Math.random() * this.archers * 2) + this.archers;
    //animate
    this.game.relayDamage(damage,'A');
    this.game.play('A');
  }

  pourBoilingOil () {
    let damage = Math.round(Math.random() * 15);
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
*/
