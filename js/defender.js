class Defender {
  constructor (game, display) {
    this.fighters = 50;
    this.archers = 20;
    this.wallHealth = 100;
    this.control = null;
    this.human = true;
    this.game = game;
    this.el = display;
  }

initializeDisplay () {
    const $statsWrapper = $('<ul>').addClass('display defstats');
    const $liveArchers = $('<li>').addClass('stat defarchers').html(this.archers);
    const $liveFighters = $('<li>').addClass('stat deffighters').html(this.fighters);
    const $turnsLeft = $('<li>').addClass('stat steps').html(this.game.steps);
    const $wall = $('<li>').addClass('stat wall').html(this.wallHealth);
    const stats = [$liveArchers, $liveFighters, $wall, $turnsLeft];
    stats.forEach((stat) => {$statsWrapper.append(stat);});
    this.el.append($statsWrapper);
    if (this.human) {
      const $arrowsButton = $('<div>').addClass('button arrows');
      const $repairButton = $('<div>').addClass('button repair');
      const $oilButton = $('<div>').addClass('button oil');
      const buttons = [$arrowsButton, $repairButton, $oilButton];
      buttons.forEach((button) => {$('.display.defender').append(button);});
    }
  }

  nearEnd () {
    if(this.game.steps === 1) {
      return 1
    }
    else if(this.game.steps === 0) {
      return 0;
    }
    else {
      return null;
    }
  }

  repair () {
    let repairs = 5 + Math.round(Math.random() * 5);
    if (this.game.steps > 0 && this.wallHealth != 100) {
      this.wallHealth += repairs;
    }
    this.game.play('A');
  }

  fireVolley () {
    let damage = Math.round(Math.random() * this.archers * 2) + this.archers;
    let $arrowEl = $('<div>').addClass('defense-arrow');
    $('#ground').append($arrowEl);
    let $arrowImg = $('<img>').attr('src','https://maxcdn.icons8.com/Share/icon/Sports//archers_arrow1600.png');
    $arrowImg.addClass('arrow-img');
    $arrowEl.html($arrowImg);
    $arrowEl.animate({
      left: '+=82em',
      bottom: '-=8em',
    }, 2000);
    setTimeout(() => {$arrowEl.remove();}, 2200);
    this.game.relayDamage(damage,'A');
    this.game.play('A');
  }

  generateButton (element, name) {
    let hic = this;
    let $clicker = $('<li>').html(name);
    $clicker.addClass('clicker');
    switch (name) {
      case 'ARCHERS FIRE':
        $clicker.on('click', () => {
          hic.fireVolley();
        });
      break;
      case 'REBUILD WALLS':
        $clicker.on('click', () => {
          hic.repair();
        });
      break;
      case 'BOILING OIL':
        $clicker.on('click', () => {
          hic.pourBoilingOil();
        });
      break;
      default:
        return undefined;
    }
    return $clicker;
  }

  renderDisplay () {
    //render stats
    if (this.human) {
      let threshold = this.nearEnd();
      let volley = this.generateButton($('.arrows'), 'ARCHERS FIRE');
      let repairs = this.generateButton($('.repair'), 'REBUILD WALLS');
      let napalm = this.generateButton($('.oil'), 'BOILING OIL');
      switch (threshold) {
        case null:
          $('.arrows').append(volley);
          $('.repair').append(repairs);
        break;
        case 1:
          $('.arrows').append(volley);
        break;
        case 0:
          $('.arrows').append(volley);
          $('.oil').append(napalm);
        break;
        default:
          alert('broken!');
          return undefined;
      }
    }
    else {
      setTimeout(() => {this.control.repairOrAttack();}, 500);
    }
  }

}

/*for each attack type:
- calculate damage
- animation
- game.relayDamage(damage,'A')
- game.play('A')
*/
