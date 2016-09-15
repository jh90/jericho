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
    const $statsWrapper = $('<ul>').addClass('display attstats');
    const $liveArchers = $('<li>').addClass('stat attarchers').html(this.archers);
    const $liveFighters = $('<li>').addClass('stat attfighters').html(this.fighters);
    const $turnsLeft = $('<li>').addClass('stat steps').html(this.game.steps);
    const stats = [$liveArchers, $liveFighters, $turnsLeft];
    stats.forEach((stat) => {$statsWrapper.append(stat);});
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
    $('#att-army').append($arrowEl);
    let $arrowImg = $('<img>').attr('src','https://maxcdn.icons8.com/Share/icon/Sports//archers_arrow1600.png');
    $arrowImg.addClass('arrow-img');
    $arrowEl.html($arrowImg);
    $arrowEl.position().top = '-3em';
    $arrowEl.position().left = '3em';
    $arrowEl.animate({
      left: '16em',
      bottom: '21em',
    }, 2000);
    setTimeout(() => {$arrowEl.remove();}, 2200);
    this.game.relayDamage(damage,'D');
    this.game.clearButtons();
    this.game.play('D');
  }

  launchCatapult () {
    const damage = 15 + Math.round(Math.random() * 15);
    let $stone = $('<div>').addClass('catapult-stone');
    $('#catapult').append($stone);
    $stone.position().top = '100%';
    $stone.position().left = '100%';
    $stone.animate({
      left: $('#wall').offset().left,
      top: $('#wall').offset().top,
    }, 2000);
    setTimeout(() => {$stone.remove();}, 2200);
    this.game.relayDamage(damage,'W');
    this.game.clearButtons();
    this.game.play('D');
  }

  generateButton (element, name) {
    let hic = this;
    let $clicker = $('<li>').html(name);
    $clicker.addClass('clicker');
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
      setTimeout(() => {this.control.moveOrAttack();}, 500);
    }
    $('.stat.attarchers').html(this.archers);
    $('.stat.attfighters').html(this.fighters);
    $('.stat.steps').html(this.game.steps);
  }

}

 /*attacks:
 - calculate damage
 - animate
 - game.relayDamage(damage,'D' if volley or 'W' if catapult)
 - game.play('D')
*/
