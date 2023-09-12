(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div *ngIf=\"this.gameState.stage === 1\">\r\n  <app-title-screen-app [localGameState]=gameState></app-title-screen-app>\r\n</div>\r\n\r\n<div *ngIf=\"this.gameState.stage === 2\">\r\n  <app-tavern-app [localGameState]=gameState></app-tavern-app>\r\n</div>\r\n\r\n<div *ngIf=\"this.gameState.stage === 3\">\r\n  <app-battle-screen [localGameState]=gameState></app-battle-screen>\r\n</div>\r\n\r\n<div *ngIf=\"this.gameState.stage === 4\">\r\n  <app-score-screen [localGameState]=gameState></app-score-screen>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/battle-screen/battle-screen.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/battle-screen/battle-screen.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button class=\"button\" (click)=\"onNext()\">Next</button>\r\n\r\n<ul>\r\n    <li *ngFor=\"let battleLog of battleLogs; let indeOfElement=index;\">\r\n        {{battleLog}}\r\n    </li>\r\n</ul>\r\n\r\n\r\n<button class=\"button\" (click)=\"onNext()\">Next</button>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/score-screen/score-screen.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/score-screen/score-screen.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!DOCTYPE html>\r\n<html>\r\n<head>\r\n<style>\r\n.itemHeader { grid-area: header; }\r\n.itemPlayerHeader { grid-area: playerHeader}\r\n.itemLifeHeader { grid-area: lifeHeader}\r\n.itemRecordHeader { grid-area: recordHeader}\r\n.itemPlayer1 { grid-area: player1; }\r\n.itemPlayer2 { grid-area: player2; }\r\n.itemPlayer3 { grid-area: player3; }\r\n.itemPlayer4 { grid-area: player4; }\r\n.itemPlayer5 { grid-area: player5; }\r\n.itemPlayer6 { grid-area: player6; }\r\n.itemPlayer7 { grid-area: player7; }\r\n.itemPlayer8 { grid-area: player8; }\r\n.itemLifePlayer1 { grid-area: lifePlayer1; }\r\n.itemLifePlayer2 { grid-area: lifePlayer2; }\r\n.itemPLifelayer3 { grid-area: lifePlayer3; }\r\n.itemLifePlayer4 { grid-area: lifePlayer4; }\r\n.itemLifePlayer5 { grid-area: lifePlayer5; }\r\n.itemLifePlayer6 { grid-area: lifePlayer6; }\r\n.itemLifePlayer7 { grid-area: lifePlayer7; }\r\n.itemLifePlayer8 { grid-area: lifePlayer8; }\r\n.itemRecordPlayer1 { grid-area: recordPlayer1; }\r\n.itemRecordPlayer2 { grid-area: recordPlayer2; }\r\n.itemPRecordlayer3 { grid-area: recordPlayer3; }\r\n.itemRecordPlayer4 { grid-area: recordPlayer4; }\r\n.itemRecordPlayer5 { grid-area: recordPlayer5; }\r\n.itemRecordPlayer6 { grid-area: recordPlayer6; }\r\n.itemRecordPlayer7 { grid-area: recordPlayer7; }\r\n.itemRecordPlayer8 { grid-area: recordPlayer8; }\r\n.itemNextBtn { grid-area: nextBtn; }\r\n\r\n\r\n.grid-container {\r\n  display: grid;\r\n  grid-template-areas:\r\n    'header header header header'\r\n    'playerHeader playerHeader lifePlayerHeader recordPlayerHeader'\r\n    'player1 player1 lifePlayer1 recordPlayer1'\r\n    'player2 player2 lifePlayer2 recordPlayer2'\r\n\t'player3 player3 lifePlayer3 recordPlayer3'\r\n\t'player4 player4 lifePlayer4 recordPlayer4'\r\n    'player5 player5 lifePlayer5 recordPlayer5'\r\n    'player6 player6 lifePlayer6 recordPlayer6'\r\n    'player7 player7 lifePlayer7 recordPlayer7'\r\n    'player8 player8 lifePlayer8 recordPlayer8'\r\n    'nextBtn nextBtn nextBtn nextBtn';\r\n\r\n  gap: 8px;\r\n  background-color: #2196F3;\r\n  padding: 8px;\r\n}\r\n\r\n.grid-container > div {\r\n  background-color: rgba(255, 255, 255, 0.8);\r\n  text-align: center;\r\n  padding: 20px 0;\r\n  font-size: 30px;\r\n}\r\n</style>\r\n</head>\r\n<body>\r\n\r\n<div class=\"grid-container\">\r\n  <div class=\"itemHeader\">\r\n    <p>Guilds of Greystone</p>\r\n    <p>Score Screen</p>\r\n  </div>\r\n\r\n  <div class=\"itemPlayerHeader\"><b>Player</b></div>\r\n  <div class=\"itemLifePlayerHeader\"><b>Life</b></div>\r\n  <div class=\"itemRecordPlayerHeader\"><b>Record</b></div>\r\n  <div class=\"itemPlayer1\">{{sortedPlayerList[0].name}}</div>\r\n  <div class=\"itemLifePlayer1\">{{sortedPlayerList[0].life}}</div>\r\n  <div class=\"recordPlayer1\">{{sortedPlayerList[0].getRecord()}}</div>\r\n  <div class=\"itemPlayer2\">{{sortedPlayerList[1].name}}</div>\r\n  <div class=\"itemLifePlayer2\">{{sortedPlayerList[1].life}}</div>\r\n  <div class=\"recordPlayer2\">{{sortedPlayerList[1].getRecord()}}</div>\r\n  <div class=\"itemPlayer3\">{{sortedPlayerList[2].name}}</div>\r\n  <div class=\"itemLifePlayer3\">{{sortedPlayerList[2].life}}</div>\r\n  <div class=\"recordPlayer3\">{{sortedPlayerList[2].getRecord()}}</div>\r\n  <div class=\"itemPlayer4\">{{sortedPlayerList[3].name}}</div>\r\n  <div class=\"itemLifePlayer4\">{{sortedPlayerList[3].life}}</div>\r\n  <div class=\"recordPlayer4\">{{sortedPlayerList[3].getRecord()}}</div>\r\n  <div class=\"itemPlayer5\">{{sortedPlayerList[4].name}}</div>\r\n  <div class=\"itemLifePlayer5\">{{sortedPlayerList[4].life}}</div>\r\n  <div class=\"recordPlayer5\">{{sortedPlayerList[4].getRecord()}}</div>\r\n  <div class=\"itemPlayer6\">{{sortedPlayerList[5].name}}</div>\r\n  <div class=\"itemLifePlayer6\">{{sortedPlayerList[5].life}}</div>\r\n  <div class=\"recordPlayer6\">{{sortedPlayerList[5].getRecord()}}</div>\r\n  <div class=\"itemPlayer7\">{{sortedPlayerList[6].name}}</div>\r\n  <div class=\"itemLifePlayer7\">{{sortedPlayerList[6].life}}</div>\r\n  <div class=\"recordPlayer7\">{{sortedPlayerList[6].getRecord()}}</div>\r\n  <div class=\"itemPlayer8\">{{sortedPlayerList[7].name}}</div>\r\n  <div class=\"itemLifePlayer8\">{{sortedPlayerList[7].life}}</div>\r\n  <div class=\"recordPlayer8\">{{sortedPlayerList[7].getRecord()}}</div>\r\n  <div class=\"itemNextBtn\">\r\n        <button class=\"button\" (click)=\"onNext()\">Next</button>\r\n    </div>\r\n\r\n</div>\r\n\r\n</body>\r\n</html>\r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tavern-app/tavern-app.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tavern-app/tavern-app.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!DOCTYPE html>\r\n<html>\r\n<head>\r\n<style>\r\n.itemHeader { grid-area: header; }\r\n.itemGold { grid-area: gold; }\r\n.itemMenu { grid-area: menu; }\r\n.itemBoard { grid-area: board; }\r\n.itemShop1 { grid-area: shop1; }\r\n.itemShop2 { grid-area: shop2; }\r\n.itemShop3 { grid-area: shop3; }\r\n.itemShopBtn1 { grid-area: btnShop1; }\r\n.itemShopBtn2 { grid-area: btnShop2; }\r\n.itemShopBtn3 { grid-area: btnShop3; }\r\n.itemBoard1 { grid-area: board1; }\r\n.itemBoard2 { grid-area: board2; }\r\n.itemBoard3 { grid-area: board3; }\r\n.itemBoard4 { grid-area: board4; }\r\n.itemBoard5 { grid-area: board5; }\r\n.itemBoardBtn1 { grid-area: boardBtn1; }\r\n.itemBoardBtn2 { grid-area: boardBtn2; }\r\n.itemBoardBtn3 { grid-area: boardBtn3; }\r\n.itemBoardBtn4 { grid-area: boardBtn4; }\r\n.itemBoardBtn5 { grid-area: boardBtn5; }\r\n.itemHand1 { grid-area: hand1; }\r\n.itemHand2 { grid-area: hand2; }\r\n.itemHand3 { grid-area: hand3; }\r\n.itemHand4 { grid-area: hand4; }\r\n.itemHand5 { grid-area: hand5; }\r\n\r\n.grid-container {\r\n  display: grid;\r\n  grid-template-areas:\r\n    'header header header header header gold'\r\n    'shop1 shop1 shop2 shop2 shop3 shop3'\r\n    'btnShop1 btnShop1 btnShop2 btnShop2 btnShop3 btnShop3'\r\n\t  'menu board board board board board'\r\n\t  'menu board1 board2 board3 board4 board5'\r\n    'menu boardBtn1 boardBtn2 boardBtn3 boardBtn4 boardBtn5'\r\n    'menu hand1 hand2 hand3 hand4 hand5';\r\n\r\n  gap: 10px;\r\n  background-color: #2196F3;\r\n  padding: 10px;\r\n}\r\n\r\n.grid-container > div {\r\n  background-color: rgba(255, 255, 255, 0.8);\r\n  text-align: center;\r\n  padding: 20px 0;\r\n  font-size: 30px;\r\n}\r\n</style>\r\n</head>\r\n<body>\r\n\r\n<div class=\"grid-container\">\r\n  <div class=\"itemHeader\">\r\n    <p>Guilds of Greystone</p>\r\n    <p>Shop</p>\r\n  </div>\r\n  <div class=\"itemGold\">\r\n    <button class=\"button\" (click)=\"onNext()\">Proceed to Battle</button>\r\n    <p>Gold = {{this.localGameState.playerList[0].gold}} </p>\r\n    <!-- <p>Time Left:  {{this.counter}}</p> -->\r\n    <button class=\"button\" (click)=\"onRefresh()\">Refresh ({{refreshCounter}})</button>\r\n    </div>\r\n\r\n  <div class=\"itemMenu\">\r\n    <p>Menu</p>\r\n  </div>\r\n \r\n\r\n  <div class=\"itemShop1\">\r\n    <p *ngIf=getTavernCreature(0)> {{getTavernCreature(0).creature.getName()}}</p>\r\n    <img src=\"{{getTavernCreature(0).creature.getImage()}}\" style=\"width:120;height:150px;\">\r\n  </div>  \r\n  <div class=\"itemShop2\">\r\n    <p *ngIf=getTavernCreature(1)> {{getTavernCreature(1).creature.getName()}}</p>\r\n    <img src=\"{{getTavernCreature(1).creature.getImage()}}\" style=\"width:120;height:150px;\">\r\n  </div>  \r\n  <div class=\"itemShop3\">\r\n    <p *ngIf=getTavernCreature(2)> {{getTavernCreature(2).creature.getName()}}</p>\r\n    <img src=\"{{getTavernCreature(2).creature.getImage()}}\" style=\"width:120;height:150px;\">\r\n  </div>  \r\n  <div class=\"itemShopBtn1\">\r\n    <button class=\"button\" *ngIf=\"!getTavernCreature(0).sold\" (click)=\"onBuy(0)\">Buy</button>\r\n    <button class=\"button\" *ngIf=\"getTavernCreature(0).sold\" [disabled] = \"true\" (click)=\"onBuy(0)\">Buy</button>\r\n  </div>\r\n  <div class=\"itemShopBtn2\">\r\n    <button class=\"button\" *ngIf=\"!getTavernCreature(1).sold\" (click)=\"onBuy(1)\">Buy</button>\r\n    <button class=\"button\" *ngIf=\"getTavernCreature(1).sold\" [disabled] = \"true\" (click)=\"onBuy(1)\">Buy</button>\r\n  </div>\r\n  <div class=\"itemShopBtn3\">\r\n    <button class=\"button\" *ngIf=\"!getTavernCreature(2).sold\" (click)=\"onBuy(2)\">Buy</button>\r\n    <button class=\"button\" *ngIf=\"getTavernCreature(2).sold\" [disabled] = \"true\" (click)=\"onBuy(2)\">Buy</button>\r\n  </div>\r\n\r\n  <div class=\"itemBoard\">Board</div>  \r\n  <div class=\"itemBoard1\">\r\n    <p *ngIf=getPlayersBoard(0)> {{getPlayersBoard(0).getName()}}</p>\r\n  </div>  \r\n  <div class=\"itemBoard2\">\r\n    <p *ngIf=getPlayersBoard(1)> {{getPlayersBoard(1).getName()}}</p>\r\n  </div>  \r\n  <div class=\"itemBoard3\">\r\n    <p *ngIf=getPlayersBoard(2)> {{getPlayersBoard(2).getName()}}</p>\r\n  </div>  \r\n  <div class=\"itemBoard4\">\r\n    <p *ngIf=getPlayersBoard(3)> {{getPlayersBoard(3).getName()}}</p>\r\n  </div>  \r\n  <div class=\"itemBoard5\">\r\n    <p *ngIf=getPlayersBoard(4)> {{getPlayersBoard(4).getName()}}</p>\r\n  </div>  \r\n  \r\n  <div class=\"itemBoardBtn1\">\r\n    <button class=\"button\" (click)=\"onMoveRight(0)\">>>></button>\r\n    <button class=\"button\" (click)=\"onSell(0)\">Sell</button>\r\n  </div>\r\n  <div class=\"itemBoardBtn2\">\r\n    <button class=\"button\" (click)=\"onMoveRight(0)\"><<<</button>\r\n    <button class=\"button\" (click)=\"onSell(1)\">Sell</button>\r\n    <button class=\"button\" (click)=\"onMoveRight(1)\">>>></button>\r\n  </div>\r\n  <div class=\"itemBoardBtn3\">\r\n    <button class=\"button\" (click)=\"onMoveRight(1)\"><<<</button>\r\n    <button class=\"button\" (click)=\"onSell(2)\">Sell</button>\r\n    <button class=\"button\" (click)=\"onMoveRight(2)\">>>></button>\r\n  </div>\r\n  <div class=\"itemBoardBtn4\">\r\n    <button class=\"button\" (click)=\"onMoveRight(2)\"><<<</button>\r\n    <button class=\"button\" (click)=\"onSell(3)\">Sell</button>\r\n    <button class=\"button\" (click)=\"onMoveRight(3)\">>>></button>\r\n  </div>\r\n  <div class=\"itemBoardBtn5\">\r\n    <button class=\"button\" (click)=\"onMoveRight(3)\"><<<</button>\r\n    <button class=\"button\" (click)=\"onSell(4)\">Sell</button>\r\n    <button class=\"button\" (click)=\"onMoveRight(4)\">>>></button>\r\n  </div>\r\n  <div class=\"itemHand1\">Card1</div>  \r\n  <div class=\"itemHand2\">Card2</div>  \r\n  <div class=\"itemHand3\">Card33</div>  \r\n  <div class=\"itemHand4\">Card44</div>  \r\n  <div class=\"itemHand5\">Card55</div>\r\n\r\n</div>\r\n\r\n<p>Creature in Current Pool:  {{this.localGameState.creaturePool.tier1.length}}</p>\r\n\r\n</body>\r\n</html>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/title-screen-app/title-screen-app.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/title-screen-app/title-screen-app.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<button (click)=\"onStartGame()\">StartGame!</button>\r\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/TavernCreature.ts":
/*!***********************************!*\
  !*** ./src/app/TavernCreature.ts ***!
  \***********************************/
/*! exports provided: TavernCreature */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TavernCreature", function() { return TavernCreature; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class TavernCreature {
    constructor(id, creature, poolSlot) {
        this.id = id;
        this.creature = creature;
        console.log('aaa = ' + this.creature.getName());
        this.sold = false;
        this.poolSlot = poolSlot;
        console.log(this.sold);
    }
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h1{\r\n\tbackground-color: grey;\r\n\tmargin-top:0;\r\n\tpadding: 20px;\r\n\tfont-size:1.6em;\r\n\tfont-family: Arial;\r\n\tcolor:white;\r\n}\r\n\r\n.rotate45 {\r\n    transform: rotate(45deg);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxzQkFBc0I7Q0FDdEIsWUFBWTtDQUNaLGFBQWE7Q0FDYixlQUFlO0NBQ2Ysa0JBQWtCO0NBQ2xCLFdBQVc7QUFDWjs7QUFFQTtJQUtJLHdCQUF3QjtBQUM1QiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDF7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogZ3JleTtcclxuXHRtYXJnaW4tdG9wOjA7XHJcblx0cGFkZGluZzogMjBweDtcclxuXHRmb250LXNpemU6MS42ZW07XHJcblx0Zm9udC1mYW1pbHk6IEFyaWFsO1xyXG5cdGNvbG9yOndoaXRlO1xyXG59XHJcblxyXG4ucm90YXRlNDUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NTBkZWcpO1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _player_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player.model */ "./src/app/player.model.ts");
/* harmony import */ var _gameState_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gameState.model */ "./src/app/gameState.model.ts");
/* harmony import */ var _creaturePool_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./creaturePool.model */ "./src/app/creaturePool.model.ts");
/* harmony import */ var _creature__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./creature */ "./src/app/creature.ts");






let AppComponent = class AppComponent {
    constructor() {
        this.title = 'gog';
        this.name = '';
        this.log = '';
        this.textValue = 'initial value';
    }
    ngOnInit() {
        let playerList = [];
        let player = new _player_model__WEBPACK_IMPORTED_MODULE_2__["Player"]("matt", false);
        playerList.push(player);
        // Generate Computer Players
        for (var i = 1; i < 8; i++) {
            var playerName = "Player" + i;
            let compPlayer = new _player_model__WEBPACK_IMPORTED_MODULE_2__["Player"](playerName, true);
            playerList.push(compPlayer);
        }
        var emptyCreaturePool = new _creaturePool_model__WEBPACK_IMPORTED_MODULE_4__["CreaturePool"];
        this.gameState = new _gameState_model__WEBPACK_IMPORTED_MODULE_3__["GameState"](0, 1, playerList, emptyCreaturePool);
        this.createInitialCreaturePool();
        this.gameState.playerList = playerList;
        this.gameState.turn = 0;
        this.gameState.stage = 1;
    }
    logText(value) {
        this.log += `Text changed to '${value}'\n`;
    }
    logCheckbox(element) {
        this.log += `Checkbox ${element.value} was ${element.checked ? '' : 'un'}checked\n`;
    }
    createInitialCreaturePool() {
        let creatureList = [];
        console.log('herea');
        this.gameState.creaturePool.addCreatureToPool(3, _creature__WEBPACK_IMPORTED_MODULE_5__["CreatureType"].Gnome);
        this.gameState.creaturePool.addCreatureToPool(3, _creature__WEBPACK_IMPORTED_MODULE_5__["CreatureType"].Goblin);
        this.gameState.creaturePool.addCreatureToPool(3, _creature__WEBPACK_IMPORTED_MODULE_5__["CreatureType"].Dwarf);
        this.gameState.creaturePool.addCreatureToPool(3, _creature__WEBPACK_IMPORTED_MODULE_5__["CreatureType"].SkeletonWarrior);
        this.gameState.creaturePool.addCreatureToPool(3, _creature__WEBPACK_IMPORTED_MODULE_5__["CreatureType"].Elf);
        this.gameState.creaturePool.addCreatureToPool(3, _creature__WEBPACK_IMPORTED_MODULE_5__["CreatureType"].Orc);
        this.gameState.creaturePool.addCreatureToPool(3, _creature__WEBPACK_IMPORTED_MODULE_5__["CreatureType"].Paladin);
        this.gameState.creaturePool.addCreatureToPool(3, _creature__WEBPACK_IMPORTED_MODULE_5__["CreatureType"].TreeOfLife);
        this.gameState.creaturePool.addCreatureToPool(3, _creature__WEBPACK_IMPORTED_MODULE_5__["CreatureType"].Wizard);
        this.gameState.creaturePool.addCreatureToPool(3, _creature__WEBPACK_IMPORTED_MODULE_5__["CreatureType"].Necromancer);
        this.gameState.creaturePool.addCreatureToPool(3, _creature__WEBPACK_IMPORTED_MODULE_5__["CreatureType"].Archer);
        this.gameState.creaturePool.addCreatureToPool(3, _creature__WEBPACK_IMPORTED_MODULE_5__["CreatureType"].Bard);
        this.gameState.creaturePool.addCreatureToPool(1, _creature__WEBPACK_IMPORTED_MODULE_5__["CreatureType"].Genie);
        this.gameState.creaturePool.addCreatureToPool(1, _creature__WEBPACK_IMPORTED_MODULE_5__["CreatureType"].Sorcerous);
        this.gameState.creaturePool.addCreatureToPool(1, _creature__WEBPACK_IMPORTED_MODULE_5__["CreatureType"].DragonEgg);
        this.gameState.creaturePool.addCreatureToPool(1, _creature__WEBPACK_IMPORTED_MODULE_5__["CreatureType"].DemonPortal);
        return creatureList;
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _tavern_app_tavern_app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tavern-app/tavern-app.component */ "./src/app/tavern-app/tavern-app.component.ts");
/* harmony import */ var _title_screen_app_title_screen_app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./title-screen-app/title-screen-app.component */ "./src/app/title-screen-app/title-screen-app.component.ts");
/* harmony import */ var _battle_screen_battle_screen_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./battle-screen/battle-screen.component */ "./src/app/battle-screen/battle-screen.component.ts");
/* harmony import */ var _score_screen_score_screen_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./score-screen/score-screen.component */ "./src/app/score-screen/score-screen.component.ts");









let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _tavern_app_tavern_app_component__WEBPACK_IMPORTED_MODULE_5__["TavernAppComponent"],
            _title_screen_app_title_screen_app_component__WEBPACK_IMPORTED_MODULE_6__["TitleScreenAppComponent"],
            _battle_screen_battle_screen_component__WEBPACK_IMPORTED_MODULE_7__["BattleScreenComponent"],
            _score_screen_score_screen_component__WEBPACK_IMPORTED_MODULE_8__["ScoreScreenComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/battle-screen/battle-screen.component.css":
/*!***********************************************************!*\
  !*** ./src/app/battle-screen/battle-screen.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JhdHRsZS1zY3JlZW4vYmF0dGxlLXNjcmVlbi5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/battle-screen/battle-screen.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/battle-screen/battle-screen.component.ts ***!
  \**********************************************************/
/*! exports provided: BattleScreenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BattleScreenComponent", function() { return BattleScreenComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let BattleScreenComponent = class BattleScreenComponent {
    constructor() { }
    ngOnInit() {
        this.battleLogs = [];
        let playerIndexList = [];
        for (var i = 1; i < 8; i++) {
            playerIndexList.push(i);
        }
        let randomPlayerList = this.shuffle(playerIndexList);
        randomPlayerList.push(0);
        console.log('randomPlayerList: ' + randomPlayerList);
        // Perform Matches
        for (var matchIndex = 0; matchIndex < 4; matchIndex++) {
            this.battleLogs = [];
            var creatureListTeam1 = [];
            var creatureListTeam2 = [];
            const slotTeam1 = randomPlayerList[0 + matchIndex * 2];
            const slotTeam2 = randomPlayerList[1 + matchIndex * 2];
            console.log('slotTeam1=' + slotTeam1 + ' playerList[slotTeam1].name=' + this.localGameState.playerList[slotTeam1].name);
            console.log('slotTeam2=' + slotTeam2 + ' playerList[slotTeam2].name=' + this.localGameState.playerList[slotTeam2].name);
            // For some reason val=>Object.get creates a copy, but doesn't copy the methods that go along with the class
            this.localGameState.playerList[slotTeam1].creatureList.forEach(val => creatureListTeam1.push(val.getCopy()));
            this.localGameState.playerList[slotTeam2].creatureList.forEach(val => creatureListTeam2.push(val.getCopy()));
            var done = false;
            this.battleLogs.push(this.localGameState.playerList[slotTeam1].name + "(" + this.localGameState.playerList[slotTeam1].creatureList.length + ")  vs. "
                + this.localGameState.playerList[slotTeam2].name + "(" + this.localGameState.playerList[slotTeam2].creatureList.length + ")");
            for (var i1 = 0; i1 < creatureListTeam1.length; i1++) {
                creatureListTeam1[i1].preCombat();
            }
            for (var i2 = 0; i2 < creatureListTeam2.length; i2++) {
                creatureListTeam2[i2].preCombat();
            }
            if (creatureListTeam1.length === 0 || creatureListTeam2.length === 0) {
                done = true;
            }
            var isTurnTeam1 = this.doesTeamOneGoFirst(creatureListTeam1, creatureListTeam2);
            var loopTimeOutCounter = 0;
            while (!done) {
                loopTimeOutCounter++;
                if (loopTimeOutCounter > 1000) {
                    done = true;
                }
                console.log('in loop' + matchIndex + ', isTurnTeam1 = ' + isTurnTeam1);
                if (isTurnTeam1) {
                    this.performAttack(creatureListTeam1, creatureListTeam2, this.localGameState.playerList[slotTeam1].name, this.localGameState.playerList[slotTeam2].name);
                }
                else {
                    this.performAttack(creatureListTeam2, creatureListTeam1, this.localGameState.playerList[slotTeam2].name, this.localGameState.playerList[slotTeam1].name);
                }
                isTurnTeam1 = !isTurnTeam1;
                if (creatureListTeam1[0].currentLife < 1 && creatureListTeam2[0].currentLife < 1) {
                    this.battleLogs.push("..." + creatureListTeam1[0].getName() + " & " + creatureListTeam2[0].getName() + " die");
                    creatureListTeam1.splice(0, 1);
                    creatureListTeam2.splice(0, 1);
                }
                else {
                    if (creatureListTeam1[0].currentLife < 1) {
                        this.battleLogs.push("..." + creatureListTeam1[0].getName() + " (1) dies");
                        creatureListTeam1.splice(0, 1);
                    }
                    if (creatureListTeam2[0].currentLife < 1) {
                        this.battleLogs.push("..." + creatureListTeam2[0].getName() + " (2) dies");
                        creatureListTeam2.splice(0, 1);
                    }
                }
                if (creatureListTeam1.length === 0 || creatureListTeam2.length === 0) {
                    done = true;
                }
            }
            var winner = -1; // assume tie
            if (creatureListTeam1.length === 0 && creatureListTeam2.length > 0) {
                winner = 1;
            }
            else if (creatureListTeam1.length > 0 && creatureListTeam2.length === 0) {
                winner = 0;
            }
            var slotLoser;
            var slotWinner;
            if (winner === 0) {
                slotLoser = slotTeam2;
                slotWinner = slotTeam1;
                this.localGameState.playerList[slotWinner].incrementWins();
                this.localGameState.playerList[slotLoser].incrementLoses();
                this.battleLogs.push(this.localGameState.playerList[slotWinner].name + " (1)" + " beats " + this.localGameState.playerList[slotLoser].name + ".");
                --this.localGameState.playerList[slotLoser].life;
            }
            else if (winner === 1) {
                slotLoser = slotTeam1;
                slotWinner = slotTeam2;
                this.localGameState.playerList[slotWinner].incrementWins();
                this.localGameState.playerList[slotLoser].incrementLoses();
                this.battleLogs.push(this.localGameState.playerList[slotWinner].name + " (2)" + " beats " + this.localGameState.playerList[slotLoser].name + ".");
                --this.localGameState.playerList[slotLoser].life;
            }
            else {
                this.localGameState.playerList[slotTeam1].incrementTies();
                this.localGameState.playerList[slotTeam2].incrementTies();
                this.battleLogs.push(this.localGameState.playerList[slotTeam1].name + " ties with " + this.localGameState.playerList[slotTeam2].name + ".");
            }
        }
    }
    logBuffAction(playerName, creatureName) {
        this.battleLogs.push(creatureName + "(" + playerName + ") buffs the party. ");
    }
    performAttack(creatureListAttackTeam, creatureListDefenderTeam, attackPlayerName, defendPlayerName) {
        // defensive layer 1
        var dodgedDefenderTeam = this.doesDefenderDodge(creatureListDefenderTeam[0].creatureStats.dex);
        var dodgedAttackTeam = this.doesDefenderDodge(creatureListAttackTeam[0].creatureStats.dex);
        if (creatureListAttackTeam[0].getArmorBuff() > 0 && creatureListAttackTeam[0].currentArmorBuffUsed == false) {
            for (var i = 0; i < creatureListAttackTeam.length; i++) {
                creatureListAttackTeam[i].currentArmor += creatureListAttackTeam[0].getArmorBuff();
            }
            creatureListAttackTeam[0].currentArmorBuffUsed = true;
            this.logBuffAction(attackPlayerName, creatureListAttackTeam[0].getName());
        }
        else if (creatureListAttackTeam[0].getLifeBuff() > 0 && creatureListAttackTeam[0].currentLifeBuffUsed == false) {
            for (var i = 0; i < creatureListAttackTeam.length; i++) {
                creatureListAttackTeam[i].currentLife += creatureListAttackTeam[0].getLifeBuff();
            }
            creatureListAttackTeam[0].currentLifeBuffUsed = true;
            this.logBuffAction(attackPlayerName, creatureListAttackTeam[0].getName());
        }
        else {
            this.battleLogs.push(creatureListAttackTeam[0].getName() + "(" + attackPlayerName + ") + attacks " + creatureListDefenderTeam[0].getName() + "(" + defendPlayerName + ")");
            if (!dodgedAttackTeam) {
                var dmg = this.getDamageAfterArmorCheck(creatureListDefenderTeam, creatureListAttackTeam);
                creatureListAttackTeam[0].currentLife = creatureListAttackTeam[0].currentLife - dmg; // strong attack
                this.battleLogs.push("... " + creatureListDefenderTeam[0].getName() + " deals " + dmg + " damage.");
            }
            else {
                this.battleLogs.push("... " + creatureListAttackTeam[0].getName() + " dodges attack.");
            }
            if (!dodgedDefenderTeam) {
                var dmg = this.getDamageAfterArmorCheck(creatureListAttackTeam, creatureListDefenderTeam);
                creatureListDefenderTeam[0].currentLife = creatureListDefenderTeam[0].currentLife - dmg; // counter attack
                this.battleLogs.push("... " + creatureListAttackTeam[0].getName() + " deals " + dmg + " damage.");
            }
            else {
                this.battleLogs.push("... " + creatureListDefenderTeam[0].getName() + " dodges attack.");
            }
        }
    }
    getDamageAfterArmorCheck(attackerTeam, defenderTeam) {
        var dmg = attackerTeam[0].creatureStats.attack;
        if (defenderTeam[0].currentArmor > 0) {
            dmg = Math.max(dmg - defenderTeam[0].currentArmor, 0);
            defenderTeam[0].currentArmor--;
        }
        console.log('Reduced ' + (attackerTeam[0].creatureStats.attack - dmg) + ' damage');
        return dmg;
    }
    doesDefenderDodge(dex) {
        var dodged = false;
        if (Math.floor(Math.random() * 8000 + 1) < dex * dex * dex) { // 20^3 dex^3 max = 72%
            dodged = true;
        }
        return dodged;
    }
    doesTeamOneGoFirst(creatureListTeam1, creatureListTeam2) {
        var isTurnTeam1 = true;
        if (creatureListTeam1.length == creatureListTeam2.length) {
            var flip = Math.floor((Math.random() * 2));
            console.log('flip = ' + flip);
            if (flip == 0) {
                isTurnTeam1 = false;
            }
        }
        else if (creatureListTeam2.length > creatureListTeam1.length) {
            isTurnTeam1 = false;
        }
        return isTurnTeam1;
    }
    shuffle(array) {
        let currentIndex = array.length, randomIndex;
        // While there remain elements to shuffle.
        while (currentIndex != 0) {
            // Pick a remaining element.
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            // And swap it with the current element.
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]
            ];
        }
        return array;
    }
    ;
    onNext() {
        ++this.localGameState.stage;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], BattleScreenComponent.prototype, "localGameState", void 0);
BattleScreenComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-battle-screen',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./battle-screen.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/battle-screen/battle-screen.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./battle-screen.component.css */ "./src/app/battle-screen/battle-screen.component.css")).default]
    })
], BattleScreenComponent);



/***/ }),

/***/ "./src/app/creature.ts":
/*!*****************************!*\
  !*** ./src/app/creature.ts ***!
  \*****************************/
/*! exports provided: CreatureType, Creature */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatureType", function() { return CreatureType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Creature", function() { return Creature; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _creatureStats__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./creatureStats */ "./src/app/creatureStats.ts");


var CreatureType;
(function (CreatureType) {
    CreatureType[CreatureType["Empty"] = 0] = "Empty";
    CreatureType[CreatureType["Gnome"] = 1] = "Gnome";
    CreatureType[CreatureType["Goblin"] = 2] = "Goblin";
    CreatureType[CreatureType["Genie"] = 3] = "Genie";
    CreatureType[CreatureType["Dwarf"] = 4] = "Dwarf";
    CreatureType[CreatureType["SkeletonWarrior"] = 5] = "SkeletonWarrior";
    CreatureType[CreatureType["Elf"] = 6] = "Elf";
    CreatureType[CreatureType["Orc"] = 7] = "Orc";
    CreatureType[CreatureType["Paladin"] = 8] = "Paladin";
    CreatureType[CreatureType["Wizard"] = 9] = "Wizard";
    CreatureType[CreatureType["TreeOfLife"] = 10] = "TreeOfLife";
    CreatureType[CreatureType["Necromancer"] = 11] = "Necromancer";
    CreatureType[CreatureType["Archer"] = 12] = "Archer";
    CreatureType[CreatureType["Bard"] = 13] = "Bard";
    CreatureType[CreatureType["DragonEgg"] = 14] = "DragonEgg";
    CreatureType[CreatureType["DemonPortal"] = 15] = "DemonPortal";
    CreatureType[CreatureType["Demon"] = 16] = "Demon";
    CreatureType[CreatureType["Dragon"] = 17] = "Dragon";
    CreatureType[CreatureType["Sorcerous"] = 18] = "Sorcerous";
})(CreatureType || (CreatureType = {}));
;
class Creature {
    constructor(creatureType) {
        this.createType = creatureType;
        this.creatureStats = this.getCreatureStatsFor(creatureType);
        this.currentArmor = this.creatureStats.armor;
        this.currentLife = this.creatureStats.life;
        this.currentArmorBuffUsed = false;
        this.currentLifeBuffUsed = false;
    }
    getName() { return this.creatureStats.name; }
    ;
    getImage() { return this.creatureStats.image; }
    ;
    // constructor(creatureType, name, life, attack, dex, armor, image) {
    //     this.createType = creatureType;
    //     this.name = name;
    //     this.life = life;
    //     this.attack = attack;
    //     this.dex = dex;
    //     this.armor = armor;
    //     this.image = '../assets/img/' + image;
    //     this.currentLife = life;
    //     this.currentArmor = armor;
    //     this.armorBuff = 0;
    //     this.currentArmorBuffUsed = false;
    //     this.lifeBuff = 0;
    //     this.currentLifeBuffUsed = false;
    // }
    preCombat() {
        this.currentLife = this.creatureStats.life;
        this.currentArmor = this.creatureStats.armor;
        this.currentArmorBuffUsed = false;
        this.currentLifeBuffUsed = false;
    }
    getCopy() {
        var value = new Creature(this.createType);
        // value.setArmorBuff(this.armorBuff);
        // value.setLifeBuff(this.lifeBuff);
        return value;
    }
    setArmorBuff(buff) {
        this.creatureStats.armorBuff = buff;
    }
    getArmorBuff() {
        return this.creatureStats.armorBuff;
    }
    setLifeBuff(buff) {
        this.creatureStats.lifeBuff = buff;
    }
    getLifeBuff() {
        return this.creatureStats.lifeBuff;
    }
    getCreatureStatsFor(creatureType) {
        var creatureStats = new _creatureStats__WEBPACK_IMPORTED_MODULE_1__["CreatureStats"]();
        var name, image;
        var life, attack, dex, armor, armorBuff = 0, lifeBuff = 0;
        switch (creatureType) {
            case CreatureType.Archer:
                name = 'Archer';
                life = 10;
                attack = 10;
                dex = 16;
                armor = 1;
                image = 'archer.png';
                break;
            case CreatureType.Bard:
                name = 'Bard';
                life = 10;
                attack = 5;
                dex = 12;
                armor = 1;
                image = 'femalebard.png';
                break;
            case CreatureType.Demon:
                name = 'Demon';
                life = 20;
                attack = 6;
                dex = 10;
                armor = 3;
                image = 'demon.png';
                break;
            case CreatureType.DemonPortal:
                name = 'Demon Portal';
                life = 1;
                attack = 1;
                dex = 6;
                armor = 0;
                image = 'black.jpg';
                break;
            case CreatureType.DragonEgg:
                name = 'Dragon Egg';
                life = 1;
                attack = 1;
                dex = 6;
                armor = 0;
                image = 'black.jpg';
                break;
            case CreatureType.Dwarf:
                name = 'Dwarf';
                life = 20;
                attack = 7;
                dex = 6;
                armor = 3;
                image = 'black.jpg';
                break;
            case CreatureType.Elf:
                name = 'Elf';
                life = 16;
                attack = 5;
                dex = 16;
                armor = 1;
                image = 'black.jpg';
                break;
            case CreatureType.Gnome:
                name = 'Gnome';
                life = 10;
                attack = 5;
                dex = 12;
                armor = 1;
                image = 'gnome.png';
                break;
            case CreatureType.Goblin:
                name = 'Goblin';
                life = 10;
                attack = 5;
                dex = 14;
                armor = 1;
                image = 'black.jpg';
                break;
            case CreatureType.Genie:
                name = 'Genie';
                life = 16;
                attack = 6;
                dex = 10;
                armor = 2;
                image = 'genie.gif';
                break;
            case CreatureType.Necromancer:
                name = 'Necromancer';
                life = 16;
                attack = 5;
                dex = 8;
                armor = 5;
                image = 'black.jpg';
                break;
            case CreatureType.Orc:
                name = 'Orc';
                life = 18;
                attack = 10;
                dex = 8;
                armor = 3;
                image = 'orc.png';
                break;
            case CreatureType.Paladin:
                name = 'Paladin';
                life = 17;
                attack = 8;
                dex = 8;
                armor = 3;
                armorBuff = 2;
                image = 'paladin.png';
                break;
            case CreatureType.SkeletonWarrior:
                name = 'Skeleton Warrior';
                life = 12;
                attack = 5;
                dex = 8;
                armor = 2;
                image = 'skeletonwarrior.png';
                break;
            case CreatureType.Wizard:
                name = 'Wizard';
                life = 10;
                attack = 10;
                dex = 8;
                armor = 1;
                image = 'wizard.png';
                break;
            case CreatureType.TreeOfLife:
                name = 'Tree of Life';
                life = 20;
                attack = 1;
                dex = 8;
                armor = 1;
                image = 'treeoflife.png';
                lifeBuff = 5;
                break;
            case CreatureType.Sorcerous:
                name = 'Sorcerous';
                life = 10;
                attack = 10;
                dex = 8;
                armor = 1;
                image = 'sorcerous.png';
                break;
            case CreatureType.Dragon:
                name = 'Dragon';
                life = 20;
                attack = 12;
                dex = 10;
                armor = 5;
                image = 'black.jpg';
                break;
            case CreatureType.Empty:
                name = '';
                life = 1;
                attack = 1;
                dex = 1;
                armor = 0;
                image = 'blank.jpg';
                break;
            default:
                console.log("Error, no creatureType found");
        }
        creatureStats.name = name;
        creatureStats.life = life;
        creatureStats.attack = attack;
        creatureStats.dex = dex;
        creatureStats.armor = armor;
        creatureStats.image = '../assets/img/' + image;
        creatureStats.lifeBuff = lifeBuff;
        creatureStats.armorBuff = armorBuff;
        return creatureStats;
    }
}


/***/ }),

/***/ "./src/app/creaturePool.model.ts":
/*!***************************************!*\
  !*** ./src/app/creaturePool.model.ts ***!
  \***************************************/
/*! exports provided: CreaturePool */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreaturePool", function() { return CreaturePool; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _creature__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./creature */ "./src/app/creature.ts");


class CreaturePool {
    constructor() {
        this.tier1 = [];
        this.tier2 = [];
        this.tier3 = [];
    }
    addCreatureToPool(count, creatureType) {
        var name, image;
        var life, attack, dex, armor, armorBuff = 0, lifeBuff = 0;
        console.log('creatureType = ' + creatureType);
        switch (creatureType) {
            case _creature__WEBPACK_IMPORTED_MODULE_1__["CreatureType"].Archer:
                name = 'Archer';
                life = 10;
                attack = 10;
                dex = 16;
                armor = 1;
                image = 'archer.png';
                break;
            case _creature__WEBPACK_IMPORTED_MODULE_1__["CreatureType"].Bard:
                name = 'Bard';
                life = 10;
                attack = 5;
                dex = 12;
                armor = 1;
                image = 'femalebard.png';
                break;
            case _creature__WEBPACK_IMPORTED_MODULE_1__["CreatureType"].Demon:
                name = 'Demon';
                life = 20;
                attack = 6;
                dex = 10;
                armor = 3;
                image = 'demon.png';
                break;
            case _creature__WEBPACK_IMPORTED_MODULE_1__["CreatureType"].DemonPortal:
                name = 'Demon Portal';
                life = 1;
                attack = 1;
                dex = 6;
                armor = 0;
                image = 'black.jpg';
                break;
            case _creature__WEBPACK_IMPORTED_MODULE_1__["CreatureType"].DragonEgg:
                name = 'Dragon Egg';
                life = 1;
                attack = 1;
                dex = 6;
                armor = 0;
                image = 'black.jpg';
                break;
            case _creature__WEBPACK_IMPORTED_MODULE_1__["CreatureType"].Dwarf:
                name = 'Dwarf';
                life = 20;
                attack = 7;
                dex = 6;
                armor = 3;
                image = 'black.jpg';
                break;
            case _creature__WEBPACK_IMPORTED_MODULE_1__["CreatureType"].Elf:
                name = 'Elf';
                life = 16;
                attack = 5;
                dex = 16;
                armor = 1;
                image = 'black.jpg';
                break;
            case _creature__WEBPACK_IMPORTED_MODULE_1__["CreatureType"].Gnome:
                name = 'Gnome';
                life = 10;
                attack = 5;
                dex = 12;
                armor = 1;
                image = 'gnome.png';
                break;
            case _creature__WEBPACK_IMPORTED_MODULE_1__["CreatureType"].Goblin:
                name = 'Goblin';
                life = 10;
                attack = 5;
                dex = 14;
                armor = 1;
                image = 'black.jpg';
                break;
            case _creature__WEBPACK_IMPORTED_MODULE_1__["CreatureType"].Genie:
                name = 'Genie';
                life = 16;
                attack = 6;
                dex = 10;
                armor = 2;
                image = 'genie.gif';
                break;
            case _creature__WEBPACK_IMPORTED_MODULE_1__["CreatureType"].Necromancer:
                name = 'Necromancer';
                life = 16;
                attack = 5;
                dex = 8;
                armor = 5;
                image = 'black.jpg';
                break;
            case _creature__WEBPACK_IMPORTED_MODULE_1__["CreatureType"].Orc:
                name = 'Orc';
                life = 18;
                attack = 10;
                dex = 8;
                armor = 3;
                image = 'orc.png';
                break;
            case _creature__WEBPACK_IMPORTED_MODULE_1__["CreatureType"].Paladin:
                name = 'Paladin';
                life = 17;
                attack = 8;
                dex = 8;
                armor = 3;
                armorBuff = 2;
                image = 'paladin.png';
                break;
            case _creature__WEBPACK_IMPORTED_MODULE_1__["CreatureType"].SkeletonWarrior:
                name = 'Skeleton Warrior';
                life = 12;
                attack = 5;
                dex = 8;
                armor = 2;
                image = 'skeletonwarrior.png';
                break;
            case _creature__WEBPACK_IMPORTED_MODULE_1__["CreatureType"].Wizard:
                name = 'Wizard';
                life = 10;
                attack = 10;
                dex = 8;
                armor = 1;
                image = 'wizard.png';
                break;
            case _creature__WEBPACK_IMPORTED_MODULE_1__["CreatureType"].TreeOfLife:
                name = 'Tree of Life';
                life = 20;
                attack = 1;
                dex = 8;
                armor = 1;
                image = 'treeoflife.png';
                lifeBuff = 5;
                break;
            case _creature__WEBPACK_IMPORTED_MODULE_1__["CreatureType"].Sorcerous:
                name = 'Sorcerous';
                life = 10;
                attack = 10;
                dex = 8;
                armor = 1;
                image = 'sorcerous.png';
                break;
            case _creature__WEBPACK_IMPORTED_MODULE_1__["CreatureType"].Dragon:
                name = 'Dragon';
                life = 20;
                attack = 12;
                dex = 10;
                armor = 5;
                image = 'black.jpg';
                break;
            default:
                console.log("Error, no creatureType found");
        }
        for (var i = 0; i < count; i++) {
            console.log('Adding ' + name + ' to crature pool');
            var tempCreature = new _creature__WEBPACK_IMPORTED_MODULE_1__["Creature"](creatureType);
            this.tier1.push(tempCreature);
        }
    }
    removeCreatureFromPool(index) {
        console.log('before:' + this.tier1.length);
        this.tier1.splice(index, 1);
        console.log('after:' + this.tier1.length);
    }
}


/***/ }),

/***/ "./src/app/creatureStats.ts":
/*!**********************************!*\
  !*** ./src/app/creatureStats.ts ***!
  \**********************************/
/*! exports provided: CreatureStats */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatureStats", function() { return CreatureStats; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class CreatureStats {
}
;


/***/ }),

/***/ "./src/app/gameState.model.ts":
/*!************************************!*\
  !*** ./src/app/gameState.model.ts ***!
  \************************************/
/*! exports provided: GameState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameState", function() { return GameState; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class GameState {
    constructor(stage, turn, playerList, creaturePool) {
        this.stage = stage;
        this.turn = turn;
        this.playerList = playerList;
        this.creaturePool = creaturePool;
    }
}


/***/ }),

/***/ "./src/app/player.model.ts":
/*!*********************************!*\
  !*** ./src/app/player.model.ts ***!
  \*********************************/
/*! exports provided: Player */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Player", function() { return Player; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Player {
    constructor(name, computerControlled) {
        this.name = name;
        this.life = 40;
        this.gold = 0;
        this.refreshCounter = 10;
        this.computerControlled = computerControlled;
        this.creatureList = [];
        this.wins = 0;
        this.losses = 0;
        this.ties = 0;
    }
    incrementWins() {
        this.wins++;
    }
    incrementLoses() {
        this.losses++;
    }
    incrementTies() {
        this.ties++;
    }
    getRecord() {
        return this.wins + ' - ' + this.losses + ' - ' + this.ties;
    }
}


/***/ }),

/***/ "./src/app/score-screen/score-screen.component.css":
/*!*********************************************************!*\
  !*** ./src/app/score-screen/score-screen.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".button {\r\n    border:  none;\r\n    position: relative;\r\n    display: inline-block;\r\n    background: blue;\r\n    color: #fff;\r\n    padding: 0.4em 0.6em;\r\n    font-size: 0.8em;\r\n    border-radius: 1em;\r\n  }\r\n  \r\n  button:disabled {\r\n    background: #dddddd;\r\n  }\r\n  \r\n  p {\r\n    margin: 0px;\r\n    padding: 0px;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2NvcmUtc2NyZWVuL3Njb3JlLXNjcmVlbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxZQUFZO0VBQ2QiLCJmaWxlIjoic3JjL2FwcC9zY29yZS1zY3JlZW4vc2NvcmUtc2NyZWVuLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnV0dG9uIHtcclxuICAgIGJvcmRlcjogIG5vbmU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBiYWNrZ3JvdW5kOiBibHVlO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBwYWRkaW5nOiAwLjRlbSAwLjZlbTtcclxuICAgIGZvbnQtc2l6ZTogMC44ZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAxZW07XHJcbiAgfVxyXG4gIFxyXG4gIGJ1dHRvbjpkaXNhYmxlZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZGRkZGRkO1xyXG4gIH0gXHJcbiAgXHJcbiAgcCB7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICB9Il19 */");

/***/ }),

/***/ "./src/app/score-screen/score-screen.component.ts":
/*!********************************************************!*\
  !*** ./src/app/score-screen/score-screen.component.ts ***!
  \********************************************************/
/*! exports provided: ScoreScreenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScoreScreenComponent", function() { return ScoreScreenComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ScoreScreenComponent = class ScoreScreenComponent {
    constructor() {
        this.sortedPlayerList = [];
    }
    ngOnInit() {
        let currentPlayerList = [];
        for (var i = 0; i < this.localGameState.playerList.length; i++) {
            currentPlayerList.push(this.localGameState.playerList[i]);
        }
        this.sortedPlayerList = currentPlayerList.sort((a, b) => {
            if (b.life === a.life) {
                return b.wins - a.wins;
            }
            return b.life - a.life;
        });
        console.log('players creature list length = ' + this.localGameState.playerList[0].creatureList.length);
        // Print Player List
        for (var i = 0; i < this.localGameState.playerList[0].creatureList.length; i++) {
            console.log(this.localGameState.playerList[0].creatureList[i].getName());
        }
    }
    onNext() {
        this.localGameState.stage = 2;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ScoreScreenComponent.prototype, "localGameState", void 0);
ScoreScreenComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-score-screen',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./score-screen.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/score-screen/score-screen.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./score-screen.component.css */ "./src/app/score-screen/score-screen.component.css")).default]
    })
], ScoreScreenComponent);



/***/ }),

/***/ "./src/app/tavern-app/tavern-app.component.css":
/*!*****************************************************!*\
  !*** ./src/app/tavern-app/tavern-app.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".button {\r\n  border:  none;\r\n  position: relative;\r\n  display: inline-block;\r\n  background: blue;\r\n  color: #fff;\r\n  padding: 0.4em 0.6em;\r\n  font-size: 0.8em;\r\n  border-radius: 1em;\r\n}\r\n\r\nbutton:disabled {\r\n  background: #dddddd;\r\n}\r\n\r\np {\r\n  margin: 0px;\r\n  padding: 0px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGF2ZXJuLWFwcC90YXZlcm4tYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLG9CQUFvQjtFQUNwQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL3RhdmVybi1hcHAvdGF2ZXJuLWFwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ1dHRvbiB7XHJcbiAgYm9yZGVyOiAgbm9uZTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGJhY2tncm91bmQ6IGJsdWU7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgcGFkZGluZzogMC40ZW0gMC42ZW07XHJcbiAgZm9udC1zaXplOiAwLjhlbTtcclxuICBib3JkZXItcmFkaXVzOiAxZW07XHJcbn1cclxuXHJcbmJ1dHRvbjpkaXNhYmxlZCB7XHJcbiAgYmFja2dyb3VuZDogI2RkZGRkZDtcclxufSBcclxuXHJcbnAge1xyXG4gIG1hcmdpbjogMHB4O1xyXG4gIHBhZGRpbmc6IDBweDtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/tavern-app/tavern-app.component.ts":
/*!****************************************************!*\
  !*** ./src/app/tavern-app/tavern-app.component.ts ***!
  \****************************************************/
/*! exports provided: TavernAppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TavernAppComponent", function() { return TavernAppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _creature__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../creature */ "./src/app/creature.ts");
/* harmony import */ var _TavernCreature__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../TavernCreature */ "./src/app/TavernCreature.ts");




let TavernAppComponent = class TavernAppComponent {
    constructor() {
        this.counter = 15;
        this.refreshCounter = 0;
        console.log('in tavern consturctor');
        this.tavernCreatureList = [];
        // timer(1000,1000).pipe(
        //   takeWhile( () => this.counter > -1 ),
        //   map(() => this.counter--)
        //   // map((x) => {
        //   //   if (this.count === 0) { 
        //   //     this.localGameState.stage=3; 
        //   //   }})
        // ).subscribe( () => {
        //   if (this.counter === -1) {
        //     this.localGameState.stage = 3;
        //     // Update other players
        //     for (var i = 1; i < this.localGameState.playerList.length; i++ ) {
        //       let slot = this.getRandomSlot(1);
        //       this.localGameState.playerList[i].creatureList.push(this.localGameState.creaturePool.tier1[slot]);
        //     }
        //   }
        // })
    }
    ngOnInit() {
        // Grab 3 creatures from the pool that will be for sale
        console.log('in ngOnInit');
        this.refreshCounter = this.localGameState.playerList[0].refreshCounter;
        this.refreshTavernBoard();
        this.localGameState.playerList[0].gold += 100;
    }
    onRefresh() {
        if (this.refreshCounter > 0) {
            this.refreshCounter--;
            this.refreshTavernBoard();
        }
    }
    onSell(slot) {
        if (this.localGameState.playerList[0].creatureList.length > slot) {
            var tempCreature = this.localGameState.playerList[0].creatureList[slot].getCopy();
            this.localGameState.playerList[0].creatureList.splice(slot, 1);
            this.localGameState.creaturePool.addCreatureToPool(1, tempCreature.createType);
            this.localGameState.playerList[0].gold += 50;
        }
    }
    onMoveRight(slot) {
        var rightSlot = slot + 1;
        console.log('slot = ' + slot + ', rightSlot = ' + rightSlot);
        if (this.localGameState.playerList[0].creatureList.length > rightSlot) {
            var tempCreature = this.localGameState.playerList[0].creatureList[slot];
            this.localGameState.playerList[0].creatureList[slot] = this.localGameState.playerList[0].creatureList[rightSlot];
            this.localGameState.playerList[0].creatureList[rightSlot] = tempCreature;
        }
    }
    getTavernCreature(index) {
        return this.tavernCreatureList[index];
    }
    getPlayersBoard(index) {
        if (this.localGameState.playerList[0].creatureList.length > 0) {
            return this.localGameState.playerList[0].creatureList[index];
        }
        return new _creature__WEBPACK_IMPORTED_MODULE_2__["Creature"](_creature__WEBPACK_IMPORTED_MODULE_2__["CreatureType"].Empty);
    }
    refreshTavernBoard() {
        this.tavernCreatureList = [];
        var tempCreature;
        var randomList = [];
        var done = false;
        var count = 0;
        while (done === false) {
            for (var i = 1; i <= 3; i++) {
                randomList.push(this.getRandomSlot(1));
            }
            if (randomList[0] != randomList[1] && randomList[1] != randomList[2]) {
                done = true;
            }
            count++;
            if (count > 100) {
                done = true; // prevent infinite loop
            }
        }
        for (var i = 1; i <= 3; i++) {
            let poolSlot = this.getRandomSlot(1);
            tempCreature = new _TavernCreature__WEBPACK_IMPORTED_MODULE_3__["TavernCreature"](i, this.localGameState.creaturePool.tier1[poolSlot], poolSlot);
            this.tavernCreatureList.push(tempCreature);
        }
    }
    onBuy(slot) {
        if (this.localGameState.playerList[0].gold >= 100) {
            this.localGameState.playerList[0].gold -= 100;
            this.doPurchase(slot);
        }
    }
    onNext() {
        for (var i = 1; i < this.localGameState.playerList.length; i++) {
            if (this.localGameState.playerList[i].creatureList.length < 8) {
                let slot = this.getRandomSlot(1);
                this.localGameState.playerList[i].creatureList.push(this.localGameState.creaturePool.tier1[slot]);
            }
        }
        this.localGameState.stage++;
    }
    doPurchase(slot) {
        this.tavernCreatureList[slot].sold = true;
        this.localGameState.creaturePool.removeCreatureFromPool(this.tavernCreatureList[slot].poolSlot);
        console.log("tavern sold slot " + slot);
        console.log("pool  sold slot " + this.tavernCreatureList[slot].poolSlot);
        console.log(this.tavernCreatureList[slot].sold);
        if (this.tavernCreatureList[slot].creature.getName() === 'Demon Portal') {
            console.log('adding 3 demons');
            this.localGameState.creaturePool.addCreatureToPool(3, _creature__WEBPACK_IMPORTED_MODULE_2__["CreatureType"].Demon);
            // this.localGameState.playerList[0].creatureList.push(new Creature('Imp', 2, 2, 'blank.jpg'));
        }
        else if (this.tavernCreatureList[slot].creature.getName() === 'Dragon Egg') {
            this.localGameState.creaturePool.addCreatureToPool(3, _creature__WEBPACK_IMPORTED_MODULE_2__["CreatureType"].Dragon);
            // this.localGameState.playerList[0].creatureList.push(new Creature(CreatureType.Dragon);
        }
        else if (this.tavernCreatureList[slot].creature.getName() === 'Bard') {
            this.localGameState.playerList[0].creatureList.push(this.tavernCreatureList[slot].creature);
            this.localGameState.playerList[0].refreshCounter++;
        }
        else {
            this.localGameState.playerList[0].creatureList.push(this.tavernCreatureList[slot].creature);
        }
        // Print Player List
        for (var i = 0; i < this.localGameState.playerList[0].creatureList.length; i++) {
            console.log(this.localGameState.playerList[0].creatureList[i].getName());
        }
    }
    triggerFunction() {
        console.log('Timer Ended');
    }
    getRandomSlot(tier) {
        var size = 0;
        if (tier === 1) {
            size = this.localGameState.creaturePool.tier1.length;
        }
        return Math.floor((Math.random() * size) + 0);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TavernAppComponent.prototype, "localGameState", void 0);
TavernAppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tavern-app',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tavern-app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tavern-app/tavern-app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tavern-app.component.css */ "./src/app/tavern-app/tavern-app.component.css")).default]
    })
], TavernAppComponent);



/***/ }),

/***/ "./src/app/title-screen-app/title-screen-app.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/title-screen-app/title-screen-app.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RpdGxlLXNjcmVlbi1hcHAvdGl0bGUtc2NyZWVuLWFwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/title-screen-app/title-screen-app.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/title-screen-app/title-screen-app.component.ts ***!
  \****************************************************************/
/*! exports provided: TitleScreenAppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TitleScreenAppComponent", function() { return TitleScreenAppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TitleScreenAppComponent = class TitleScreenAppComponent {
    constructor() { }
    ngOnInit() {
    }
    onStartGame() {
        this.localGameState.stage = 2;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TitleScreenAppComponent.prototype, "localGameState", void 0);
TitleScreenAppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-title-screen-app',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./title-screen-app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/title-screen-app/title-screen-app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./title-screen-app.component.css */ "./src/app/title-screen-app/title-screen-app.component.css")).default]
    })
], TitleScreenAppComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\mattp\Documents\GogUpdates\mattpezzuto.github.io\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map