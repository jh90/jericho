class Button {
  constructor(function, name, container) {
    this.function = function;
    this.name = name;
    this.el = container;
    this.hidden = 0;
  }

  hide () {
    this.hidden += 1;
  }

  render () {
    let buttonObject = $('<li>').addClass(`button ${this.name.toLowerCase()}`).html(`${this.name}`);
    const hic = this;
    buttonObject.on('click', (e) => {
      hic.function();
    });
    return this.hidden ? '' :
    }
  }

}
