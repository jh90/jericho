class Game() {
  constructor () {
    this.attacker = null;
    this.defender = null;
    this.steps = 10;
  }

  setPlayers () {
    this.attacker = new Attacker(this);
    this.defender = new Defender(this);
    let choice = prompt('ATTACKER or DEFENDER?');
    if(choice === 'ATTACKER') {
      this.defender.control = new Opponent(this.defender);
      this.defender.human = false;
    }
    else if (choice === 'DEFENDER') {
      this.attacker.control = new Opponent(this.attacker);
      this.defender.human = false;
    }
    else {
      console.log('Invalid selection');
      this.setPlayers();
    }
  }

  relayDamage (damage, target) {
    let fighterCasualties = damage / 2;
    let archerCasualties = damage / 4;
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
      return undefined;
    }
  }

  play (turn) {
    switch (this.checkWin()) {
      case undefined:
        if (turn === 'A') {
          this.attacker.renderDisplay();
        }
        else {
          this.defender.renderDisplay();
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

/*play(turn):
takes a turn value
checks for win
if not, checks turn value
if A-->attacker.renderDisplay, D-->defender.renderDisplay
[human.renderdisplay generates buttons - waits - button is clicked - corresponding A/D method is called - that method
calls .relayDamage then .play]
[oppo.renderdisplay generates stats - calls on control.methods to make a decision, then selected A/D method, which calls
.relay and .play]
