// Enemies our player must avoid
var Enemy = function(num) {
    // Places an enemy on a stone block row
    this.y = -20 + (num * 83);

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    // This moves the enemy to the right with a random
    // speed value.
    this.x += (dt * 100 + this.speedModifier);
    // If an enemy object moves out of the screen, it resets
    // back to its origin with a new speed value.
    if (this.x > 615) {
        this.spawn();
    }
}

// Creates enemy just outside the left of the screen
// and randomizes its speed.
Enemy.prototype.spawn = function() {
    this.x = -100;
    this.speedModifier = Math.floor((Math.random() * 4));
}

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function() {
    // Player starts with no score
    this.score = 0;
    // Player's sprite
    this.sprite = 'images/char-boy.png';
};

// Player's initial position
Player.prototype.spawn = function() {
    this.x = 202;
    this.y = 398;
}

// Update the player's position
Player.prototype.update = function() {}
// Draw the player on the screen
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

Player.prototype.handleInput = function(keyCode) {
    // Moves left until player hits a boundary
    if (keyCode == 'left') {
        if (!(this.x == -8)) {
            this.x -= 15;
        }
    }
    // Moves right until player hits a boundary
    if (keyCode == 'right') {
        if (!(this.x == 412)) {
            this.x += 15;
        }
    }
    // Moves up
    if (keyCode == 'up') {
        this.y -= 15;
    }
    // Moves down until player hits a boundary
    if (keyCode == 'down') {
        if (!(this.y == 398)) {
            this.y += 15;
        }
    }
}

// Creates a gem object for the player to collect
var Gem = function() {
    this.sprite = 'images/Gem Blue.png';
};

// The gem spawns only within the stone block tiles
Gem.prototype.spawn = function() {
    this.x = Math.floor(Math.random() * 421) - 8;
    this.y = Math.floor(Math.random() * 166) + 68;
}

// Update the gem's position
Gem.prototype.update = function() {}

// Draws the gem on the screen
Gem.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
var allEnemies = [new Enemy(1), new Enemy(2), new Enemy(3)];
// Spawn them in the game world
for (var i = 0; i < allEnemies.length; i++) {
    allEnemies[i].spawn();
}
// Place the player object in a variable called player
var player = new Player();
// Spawn it in the game world
player.spawn();

// Place the gem object in a variable called gem
var gem = new Gem();
// Spawn it in the game world
gem.spawn();

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
