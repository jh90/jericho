class Attacker {
  constructor (game) {
    this.fighters =
    this.archers =
    this.human = true;
    this.control = null;
    this.game = game;
  }
  renderDisplay () {
    //buttons: VOLLEY, CATAPULT, MOVE
    //no CAT after step3
    //no VOLLEY after step2
  }

  move () {
    this.game.steps -= 1;
    //animate
    this.game.play('D');
  }

  fireVolley () {
    let damage = Math.round(Math.random() * this.archers) + this.archers;
    //animate
    this.game.relayDamage(damage,'D');
    this.game.play('D');
  }

  launchCatapult () {
    let damage = 15 + Math.round(Math.random() * 15);
    //animate
    this.game.relayDamage(damage,'W');
    this.game.play('D');
  }

  fight() {
    //invoke at step0
    //damage is uniformly calculated from force=archers+fighters
    //repeat until wincheck triggers
  }
}

 /*attacks:
 - calculate damage
 - animate
 - game.relayDamage(damage,'D' if volley or 'W' if catapult)
 - game.play('D')
