'use strict';

var viewController = require('./controllers/viewController');
var gameController = require('./controllers/gameController');
var inputController = require('./controllers/inputController');
// var mainHero = require('./hero/hero');

var setupCanvas = function () {
    return viewController.setupCanvas();
};

var setupStage = function () {
    return viewController.setupStage();
};

var setupEngine = function () {
    return gameController.init();
};

var setupControls = function () {
    return inputController.init();
};

var main = function () {
    function gameLoop() {
        requestAnimationFrame(gameLoop);        
        $GAME_CONTROLLER.run();
        $CANVAS.render($STAGE);
    }

    // TOOD : Move loader into this file to ensure all loading is done before game loop starts

    var $CANVAS = setupCanvas();
    var $STAGE = setupStage();
    var $GAME_CONTROLLER = setupEngine();
    var $INPUT_CONTROLLER = setupControls();

    // var $HERO = setupHero();

    /* DEBUGGING */
    $DTC.stage = $STAGE;
    $DTC.game_controller = $GAME_CONTROLLER;
    $DTC.input_controller = $INPUT_CONTROLLER;
    console.log('CANVAS', $CANVAS);
    console.log('STAGE', $STAGE);
    console.log('GAME CONTROLLER', $GAME_CONTROLLER);
    console.log('INPUT CONTROLLER', $INPUT_CONTROLLER);
    /*           */

    gameLoop();
};

module.exports = {
    init: function () {
        main();
    }
};