(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<app-bot-container></app-bot-container>\n<router-outlet></router-outlet>\n "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/bot/bot-container/bot-container.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/bot/bot-container/bot-container.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"grid-container-fluid\">\n<app-nav-bot [navColor] =\"styles.navColor\" [fontColor]=\"styles.fontColor\"></app-nav-bot>\n<div class=\"central-div\"> \n  <div class=\"chat\">\n    <app-bubbles\n      [bubbles]=\"bubbles\" \n       [src] = 'url'\n       [urlIframe]=\"urlIframe | safeResource: 'resourceUrl'\"\n    ></app-bubbles>\n  </div>\n</div>\n<app-footer-bot (bubble)=\"emitMsgBubble($event)\"></app-footer-bot>\n</div>\n "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/bot/bot-footer/footer-bot.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/bot/bot-footer/footer-bot.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"grid-container-fluid\">\n  <footer class=\"grid-row bot\">\n      <mat-form-field appearance=\"outline\"  \n      class=\"grid-col-lg-10 grid-col-lg-offset-1 grid-col-md-10 grid-col-md-offset-1  grid-col-sm-10 grid-col-sm-offset-1  grid-col-xs-10 grid-col-xs-offset-1 \">\n        <input matInput type=\"text\" [placeholder]=\" msg.getMessage(msgId.INPUT_PLACEHOLDER)\" (keydown.enter)=\"sendMessage(userMessage)\" #userMessage>\n      </mat-form-field>\n  </footer>\n</div>   "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/bot/bubbles/bubbles.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/bot/bubbles/bubbles.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ol class=\"chat\" #scrollMe [scrollTop]=\"scrollMe.scrollHeight\">\n  <li\n    *ngFor=\"let bubble of bubbles; let i = index\"\n    class=\"grid-col-lg-10 grid-col-md-10 grid-col-sm-10 grid-col-xs-10\"\n  >\n    <div\n      class=\"bubble\"\n      [ngClass]=\"{\n        'bubbleRowLeft bubbleL': bubble.isBot,\n        ' bubbleRowRight bubbleR': !bubble.isBot\n      }\"\n    >\n      <div class=\"talktext\">\n        <p>\n          {{ bubble.message }}\n          <iframe\n            [src]=\"urlIframe\"\n            frameborder=\"0\"\n            *ngIf=\"urlIframe && bubble.isBot\"\n            sandbox=\"allow-same-origin allow-scripts allow-presentation\"\n          ></iframe>\n          <small *ngIf=\"bubble.date\">{{ bubble.date }}</small>\n        </p>\n      </div>\n    </div>\n    <img\n        class=\"botIcon\"\n        [ngClass]=\"{\n          botIconPast: !bubble.isActive,\n          iconLeft: bubble.isBot,\n          iconRight: !bubble.isBot\n        }\"\n        src=\"{{ bubble.isBot ? getIcon(true) : getIcon(false) }}\"\n      />\n  </li>\n</ol>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/bot/nav-bot/nav-bot.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/bot/nav-bot/nav-bot.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"grid-container-fluid\">\n  <div class=\"grid-row\" [ngStyle]=\"{'background-color':navColor}\">\n    <div class=\"grid-col-lg-4\"></div>\n   <div class=\"grid-col-lg-4\"  [ngStyle]=\"{'color': fontColor }\" class=\"nav-brand\">\n     <h4 class=\"text-shadowed\">{{ msg.getMessage(msgId.WELCOME)}}</h4>\n     <img src=\"/assets/img/botNav.png\" class=\"bot-nav\">\n   </div>\n   <div class=\"grid-col-lg-8\"></div>\n  </div> \n  <mat-divider></mat-divider> \n</nav>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/form-custom/form-custom.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/form-custom/form-custom.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"grid-container\">\n    <h3>Custom Bot</h3>\n  <form [formGroup]= \"styleForm\" class=\"grid-row\" (ngSubmit)=\"saveStyles(styleForm.value)\">\n    <mat-form-field\n      appearance=\"outline\"\n      floatLabel=\"always\"\n      class=\"grid-col-lg-10\"\n    >\n      <mat-label>Insert Hexadecimal color for navbar</mat-label>\n      <input matInput formControlName=\"navColor\"/>\n      <mat-icon matSuffix>sentiment_very_satisfied</mat-icon>\n    </mat-form-field>\n    <mat-form-field\n      appearance=\"outline\"\n      floatLabel=\"always\"\n      class=\"grid-col-lg-10\"\n    >\n      <mat-label>Insert Image Background url</mat-label>\n      <input matInput formControlName=\"url\" />\n      <mat-icon matSuffix>sentiment_very_satisfied</mat-icon>\n    </mat-form-field>\n    <mat-form-field\n      appearance=\"outline\"\n      floatLabel=\"always\"\n      class=\"grid-col-lg-10\"\n    >\n      <mat-label>Inser Hexadecimal color for  font nav</mat-label>\n      <input matInput formControlName=\"fontColor\" />\n      <mat-icon matSuffix>sentiment_very_satisfied</mat-icon>\n    </mat-form-field>\n    <mat-form-field\n      appearance=\"outline\"\n      floatLabel=\"always\"\n      class=\"grid-col-lg-10\"\n    >\n      <mat-label>Inser Hexadecimal </mat-label>\n      <input matInput formControlName=\"footColor\" />\n      <mat-icon matSuffix>sentiment_very_satisfied</mat-icon>\n    </mat-form-field>\n    <mat-form-field\n      appearance=\"outline\"\n      floatLabel=\"always\"\n      class=\"grid-col-lg-10\"\n    >\n      <mat-label>Inser Hexadecimalform field</mat-label>\n      <input matInput formControlName=\"fontSize\" />\n      <mat-icon matSuffix>sentiment_very_satisfied</mat-icon>\n    </mat-form-field>\n    <mat-form-field\n      appearance=\"outline\"\n      floatLabel=\"always\"\n      class=\"grid-col-lg-10\"\n    >\n      <mat-label>Inser Hexadecimalform field</mat-label>\n      <input matInput formControlName=\"bubbleUser\" />\n      <mat-icon matSuffix>sentiment_very_satisfied</mat-icon>\n    </mat-form-field>\n    <mat-form-field\n      appearance=\"outline\"\n      floatLabel=\"always\"\n      class=\"grid-col-lg-10\"\n    >\n      <mat-label>Inser Hexadecimalform field</mat-label>\n      <input matInput formControlName=\"bubbleBot\" />\n      <mat-icon matSuffix>sentiment_very_satisfied</mat-icon>\n    </mat-form-field>\n    <button type=\"submit\" mat-flat-button color=\"primary\">Apply styles</button>\n  </form>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/main/main.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/main/main.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <mat-sidenav-container class=\"example-container\">\n  <mat-sidenav #sidenav mode=\"side\" [(opened)]=\"opened\" class=\"sidenav\">\n      <app-form-custom (styles)=\"loadStyles($event)\"> \n      </app-form-custom>\n </mat-sidenav>\n  <mat-sidenav-content>\n    <nav>\n        <button mat-button-icon (click) =\"sidenav.toggle()\">\n            <mat-icon>menu</mat-icon>\n        </button>\n        <span>Customize Bot</span>\n    </nav>\n    <div class=\"container\">\n      <div>\n        <app-central-div></app-central-div> \n      </div>\n    </div>\n    <footer>footer</footer>\n  </mat-sidenav-content>\n</mat-sidenav-container>\n<div></div> -->"

/***/ }),

/***/ "./node_modules/webpack/hot sync ^\\.\\/log$":
/*!*************************************************!*\
  !*** (webpack)/hot sync nonrecursive ^\.\/log$ ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./log": "./node_modules/webpack/hot/log.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/webpack/hot sync ^\\.\\/log$";

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'cloneParla';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm2015/form-field.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_bot_bot_footer_footer_bot_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/bot/bot-footer/footer-bot.component */ "./src/app/components/bot/bot-footer/footer-bot.component.ts");
/* harmony import */ var _components_bot_bubbles_bubbles_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/bot/bubbles/bubbles-component */ "./src/app/components/bot/bubbles/bubbles-component.ts");
/* harmony import */ var _shared_pipes_safe_resource_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/pipes/safe-resource.pipe */ "./src/app/shared/pipes/safe-resource.pipe.ts");
/* harmony import */ var _views_main_main_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./views/main/main.component */ "./src/app/views/main/main.component.ts");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm2015/sidenav.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm2015/drag-drop.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _components_form_custom_form_custom_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/form-custom/form-custom.component */ "./src/app/components/form-custom/form-custom.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _components_bot_bot_container_bot_container_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/bot/bot-container/bot-container.component */ "./src/app/components/bot/bot-container/bot-container.component.ts");
/* harmony import */ var _components_bot_nav_bot_nav_bot_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/bot/nav-bot/nav-bot.component */ "./src/app/components/bot/nav-bot/nav-bot.component.ts");



















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
            _components_bot_bot_footer_footer_bot_component__WEBPACK_IMPORTED_MODULE_8__["FooterBotComponent"],
            _components_bot_nav_bot_nav_bot_component__WEBPACK_IMPORTED_MODULE_18__["NavBotComponent"],
            _components_bot_bot_container_bot_container_component__WEBPACK_IMPORTED_MODULE_17__["BotContainerComponent"],
            _components_bot_bubbles_bubbles_component__WEBPACK_IMPORTED_MODULE_9__["BubblesComponent"],
            _shared_pipes_safe_resource_pipe__WEBPACK_IMPORTED_MODULE_10__["SafeResourcePipe"],
            _views_main_main_component__WEBPACK_IMPORTED_MODULE_11__["MainComponent"],
            _components_form_custom_form_custom_component__WEBPACK_IMPORTED_MODULE_15__["FormCustomComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__["MatSidenavModule"],
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_13__["DragDropModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIconModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ReactiveFormsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonToggleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDividerModule"],
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/bot/bot-container/bot-container.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/components/bot/bot-container/bot-container.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body .grid-container-fluid {\n  width: 96%;\n  background-image: url(\"/../assets/img/back0005.png\");\n}\n\n.chat {\n  text-align: center;\n  list-style: none;\n  background: none;\n  margin: 0;\n  position: absolute;\n  top: 60px;\n  height: 100%;\n  width: 98.3%;\n  overflow-y: scroll;\n  padding-right: 17px;\n  z-index: -10;\n  background-image: url(\"/../assets/img/back0005.png\");\n  background-size: 100%;\n  opacity: 0.7;\n}\n\n.chat li {\n  padding: 0.5rem;\n  overflow: hidden;\n  display: -webkit-box;\n  display: flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZHJpYW5hamF1cmVndWkvRG9jdW1lbnRzL2Nsb25lUGFybGEvc3JjL2FwcC9jb21wb25lbnRzL2JvdC9ib3QtY29udGFpbmVyL2JvdC1jb250YWluZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvYm90L2JvdC1jb250YWluZXIvYm90LWNvbnRhaW5lci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLFVBQUE7RUFDQSxvREFBQTtBQ0FSOztBRElBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxvREFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtBQ0RKOztBREdBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2JvdC9ib3QtY29udGFpbmVyL2JvdC1jb250YWluZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5e1xuICAgIC5ncmlkLWNvbnRhaW5lci1mbHVpZHtcbiAgICAgICAgd2lkdGg6IDk2JTtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvLi4vYXNzZXRzL2ltZy9iYWNrMDAwNS5wbmcnKTtcbiAgICB9XG4gICAgXG59XG4uY2hhdCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBtYXJnaW46IDA7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDo2MHB4O1xuICAgIGhlaWdodDogMTAwJTsgXG4gICAgd2lkdGg6IDk4LjMlO1xuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxN3B4O1xuICAgIHotaW5kZXg6IC0xMDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy8uLi9hc3NldHMvaW1nL2JhY2swMDA1LnBuZycpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcbiAgICBvcGFjaXR5OiAuNztcbn1cbi5jaGF0IGxpIHtcbiAgICBwYWRkaW5nOiAwLjVyZW07XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBkaXNwbGF5OiBmbGV4O1xufSIsImJvZHkgLmdyaWQtY29udGFpbmVyLWZsdWlkIHtcbiAgd2lkdGg6IDk2JTtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLy4uL2Fzc2V0cy9pbWcvYmFjazAwMDUucG5nXCIpO1xufVxuXG4uY2hhdCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgbWFyZ2luOiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNjBweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogOTguMyU7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgcGFkZGluZy1yaWdodDogMTdweDtcbiAgei1pbmRleDogLTEwO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvLi4vYXNzZXRzL2ltZy9iYWNrMDAwNS5wbmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcbiAgb3BhY2l0eTogMC43O1xufVxuXG4uY2hhdCBsaSB7XG4gIHBhZGRpbmc6IDAuNXJlbTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZGlzcGxheTogZmxleDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/bot/bot-container/bot-container.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/bot/bot-container/bot-container.component.ts ***!
  \*************************************************************************/
/*! exports provided: BotContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BotContainerComponent", function() { return BotContainerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_enums_message_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/enums/message.enum */ "./src/app/shared/enums/message.enum.ts");
/* harmony import */ var src_app_services_message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/message.service */ "./src/app/services/message.service.ts");
/* harmony import */ var src_app_services_custom_bot_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/custom-bot.service */ "./src/app/services/custom-bot.service.ts");





let BotContainerComponent = class BotContainerComponent {
    constructor(msg, cbS) {
        this.msg = msg;
        this.cbS = cbS;
        this.bubbles = [];
        // this.urlIframe = 'https://www.youtube.com/embed/EqWLpTKBFcU';
    }
    ngOnInit() {
        this.initGreeting();
        this.cbS.getStyles().subscribe((data) => {
            console.log(data);
            this.styles = data;
        });
    }
    initGreeting() {
        this.bubbles.push({
            isBot: true,
            message: this.msg.getMessage(src_app_shared_enums_message_enum__WEBPACK_IMPORTED_MODULE_2__["MsgEnum"].BOT_WELCOME),
            date: new Date(),
            isActive: true
        });
    }
    emitMsgBubble(message) {
        this.userMessage = message.value;
        this.bubbles.push({
            isBot: false,
            message: this.userMessage,
            date: new Date(),
            isActive: true
        });
    }
};
BotContainerComponent.ctorParameters = () => [
    { type: src_app_services_message_service__WEBPACK_IMPORTED_MODULE_3__["MessageService"] },
    { type: src_app_services_custom_bot_service__WEBPACK_IMPORTED_MODULE_4__["CustomBotService"] }
];
BotContainerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-bot-container',
        template: __webpack_require__(/*! raw-loader!./bot-container.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/bot/bot-container/bot-container.component.html"),
        styles: [__webpack_require__(/*! ./bot-container.component.scss */ "./src/app/components/bot/bot-container/bot-container.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_message_service__WEBPACK_IMPORTED_MODULE_3__["MessageService"],
        src_app_services_custom_bot_service__WEBPACK_IMPORTED_MODULE_4__["CustomBotService"]])
], BotContainerComponent);



/***/ }),

/***/ "./src/app/components/bot/bot-footer/footer-bot.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/bot/bot-footer/footer-bot.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "footer.bot {\n  width: 99%;\n  height: 10vh;\n  position: absolute;\n  bottom: 0.5em;\n  left: 0.8em;\n  background-color: #d9eafa;\n  display: -webkit-box;\n  display: flex;\n  z-index: 100;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZHJpYW5hamF1cmVndWkvRG9jdW1lbnRzL2Nsb25lUGFybGEvc3JjL2FwcC9jb21wb25lbnRzL2JvdC9ib3QtZm9vdGVyL2Zvb3Rlci1ib3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvYm90L2JvdC1mb290ZXIvZm9vdGVyLWJvdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsWUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ib3QvYm90LWZvb3Rlci9mb290ZXItYm90LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9vdGVyLmJvdHtcbiAgICB3aWR0aDo5OSU7XG4gICAgaGVpZ2h0OiAxMHZoO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IC41ZW07XG4gICAgbGVmdDouOGVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTcsIDIzNCwgMjUwKTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHotaW5kZXg6IDEwMDsgIFxufSIsImZvb3Rlci5ib3Qge1xuICB3aWR0aDogOTklO1xuICBoZWlnaHQ6IDEwdmg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwLjVlbTtcbiAgbGVmdDogMC44ZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICNkOWVhZmE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHotaW5kZXg6IDEwMDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/bot/bot-footer/footer-bot.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/bot/bot-footer/footer-bot.component.ts ***!
  \*******************************************************************/
/*! exports provided: FooterBotComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterBotComponent", function() { return FooterBotComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_enums_message_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/enums/message.enum */ "./src/app/shared/enums/message.enum.ts");
/* harmony import */ var src_app_services_message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/message.service */ "./src/app/services/message.service.ts");




let FooterBotComponent = class FooterBotComponent {
    constructor(msg) {
        this.msg = msg;
        this.bubble = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.msgId = src_app_shared_enums_message_enum__WEBPACK_IMPORTED_MODULE_2__["MsgEnum"];
    }
    ngOnInit() {
    }
    sendMessage(message) {
        this.bubble.emit(message);
        message.value = '';
    }
};
FooterBotComponent.ctorParameters = () => [
    { type: src_app_services_message_service__WEBPACK_IMPORTED_MODULE_3__["MessageService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], FooterBotComponent.prototype, "bubble", void 0);
FooterBotComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer-bot',
        template: __webpack_require__(/*! raw-loader!./footer-bot.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/bot/bot-footer/footer-bot.component.html"),
        styles: [__webpack_require__(/*! ./footer-bot.component.scss */ "./src/app/components/bot/bot-footer/footer-bot.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_message_service__WEBPACK_IMPORTED_MODULE_3__["MessageService"]])
], FooterBotComponent);



/***/ }),

/***/ "./src/app/components/bot/bubbles/bubbles-component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/bot/bubbles/bubbles-component.ts ***!
  \*************************************************************/
/*! exports provided: BubblesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BubblesComponent", function() { return BubblesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_constants_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/constants.service */ "./src/app/services/constants.service.ts");



let BubblesComponent = class BubblesComponent {
    constructor() {
        this.bubbles = [];
    }
    ngOnInit() {
    }
    getIcon(isBot) {
        return isBot ? src_app_services_constants_service__WEBPACK_IMPORTED_MODULE_2__["Constants"].iconsResource.isBot : src_app_services_constants_service__WEBPACK_IMPORTED_MODULE_2__["Constants"].iconsResource.isUser;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], BubblesComponent.prototype, "bubbles", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], BubblesComponent.prototype, "src", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], BubblesComponent.prototype, "urlIframe", void 0);
BubblesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-bubbles',
        template: __webpack_require__(/*! raw-loader!./bubbles.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/bot/bubbles/bubbles.component.html"),
        styles: [__webpack_require__(/*! ./bubbles.component.scss */ "./src/app/components/bot/bubbles/bubbles.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], BubblesComponent);



/***/ }),

/***/ "./src/app/components/bot/bubbles/bubbles.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/bot/bubbles/bubbles.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".chat {\n  list-style: none;\n  background: none;\n  margin: 0;\n  padding: 0 0 0 0;\n  position: absolute;\n  top: 60px;\n  height: 45vh;\n  width: 100%;\n  overflow-y: scroll;\n  padding-right: 17px;\n}\n\n.bubble {\n  text-align: left;\n  display: inline-block;\n  margin-top: 0.3em;\n  margin-bottom: 0.2em;\n  padding: 0.5em;\n  border: 1px solid gray;\n  border-radius: 1rem;\n  min-width: 200px;\n  min-height: 80px;\n  max-width: calc(80% - 60px);\n  overflow: hidden;\n  box-sizing: border-box;\n}\n\n.bubbleRowLeft {\n  padding-left: 40px;\n}\n\n.bubbleRowRight {\n  padding-right: 40px;\n  text-align: right;\n}\n\n.bubbleL {\n  background-color: #f3f3ff;\n  margin-left: 0px !important;\n}\n\n.bubbleR {\n  margin-left: 125px;\n  background-color: white;\n}\n\n/* talk bubble contents */\n\n.talktext {\n  padding: 1em;\n  text-align: left;\n  line-height: 1.5em;\n}\n\n.talktext p {\n  /* remove webkit p margins */\n  -webkit-margin-before: 0em;\n  -webkit-margin-after: 0em;\n}\n\n.botIcon {\n  vertical-align: middle;\n  display: inline-block;\n  width: 60px;\n  z-index: 9;\n}\n\n.iconLeft {\n  position: relative;\n  left: 0;\n}\n\n.iconRight {\n  position: relative;\n  left: 29rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZHJpYW5hamF1cmVndWkvRG9jdW1lbnRzL2Nsb25lUGFybGEvc3JjL2FwcC9jb21wb25lbnRzL2JvdC9idWJibGVzL2J1YmJsZXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvYm90L2J1YmJsZXMvYnViYmxlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURFQTtFQUNJLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMkJBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksbUJBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREVBO0VBQ0kseUJBQUE7RUFDQSwyQkFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSx1QkFBQTtBQ0NKOztBREVBLHlCQUFBOztBQUNBO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFQTtFQUNJLDRCQUFBO0VBQ0EsMEJBQUE7RUFDQSx5QkFBQTtBQ0NKOztBREVBO0VBQ0ksc0JBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FDQ0o7O0FEQ0E7RUFDSSxrQkFBQTtFQUNBLE9BQUE7QUNFSjs7QURDQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ib3QvYnViYmxlcy9idWJibGVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNoYXQge1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMCAwIDAgMDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA2MHB4O1xuICAgIGhlaWdodDogNDV2aDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gICAgcGFkZGluZy1yaWdodDogMTdweDtcbn1cblxuLmJ1YmJsZSB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luLXRvcDogLjNlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAuMmVtO1xuICAgIHBhZGRpbmc6IC41ZW07XG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xuICAgIG1pbi13aWR0aDogMjAwcHg7XG4gICAgbWluLWhlaWdodDogODBweDtcbiAgICBtYXgtd2lkdGg6IGNhbGMoODAlIC0gNjBweCk7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4uYnViYmxlUm93TGVmdCB7XG4gICAgcGFkZGluZy1sZWZ0OiA0MHB4O1xufVxuXG4uYnViYmxlUm93UmlnaHQge1xuICAgIHBhZGRpbmctcmlnaHQ6IDQwcHg7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5idWJibGVMIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmM2ZmO1xuICAgIG1hcmdpbi1sZWZ0OiAwcHggIWltcG9ydGFudDtcbn1cblxuLmJ1YmJsZVIge1xuICAgIG1hcmdpbi1sZWZ0OiAxMjVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLyogdGFsayBidWJibGUgY29udGVudHMgKi9cbi50YWxrdGV4dCB7XG4gICAgcGFkZGluZzogMWVtO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgbGluZS1oZWlnaHQ6IDEuNWVtO1xufVxuXG4udGFsa3RleHQgcCB7XG4gICAgLyogcmVtb3ZlIHdlYmtpdCBwIG1hcmdpbnMgKi9cbiAgICAtd2Via2l0LW1hcmdpbi1iZWZvcmU6IDBlbTtcbiAgICAtd2Via2l0LW1hcmdpbi1hZnRlcjogMGVtO1xufVxuXG4uYm90SWNvbiB7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDYwcHg7XG4gICAgei1pbmRleDogOTtcbn1cbi5pY29uTGVmdCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGxlZnQ6MDtcbn1cblxuLmljb25SaWdodCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGxlZnQ6IDI5cmVtO1xufVxuIiwiLmNoYXQge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDAgMCAwIDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA2MHB4O1xuICBoZWlnaHQ6IDQ1dmg7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIHBhZGRpbmctcmlnaHQ6IDE3cHg7XG59XG5cbi5idWJibGUge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi10b3A6IDAuM2VtO1xuICBtYXJnaW4tYm90dG9tOiAwLjJlbTtcbiAgcGFkZGluZzogMC41ZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XG4gIG1pbi13aWR0aDogMjAwcHg7XG4gIG1pbi1oZWlnaHQ6IDgwcHg7XG4gIG1heC13aWR0aDogY2FsYyg4MCUgLSA2MHB4KTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLmJ1YmJsZVJvd0xlZnQge1xuICBwYWRkaW5nLWxlZnQ6IDQwcHg7XG59XG5cbi5idWJibGVSb3dSaWdodCB7XG4gIHBhZGRpbmctcmlnaHQ6IDQwcHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4uYnViYmxlTCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmM2YzZmY7XG4gIG1hcmdpbi1sZWZ0OiAwcHggIWltcG9ydGFudDtcbn1cblxuLmJ1YmJsZVIge1xuICBtYXJnaW4tbGVmdDogMTI1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4vKiB0YWxrIGJ1YmJsZSBjb250ZW50cyAqL1xuLnRhbGt0ZXh0IHtcbiAgcGFkZGluZzogMWVtO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBsaW5lLWhlaWdodDogMS41ZW07XG59XG5cbi50YWxrdGV4dCBwIHtcbiAgLyogcmVtb3ZlIHdlYmtpdCBwIG1hcmdpbnMgKi9cbiAgLXdlYmtpdC1tYXJnaW4tYmVmb3JlOiAwZW07XG4gIC13ZWJraXQtbWFyZ2luLWFmdGVyOiAwZW07XG59XG5cbi5ib3RJY29uIHtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogNjBweDtcbiAgei1pbmRleDogOTtcbn1cblxuLmljb25MZWZ0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiAwO1xufVxuXG4uaWNvblJpZ2h0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiAyOXJlbTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/bot/nav-bot/nav-bot.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/bot/nav-bot/nav-bot.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".grid-row {\n  height: auto;\n  width: 100%;\n}\n\nh4 {\n  font-size: 20px;\n}\n\n.text-shadowed {\n  text-shadow: 0.15rem 0.15rem black;\n}\n\n.nav-brand {\n  text-align: center;\n}\n\n.bot-nav {\n  width: 3em;\n  height: 3em;\n  position: absolute;\n  top: 1em;\n}\n\nmat-divider {\n  height: 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZHJpYW5hamF1cmVndWkvRG9jdW1lbnRzL2Nsb25lUGFybGEvc3JjL2FwcC9jb21wb25lbnRzL2JvdC9uYXYtYm90L25hdi1ib3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvYm90L25hdi1ib3QvbmF2LWJvdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FDQUo7O0FERUE7RUFDSSxlQUFBO0FDQ0o7O0FEQ0M7RUFDTyxrQ0FBQTtBQ0VSOztBREFDO0VBQ0ksa0JBQUE7QUNHTDs7QUREQztFQUNJLFVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0FDSUw7O0FERkM7RUFDSSxXQUFBO0FDS0wiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2JvdC9uYXYtYm90L25hdi1ib3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5ncmlkLXJvd3tcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgd2lkdGg6MTAwJTtcbn1cbmg0e1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbn1cbiAudGV4dC1zaGFkb3dlZHtcbiAgICAgICAgdGV4dC1zaGFkb3c6IDAuMTVyZW0gMC4xNXJlbSBibGFjaztcbiB9IFxuIC5uYXYtYnJhbmQge1xuICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gfVxuIC5ib3QtbmF2e1xuICAgICB3aWR0aDogM2VtO1xuICAgICBoZWlnaHQ6IDNlbTtcbiAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICB0b3A6IDFlbTtcbiB9XG4gbWF0LWRpdmlkZXJ7XG4gICAgIGhlaWdodDogMnB4O1xuIH0iLCIuZ3JpZC1yb3cge1xuICBoZWlnaHQ6IGF1dG87XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5oNCB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLnRleHQtc2hhZG93ZWQge1xuICB0ZXh0LXNoYWRvdzogMC4xNXJlbSAwLjE1cmVtIGJsYWNrO1xufVxuXG4ubmF2LWJyYW5kIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYm90LW5hdiB7XG4gIHdpZHRoOiAzZW07XG4gIGhlaWdodDogM2VtO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMWVtO1xufVxuXG5tYXQtZGl2aWRlciB7XG4gIGhlaWdodDogMnB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/bot/nav-bot/nav-bot.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/bot/nav-bot/nav-bot.component.ts ***!
  \*************************************************************/
/*! exports provided: NavBotComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBotComponent", function() { return NavBotComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_enums_message_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/enums/message.enum */ "./src/app/shared/enums/message.enum.ts");
/* harmony import */ var src_app_services_message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/message.service */ "./src/app/services/message.service.ts");




let NavBotComponent = class NavBotComponent {
    constructor(msg) {
        this.msg = msg;
        this.msgId = src_app_shared_enums_message_enum__WEBPACK_IMPORTED_MODULE_2__["MsgEnum"];
        this.isColor = false;
        this.isBackgroundColor = false;
    }
    ngOnInit() {
    }
};
NavBotComponent.ctorParameters = () => [
    { type: src_app_services_message_service__WEBPACK_IMPORTED_MODULE_3__["MessageService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], NavBotComponent.prototype, "navColor", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], NavBotComponent.prototype, "fontColor", void 0);
NavBotComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-nav-bot',
        template: __webpack_require__(/*! raw-loader!./nav-bot.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/bot/nav-bot/nav-bot.component.html"),
        styles: [__webpack_require__(/*! ./nav-bot.component.scss */ "./src/app/components/bot/nav-bot/nav-bot.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_message_service__WEBPACK_IMPORTED_MODULE_3__["MessageService"]])
], NavBotComponent);



/***/ }),

/***/ "./src/app/components/form-custom/form-custom.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/form-custom/form-custom.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "form {\n  box-sizing: content-box;\n}\n\n.grid-container {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZHJpYW5hamF1cmVndWkvRG9jdW1lbnRzL2Nsb25lUGFybGEvc3JjL2FwcC9jb21wb25lbnRzL2Zvcm0tY3VzdG9tL2Zvcm0tY3VzdG9tLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2Zvcm0tY3VzdG9tL2Zvcm0tY3VzdG9tLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksdUJBQUE7QUNDSjs7QURDQTtFQUNJLFdBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9ybS1jdXN0b20vZm9ybS1jdXN0b20uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmb3Jte1xuICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xufVxuLmdyaWQtY29udGFpbmVye1xuICAgIHdpZHRoOiAxMDAlO1xufSIsImZvcm0ge1xuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbn1cblxuLmdyaWQtY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/form-custom/form-custom.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/form-custom/form-custom.component.ts ***!
  \*****************************************************************/
/*! exports provided: FormCustomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormCustomComponent", function() { return FormCustomComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_services_custom_bot_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/custom-bot.service */ "./src/app/services/custom-bot.service.ts");




let FormCustomComponent = class FormCustomComponent {
    constructor(fb, sS) {
        this.fb = fb;
        this.sS = sS;
        this.styles = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
        this.styleForm = this.fb.group({
            navColor: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(new RegExp(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/))],
            // tslint:disable-next-line:max-line-length
            url: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(new RegExp(/^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/))],
            fontColor: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(new RegExp(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/))],
            footColor: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(new RegExp(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/))],
            fontSize: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(new RegExp(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/))],
            bubbleUser: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(new RegExp(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/))],
            bubbleBot: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(new RegExp(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/))]
        });
    }
    saveStyles(values) {
        this.sS.setStyles(values);
    }
};
FormCustomComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_services_custom_bot_service__WEBPACK_IMPORTED_MODULE_3__["CustomBotService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], FormCustomComponent.prototype, "styles", void 0);
FormCustomComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-form-custom',
        template: __webpack_require__(/*! raw-loader!./form-custom.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/form-custom/form-custom.component.html"),
        styles: [__webpack_require__(/*! ./form-custom.component.scss */ "./src/app/components/form-custom/form-custom.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        src_app_services_custom_bot_service__WEBPACK_IMPORTED_MODULE_3__["CustomBotService"]])
], FormCustomComponent);



/***/ }),

/***/ "./src/app/services/constants.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/constants.service.ts ***!
  \***********************************************/
/*! exports provided: Constants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Constants", function() { return Constants; });
const Constants = {
    api: {
        url: {
            BASE_URL: 'http://'
        },
    },
    viewConstants: {},
    message: {},
    validate: {},
    iconsResource: {
        isBot: ' ../../assets/img/body001.png',
        isUser: '../../assets/img/user001.png'
    }
};


/***/ }),

/***/ "./src/app/services/custom-bot.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/custom-bot.service.ts ***!
  \************************************************/
/*! exports provided: CustomBotService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomBotService", function() { return CustomBotService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let CustomBotService = class CustomBotService {
    constructor() {
        this.style = {
            bubbleBot: '',
            bubbleUser: '',
            fontColor: '#FFF',
            fontSize: '',
            footColor: '',
            navColor: '#BEC1EC',
            url: ''
        };
        this.stylesBot = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](this.style);
    }
    setStyles(styles) {
        this.style = styles;
        this.refresh();
    }
    getStyles() {
        return this.stylesBot.asObservable();
    }
    refresh() {
        return this.stylesBot.next(this.style);
    }
};
CustomBotService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], CustomBotService);



/***/ }),

/***/ "./src/app/services/message.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/message.service.ts ***!
  \*********************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_enums_message_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/enums/message.enum */ "./src/app/shared/enums/message.enum.ts");



let MessageService = class MessageService {
    constructor() {
        this.locale = null;
        this.locale = ES;
    }
    getMessage(msgId, ...params) {
        let message = '';
        if (this.locale.hasOwnProperty(msgId)) {
            message = this.locale[msgId];
        }
        return message;
    }
};
MessageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], MessageService);

const ES = {
    [_shared_enums_message_enum__WEBPACK_IMPORTED_MODULE_2__["MsgEnum"].WELCOME]: 'Bienvenido a Parla',
    [_shared_enums_message_enum__WEBPACK_IMPORTED_MODULE_2__["MsgEnum"].INPUT_PLACEHOLDER]: '¡Escribe aquí!',
    [_shared_enums_message_enum__WEBPACK_IMPORTED_MODULE_2__["MsgEnum"].BOT_WELCOME]: 'Hola, escribe algo, no me hagas perder el tiempo.',
    [_shared_enums_message_enum__WEBPACK_IMPORTED_MODULE_2__["MsgEnum"].SUCCESS]: 'Acción realizada de forma correcta.',
    [_shared_enums_message_enum__WEBPACK_IMPORTED_MODULE_2__["MsgEnum"].CONECTION_ERROR]: 'Error de conexión.',
    [_shared_enums_message_enum__WEBPACK_IMPORTED_MODULE_2__["MsgEnum"].UNKNOW_ERROR]: 'Error no definido.'
};


/***/ }),

/***/ "./src/app/shared/enums/message.enum.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/enums/message.enum.ts ***!
  \**********************************************/
/*! exports provided: MsgEnum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MsgEnum", function() { return MsgEnum; });
var MsgEnum;
(function (MsgEnum) {
    MsgEnum[MsgEnum["WELCOME"] = 0] = "WELCOME";
    MsgEnum[MsgEnum["SUCCESS"] = 1] = "SUCCESS";
    MsgEnum[MsgEnum["CONECTION_ERROR"] = 2] = "CONECTION_ERROR";
    MsgEnum[MsgEnum["UNKNOW_ERROR"] = 3] = "UNKNOW_ERROR";
    MsgEnum[MsgEnum["INPUT_PLACEHOLDER"] = 4] = "INPUT_PLACEHOLDER";
    MsgEnum[MsgEnum["BOT_WELCOME"] = 5] = "BOT_WELCOME";
})(MsgEnum || (MsgEnum = {}));


/***/ }),

/***/ "./src/app/shared/pipes/safe-resource.pipe.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/pipes/safe-resource.pipe.ts ***!
  \****************************************************/
/*! exports provided: SafeResourcePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafeResourcePipe", function() { return SafeResourcePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");



let SafeResourcePipe = class SafeResourcePipe {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    transform(value, type) {
        if (type && value) {
            switch (type) {
                case 'html':
                    return this.sanitizer.bypassSecurityTrustHtml(value);
                case 'style':
                    return this.sanitizer.bypassSecurityTrustStyle(value);
                case 'script':
                    return this.sanitizer.bypassSecurityTrustScript(value);
                case 'url':
                    return this.sanitizer.bypassSecurityTrustUrl(value);
                case 'resourceUrl':
                    return this.sanitizer.bypassSecurityTrustResourceUrl(value);
                default:
                    throw new Error(`Invalid safe type specified: ${type}`);
            }
        }
    }
};
SafeResourcePipe.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }
];
SafeResourcePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'safeResource'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
], SafeResourcePipe);



/***/ }),

/***/ "./src/app/views/main/main.component.scss":
/*!************************************************!*\
  !*** ./src/app/views/main/main.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nav {\n  position: absolute;\n  z-index: 9;\n  height: 60px;\n  background: white;\n  width: 100%;\n}\n\n.container {\n  width: 100%;\n  top: 48px;\n  height: auto;\n  position: relative;\n  min-height: calc(100vh);\n  overflow: hidden;\n}\n\nfooter.main {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  background: white;\n  height: 60px;\n  z-index: 9;\n  width: 100%;\n}\n\n.example-container {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n\n.sidenav {\n  width: 40vh;\n}\n\n.drag {\n  width: auto;\n  height: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZHJpYW5hamF1cmVndWkvRG9jdW1lbnRzL2Nsb25lUGFybGEvc3JjL2FwcC92aWV3cy9tYWluL21haW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3ZpZXdzL21haW4vbWFpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUNBSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQ0NKOztBRENBO0VBQ0ksZUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUNFSjs7QURBQTtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtBQ0dKOztBRERBO0VBQ0ksV0FBQTtBQ0lKOztBREZBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNLSiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL21haW4vbWFpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxubmF2e1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiA5O1xuICAgIGhlaWdodDogNjBweDtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICB3aWR0aDogMTAwJTtcbn1cbi5jb250YWluZXJ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdG9wOiA0OHB4O1xuICAgIGhlaWdodDphdXRvO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoKTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuZm9vdGVyLm1haW57XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OjA7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIHotaW5kZXg6IDk7XG4gICAgd2lkdGg6MTAwJTtcbn1cbi5leGFtcGxlLWNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgfVxuLnNpZGVuYXZ7XG4gICAgd2lkdGg6IDQwdmg7XG59XG4uZHJhZ3tcbiAgICB3aWR0aDphdXRvO1xuICAgIGhlaWdodDogYXV0bztcbn0iLCJuYXYge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDk7XG4gIGhlaWdodDogNjBweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRvcDogNDhweDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmgpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG5mb290ZXIubWFpbiB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgaGVpZ2h0OiA2MHB4O1xuICB6LWluZGV4OiA5O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmV4YW1wbGUtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG59XG5cbi5zaWRlbmF2IHtcbiAgd2lkdGg6IDQwdmg7XG59XG5cbi5kcmFnIHtcbiAgd2lkdGg6IGF1dG87XG4gIGhlaWdodDogYXV0bztcbn0iXX0= */"

/***/ }),

/***/ "./src/app/views/main/main.component.ts":
/*!**********************************************!*\
  !*** ./src/app/views/main/main.component.ts ***!
  \**********************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MainComponent = class MainComponent {
    constructor() {
        this.events = [];
    }
    ngOnInit() {
    }
    loadStyles(values) {
        console.log(values);
        this.styles = values;
    }
};
MainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-main',
        template: __webpack_require__(/*! raw-loader!./main.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/main/main.component.html"),
        styles: [__webpack_require__(/*! ./main.component.scss */ "./src/app/views/main/main.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], MainComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!**********************************************************************************************************!*\
  !*** multi (webpack)-dev-server/client?http://0.0.0.0:0/sockjs-node&sockPath=/sockjs-node ./src/main.ts ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/adrianajauregui/Documents/cloneParla/node_modules/webpack-dev-server/client/index.js?http://0.0.0.0:0/sockjs-node&sockPath=/sockjs-node */"./node_modules/webpack-dev-server/client/index.js?http://0.0.0.0:0/sockjs-node&sockPath=/sockjs-node");
module.exports = __webpack_require__(/*! /Users/adrianajauregui/Documents/cloneParla/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map