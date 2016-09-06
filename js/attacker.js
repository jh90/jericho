class Attacker {
  constructor (game, display) {
    this.fighters = 50;
    this.archers = 20;
    this.human = true;
    this.control = null;
    this.game = game;
    this.el = display;
  }

  initializeDisplay () {
    const $statsWrapper = $('<div>').addClass('display attstats');
    const $liveArchers = $('<div>').addClass('stat attarchers');
    const $liveFighters = $('<div>').addClass('stat attfighters');
    const $turnsLeft = $('div').addClass('stat steps');
    const stats = [$liveArchers, $liveFighters, $turnsLeft];
    stats.forEach((stat) => {$('.display.attstats').append(stat);});
    this.el.append($statsWrapper);
    if (this.human) {
      const buttonWrapper = $('<div>').addClass('display buttons');
      const $moveButton = $('<div>').addClass('button move');
      const $arrowButton = $('<div>').addClass('button arrow');
      const $catapultButton = $('<div>').addClass('button catapult');
      const buttons = [$moveButton, $arrowButton, $catapultButton];
      buttons.forEach ((button) => { $('.display.attacker').append(button); });
    }
  }

  nearEnd () {
    if (this.game.steps > 2) {
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
    if (this.game.steps > 0) {
      this.game.steps -= 1;
      $('.att').animate({
        right: '+=8em'
      }, 2000);
      this.game.clearButtons();
      this.game.play('D');
    }
  }

  fireVolley () {
    const damage = Math.round(Math.random() * this.archers) + this.archers;
    let $arrowEl = $('<div>').addClass('attack-arrow');
    $('#ground').append($arrowEl);
    let $arrowImg = $('<img>').attr('src','https://maxcdn.icons8.com/Share/icon/Sports//archers_arrow1600.png');
    $arrowImg.addClass('arrow-img');
    $arrowEl.html($arrowImg);
    $arrowEl.animate({
      left: '-=82em',
      top: '-=7em',
    }, 2000);
    setTimeout(() => {$arrowEl.remove();}, 2200);
    this.game.relayDamage(damage,'D');
    this.game.clearButtons();
    this.game.play('D');
  }

  launchCatapult () {
    const damage = 15 + Math.round(Math.random() * 15);
    let $
    this.game.relayDamage(damage,'W');
    this.game.clearButtons();
    this.game.play('D');
  }

  fight() {
    //invoke at step0
    //damage is uniformly calculated from force=archers+fighters
    //repeat until wincheck triggers
  }

  generateButton (element, name) {
    let hic = this;
    let $clicker = $('<li>').html(name);
    switch (name) {
      case 'MARCH':
        $clicker.on('click', () => {
          hic.move();
        });
      break;
      case 'ARCHERS FIRE':
        $clicker.on('click', () => {
          hic.fireVolley();
        });
      break;
      case 'LAUNCH CATAPULT':
        $clicker.on('click', () => {
          hic.launchCatapult();
        });
      break;
      default:
        return undefined;
    }
    return $clicker;
  }

  renderDisplay () {
    if (this.human) {
      let threshold = this.nearEnd();
      let march = this.generateButton($('.move'), 'MARCH');
      let fire = this.generateButton($('.arrow'), 'ARCHERS FIRE');
      let launch = this.generateButton($('.catapult'), 'LAUNCH CATAPULT');
      switch (threshold) {
        case null:
          $('.move').append(march);
          $('.arrow').append(fire);
          $('.catapult').append(launch);
        break;
        case 2:
          $('.move').append(march);
          $('.arrow').append(fire);
        break;
        case 1:
          $('.arrow').append(fire);
        break;
        default:
          alert('broken!');
          return undefined;
      }
    }
    else {
      this.control.moveOrAttack();
    }
  }

}

 /*attacks:
 - calculate damage
 - animate
 - game.relayDamage(damage,'D' if volley or 'W' if catapult)
 - game.play('D')
*/
