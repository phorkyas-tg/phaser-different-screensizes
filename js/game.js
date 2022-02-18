
let startScreen = new Phaser.Class({
    Extends: Phaser.Scene,
    initialize: function() {
        Phaser.Scene.call(this, { "key": "StartScreen" });
    },
    preload: function() {

    },
    create: function() {
        console.log(window.config.width, window.config.height)
    },

    update: function() {

    }
});


var config = {
    type: Phaser.CANVAS,
    width: window.innerWidth * window.devicePixelRatio,
    height: window.innerHeight * window.devicePixelRatio,
    backgroundColor: "#383838",
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: false
        }
    },
    scene: [ startScreen ]
};

var game = new Phaser.Game(config);

