class Game {
  constructor () {
    this.attacker = null;
    this.defender = null;
    this.steps = 10;
  }

  setPlayers () {
    const $attackDisplay = $('<div>').addClass('display attacker');
    const $defendDisplay = $('<div>').addClass('display defender');
    $('body').append($attackDisplay);
    $('body').append($defendDisplay);
    this.attacker = new Attacker(this, $attackDisplay);
    this.defender = new Defender(this, $defendDisplay);
    let choice = prompt('ATTACKER or DEFENDER?');
    if(choice === 'ATTACKER') {
      this.defender.control = new Opponent(this.defender);
      this.defender.human = false;
    }
    else if (choice === 'DEFENDER') {
      this.attacker.control = new Opponent(this.attacker);
      this.attacker.human = false;
    }
    else {
      console.log('Invalid selection');
      this.setPlayers();
    }
    this.attacker.initializeDisplay();
    this.defender.initializeDisplay();
  }

  relayDamage (damage, target) {
    let fighterCasualties = Math.round(damage / 4);
    let archerCasualties = Math.round(damage / 8);
    switch (target) {
      case 'W':
        this.defender.wallHealth -= damage;
      break;
      case 'D':
        this.defender.fighters -= fighterCasualties;
        this.defender.archers -= archerCasualties;
      break;
      case 'A':
        this.attacker.fighters -= fighterCasualties;
        this.attacker.archers -= archerCasualties;
      break;
      default:
        return undefined;
    }
  }

  checkWin () {
    if (this.attacker.fighters <= 0 && this.attacker.archers <= 0) {
      return 'D';
    }
    else if ((this.defender.fighters <= 0 && this.defender.archers <= 0) || (this.defender.wallHealth <= 0)) {
      return 'A';
    }
    else {
      return null;
    }
  }

  clearButtons() {
    $('.clicker').remove();
  }

  play (turn) {
    switch (this.checkWin()) {
      case null:
        if (turn === 'A') {
          this.attacker.renderDisplay();
          console.log('ATTACKER TURN');
        }
        else if (turn === 'D') {
          this.defender.renderDisplay();
          console.log('DEFENDER TURN');
        }
      break;
      case 'A':
        console.log('FIRE AND BLOOD!');
      break;
      case 'D':
        console.log('BLOOD AND FIRE!');
      break;
      default:
        return undefined;
    }
  }
}
