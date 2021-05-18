/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scripts_checking_account__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/checking-account */ "./src/scripts/checking-account.ts");
/* harmony import */ var _scripts_savings_account__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/savings-account */ "./src/scripts/savings-account.ts");
/* harmony import */ var _scripts_account_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/account-list */ "./src/scripts/account-list.ts");
/* harmony import */ var _scripts_renderer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/renderer */ "./src/scripts/renderer.ts");
/* harmony import */ var _scripts_enums__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scripts/enums */ "./src/scripts/enums.ts");
/* harmony import */ var _scripts_atm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scripts/atm */ "./src/scripts/atm.ts");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
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
};






var Main = /** @class */ (function () {
    function Main(renderer) {
        this.renderer = renderer;
    }
    Main.prototype.loadAccounts = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, data, html;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch('/data.json')];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        data = _a.sent();
                        this.checkingAccount = new _scripts_checking_account__WEBPACK_IMPORTED_MODULE_0__["CheckingAccount"](__assign({}, data.checkingAccount));
                        this.savingsAccount = new _scripts_savings_account__WEBPACK_IMPORTED_MODULE_1__["SavingsAccount"](__assign({}, data.savingsAccount));
                        this.atm = new _scripts_atm__WEBPACK_IMPORTED_MODULE_5__["ATM"](this.checkingAccount);
                        html = this.renderAccounts();
                        this.renderer.render("\n            <h2>Welcome to Acme Bank!</h2><br />\n            <image src=\"src/images/acmebank.jpg\" height=\"150\">\n            <br /><br />\n            <h5>Your Accounts:</h5><br />\n            " + html + "\n        ");
                        return [2 /*return*/];
                }
            });
        });
    };
    Main.prototype.changeView = function (view) {
        switch (view) {
            case 'checking':
                this.currentAccount = this.checkingAccount;
                break;
            case 'savings':
                this.currentAccount = this.savingsAccount;
                break;
            case 'atm':
                this.currentAccount = this.checkingAccount;
                this.renderAtm();
                return;
        }
        this.renderAccount(this.currentAccount);
    };
    Main.prototype.renderAtm = function () {
        var html = "\n                <h3>ATM</h3>\n                <image src=\"src/images/atm.jpg\" height=\"150\">\n                <br /><br />\n                Current Checking Account Balance: $" + this.checkingAccount.balance + "\n                <br /><br />\n                $<input type=\"text\" id=\"depositWithdrawalAmount\">&nbsp;&nbsp;\n                <button onclick=\"main.depositWithDrawal(true, true)\">Deposit</button>&nbsp;\n                <button onclick=\"main.depositWithDrawal(false, true)\">Withdrawal</button>&nbsp;\n            ";
        this.renderer.render(html);
    };
    Main.prototype.renderAccounts = function () {
        var acctsHtml = '';
        var accList = new _scripts_account_list__WEBPACK_IMPORTED_MODULE_2__["AccountList"]();
        accList.add(this.checkingAccount);
        accList.add(this.savingsAccount);
        accList.getAccounts().forEach(function (acct, index) {
            acctsHtml += acct.title + '<br />';
        });
        return acctsHtml;
    };
    Main.prototype.renderAccount = function (account) {
        var accountType = _scripts_enums__WEBPACK_IMPORTED_MODULE_4__["AccountType"][account.accountType];
        var html = "\n                <h3>" + accountType + " Account</h3>\n                <image src=\"src/images/" + accountType.toLowerCase() + ".jpg\" height=\"150\">\n                <br /><br />\n                <span class=\"label\">Owner:</span> " + account.title + "\n                <br />\n                <span class=\"label\">Balance:</span> $" + account.balance.toFixed(2) + "\n                <br /><br />\n                $<input type=\"text\" id=\"depositWithdrawalAmount\">&nbsp;&nbsp;\n                <button onclick=\"main.depositWithDrawal(true)\">Deposit</button>&nbsp;\n                <button onclick=\"main.depositWithDrawal(false)\">Withdrawal</button>&nbsp;\n            ";
        this.renderer.render(html);
    };
    Main.prototype.depositWithDrawal = function (deposit, atm) {
        var amountInput = document.querySelector('#depositWithdrawalAmount');
        var amount = +amountInput.value;
        var error;
        try {
            if (deposit) {
                if (atm) {
                    this.atm.deposit(amount);
                }
                else {
                    this.currentAccount.deposit(amount);
                }
            }
            else {
                if (atm) {
                    this.atm.withdrawal(amount);
                }
                else {
                    this.currentAccount.withdrawal(amount);
                }
            }
        }
        catch (e) {
            error = e;
        }
        (atm) ? this.renderAtm() : this.renderAccount(this.currentAccount);
        if (error) {
            this.renderer.renderError(error.message);
        }
    };
    return Main;
}());
// Create main object and add handlers for it
var renderer = new _scripts_renderer__WEBPACK_IMPORTED_MODULE_3__["Renderer"](document.querySelector('#viewTemplate'));
var main = new Main(renderer);
main.loadAccounts();
// Quick and easy way to expose a global API that can hook to the Main object
// so that we can get to it from click and events and others.
// Yes, there are other ways but this gets the job done for this demo.
window.main = main;


/***/ }),

/***/ "./src/scripts/account-list.ts":
/*!*************************************!*\
  !*** ./src/scripts/account-list.ts ***!
  \*************************************/
/*! exports provided: AccountList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountList", function() { return AccountList; });
var AccountList = /** @class */ (function () {
    function AccountList() {
        this._accountList = [];
    }
    AccountList.prototype.add = function (account) {
        this._accountList.push(account);
    };
    AccountList.prototype.getAccounts = function () {
        return this._accountList;
    };
    return AccountList;
}());



/***/ }),

/***/ "./src/scripts/atm.ts":
/*!****************************!*\
  !*** ./src/scripts/atm.ts ***!
  \****************************/
/*! exports provided: ATM */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ATM", function() { return ATM; });
var ATM = /** @class */ (function () {
    function ATM(account) {
        this.account = account;
    }
    ATM.prototype.deposit = function (amount) {
        this.account.deposit(amount);
    };
    ATM.prototype.withdrawal = function (amount) {
        this.account.withdrawal(amount);
    };
    return ATM;
}());



/***/ }),

/***/ "./src/scripts/bank-account.ts":
/*!*************************************!*\
  !*** ./src/scripts/bank-account.ts ***!
  \*************************************/
/*! exports provided: BankAccount */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BankAccount", function() { return BankAccount; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/scripts/constants.ts");

var BankAccount = /** @class */ (function () {
    function BankAccount(accountSettings) {
        this._balance = 0;
        this.id = accountSettings.id;
        this.title = accountSettings.title;
        this.balance = accountSettings.balance;
    }
    BankAccount.prototype.deposit = function (amount) {
        console.log('amount: ', amount);
        this.balance += amount;
    };
    BankAccount.prototype.withdrawal = function (amount) {
        this.balance -= amount;
    };
    BankAccount.prototype.getAccountInfo = function () {
        return {
            routingNumber: _constants__WEBPACK_IMPORTED_MODULE_0__["Constants"].ROUTING_NUMBER,
            bankNumber: _constants__WEBPACK_IMPORTED_MODULE_0__["Constants"].BANK_NUMBER
        };
    };
    Object.defineProperty(BankAccount.prototype, "balance", {
        get: function () {
            return this._balance;
        },
        set: function (val) {
            if (val >= 0) {
                this._balance = val;
            }
            else {
                throw Error('Balance cannot be negative!');
            }
        },
        enumerable: true,
        configurable: true
    });
    return BankAccount;
}());



/***/ }),

/***/ "./src/scripts/checking-account.ts":
/*!*****************************************!*\
  !*** ./src/scripts/checking-account.ts ***!
  \*****************************************/
/*! exports provided: CheckingAccount */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckingAccount", function() { return CheckingAccount; });
/* harmony import */ var _bank_account__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bank-account */ "./src/scripts/bank-account.ts");
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./enums */ "./src/scripts/enums.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var CheckingAccount = /** @class */ (function (_super) {
    __extends(CheckingAccount, _super);
    function CheckingAccount(accountSettings) {
        var _this = _super.call(this, accountSettings) || this;
        _this.accountType = _enums__WEBPACK_IMPORTED_MODULE_1__["AccountType"].Checking;
        return _this;
    }
    return CheckingAccount;
}(_bank_account__WEBPACK_IMPORTED_MODULE_0__["BankAccount"]));



/***/ }),

/***/ "./src/scripts/constants.ts":
/*!**********************************!*\
  !*** ./src/scripts/constants.ts ***!
  \**********************************/
/*! exports provided: Constants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Constants", function() { return Constants; });
var Constants = /** @class */ (function () {
    function Constants() {
    }
    Object.defineProperty(Constants, "ROUTING_NUMBER", {
        get: function () { return '1231A4433Y2'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "BANK_NUMBER", {
        get: function () { return 100008374; },
        enumerable: true,
        configurable: true
    });
    return Constants;
}());



/***/ }),

/***/ "./src/scripts/enums.ts":
/*!******************************!*\
  !*** ./src/scripts/enums.ts ***!
  \******************************/
/*! exports provided: AccountType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountType", function() { return AccountType; });
var AccountType;
(function (AccountType) {
    AccountType[AccountType["Checking"] = 0] = "Checking";
    AccountType[AccountType["Savings"] = 1] = "Savings";
})(AccountType || (AccountType = {}));


/***/ }),

/***/ "./src/scripts/renderer.ts":
/*!*********************************!*\
  !*** ./src/scripts/renderer.ts ***!
  \*********************************/
/*! exports provided: Renderer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Renderer", function() { return Renderer; });
var Renderer = /** @class */ (function () {
    // instance way
    function Renderer(viewTemplate) {
        this.viewTemplate = viewTemplate;
        this.viewTemplate.innerHTML = '<h2>Welcome to Acme Bank!</h2><br /><h5>Your Accounts:</h5><br />';
    }
    Renderer.prototype.render = function (html) {
        this.viewTemplate.innerHTML = html;
    };
    Renderer.prototype.renderError = function (message) {
        this.viewTemplate.innerHTML += "<br /><br /><div class=\"alert alert-danger\">" + message + "</div>";
    };
    return Renderer;
}());



/***/ }),

/***/ "./src/scripts/savings-account.ts":
/*!****************************************!*\
  !*** ./src/scripts/savings-account.ts ***!
  \****************************************/
/*! exports provided: SavingsAccount */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SavingsAccount", function() { return SavingsAccount; });
/* harmony import */ var _bank_account__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bank-account */ "./src/scripts/bank-account.ts");
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./enums */ "./src/scripts/enums.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var SavingsAccount = /** @class */ (function (_super) {
    __extends(SavingsAccount, _super);
    function SavingsAccount(accountSettings) {
        var _this = _super.call(this, accountSettings) || this;
        _this.accountType = _enums__WEBPACK_IMPORTED_MODULE_1__["AccountType"].Savings;
        _this._interestRate = accountSettings.interestRate;
        // Simulate interest over time
        setInterval(function () {
            _this.addInterest();
        }, 60000);
        return _this;
    }
    SavingsAccount.prototype.addInterest = function () {
        this.balance = this.balance + (this.balance * (this._interestRate / 100));
    };
    SavingsAccount.prototype.deposit = function (amount) {
        var newAmount = amount + (amount * (this._interestRate / 100));
        this.balance += newAmount;
    };
    return SavingsAccount;
}(_bank_account__WEBPACK_IMPORTED_MODULE_0__["BankAccount"]));



/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvYWNjb3VudC1saXN0LnRzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2F0bS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9iYW5rLWFjY291bnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvY2hlY2tpbmctYWNjb3VudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9jb25zdGFudHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvZW51bXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvcmVuZGVyZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvc2F2aW5ncy1hY2NvdW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7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QWEsR0FBRyxHQUFHLENBQUMsQ0FBQztRQUM5RCxJQUFJLENBQUMsT0FBTyxJQUFJLFNBQVM7SUFDN0IsQ0FBQztJQUdMLHFCQUFDO0FBQUQsQ0FBQyxDQXhCbUMseURBQVcsR0F3QjlDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL21haW4udHNcIik7XG4iLCJpbXBvcnQgeyBDaGVja2luZ0FjY291bnQgfSBmcm9tICcuL3NjcmlwdHMvY2hlY2tpbmctYWNjb3VudCc7XG5pbXBvcnQgeyBTYXZpbmdzQWNjb3VudCB9IGZyb20gJy4vc2NyaXB0cy9zYXZpbmdzLWFjY291bnQnO1xuaW1wb3J0IHsgQWNjb3VudExpc3QgfSBmcm9tICcuL3NjcmlwdHMvYWNjb3VudC1saXN0JztcbmltcG9ydCB7IEJhbmtBY2NvdW50IH0gZnJvbSAnLi9zY3JpcHRzL2JhbmstYWNjb3VudCc7XG5pbXBvcnQgeyBSZW5kZXJlciB9IGZyb20gJy4vc2NyaXB0cy9yZW5kZXJlcic7XG5pbXBvcnQgeyBBY2NvdW50VHlwZSB9IGZyb20gJy4vc2NyaXB0cy9lbnVtcyc7XG5pbXBvcnQgeyBBVE0gfSBmcm9tICcuL3NjcmlwdHMvYXRtJztcblxuY2xhc3MgTWFpbiB7XG4gICAgY2hlY2tpbmdBY2NvdW50OiBDaGVja2luZ0FjY291bnQ7XG4gICAgc2F2aW5nc0FjY291bnQ6IFNhdmluZ3NBY2NvdW50O1xuICAgIGN1cnJlbnRBY2NvdW50OiBCYW5rQWNjb3VudDtcbiAgICBhdG06IEFUTTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyKSB7IH1cblxuICAgIGFzeW5jIGxvYWRBY2NvdW50cygpIHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL2RhdGEuanNvbicpO1xuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICB0aGlzLmNoZWNraW5nQWNjb3VudCA9IG5ldyBDaGVja2luZ0FjY291bnQoeyAuLi5kYXRhLmNoZWNraW5nQWNjb3VudCB9KTtcbiAgICAgICAgdGhpcy5zYXZpbmdzQWNjb3VudCA9IG5ldyBTYXZpbmdzQWNjb3VudCh7IC4uLmRhdGEuc2F2aW5nc0FjY291bnQgfSk7XG4gICAgICAgIHRoaXMuYXRtID0gbmV3IEFUTSh0aGlzLmNoZWNraW5nQWNjb3VudCk7XG5cbiAgICAgICAgbGV0IGh0bWwgPSB0aGlzLnJlbmRlckFjY291bnRzKCk7XG4gICAgICAgIHRoaXMucmVuZGVyZXIucmVuZGVyKGBcbiAgICAgICAgICAgIDxoMj5XZWxjb21lIHRvIEFjbWUgQmFuayE8L2gyPjxiciAvPlxuICAgICAgICAgICAgPGltYWdlIHNyYz1cInNyYy9pbWFnZXMvYWNtZWJhbmsuanBnXCIgaGVpZ2h0PVwiMTUwXCI+XG4gICAgICAgICAgICA8YnIgLz48YnIgLz5cbiAgICAgICAgICAgIDxoNT5Zb3VyIEFjY291bnRzOjwvaDU+PGJyIC8+XG4gICAgICAgICAgICAke2h0bWx9XG4gICAgICAgIGApO1xuICAgIH1cblxuICAgIGNoYW5nZVZpZXcodmlldz86IHN0cmluZykge1xuICAgICAgICBzd2l0Y2ggKHZpZXcpIHtcbiAgICAgICAgICAgIGNhc2UgJ2NoZWNraW5nJzpcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRBY2NvdW50ID0gdGhpcy5jaGVja2luZ0FjY291bnQ7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdzYXZpbmdzJzpcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRBY2NvdW50ID0gdGhpcy5zYXZpbmdzQWNjb3VudDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2F0bSc6XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50QWNjb3VudCA9IHRoaXMuY2hlY2tpbmdBY2NvdW50O1xuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyQXRtKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVuZGVyQWNjb3VudCh0aGlzLmN1cnJlbnRBY2NvdW50KTtcbiAgICB9XG5cbiAgICByZW5kZXJBdG0oKSB7XG4gICAgICAgIGNvbnN0IGh0bWwgPSBgXG4gICAgICAgICAgICAgICAgPGgzPkFUTTwvaDM+XG4gICAgICAgICAgICAgICAgPGltYWdlIHNyYz1cInNyYy9pbWFnZXMvYXRtLmpwZ1wiIGhlaWdodD1cIjE1MFwiPlxuICAgICAgICAgICAgICAgIDxiciAvPjxiciAvPlxuICAgICAgICAgICAgICAgIEN1cnJlbnQgQ2hlY2tpbmcgQWNjb3VudCBCYWxhbmNlOiAkJHt0aGlzLmNoZWNraW5nQWNjb3VudC5iYWxhbmNlfVxuICAgICAgICAgICAgICAgIDxiciAvPjxiciAvPlxuICAgICAgICAgICAgICAgICQ8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cImRlcG9zaXRXaXRoZHJhd2FsQW1vdW50XCI+Jm5ic3A7Jm5ic3A7XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbmNsaWNrPVwibWFpbi5kZXBvc2l0V2l0aERyYXdhbCh0cnVlLCB0cnVlKVwiPkRlcG9zaXQ8L2J1dHRvbj4mbmJzcDtcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uY2xpY2s9XCJtYWluLmRlcG9zaXRXaXRoRHJhd2FsKGZhbHNlLCB0cnVlKVwiPldpdGhkcmF3YWw8L2J1dHRvbj4mbmJzcDtcbiAgICAgICAgICAgIGA7XG4gICAgICAgIHRoaXMucmVuZGVyZXIucmVuZGVyKGh0bWwpO1xuICAgIH1cblxuICAgIHJlbmRlckFjY291bnRzKCkge1xuICAgICAgICBsZXQgYWNjdHNIdG1sOiBzdHJpbmcgPSAnJztcbiAgICAgICAgY29uc3QgYWNjTGlzdCA9IG5ldyBBY2NvdW50TGlzdCgpO1xuICAgICAgICBhY2NMaXN0LmFkZCh0aGlzLmNoZWNraW5nQWNjb3VudCk7XG4gICAgICAgIGFjY0xpc3QuYWRkKHRoaXMuc2F2aW5nc0FjY291bnQpO1xuXG4gICAgICAgIGFjY0xpc3QuZ2V0QWNjb3VudHMoKS5mb3JFYWNoKChhY2N0LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgYWNjdHNIdG1sICs9IGFjY3QudGl0bGUgKyAnPGJyIC8+JztcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBhY2N0c0h0bWw7XG4gICAgfVxuXG4gICAgcmVuZGVyQWNjb3VudChhY2NvdW50OiBCYW5rQWNjb3VudCkge1xuICAgICAgICBjb25zdCBhY2NvdW50VHlwZSA9IEFjY291bnRUeXBlW2FjY291bnQuYWNjb3VudFR5cGVdO1xuICAgICAgICBjb25zdCBodG1sID0gYFxuICAgICAgICAgICAgICAgIDxoMz4ke2FjY291bnRUeXBlfSBBY2NvdW50PC9oMz5cbiAgICAgICAgICAgICAgICA8aW1hZ2Ugc3JjPVwic3JjL2ltYWdlcy8ke2FjY291bnRUeXBlLnRvTG93ZXJDYXNlKCl9LmpwZ1wiIGhlaWdodD1cIjE1MFwiPlxuICAgICAgICAgICAgICAgIDxiciAvPjxiciAvPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibGFiZWxcIj5Pd25lcjo8L3NwYW4+ICR7YWNjb3VudC50aXRsZX1cbiAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImxhYmVsXCI+QmFsYW5jZTo8L3NwYW4+ICQke2FjY291bnQuYmFsYW5jZS50b0ZpeGVkKDIpfVxuICAgICAgICAgICAgICAgIDxiciAvPjxiciAvPlxuICAgICAgICAgICAgICAgICQ8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cImRlcG9zaXRXaXRoZHJhd2FsQW1vdW50XCI+Jm5ic3A7Jm5ic3A7XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbmNsaWNrPVwibWFpbi5kZXBvc2l0V2l0aERyYXdhbCh0cnVlKVwiPkRlcG9zaXQ8L2J1dHRvbj4mbmJzcDtcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uY2xpY2s9XCJtYWluLmRlcG9zaXRXaXRoRHJhd2FsKGZhbHNlKVwiPldpdGhkcmF3YWw8L2J1dHRvbj4mbmJzcDtcbiAgICAgICAgICAgIGA7XG4gICAgICAgIHRoaXMucmVuZGVyZXIucmVuZGVyKGh0bWwpO1xuICAgIH1cblxuICAgIGRlcG9zaXRXaXRoRHJhd2FsKGRlcG9zaXQ6IGJvb2xlYW4sIGF0bT86IGJvb2xlYW4pIHtcbiAgICAgICAgbGV0IGFtb3VudElucHV0OiBIVE1MSW5wdXRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RlcG9zaXRXaXRoZHJhd2FsQW1vdW50Jyk7XG4gICAgICAgIGxldCBhbW91bnQgPSArYW1vdW50SW5wdXQudmFsdWU7XG4gICAgICAgIGxldCBlcnJvcjtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmIChkZXBvc2l0KSB7XG4gICAgICAgICAgICAgICAgaWYgKGF0bSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmF0bS5kZXBvc2l0KGFtb3VudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRBY2NvdW50LmRlcG9zaXQoYW1vdW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoYXRtKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXRtLndpdGhkcmF3YWwoYW1vdW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEFjY291bnQud2l0aGRyYXdhbChhbW91bnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgZXJyb3IgPSBlO1xuICAgICAgICB9XG5cbiAgICAgICAgKGF0bSkgPyB0aGlzLnJlbmRlckF0bSgpOiB0aGlzLnJlbmRlckFjY291bnQodGhpcy5jdXJyZW50QWNjb3VudCk7XG4gICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5yZW5kZXJFcnJvcihlcnJvci5tZXNzYWdlKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLy8gQ3JlYXRlIG1haW4gb2JqZWN0IGFuZCBhZGQgaGFuZGxlcnMgZm9yIGl0XG5jb25zdCByZW5kZXJlciA9IG5ldyBSZW5kZXJlcihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdmlld1RlbXBsYXRlJykpO1xuY29uc3QgbWFpbiA9IG5ldyBNYWluKHJlbmRlcmVyKTtcbm1haW4ubG9hZEFjY291bnRzKCk7XG5cbi8vIFF1aWNrIGFuZCBlYXN5IHdheSB0byBleHBvc2UgYSBnbG9iYWwgQVBJIHRoYXQgY2FuIGhvb2sgdG8gdGhlIE1haW4gb2JqZWN0XG4vLyBzbyB0aGF0IHdlIGNhbiBnZXQgdG8gaXQgZnJvbSBjbGljayBhbmQgZXZlbnRzIGFuZCBvdGhlcnMuXG4vLyBZZXMsIHRoZXJlIGFyZSBvdGhlciB3YXlzIGJ1dCB0aGlzIGdldHMgdGhlIGpvYiBkb25lIGZvciB0aGlzIGRlbW8uXG4oPGFueT53aW5kb3cpLm1haW4gPSBtYWluO1xuIiwiaW1wb3J0IHtCYW5rQWNjb3VudH0gZnJvbSBcIi4vYmFuay1hY2NvdW50XCI7XG5cbmV4cG9ydCBjbGFzcyBBY2NvdW50TGlzdCB7XG4gICAgX2FjY291bnRMaXN0OiBCYW5rQWNjb3VudFtdID0gW107XG5cbiAgICBhZGQoYWNjb3VudDogQmFua0FjY291bnQpIHtcbiAgICAgICAgdGhpcy5fYWNjb3VudExpc3QucHVzaChhY2NvdW50KVxuICAgIH1cblxuICAgIGdldEFjY291bnRzKCk6IEJhbmtBY2NvdW50W10ge1xuICAgICAgICByZXR1cm4gIHRoaXMuX2FjY291bnRMaXN0XG4gICAgfVxufVxuXG4iLCJpbXBvcnQgeyBEZXBvc2l0V2l0aGRyYXdhbCwgQWNjb3VudCB9IGZyb20gJy4vaW50ZXJmYWNlcyc7XG5cbmV4cG9ydCBjbGFzcyBBVE0gaW1wbGVtZW50cyBEZXBvc2l0V2l0aGRyYXdhbCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFjY291bnQ6IEFjY291bnQpIHsgfVxuXG4gICAgZGVwb3NpdChhbW91bnQ6IG51bWJlcikge1xuICAgICAgICB0aGlzLmFjY291bnQuZGVwb3NpdChhbW91bnQpO1xuICAgIH1cblxuICAgIHdpdGhkcmF3YWwoYW1vdW50OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5hY2NvdW50LndpdGhkcmF3YWwoYW1vdW50KTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBBY2NvdW50VHlwZSB9IGZyb20gJy4vZW51bXMnO1xuaW1wb3J0IHtBY2NvdW50LCBBY2NvdW50SW5mbywgQWNjb3VudFNldHRpbmdzfSBmcm9tIFwiLi9pbnRlcmZhY2VzXCI7XG5pbXBvcnQge0NvbnN0YW50c30gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBCYW5rQWNjb3VudCBpbXBsZW1lbnRzIEFjY291bnQge1xuICAgIHByaXZhdGUgX2JhbGFuY2UgPSAwO1xuICAgIGlkOiBudW1iZXI7XG4gICAgdGl0bGU6IHN0cmluZztcbiAgICBhYnN0cmFjdCBhY2NvdW50VHlwZTogQWNjb3VudFR5cGU7XG5cbiAgICBjb25zdHJ1Y3RvcihhY2NvdW50U2V0dGluZ3M6IEFjY291bnRTZXR0aW5ncykge1xuICAgICAgICB0aGlzLmlkID0gYWNjb3VudFNldHRpbmdzLmlkO1xuICAgICAgICB0aGlzLnRpdGxlID0gYWNjb3VudFNldHRpbmdzLnRpdGxlO1xuICAgICAgICB0aGlzLmJhbGFuY2UgPSBhY2NvdW50U2V0dGluZ3MuYmFsYW5jZTtcbiAgICB9XG5cbiAgICBkZXBvc2l0KGFtb3VudDogbnVtYmVyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdhbW91bnQ6ICcsIGFtb3VudClcbiAgICAgICAgdGhpcy5iYWxhbmNlICs9IGFtb3VudDtcbiAgICB9XG5cbiAgICB3aXRoZHJhd2FsKGFtb3VudDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuYmFsYW5jZSAtPSBhbW91bnQ7XG4gICAgfVxuXG4gICAgZ2V0QWNjb3VudEluZm8oKTogQWNjb3VudEluZm88c3RyaW5nLCBudW1iZXI+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHJvdXRpbmdOdW1iZXI6IENvbnN0YW50cy5ST1VUSU5HX05VTUJFUixcbiAgICAgICAgICAgIGJhbmtOdW1iZXI6IENvbnN0YW50cy5CQU5LX05VTUJFUlxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0IGJhbGFuY2UoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9iYWxhbmNlO1xuICAgIH1cblxuICAgIHNldCBiYWxhbmNlKHZhbDogbnVtYmVyKSB7XG4gICAgICAgIGlmICh2YWwgPj0gMCkge1xuICAgICAgICAgICAgdGhpcy5fYmFsYW5jZSA9IHZhbDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IEVycm9yKCdCYWxhbmNlIGNhbm5vdCBiZSBuZWdhdGl2ZSEnKTtcbiAgICAgICAgfVxuICAgIH1cblxufVxuIiwiaW1wb3J0IHtCYW5rQWNjb3VudH0gZnJvbSBcIi4vYmFuay1hY2NvdW50XCI7XG5pbXBvcnQgeyBBY2NvdW50VHlwZSB9IGZyb20gXCIuL2VudW1zXCI7XG5cbmV4cG9ydCBjbGFzcyBDaGVja2luZ0FjY291bnQgZXh0ZW5kcyBCYW5rQWNjb3VudHtcbiAgICBhY2NvdW50VHlwZSA9IEFjY291bnRUeXBlLkNoZWNraW5nXG4gICAgY29uc3RydWN0b3IoYWNjb3VudFNldHRpbmdzOiBhbnkpIHtcbiAgICAgICAgc3VwZXIoYWNjb3VudFNldHRpbmdzKTtcbiAgICB9XG5cbn1cbiIsImV4cG9ydCBjbGFzcyBDb25zdGFudHMge1xyXG4gICAgc3RhdGljIGdldCBST1VUSU5HX05VTUJFUigpOiBzdHJpbmcgeyByZXR1cm4gJzEyMzFBNDQzM1kyJzsgfVxyXG4gICAgc3RhdGljIGdldCBCQU5LX05VTUJFUigpOiBudW1iZXIgeyByZXR1cm4gMTAwMDA4Mzc0OyB9XHJcbn0iLCJleHBvcnQgZW51bSBBY2NvdW50VHlwZSB7XG4gICAgQ2hlY2tpbmcsXG4gICAgU2F2aW5nc1xufVxuIiwiZXhwb3J0IGNsYXNzIFJlbmRlcmVyIHtcbiAgICAvLyBpbnN0YW5jZSB3YXlcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHZpZXdUZW1wbGF0ZTogSFRNTERpdkVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy52aWV3VGVtcGxhdGUuaW5uZXJIVE1MID0gJzxoMj5XZWxjb21lIHRvIEFjbWUgQmFuayE8L2gyPjxiciAvPjxoNT5Zb3VyIEFjY291bnRzOjwvaDU+PGJyIC8+JztcbiAgICB9XG5cbiAgICByZW5kZXIoaHRtbDogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMudmlld1RlbXBsYXRlLmlubmVySFRNTCA9IGh0bWw7XG4gICAgfVxuXG4gICAgcmVuZGVyRXJyb3IobWVzc2FnZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMudmlld1RlbXBsYXRlLmlubmVySFRNTCArPSBgPGJyIC8+PGJyIC8+PGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiPiR7bWVzc2FnZX08L2Rpdj5gO1xuICAgIH1cblxuXG5cbiAgICAvLyBzdGF0aWMgd2F5XG4gICAgLy8gc3RhdGljIHZpZXdUZW1wbGF0ZTogSFRNTERpdkVsZW1lbnQ7XG5cbiAgICAvLyBzdGF0aWMgcmVuZGVyKGh0bWw6IHN0cmluZykge1xuICAgIC8vICAgICBSZW5kZXJlci52aWV3VGVtcGxhdGUuaW5uZXJIVE1MID0gaHRtbDtcbiAgICAvLyB9XG59XG4iLCJpbXBvcnQgeyBCYW5rQWNjb3VudCB9IGZyb20gJy4vYmFuay1hY2NvdW50JztcbmltcG9ydCB7QWNjb3VudFR5cGV9IGZyb20gXCIuL2VudW1zXCI7XG5pbXBvcnQge0FjY291bnRTZXR0aW5nc30gZnJvbSBcIi4vaW50ZXJmYWNlc1wiO1xuXG5leHBvcnQgY2xhc3MgU2F2aW5nc0FjY291bnQgZXh0ZW5kcyBCYW5rQWNjb3VudCB7XG4gICAgcHJpdmF0ZSBfaW50ZXJlc3RSYXRlOiBudW1iZXI7XG4gICAgYWNjb3VudFR5cGUgPSBBY2NvdW50VHlwZS5TYXZpbmdzXG5cbiAgICBjb25zdHJ1Y3RvcihhY2NvdW50U2V0dGluZ3M6IEFjY291bnRTZXR0aW5ncykge1xuICAgICAgICBzdXBlcihhY2NvdW50U2V0dGluZ3MpO1xuICAgICAgICB0aGlzLl9pbnRlcmVzdFJhdGUgPSBhY2NvdW50U2V0dGluZ3MuaW50ZXJlc3RSYXRlO1xuXG4gICAgICAgIC8vIFNpbXVsYXRlIGludGVyZXN0IG92ZXIgdGltZVxuICAgICAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmFkZEludGVyZXN0KClcbiAgICAgICAgfSwgNjAwMDApXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhZGRJbnRlcmVzdCgpIHtcbiAgICAgICAgdGhpcy5iYWxhbmNlID0gdGhpcy5iYWxhbmNlICsgKHRoaXMuYmFsYW5jZSAqICh0aGlzLl9pbnRlcmVzdFJhdGUgLyAxMDApKVxuICAgIH1cblxuICAgIGRlcG9zaXQoYW1vdW50OiBudW1iZXIpIHtcbiAgICAgICAgbGV0IG5ld0Ftb3VudCA9IGFtb3VudCArIChhbW91bnQgKiAodGhpcy5faW50ZXJlc3RSYXRlIC8gMTAwKSlcbiAgICAgICAgdGhpcy5iYWxhbmNlICs9IG5ld0Ftb3VudFxuICAgIH1cblxuXG59XG5cbiJdLCJzb3VyY2VSb290IjoiIn0=