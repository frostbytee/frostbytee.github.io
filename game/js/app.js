// Enemies our player must avoid
var Enemy = function(num) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = -100;
    this.speedMod = Math.floor((Math.random() * 4));
    this.y = -20 + (num * 83);

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
}

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += (dt * 100 + this.speedMod);
    if (this.x > 615) {
        this.x = -100;
        this.speedMod = Math.floor((Math.random() * 4));
    }

}

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function() {
    this.x = 202;
    this.y = 398;
    this.score = 0;

    this.sprite = 'images/char-boy.png';
};

Player.prototype.update = function() {}
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}
Player.prototype.handleInput = function(keyCode) {
    if (keyCode == 'left') {
        if (this.x == -8) {} 
            else {this.x -= 15;}
    }
    if (keyCode == 'right') {
        if (this.x == 412) {}
            else {this.x += 15;}
    }
    if (keyCode == 'up') {
        this.y -= 15;
    }
    if (keyCode == 'down') {
        if (this.y == 398) {}
            else {this.y += 15;}
    }
   
}

var Gem = function() {
    this.x = Math.floor(Math.random() * 421) - 8;
    this.y = Math.floor(Math.random() * (233 - 68 + 1)) + 68;

    this.sprite = 'images/Gem Blue.png';
}

Gem.prototype.update = function() {}

Gem.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
var allEnemies = [new Enemy(1), new Enemy(2), new Enemy(3)];
// Place the player object in a variable called player
var player = new Player();

var gem = new Gem();

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keydown', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
