function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n<div *ngIf=\"this.gameState.stage === 1\">\r\n  <app-title-screen-app [localGameState]=gameState></app-title-screen-app>\r\n</div>\r\n\r\n<div *ngIf=\"this.gameState.stage === 2\">\r\n  <app-tavern-app [localGameState]=gameState></app-tavern-app>\r\n</div>\r\n\r\n<div *ngIf=\"this.gameState.stage === 3\">\r\n  <app-battle-screen [localGameState]=gameState></app-battle-screen>\r\n</div>\r\n\r\n<div *ngIf=\"this.gameState.stage === 4\">\r\n  <app-score-screen [localGameState]=gameState></app-score-screen>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/battle-screen/battle-screen.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/battle-screen/battle-screen.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppBattleScreenBattleScreenComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>battle-screen works!</p>\r\n\r\n<ul>\r\n    <li *ngFor=\"let battleLog of battleLogs; let indeOfElement=index;\">\r\n        {{battleLog}}\r\n    </li>\r\n</ul>\r\n\r\n\r\n<button class=\"button\" (click)=\"onNext()\">Next</button>\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/score-screen/score-screen.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/score-screen/score-screen.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppScoreScreenScoreScreenComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>score-screen works!</p>\r\n\r\n<ul>\r\n    <li *ngFor=\"let player of sortedPlayerList; let indeOfElement=index;\">\r\n        {{player.name}} ({{player.life}})\r\n    </li>\r\n</ul>\r\n\r\n<button class=\"button\" (click)=\"onNext()\">Next</button>\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/tavern-app/tavern-app.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tavern-app/tavern-app.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTavernAppTavernAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!DOCTYPE html>\r\n<html>\r\n<head>\r\n<style>\r\n.itemHeader { grid-area: header; }\r\n.itemGold { grid-area: gold; }\r\n.itemMenu { grid-area: menu; }\r\n.itemBoard { grid-area: board; }\r\n.itemShop1 { grid-area: shop1; }\r\n.itemShop2 { grid-area: shop2; }\r\n.itemShop3 { grid-area: shop3; }\r\n.itemShopBtn1 { grid-area: btnShop1; }\r\n.itemShopBtn2 { grid-area: btnShop2; }\r\n.itemShopBtn3 { grid-area: btnShop3; }\r\n.itemBoard1 { grid-area: board1; }\r\n.itemBoard2 { grid-area: board2; }\r\n.itemBoard3 { grid-area: board3; }\r\n.itemBoard4 { grid-area: board4; }\r\n.itemBoard5 { grid-area: board5; }\r\n.itemBoardBtn1 { grid-area: boardBtn1; }\r\n.itemBoardBtn2 { grid-area: boardBtn2; }\r\n.itemBoardBtn3 { grid-area: boardBtn3; }\r\n.itemBoardBtn4 { grid-area: boardBtn4; }\r\n.itemBoardBtn5 { grid-area: boardBtn5; }\r\n.itemHand1 { grid-area: hand1; }\r\n.itemHand2 { grid-area: hand2; }\r\n.itemHand3 { grid-area: hand3; }\r\n.itemHand4 { grid-area: hand4; }\r\n.itemHand5 { grid-area: hand5; }\r\n\r\n.grid-container {\r\n  display: grid;\r\n  grid-template-areas:\r\n    'header header header header header gold'\r\n    'shop1 shop1 shop2 shop2 shop3 shop3'\r\n    'btnShop1 btnShop1 btnShop2 btnShop2 btnShop3 btnShop3'\r\n\t  'menu board board board board board'\r\n\t  'menu board1 board2 board3 board4 board5'\r\n    'menu boardBtn1 boardBtn2 boardBtn3 boardBtn4 boardBtn5'\r\n    'menu hand1 hand2 hand3 hand4 hand5';\r\n\r\n  gap: 10px;\r\n  background-color: #2196F3;\r\n  padding: 10px;\r\n}\r\n\r\n.grid-container > div {\r\n  background-color: rgba(255, 255, 255, 0.8);\r\n  text-align: center;\r\n  padding: 20px 0;\r\n  font-size: 30px;\r\n}\r\n</style>\r\n</head>\r\n<body>\r\n\r\n<div class=\"grid-container\">\r\n  <div class=\"itemHeader\">\r\n    <p>Guilds of Greystone</p>\r\n    <p>Shop</p>\r\n  </div>\r\n  <div class=\"itemGold\">\r\n    <p>Gold = {{this.localGameState.playerList[0].gold}} </p>\r\n    <p>Time Left:  {{this.counter}}</p>\r\n    <button class=\"button\" (click)=\"onRefresh()\">Refresh ({{refreshCounter}})</button>\r\n    </div>\r\n\r\n  <div class=\"itemMenu\">\r\n    <p>Menu</p>\r\n  </div>\r\n \r\n\r\n  <div class=\"itemShop1\">\r\n    <p *ngIf=getTavernCreature(0)> {{getTavernCreature(0).creature.name}}</p>\r\n    <img src=\"{{getTavernCreature(0).creature.image}}\" style=\"width:120;height:150px;\">\r\n  </div>  \r\n  <div class=\"itemShop2\">\r\n    <p *ngIf=getTavernCreature(1)> {{getTavernCreature(1).creature.name}}</p>\r\n    <img src=\"{{getTavernCreature(1).creature.image}}\" style=\"width:120;height:150px;\">\r\n  </div>  \r\n  <div class=\"itemShop3\">\r\n    <p *ngIf=getTavernCreature(2)> {{getTavernCreature(2).creature.name}}</p>\r\n    <img src=\"{{getTavernCreature(2).creature.image}}\" style=\"width:120;height:150px;\">\r\n  </div>  \r\n  <div class=\"itemShopBtn1\">\r\n    <button class=\"button\" *ngIf=\"!getTavernCreature(0).sold\" (click)=\"onBuy(0)\">Buy</button>\r\n    <button class=\"button\" *ngIf=\"getTavernCreature(0).sold\" [disabled] = \"true\" (click)=\"onBuy(0)\">Buy</button>\r\n  </div>\r\n  <div class=\"itemShopBtn2\">\r\n    <button class=\"button\" *ngIf=\"!getTavernCreature(1).sold\" (click)=\"onBuy(1)\">Buy</button>\r\n    <button class=\"button\" *ngIf=\"getTavernCreature(1).sold\" [disabled] = \"true\" (click)=\"onBuy(1)\">Buy</button>\r\n  </div>\r\n  <div class=\"itemShopBtn3\">\r\n    <button class=\"button\" *ngIf=\"!getTavernCreature(2).sold\" (click)=\"onBuy(2)\">Buy</button>\r\n    <button class=\"button\" *ngIf=\"getTavernCreature(2).sold\" [disabled] = \"true\" (click)=\"onBuy(2)\">Buy</button>\r\n  </div>\r\n\r\n  <div class=\"itemBoard\">Board</div>  \r\n  <div class=\"itemBoard1\">\r\n    <p *ngIf=getPlayersBoard(0)> {{getPlayersBoard(0).name}}</p>\r\n  </div>  \r\n  <div class=\"itemBoard2\">\r\n    <p *ngIf=getPlayersBoard(1)> {{getPlayersBoard(1).name}}</p>\r\n  </div>  \r\n  <div class=\"itemBoard3\">\r\n    <p *ngIf=getPlayersBoard(2)> {{getPlayersBoard(2).name}}</p>\r\n  </div>  \r\n  <div class=\"itemBoard4\">\r\n    <p *ngIf=getPlayersBoard(3)> {{getPlayersBoard(3).name}}</p>\r\n  </div>  \r\n  <div class=\"itemBoard5\">\r\n    <p *ngIf=getPlayersBoard(4)> {{getPlayersBoard(4).name}}</p>\r\n  </div>  \r\n  \r\n  <div class=\"itemBoardBtn1\">\r\n    <button class=\"button\" (click)=\"onMoveRight(0)\">>>></button>\r\n    <button class=\"button\" (click)=\"onRefresh()\">Sell</button>\r\n  </div>\r\n  <div class=\"itemBoardBtn2\">\r\n    <button class=\"button\" (click)=\"onMoveRight(0)\"><<<</button>\r\n    <button class=\"button\" (click)=\"onRefresh()\">Sell</button>\r\n    <button class=\"button\" (click)=\"onMoveRight(1)\">>>></button>\r\n  </div>\r\n  <div class=\"itemBoardBtn3\">\r\n    <button class=\"button\" (click)=\"onMoveRight(1)\"><<<</button>\r\n    <button class=\"button\" (click)=\"onRefresh()\">Sell</button>\r\n    <button class=\"button\" (click)=\"onMoveRight(2)\">>>></button>\r\n  </div>\r\n  <div class=\"itemBoardBtn4\">\r\n    <button class=\"button\" (click)=\"onMoveRight(2)\"><<<</button>\r\n    <button class=\"button\" (click)=\"onRefresh()\">Sell</button>\r\n    <button class=\"button\" (click)=\"onMoveRight(3)\">>>></button>\r\n  </div>\r\n  <div class=\"itemBoardBtn5\">\r\n    <button class=\"button\" (click)=\"onMoveRight(3)\"><<<</button>\r\n    <button class=\"button\" (click)=\"onRefresh()\">Sell</button>\r\n    <button class=\"button\" (click)=\"onMoveRight(4)\">>>></button>\r\n  </div>\r\n  <div class=\"itemHand1\">Card1</div>  \r\n  <div class=\"itemHand2\">Card2</div>  \r\n  <div class=\"itemHand3\">Card33</div>  \r\n  <div class=\"itemHand4\">Card44</div>  \r\n  <div class=\"itemHand5\">Card55</div>\r\n\r\n</div>\r\n\r\n<p>Creature in Current Pool:  {{this.localGameState.creaturePool.tier1.length}}</p>\r\n<ul>\r\n  <li *ngFor=\"let creature of this.localGameState.playerList[0].creatureList\">\r\n    {{ creature.name}}\r\n  </li>\r\n</ul>\r\n\r\n</body>\r\n</html>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/title-screen-app/title-screen-app.component.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/title-screen-app/title-screen-app.component.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTitleScreenAppTitleScreenAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n<button (click)=\"onStartGame()\">StartGame!</button>\r\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
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


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __createBinding(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
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
    /***/

  },

  /***/
  "./src/app/TavernCreature.ts":
  /*!***********************************!*\
    !*** ./src/app/TavernCreature.ts ***!
    \***********************************/

  /*! exports provided: TavernCreature */

  /***/
  function srcAppTavernCreatureTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TavernCreature", function () {
      return TavernCreature;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var TavernCreature = function TavernCreature(id, creature, poolSlot) {
      _classCallCheck(this, TavernCreature);

      this.id = id;
      this.creature = creature;
      this.sold = false;
      this.poolSlot = poolSlot;
      console.log(this.sold);
    };
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var routes = [];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "h1{\r\n\tbackground-color: grey;\r\n\tmargin-top:0;\r\n\tpadding: 20px;\r\n\tfont-size:1.6em;\r\n\tfont-family: Arial;\r\n\tcolor:white;\r\n}\r\n\r\n.rotate45 {\r\n    transform: rotate(45deg);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxzQkFBc0I7Q0FDdEIsWUFBWTtDQUNaLGFBQWE7Q0FDYixlQUFlO0NBQ2Ysa0JBQWtCO0NBQ2xCLFdBQVc7QUFDWjs7QUFFQTtJQUtJLHdCQUF3QjtBQUM1QiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDF7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogZ3JleTtcclxuXHRtYXJnaW4tdG9wOjA7XHJcblx0cGFkZGluZzogMjBweDtcclxuXHRmb250LXNpemU6MS42ZW07XHJcblx0Zm9udC1mYW1pbHk6IEFyaWFsO1xyXG5cdGNvbG9yOndoaXRlO1xyXG59XHJcblxyXG4ucm90YXRlNDUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NTBkZWcpO1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _player_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./player.model */
    "./src/app/player.model.ts");
    /* harmony import */


    var _gameState_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./gameState.model */
    "./src/app/gameState.model.ts");
    /* harmony import */


    var _creaturePool_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./creaturePool.model */
    "./src/app/creaturePool.model.ts");
    /* harmony import */


    var _creature__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./creature */
    "./src/app/creature.ts");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'gog';
        this.name = '';
        this.log = '';
        this.textValue = 'initial value';
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var playerList = [];
          var player = new _player_model__WEBPACK_IMPORTED_MODULE_2__["Player"]("matt", false);
          playerList.push(player); // Generate Computer Players

          for (var i = 1; i < 8; i++) {
            var playerName = "Player" + i;
            var compPlayer = new _player_model__WEBPACK_IMPORTED_MODULE_2__["Player"](playerName, true);
            playerList.push(compPlayer);
          }

          var emptyCreaturePool = new _creaturePool_model__WEBPACK_IMPORTED_MODULE_4__["CreaturePool"]();
          this.gameState = new _gameState_model__WEBPACK_IMPORTED_MODULE_3__["GameState"](0, 1, playerList, emptyCreaturePool);
          this.createInitialCreaturePool();
          this.gameState.playerList = playerList;
          this.gameState.turn = 0;
          this.gameState.stage = 1;
        }
      }, {
        key: "logText",
        value: function logText(value) {
          this.log += "Text changed to '".concat(value, "'\n");
        }
      }, {
        key: "logCheckbox",
        value: function logCheckbox(element) {
          this.log += "Checkbox ".concat(element.value, " was ").concat(element.checked ? '' : 'un', "checked\n");
        }
      }, {
        key: "createInitialCreaturePool",
        value: function createInitialCreaturePool() {
          var creatureList = [];
          this.gameState.creaturePool.addCreatureToPool(3, _creature__WEBPACK_IMPORTED_MODULE_5__["CreatureType"].Gnome);
          this.gameState.creaturePool.addCreatureToPool(3, _creature__WEBPACK_IMPORTED_MODULE_5__["CreatureType"].Goblin);
          this.gameState.creaturePool.addCreatureToPool(3, _creature__WEBPACK_IMPORTED_MODULE_5__["CreatureType"].Dwarf);
          this.gameState.creaturePool.addCreatureToPool(3, _creature__WEBPACK_IMPORTED_MODULE_5__["CreatureType"].Skeleton);
          this.gameState.creaturePool.addCreatureToPool(3, _creature__WEBPACK_IMPORTED_MODULE_5__["CreatureType"].Elf);
          this.gameState.creaturePool.addCreatureToPool(3, _creature__WEBPACK_IMPORTED_MODULE_5__["CreatureType"].Orc);
          this.gameState.creaturePool.addCreatureToPool(3, _creature__WEBPACK_IMPORTED_MODULE_5__["CreatureType"].Paladin);
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
      }]);

      return AppComponent;
    }();

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _tavern_app_tavern_app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./tavern-app/tavern-app.component */
    "./src/app/tavern-app/tavern-app.component.ts");
    /* harmony import */


    var _title_screen_app_title_screen_app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./title-screen-app/title-screen-app.component */
    "./src/app/title-screen-app/title-screen-app.component.ts");
    /* harmony import */


    var _battle_screen_battle_screen_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./battle-screen/battle-screen.component */
    "./src/app/battle-screen/battle-screen.component.ts");
    /* harmony import */


    var _score_screen_score_screen_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./score-screen/score-screen.component */
    "./src/app/score-screen/score-screen.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _tavern_app_tavern_app_component__WEBPACK_IMPORTED_MODULE_5__["TavernAppComponent"], _title_screen_app_title_screen_app_component__WEBPACK_IMPORTED_MODULE_6__["TitleScreenAppComponent"], _battle_screen_battle_screen_component__WEBPACK_IMPORTED_MODULE_7__["BattleScreenComponent"], _score_screen_score_screen_component__WEBPACK_IMPORTED_MODULE_8__["ScoreScreenComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/battle-screen/battle-screen.component.css":
  /*!***********************************************************!*\
    !*** ./src/app/battle-screen/battle-screen.component.css ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppBattleScreenBattleScreenComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JhdHRsZS1zY3JlZW4vYmF0dGxlLXNjcmVlbi5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/battle-screen/battle-screen.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/battle-screen/battle-screen.component.ts ***!
    \**********************************************************/

  /*! exports provided: BattleScreenComponent */

  /***/
  function srcAppBattleScreenBattleScreenComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BattleScreenComponent", function () {
      return BattleScreenComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var BattleScreenComponent = /*#__PURE__*/function () {
      function BattleScreenComponent() {
        _classCallCheck(this, BattleScreenComponent);
      }

      _createClass(BattleScreenComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.battleLogs = [];
          var playerIndexList = [];

          for (var i = 0; i < 8; i++) {
            playerIndexList.push(i);
          }

          var randomPlayerList = this.shuffle(playerIndexList);
          console.log('randomPlayerList: ' + randomPlayerList); // Perform Matches

          for (var matchIndex = 0; matchIndex < 4; matchIndex++) {
            var creatureListTeam1 = [];
            var creatureListTeam2 = [];
            var slotTeam1 = randomPlayerList[0 + matchIndex * 2];
            var slotTeam2 = randomPlayerList[1 + matchIndex * 2];
            console.log('slotTeam1=' + slotTeam1 + ' playerList[slotTeam1].name=' + this.localGameState.playerList[slotTeam1].name);
            console.log('slotTeam2=' + slotTeam2 + ' playerList[slotTeam2].name=' + this.localGameState.playerList[slotTeam2].name); // For some reason val=>Object.get creates a copy, but doesn't copy the methods that go along with the class

            this.localGameState.playerList[slotTeam1].creatureList.forEach(function (val) {
              return creatureListTeam1.push(val.getCopy());
            });
            this.localGameState.playerList[slotTeam2].creatureList.forEach(function (val) {
              return creatureListTeam2.push(val.getCopy());
            });
            var done = false;
            this.battleLogs.push(this.localGameState.playerList[slotTeam1].name + "(" + this.localGameState.playerList[slotTeam1].creatureList.length + ")  vs. " + this.localGameState.playerList[slotTeam2].name + "(" + this.localGameState.playerList[slotTeam2].creatureList.length + ")");

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
              } else {
                this.performAttack(creatureListTeam2, creatureListTeam1, this.localGameState.playerList[slotTeam2].name, this.localGameState.playerList[slotTeam1].name);
              }

              isTurnTeam1 = !isTurnTeam1;

              if (creatureListTeam1[0].currentLife < 1 && creatureListTeam2[0].currentLife < 1) {
                this.battleLogs.push("..." + creatureListTeam1[0].name + " & " + creatureListTeam2[0].name + " die");
                creatureListTeam1.splice(0, 1);
                creatureListTeam2.splice(0, 1);
              } else {
                if (creatureListTeam1[0].currentLife < 1) {
                  this.battleLogs.push("..." + creatureListTeam1[0].name + " (1) dies");
                  creatureListTeam1.splice(0, 1);
                }

                if (creatureListTeam2[0].currentLife < 1) {
                  this.battleLogs.push("..." + creatureListTeam2[0].name + " (2) dies");
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
            } else if (creatureListTeam1.length > 0 && creatureListTeam2.length === 0) {
              winner = 0;
            }

            var slotLoser;
            var slotWinner;

            if (winner === 0) {
              slotLoser = slotTeam2;
              slotWinner = slotTeam1;
              this.battleLogs.push(this.localGameState.playerList[slotWinner].name + " (1)" + " beats " + this.localGameState.playerList[slotLoser].name + ".");
              --this.localGameState.playerList[slotLoser].life;
            } else if (winner === 1) {
              slotLoser = slotTeam1;
              slotWinner = slotTeam2;
              this.battleLogs.push(this.localGameState.playerList[slotWinner].name + " (2)" + " beats " + this.localGameState.playerList[slotLoser].name + ".");
              --this.localGameState.playerList[slotLoser].life;
            } else {
              this.battleLogs.push(this.localGameState.playerList[slotTeam1].name + " ties with " + this.localGameState.playerList[slotTeam2].name + ".");
            }
          }
        }
      }, {
        key: "performAttack",
        value: function performAttack(creatureListAttack, creatureListDefender, attackPlayerName, defendPlayerName) {
          // defensive layer 1
          var dodgedDefenderTeam = this.doesDefenderDodge(creatureListDefender[0].dex);
          var dodgedAttackTeam = this.doesDefenderDodge(creatureListAttack[0].dex);
          this.battleLogs.push(creatureListAttack[0].name + "(" + attackPlayerName + ") + attacks " + creatureListDefender[0].name + "(" + defendPlayerName + ")");

          if (!dodgedAttackTeam) {
            var dmg = this.getDamageAfterArmorCheck(creatureListDefender, creatureListAttack);
            creatureListAttack[0].currentLife = creatureListAttack[0].currentLife - dmg; // strong attack

            this.battleLogs.push("... " + creatureListDefender[0].name + " deals " + dmg + " damage.");
          } else {
            this.battleLogs.push("... " + creatureListAttack[0].name + " dodges attack.");
          }

          if (!dodgedDefenderTeam) {
            var dmg = this.getDamageAfterArmorCheck(creatureListAttack, creatureListDefender);
            creatureListDefender[0].currentLife = creatureListDefender[0].currentLife - dmg; // counter attack

            this.battleLogs.push("... " + creatureListAttack[0].name + " deals " + dmg + " damage.");
          } else {
            this.battleLogs.push("... " + creatureListDefender[0].name + " dodges attack.");
          }
        }
      }, {
        key: "getDamageAfterArmorCheck",
        value: function getDamageAfterArmorCheck(attackerTeam, defenderTeam) {
          var dmg = attackerTeam[0].attack;

          if (defenderTeam[0].currentArmor > 0) {
            dmg = Math.max(dmg - defenderTeam[0].currentArmor, 0);
            defenderTeam[0].currentArmor--;
          }

          console.log('Reduced ' + (attackerTeam[0].attack - dmg) + ' damage');
          return dmg;
        }
      }, {
        key: "doesDefenderDodge",
        value: function doesDefenderDodge(dex) {
          var dodged = false;

          if (Math.floor(Math.random() * 8000 + 1) < dex * dex * dex) {
            // 20^3 dex^3 max = 72%
            dodged = true;
          }

          return dodged;
        }
      }, {
        key: "doesTeamOneGoFirst",
        value: function doesTeamOneGoFirst(creatureListTeam1, creatureListTeam2) {
          var isTurnTeam1 = true;

          if (creatureListTeam1.length == creatureListTeam2.length) {
            var flip = Math.floor(Math.random() * 2);
            console.log('flip = ' + flip);

            if (flip == 0) {
              isTurnTeam1 = false;
            }
          } else if (creatureListTeam2.length > creatureListTeam1.length) {
            isTurnTeam1 = false;
          }

          return isTurnTeam1;
        }
      }, {
        key: "shuffle",
        value: function shuffle(list) {
          return list.reduce(function (p, n) {
            var size = p.length;
            var index = Math.trunc(Math.random() * (size - 1));
            p.splice(index, 0, n);
            return p;
          }, []);
        }
      }, {
        key: "onNext",
        value: function onNext() {
          ++this.localGameState.stage;
        }
      }]);

      return BattleScreenComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], BattleScreenComponent.prototype, "localGameState", void 0);
    BattleScreenComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-battle-screen',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./battle-screen.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/battle-screen/battle-screen.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./battle-screen.component.css */
      "./src/app/battle-screen/battle-screen.component.css"))["default"]]
    })], BattleScreenComponent);
    /***/
  },

  /***/
  "./src/app/creature.ts":
  /*!*****************************!*\
    !*** ./src/app/creature.ts ***!
    \*****************************/

  /*! exports provided: CreatureType, Creature */

  /***/
  function srcAppCreatureTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreatureType", function () {
      return CreatureType;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Creature", function () {
      return Creature;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var CreatureType;

    (function (CreatureType) {
      CreatureType[CreatureType["Gnome"] = 0] = "Gnome";
      CreatureType[CreatureType["Goblin"] = 1] = "Goblin";
      CreatureType[CreatureType["Genie"] = 2] = "Genie";
      CreatureType[CreatureType["Dwarf"] = 3] = "Dwarf";
      CreatureType[CreatureType["Skeleton"] = 4] = "Skeleton";
      CreatureType[CreatureType["Elf"] = 5] = "Elf";
      CreatureType[CreatureType["Orc"] = 6] = "Orc";
      CreatureType[CreatureType["Paladin"] = 7] = "Paladin";
      CreatureType[CreatureType["Wizard"] = 8] = "Wizard";
      CreatureType[CreatureType["Necromancer"] = 9] = "Necromancer";
      CreatureType[CreatureType["Archer"] = 10] = "Archer";
      CreatureType[CreatureType["Bard"] = 11] = "Bard";
      CreatureType[CreatureType["DragonEgg"] = 12] = "DragonEgg";
      CreatureType[CreatureType["DemonPortal"] = 13] = "DemonPortal";
      CreatureType[CreatureType["Demon"] = 14] = "Demon";
      CreatureType[CreatureType["Dragon"] = 15] = "Dragon";
      CreatureType[CreatureType["Sorcerous"] = 16] = "Sorcerous";
    })(CreatureType || (CreatureType = {}));

    var Creature = /*#__PURE__*/function () {
      function Creature(name, life, attack, dex, armor, image) {
        _classCallCheck(this, Creature);

        this.name = name;
        this.life = life;
        this.attack = attack;
        this.dex = dex;
        this.armor = armor;
        this.image = '../assets/img/' + image;
        this.currentLife = life;
        this.currentArmor = armor;
      }

      _createClass(Creature, [{
        key: "preCombat",
        value: function preCombat() {
          this.currentLife = this.life;
          this.currentArmor = this.armor;
        }
      }, {
        key: "getCopy",
        value: function getCopy() {
          var value;
          value = new Creature(this.name, this.life, this.attack, this.dex, this.armor, this.image);
          return value;
        }
      }]);

      return Creature;
    }();
    /***/

  },

  /***/
  "./src/app/creaturePool.model.ts":
  /*!***************************************!*\
    !*** ./src/app/creaturePool.model.ts ***!
    \***************************************/

  /*! exports provided: CreaturePool */

  /***/
  function srcAppCreaturePoolModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreaturePool", function () {
      return CreaturePool;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _creature__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./creature */
    "./src/app/creature.ts");

    var CreaturePool = /*#__PURE__*/function () {
      function CreaturePool() {
        _classCallCheck(this, CreaturePool);

        this.tier1 = [];
        this.tier2 = [];
        this.tier3 = [];
      }

      _createClass(CreaturePool, [{
        key: "addCreatureToPool",
        value: function addCreatureToPool(count, creatureType) {
          var name, image;
          var life, attack, dex, armor;
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
              image = 'paladin.png';
              break;

            case _creature__WEBPACK_IMPORTED_MODULE_1__["CreatureType"].Skeleton:
              name = 'Skeleton';
              life = 12;
              attack = 5;
              dex = 8;
              armor = 2;
              image = 'black.jpg';
              break;

            case _creature__WEBPACK_IMPORTED_MODULE_1__["CreatureType"].Wizard:
              name = 'Wizard';
              life = 10;
              attack = 10;
              dex = 8;
              armor = 1;
              image = 'wizard.png';
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
            this.tier1.push(new _creature__WEBPACK_IMPORTED_MODULE_1__["Creature"](name, life, attack, dex, armor, image));
          }
        }
      }, {
        key: "removeCreatureFromPool",
        value: function removeCreatureFromPool(index) {
          console.log('before:' + this.tier1.length);
          this.tier1.splice(index, 1);
          console.log('after:' + this.tier1.length);
        }
      }]);

      return CreaturePool;
    }();
    /***/

  },

  /***/
  "./src/app/gameState.model.ts":
  /*!************************************!*\
    !*** ./src/app/gameState.model.ts ***!
    \************************************/

  /*! exports provided: GameState */

  /***/
  function srcAppGameStateModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GameState", function () {
      return GameState;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var GameState = function GameState(stage, turn, playerList, creaturePool) {
      _classCallCheck(this, GameState);

      this.stage = stage;
      this.turn = turn;
      this.playerList = playerList;
      this.creaturePool = creaturePool;
    };
    /***/

  },

  /***/
  "./src/app/player.model.ts":
  /*!*********************************!*\
    !*** ./src/app/player.model.ts ***!
    \*********************************/

  /*! exports provided: Player */

  /***/
  function srcAppPlayerModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Player", function () {
      return Player;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Player = function Player(name, computerControlled) {
      _classCallCheck(this, Player);

      this.name = name;
      this.life = 40;
      this.gold = 0;
      this.refreshCounter = 10;
      this.computerControlled = computerControlled;
      this.creatureList = [];
    };
    /***/

  },

  /***/
  "./src/app/score-screen/score-screen.component.css":
  /*!*********************************************************!*\
    !*** ./src/app/score-screen/score-screen.component.css ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppScoreScreenScoreScreenComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Njb3JlLXNjcmVlbi9zY29yZS1zY3JlZW4uY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/score-screen/score-screen.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/score-screen/score-screen.component.ts ***!
    \********************************************************/

  /*! exports provided: ScoreScreenComponent */

  /***/
  function srcAppScoreScreenScoreScreenComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ScoreScreenComponent", function () {
      return ScoreScreenComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ScoreScreenComponent = /*#__PURE__*/function () {
      function ScoreScreenComponent() {
        _classCallCheck(this, ScoreScreenComponent);

        this.sortedPlayerList = [];
      }

      _createClass(ScoreScreenComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var currentPlayerList = [];

          for (var i = 0; i < this.localGameState.playerList.length; i++) {
            currentPlayerList.push(this.localGameState.playerList[i]);
          }

          this.sortedPlayerList = currentPlayerList.sort(function (a, b) {
            return b.life - a.life;
          });
          console.log('players creature list length = ' + this.localGameState.playerList[0].creatureList.length); // Print Player List

          for (var i = 0; i < this.localGameState.playerList[0].creatureList.length; i++) {
            console.log(this.localGameState.playerList[0].creatureList[i].name);
          }
        }
      }, {
        key: "onNext",
        value: function onNext() {
          this.localGameState.stage = 2;
        }
      }]);

      return ScoreScreenComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ScoreScreenComponent.prototype, "localGameState", void 0);
    ScoreScreenComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-score-screen',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./score-screen.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/score-screen/score-screen.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./score-screen.component.css */
      "./src/app/score-screen/score-screen.component.css"))["default"]]
    })], ScoreScreenComponent);
    /***/
  },

  /***/
  "./src/app/tavern-app/tavern-app.component.css":
  /*!*****************************************************!*\
    !*** ./src/app/tavern-app/tavern-app.component.css ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTavernAppTavernAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".button {\r\n  border:  none;\r\n  position: relative;\r\n  display: inline-block;\r\n  background: blue;\r\n  color: #fff;\r\n  padding: 0.4em 0.6em;\r\n  font-size: 0.8em;\r\n  border-radius: 1em;\r\n}\r\n\r\nbutton:disabled {\r\n  background: #dddddd;\r\n}\r\n\r\np {\r\n  margin: 0px;\r\n  padding: 0px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGF2ZXJuLWFwcC90YXZlcm4tYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLG9CQUFvQjtFQUNwQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL3RhdmVybi1hcHAvdGF2ZXJuLWFwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ1dHRvbiB7XHJcbiAgYm9yZGVyOiAgbm9uZTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGJhY2tncm91bmQ6IGJsdWU7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgcGFkZGluZzogMC40ZW0gMC42ZW07XHJcbiAgZm9udC1zaXplOiAwLjhlbTtcclxuICBib3JkZXItcmFkaXVzOiAxZW07XHJcbn1cclxuXHJcbmJ1dHRvbjpkaXNhYmxlZCB7XHJcbiAgYmFja2dyb3VuZDogI2RkZGRkZDtcclxufSBcclxuXHJcbnAge1xyXG4gIG1hcmdpbjogMHB4O1xyXG4gIHBhZGRpbmc6IDBweDtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/tavern-app/tavern-app.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/tavern-app/tavern-app.component.ts ***!
    \****************************************************/

  /*! exports provided: TavernAppComponent */

  /***/
  function srcAppTavernAppTavernAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TavernAppComponent", function () {
      return TavernAppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _creature__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../creature */
    "./src/app/creature.ts");
    /* harmony import */


    var _TavernCreature__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../TavernCreature */
    "./src/app/TavernCreature.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var TavernAppComponent = /*#__PURE__*/function () {
      function TavernAppComponent() {
        var _this = this;

        _classCallCheck(this, TavernAppComponent);

        this.counter = 15;
        this.refreshCounter = 0;
        this.tavernCreatureList = [];
        Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["timer"])(1000, 1000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeWhile"])(function () {
          return _this.counter > -1;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function () {
          return _this.counter--;
        }) // map((x) => {
        //   if (this.count === 0) { 
        //     this.localGameState.stage=3; 
        //   }})
        ).subscribe(function () {
          if (_this.counter === -1) {
            _this.localGameState.stage = 3; // Update other players

            for (var i = 1; i < _this.localGameState.playerList.length; i++) {
              var slot = _this.getRandomSlot(1);

              _this.localGameState.playerList[i].creatureList.push(_this.localGameState.creaturePool.tier1[slot]);
            }
          }
        });
      }

      _createClass(TavernAppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          // Grab 3 creatures from the pool that will be for sale
          this.refreshCounter = this.localGameState.playerList[0].refreshCounter;
          this.refreshTavernBoard();
          this.localGameState.playerList[0].gold += 100;
        }
      }, {
        key: "onRefresh",
        value: function onRefresh() {
          if (this.refreshCounter > 0) {
            this.refreshCounter--;
            this.refreshTavernBoard();
          }
        }
      }, {
        key: "onMoveRight",
        value: function onMoveRight(slot) {
          var rightSlot = slot + 1;
          console.log('slot = ' + slot + ', rightSlot = ' + rightSlot);

          if (this.localGameState.playerList[0].creatureList.length > rightSlot) {
            var tempCreature = this.localGameState.playerList[0].creatureList[slot];
            this.localGameState.playerList[0].creatureList[slot] = this.localGameState.playerList[0].creatureList[rightSlot];
            this.localGameState.playerList[0].creatureList[rightSlot] = tempCreature;
          }
        }
      }, {
        key: "getTavernCreature",
        value: function getTavernCreature(index) {
          return this.tavernCreatureList[index];
        }
      }, {
        key: "getPlayersBoard",
        value: function getPlayersBoard(index) {
          if (this.localGameState.playerList[0].creatureList.length > 0) {
            return this.localGameState.playerList[0].creatureList[index];
          }

          return new _creature__WEBPACK_IMPORTED_MODULE_2__["Creature"]("Empty", 1, 2, 3, 4, "noPic");
        }
      }, {
        key: "refreshTavernBoard",
        value: function refreshTavernBoard() {
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
            var poolSlot = this.getRandomSlot(1);
            tempCreature = new _TavernCreature__WEBPACK_IMPORTED_MODULE_3__["TavernCreature"](i, this.localGameState.creaturePool.tier1[poolSlot], poolSlot);
            this.tavernCreatureList.push(tempCreature);
          }
        }
      }, {
        key: "onBuy",
        value: function onBuy(slot) {
          if (this.localGameState.playerList[0].gold >= 100) {
            this.localGameState.playerList[0].gold -= 100;
            this.doPurchase(slot);
          }
        }
      }, {
        key: "doPurchase",
        value: function doPurchase(slot) {
          this.tavernCreatureList[slot].sold = true;
          this.localGameState.creaturePool.removeCreatureFromPool(this.tavernCreatureList[slot].poolSlot);
          console.log("tavern sold slot " + slot);
          console.log("pool  sold slot " + this.tavernCreatureList[slot].poolSlot);
          console.log(this.tavernCreatureList[slot].sold);

          if (this.tavernCreatureList[slot].creature.name === 'Demon Portal') {
            console.log('adding 3 demons');
            this.localGameState.creaturePool.addCreatureToPool(3, _creature__WEBPACK_IMPORTED_MODULE_2__["CreatureType"].Demon); // this.localGameState.playerList[0].creatureList.push(new Creature('Imp', 2, 2, 'blank.jpg'));
          } else if (this.tavernCreatureList[slot].creature.name === 'Dragon Egg') {
            this.localGameState.creaturePool.addCreatureToPool(3, _creature__WEBPACK_IMPORTED_MODULE_2__["CreatureType"].Dragon);
            this.localGameState.playerList[0].creatureList.push(new _creature__WEBPACK_IMPORTED_MODULE_2__["Creature"]('Dragon Protector', 1, 3, 3, 4, 'blank.jpg'));
          } else if (this.tavernCreatureList[slot].creature.name === 'Bard') {
            this.localGameState.playerList[0].creatureList.push(this.tavernCreatureList[slot].creature);
            this.localGameState.playerList[0].refreshCounter++;
          } else {
            this.localGameState.playerList[0].creatureList.push(this.tavernCreatureList[slot].creature);
          } // Print Player List


          for (var i = 0; i < this.localGameState.playerList[0].creatureList.length; i++) {
            console.log(this.localGameState.playerList[0].creatureList[i].name);
          }
        }
      }, {
        key: "triggerFunction",
        value: function triggerFunction() {
          console.log('Timer Ended');
        }
      }, {
        key: "getRandomSlot",
        value: function getRandomSlot(tier) {
          var size = 0;

          if (tier === 1) {
            size = this.localGameState.creaturePool.tier1.length;
          }

          return Math.floor(Math.random() * size + 0);
        }
      }]);

      return TavernAppComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], TavernAppComponent.prototype, "localGameState", void 0);
    TavernAppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-tavern-app',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./tavern-app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tavern-app/tavern-app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./tavern-app.component.css */
      "./src/app/tavern-app/tavern-app.component.css"))["default"]]
    })], TavernAppComponent);
    /***/
  },

  /***/
  "./src/app/title-screen-app/title-screen-app.component.css":
  /*!*****************************************************************!*\
    !*** ./src/app/title-screen-app/title-screen-app.component.css ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTitleScreenAppTitleScreenAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RpdGxlLXNjcmVlbi1hcHAvdGl0bGUtc2NyZWVuLWFwcC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/title-screen-app/title-screen-app.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/title-screen-app/title-screen-app.component.ts ***!
    \****************************************************************/

  /*! exports provided: TitleScreenAppComponent */

  /***/
  function srcAppTitleScreenAppTitleScreenAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TitleScreenAppComponent", function () {
      return TitleScreenAppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var TitleScreenAppComponent = /*#__PURE__*/function () {
      function TitleScreenAppComponent() {
        _classCallCheck(this, TitleScreenAppComponent);
      }

      _createClass(TitleScreenAppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onStartGame",
        value: function onStartGame() {
          this.localGameState.stage = 2;
        }
      }]);

      return TitleScreenAppComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], TitleScreenAppComponent.prototype, "localGameState", void 0);
    TitleScreenAppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-title-screen-app',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./title-screen-app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/title-screen-app/title-screen-app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./title-screen-app.component.css */
      "./src/app/title-screen-app/title-screen-app.component.css"))["default"]]
    })], TitleScreenAppComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\mattp\Documents\GogUpdates\mattpezzuto.github.io\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map