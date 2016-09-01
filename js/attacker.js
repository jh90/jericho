class Attacker {
  constructor (game) {
    this.fighters =
    this.archers =
    this.steps =
    this.human = true;
    this.control = null;
    this.game = game;
  }
  renderDisplay () {

  }

  move () {
    this.steps -= 1;
    //animate
    this.game.play('D');
  }

  fireVolley () {
    //damage calc
    //animate
    this.game.relayDamage(damage,'D');
    this.game.play('D');
  }

  launchCatapult () {
    //damage calc
    //animate
    this.game.relayDamage(damage,'W');
    this.game.play('D');
  }

}

 /*attacks:
 - calculate damage
 - animate
 - game.relayDamage(damage,'D' if volley or 'W' if catapult)
 - game.play('D')
