class Game() {
  constructor() {
    this.attacker = null;
    this.defender = null;
  }
  setPlayers() {
    this.attacker = new Attacker();
    this.defender = new Defender();
    let choice = prompt('ATTACKER or DEFENDER?');
    if(choice === 'ATTACKER') {
      this.defender.control = new Opponent(this.defender);
    }
    else if (choice === 'DEFENDER') {
      this.attacker.control = new Opponent(this.attacker);
    }
    else {
      console.log('Invalid selection');
      this.setPlayers();
    }
  }
}

//
