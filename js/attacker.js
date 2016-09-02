class Attacker {
  constructor (game) {
    this.fighters = 50;
    this.archers = 20;
    this.human = true;
    this.control = null;
    this.game = game;
  }

  initializeDisplay () {
    const $display = $('<div>').addClass('display attacker').;
    $('body').append(display);
    let $mdiv = $('<div>');
    let $adiv = $('<div>');
    let $cdiv = $('<div>');
    const moveButton = new Button(this.move(), 'Move', $mdiv);
    const arrowButton = new Button(this.fireVolley(), 'Archers', $adiv);
    const catapultButton = new Button(this.launchCatapult(), 'Catapult', $cdiv);
    $display.append(moveButton);
    $display.append(arrowButton);
    $display.append(catapultButton);
  }

  renderDisplay () {
    const $moveButton = $('<div>').addClass('move button');
    const $arrowButton = $('<div>').addClass('arrow button');
    const $catapultButton = $('<div>').addClass('catapult button');
    const buttons = [$moveButton,$arrowButton,$catapultButton];
    buttons.forEach((button) => {$('.attacker').append(button);});
    const hic = this;
    $moveButton.on('click',(e) = > {
      hic.move();
    });
    $arrowButton.on('click',(e) = > {
      hic.fireVolley();
    });
    $catapultButton.on('click',(e) = > {
      hic.launchCatapult();
    });
  }

  nearEnd () {
    if(this.game.steps > 2) {
      return null;
    }
    else if(this.game.steps = 2) {
      return 2;
    }
    else {
      return 1;
    }
  }

  move () {
    if(this.game.steps > 0) {
      this.game.steps -= 1;
      //animate
      this.game.play('D');
    }
  }

  fireVolley () {
    const damage = Math.round(Math.random() * this.archers) + this.archers;
    //animate
    this.game.relayDamage(damage,'D');
    this.game.play('D');
  }

  launchCatapult () {
    const damage = 15 + Math.round(Math.random() * 15);
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
*/
