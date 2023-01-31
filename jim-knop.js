Ui.Knop = function(cssClasse) {
  this.cssClasse = cssClasse;
};

Ui.Knop.prototype = Object.create(Ui.prototype);

Ui.Knop.prototype.createElement = function(cssClasse) {
  
  "use strict";
  Ui.prototype.createElement.apply(this, arguments);
  this.addComponent(new Ui.Pointer({
    type: 'Rect',
    pointerWidth: 3,
    pointerHeight: this.width / 5,
    offset: this.width / 2 - this.width / 3.3 - this.width / 10
  }));

  this.addComponent(new Ui.Scale(this.merge(this.options, {
    drawScale: false,
    drawDial: true,
    radius: this.width/2.6})));

  var circle = new Ui.El.Circle(this.width / 3.3, this.width / 2, this.height / 2);
  this.el.node.appendChild(circle.node);
  console.log(this.cssClasse);
  this.el.node.setAttribute("class", this.cssClasse);
};
