(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projects/projects.component */ "./src/app/projects/projects.component.ts");
/* harmony import */ var _resume_resume_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./resume/resume.component */ "./src/app/resume/resume.component.ts");
/* harmony import */ var _blog_blog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./blog/blog.component */ "./src/app/blog/blog.component.ts");
/* harmony import */ var _projects_augmentbycolor_augmentbycolor_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./projects/augmentbycolor/augmentbycolor.component */ "./src/app/projects/augmentbycolor/augmentbycolor.component.ts");
/* harmony import */ var _projects_bwfat_bwfat_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./projects/bwfat/bwfat.component */ "./src/app/projects/bwfat/bwfat.component.ts");
/* harmony import */ var _projects_coolshell_coolshell_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./projects/coolshell/coolshell.component */ "./src/app/projects/coolshell/coolshell.component.ts");
/* harmony import */ var _projects_easymarkers_easymarkers_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./projects/easymarkers/easymarkers.component */ "./src/app/projects/easymarkers/easymarkers.component.ts");
/* harmony import */ var _projects_stockkeeper_stockkeeper_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./projects/stockkeeper/stockkeeper.component */ "./src/app/projects/stockkeeper/stockkeeper.component.ts");
/* harmony import */ var _projects_webtabs_webtabs_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./projects/webtabs/webtabs.component */ "./src/app/projects/webtabs/webtabs.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'projects', component: _projects_projects_component__WEBPACK_IMPORTED_MODULE_3__["ProjectsComponent"] },
    { path: 'projects/augment-by-color', component: _projects_augmentbycolor_augmentbycolor_component__WEBPACK_IMPORTED_MODULE_6__["AugmentbycolorComponent"] },
    { path: 'projects/bwfat', component: _projects_bwfat_bwfat_component__WEBPACK_IMPORTED_MODULE_7__["BwfatComponent"] },
    { path: 'projects/coolshell', component: _projects_coolshell_coolshell_component__WEBPACK_IMPORTED_MODULE_8__["CoolshellComponent"] },
    { path: 'projects/easymarkers', component: _projects_easymarkers_easymarkers_component__WEBPACK_IMPORTED_MODULE_9__["EasymarkersComponent"] },
    { path: 'projects/stockkeeper', component: _projects_stockkeeper_stockkeeper_component__WEBPACK_IMPORTED_MODULE_10__["StockkeeperComponent"] },
    { path: 'projects/webtabs', component: _projects_webtabs_webtabs_component__WEBPACK_IMPORTED_MODULE_11__["WebtabsComponent"] },
    { path: 'resume', component: _resume_resume_component__WEBPACK_IMPORTED_MODULE_4__["ResumeComponent"] },
    { path: 'blog', component: _blog_blog_component__WEBPACK_IMPORTED_MODULE_5__["BlogComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#nav-area {\r\n\ttext-align: center;\r\n}\r\n#nav-bar {\r\n\tmargin: 0px auto;\r\n}\r\n#nav-bar div {\r\n\tdisplay: inline-block;\r\n\tpadding: 0px 20px;\r\n}\r\n.center-area {\r\n\twidth: 80%;\r\n\tmargin: 0px auto;\r\n}\r\n#content-area {\r\n\tbackground-color: lightblue;\r\n}\r\n#footer-area {\r\n\ttext-align: center;\r\n}\r\n#link-bar {\r\n\tmargin: 0px auto;\r\n}\r\n#link-bar div {\r\n\tdisplay: inline-block;\r\n\tpadding: 0px 20px;\r\n}\r\n@media only screen and (max-width: 1000px) {\r\n\t#content-area {\r\n\r\n\t}\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div id=\"nav-area\" class=\"center-area\">\n  <h1><a routerLink=\"/home\">\n    {{ title }}\n  </a></h1>\n  <div id=\"nav-bar\">\n    <div><a routerLink=\"/projects\">Projects</a></div>\n    <div><a routerLink=\"/resume\">Resume</a></div>\n    <div><a routerLink=\"/blog\">Blog</a></div>\n  </div>\n</div>\n\n<div id=\"content-area\" class=\"center-area\">\n  <router-outlet></router-outlet>\n</div>\n\n<div id=\"footer-area\" class=\"center-area\">\n  <div id=\"link-bar\">\n    <div><a href=\"https://twitter.com/benjawmino\">Twitter</a></div>\n    <div><a href=\"https://github.com/benwilson34\">GitHub</a></div>\n    <div><a href=\"https://instagram.com/benjawmino\">Instagram</a></div>\n    <div><a href=\"https://www.linkedin.com/in/benjamin-wilson-10b743b9/\">LinkedIn</a></div>\n  </div>\n</div>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Ben Wilson';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./projects/projects.component */ "./src/app/projects/projects.component.ts");
/* harmony import */ var _resume_resume_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./resume/resume.component */ "./src/app/resume/resume.component.ts");
/* harmony import */ var _blog_blog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./blog/blog.component */ "./src/app/blog/blog.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _projects_webtabs_webtabs_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./projects/webtabs/webtabs.component */ "./src/app/projects/webtabs/webtabs.component.ts");
/* harmony import */ var _projects_augmentbycolor_augmentbycolor_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./projects/augmentbycolor/augmentbycolor.component */ "./src/app/projects/augmentbycolor/augmentbycolor.component.ts");
/* harmony import */ var _projects_stockkeeper_stockkeeper_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./projects/stockkeeper/stockkeeper.component */ "./src/app/projects/stockkeeper/stockkeeper.component.ts");
/* harmony import */ var _projects_coolshell_coolshell_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./projects/coolshell/coolshell.component */ "./src/app/projects/coolshell/coolshell.component.ts");
/* harmony import */ var _projects_bwfat_bwfat_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./projects/bwfat/bwfat.component */ "./src/app/projects/bwfat/bwfat.component.ts");
/* harmony import */ var _projects_easymarkers_easymarkers_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./projects/easymarkers/easymarkers.component */ "./src/app/projects/easymarkers/easymarkers.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _projects_projects_component__WEBPACK_IMPORTED_MODULE_4__["ProjectsComponent"],
                _resume_resume_component__WEBPACK_IMPORTED_MODULE_5__["ResumeComponent"],
                _blog_blog_component__WEBPACK_IMPORTED_MODULE_6__["BlogComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                _projects_webtabs_webtabs_component__WEBPACK_IMPORTED_MODULE_8__["WebtabsComponent"],
                _projects_augmentbycolor_augmentbycolor_component__WEBPACK_IMPORTED_MODULE_9__["AugmentbycolorComponent"],
                _projects_stockkeeper_stockkeeper_component__WEBPACK_IMPORTED_MODULE_10__["StockkeeperComponent"],
                _projects_coolshell_coolshell_component__WEBPACK_IMPORTED_MODULE_11__["CoolshellComponent"],
                _projects_bwfat_bwfat_component__WEBPACK_IMPORTED_MODULE_12__["BwfatComponent"],
                _projects_easymarkers_easymarkers_component__WEBPACK_IMPORTED_MODULE_13__["EasymarkersComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/blog/blog.component.css":
/*!*****************************************!*\
  !*** ./src/app/blog/blog.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/blog/blog.component.html":
/*!******************************************!*\
  !*** ./src/app/blog/blog.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  blog works!\n</p>\n"

/***/ }),

/***/ "./src/app/blog/blog.component.ts":
/*!****************************************!*\
  !*** ./src/app/blog/blog.component.ts ***!
  \****************************************/
/*! exports provided: BlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogComponent", function() { return BlogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BlogComponent = /** @class */ (function () {
    function BlogComponent() {
    }
    BlogComponent.prototype.ngOnInit = function () {
    };
    BlogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-blog',
            template: __webpack_require__(/*! ./blog.component.html */ "./src/app/blog/blog.component.html"),
            styles: [__webpack_require__(/*! ./blog.component.css */ "./src/app/blog/blog.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BlogComponent);
    return BlogComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n\tHello and welcome to my personal site! Visit the <a href=\"projects\">Projects</a> page to see a list of select projects I've worked on the last few years.\n</p>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/projects/augmentbycolor/augmentbycolor.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/projects/augmentbycolor/augmentbycolor.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/projects/augmentbycolor/augmentbycolor.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/projects/augmentbycolor/augmentbycolor.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>An AR project for poster and business card.</p>\n\n<p>This was a project I did with&nbsp;<a href=\"https://www.meganbarkerart.com\">Megan Barker</a>&nbsp;for her senior thesis in April 2017. I made use of the lovely&nbsp;<a href=\"https://github.com/jeromeetienne/AR.js\">AR.js library</a>&nbsp;maintained by&nbsp;<a href=\"https://github.com/jeromeetienne\">Jerome Etienne</a>.</p>\n\n<p>Her words: \"A visual representation of my grapheme-color synesthesia through 2D animation and open-source, web-based 3D augmented reality.\"&nbsp;<a href=\"https://github.com/benwilson34/augment-by-color/blob/master/abc-01.png\" target=\"_blank\"><img alt=\"Augment By Color display\" data-entity-type=\"\" data-entity-uuid=\"\" src=\"https://github.com/benwilson34/augment-by-color/raw/master/abc-01.png\" style=\"width: 100%;\" title=\"Augment By Color display\" /></a></p>\n\n<p>The poster features white text which is overlaid with 3D colored text when viewed using a mobile phone or tablet (wow!).&nbsp;<a href=\"https://github.com/benwilson34/augment-by-color/blob/master/abc-02.png\" target=\"_blank\"><img alt=\"Augment By Color poster\" data-entity-type=\"\" data-entity-uuid=\"\" src=\"https://github.com/benwilson34/augment-by-color/raw/master/abc-02.png\" style=\"width: 100%;\" title=\"Augment By Color poster\" /></a></p>\n\n<p>The business card, when viewed with a device, shows a 2D image as if it was printed on the card (cool!).&nbsp;<a href=\"https://github.com/benwilson34/augment-by-color/blob/master/abc-03.png\" target=\"_blank\"><img alt=\"Augment By Color card\" data-entity-type=\"\" data-entity-uuid=\"\" src=\"https://github.com/benwilson34/augment-by-color/raw/master/abc-03.png\" style=\"width: 100%;\" title=\"Augment By Color card\" /></a></p>\n"

/***/ }),

/***/ "./src/app/projects/augmentbycolor/augmentbycolor.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/projects/augmentbycolor/augmentbycolor.component.ts ***!
  \*********************************************************************/
/*! exports provided: AugmentbycolorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AugmentbycolorComponent", function() { return AugmentbycolorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AugmentbycolorComponent = /** @class */ (function () {
    function AugmentbycolorComponent() {
    }
    AugmentbycolorComponent.prototype.ngOnInit = function () {
    };
    AugmentbycolorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-augmentbycolor',
            template: __webpack_require__(/*! ./augmentbycolor.component.html */ "./src/app/projects/augmentbycolor/augmentbycolor.component.html"),
            styles: [__webpack_require__(/*! ./augmentbycolor.component.css */ "./src/app/projects/augmentbycolor/augmentbycolor.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AugmentbycolorComponent);
    return AugmentbycolorComponent;
}());



/***/ }),

/***/ "./src/app/projects/bwfat/bwfat.component.css":
/*!****************************************************!*\
  !*** ./src/app/projects/bwfat/bwfat.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/projects/bwfat/bwfat.component.html":
/*!*****************************************************!*\
  !*** ./src/app/projects/bwfat/bwfat.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>bwFAT is a FAT (File Allocation Table) file system I made for my Systems Programming course in April 2016.</p>\n\n<p><a href=\"https://github.com/benwilson34/bwFAT\">See the README and project on GitHub</a>.</p>\n"

/***/ }),

/***/ "./src/app/projects/bwfat/bwfat.component.ts":
/*!***************************************************!*\
  !*** ./src/app/projects/bwfat/bwfat.component.ts ***!
  \***************************************************/
/*! exports provided: BwfatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BwfatComponent", function() { return BwfatComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BwfatComponent = /** @class */ (function () {
    function BwfatComponent() {
    }
    BwfatComponent.prototype.ngOnInit = function () {
    };
    BwfatComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bwfat',
            template: __webpack_require__(/*! ./bwfat.component.html */ "./src/app/projects/bwfat/bwfat.component.html"),
            styles: [__webpack_require__(/*! ./bwfat.component.css */ "./src/app/projects/bwfat/bwfat.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BwfatComponent);
    return BwfatComponent;
}());



/***/ }),

/***/ "./src/app/projects/coolshell/coolshell.component.css":
/*!************************************************************!*\
  !*** ./src/app/projects/coolshell/coolshell.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/projects/coolshell/coolshell.component.html":
/*!*************************************************************!*\
  !*** ./src/app/projects/coolshell/coolshell.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>coolshell is a unix shell written in C that I did for my Systems Programming course in February 2016.</p>\n\n<p><a href=\"https://github.com/benwilson34/coolshell\">See the README and project on GitHub</a>.</p>\n"

/***/ }),

/***/ "./src/app/projects/coolshell/coolshell.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/projects/coolshell/coolshell.component.ts ***!
  \***********************************************************/
/*! exports provided: CoolshellComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoolshellComponent", function() { return CoolshellComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CoolshellComponent = /** @class */ (function () {
    function CoolshellComponent() {
    }
    CoolshellComponent.prototype.ngOnInit = function () {
    };
    CoolshellComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-coolshell',
            template: __webpack_require__(/*! ./coolshell.component.html */ "./src/app/projects/coolshell/coolshell.component.html"),
            styles: [__webpack_require__(/*! ./coolshell.component.css */ "./src/app/projects/coolshell/coolshell.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CoolshellComponent);
    return CoolshellComponent;
}());



/***/ }),

/***/ "./src/app/projects/easymarkers/easymarkers.component.css":
/*!****************************************************************!*\
  !*** ./src/app/projects/easymarkers/easymarkers.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/projects/easymarkers/easymarkers.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/projects/easymarkers/easymarkers.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>TODO link to GitHub</p>"

/***/ }),

/***/ "./src/app/projects/easymarkers/easymarkers.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/projects/easymarkers/easymarkers.component.ts ***!
  \***************************************************************/
/*! exports provided: EasymarkersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EasymarkersComponent", function() { return EasymarkersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EasymarkersComponent = /** @class */ (function () {
    function EasymarkersComponent() {
    }
    EasymarkersComponent.prototype.ngOnInit = function () {
    };
    EasymarkersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-easymarkers',
            template: __webpack_require__(/*! ./easymarkers.component.html */ "./src/app/projects/easymarkers/easymarkers.component.html"),
            styles: [__webpack_require__(/*! ./easymarkers.component.css */ "./src/app/projects/easymarkers/easymarkers.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EasymarkersComponent);
    return EasymarkersComponent;
}());



/***/ }),

/***/ "./src/app/projects/projects.component.css":
/*!*************************************************!*\
  !*** ./src/app/projects/projects.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/projects/projects.component.html":
/*!**************************************************!*\
  !*** ./src/app/projects/projects.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>I have worked individually and as part of teams on a variety of small projects ranging from low-level systems programming to web applications.</p>\n\n<p>Here I have them organized by date with a short description. Visit each project's page for more information, documentation, and download links.</p>\n\n<p>&nbsp;</p>\n<p><a routerLink=\"/projects/stockkeeper\">StockKeeper</a> - a simple stock tracker app for Android (December 2017)</p>\n\n<p><a routerLink=\"/projects/webtabs\">WebTabs</a> - a barebones web browser for Android (October 2017)</p>\n\n<p><a routerLink=\"/projects/augment-by-color\">Augment By Color</a> - an AR project for mobile devices using AR.js (April 2017)</p>\n\n<p><a routerLink=\"/projects/bwfat\">bwFAT</a>&nbsp;- a FAT file system for linux written in C. (April 2016)</p>\n\n<p><a routerLink=\"/projects/coolshell\">coolshell</a> - a very minimal unix shell written in C. (February 2016)</p>"

/***/ }),

/***/ "./src/app/projects/projects.component.ts":
/*!************************************************!*\
  !*** ./src/app/projects/projects.component.ts ***!
  \************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProjectsComponent = /** @class */ (function () {
    function ProjectsComponent() {
    }
    ProjectsComponent.prototype.ngOnInit = function () {
    };
    ProjectsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-projects',
            template: __webpack_require__(/*! ./projects.component.html */ "./src/app/projects/projects.component.html"),
            styles: [__webpack_require__(/*! ./projects.component.css */ "./src/app/projects/projects.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProjectsComponent);
    return ProjectsComponent;
}());



/***/ }),

/***/ "./src/app/projects/stockkeeper/stockkeeper.component.css":
/*!****************************************************************!*\
  !*** ./src/app/projects/stockkeeper/stockkeeper.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/projects/stockkeeper/stockkeeper.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/projects/stockkeeper/stockkeeper.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>TODO</p>"

/***/ }),

/***/ "./src/app/projects/stockkeeper/stockkeeper.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/projects/stockkeeper/stockkeeper.component.ts ***!
  \***************************************************************/
/*! exports provided: StockkeeperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockkeeperComponent", function() { return StockkeeperComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StockkeeperComponent = /** @class */ (function () {
    function StockkeeperComponent() {
    }
    StockkeeperComponent.prototype.ngOnInit = function () {
    };
    StockkeeperComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-stockkeeper',
            template: __webpack_require__(/*! ./stockkeeper.component.html */ "./src/app/projects/stockkeeper/stockkeeper.component.html"),
            styles: [__webpack_require__(/*! ./stockkeeper.component.css */ "./src/app/projects/stockkeeper/stockkeeper.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], StockkeeperComponent);
    return StockkeeperComponent;
}());



/***/ }),

/***/ "./src/app/projects/webtabs/webtabs.component.css":
/*!********************************************************!*\
  !*** ./src/app/projects/webtabs/webtabs.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/projects/webtabs/webtabs.component.html":
/*!*********************************************************!*\
  !*** ./src/app/projects/webtabs/webtabs.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<script>hljs.initHighlightingOnLoad();</script>\n\n<p>I made this web browser as part of an assignment in October 2017. The browser was to make use of Fragments, support having several tabs opened, and allow a user to&nbsp;change&nbsp;tabs by swiping left or right. It also needed to be able to be set as the user's default web browser, and allow other apps to use it to open links.</p>\n\n<p>Fragments in Android are perfect for this application - there is only one activity (the <a href=\"https://github.com/benwilson34/WebTabs/blob/master/app/src/main/java/edu/temple/webtabs/MainActivity.java\">MainActivity</a>) and each tab is a Fragment (called a TabFragment) that manages a WebView, which is what the webpage is shown through. Fragment communication is key here because the TabFragment knows nothing about the Activity, just how to manage itself. There are two avenues of communication: Activity&nbsp;→ Fragment, using a public method in the Fragment; and&nbsp;Fragment&nbsp;→&nbsp;Activity, which uses an interface. In the second case, the Activity managing the Fragment needs to implement the interface so that it can accept the method calls from the Fragment. There is no compile-time requirement that the Activity implement this interface, so to prevent errors down the line I throw an error in in TabFragment's OnAttach method:</p>\n\n<pre>\n<code class=\"language-java\">@Override\npublic void onAttach(Context context) {{'{'}}\n   super.onAttach(context);\n   if (context instanceof OnFragmentInteractionListener) {{'{'}}\n      mListener = (OnFragmentInteractionListener) context;\n   } else {{'{'}}\n      throw new RuntimeException(context.toString() + \" must implement OnFragmentInteractionListener\");\n   }\n}</code></pre>"

/***/ }),

/***/ "./src/app/projects/webtabs/webtabs.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/projects/webtabs/webtabs.component.ts ***!
  \*******************************************************/
/*! exports provided: WebtabsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebtabsComponent", function() { return WebtabsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WebtabsComponent = /** @class */ (function () {
    function WebtabsComponent() {
    }
    WebtabsComponent.prototype.ngOnInit = function () {
    };
    WebtabsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-webtabs',
            template: __webpack_require__(/*! ./webtabs.component.html */ "./src/app/projects/webtabs/webtabs.component.html"),
            styles: [__webpack_require__(/*! ./webtabs.component.css */ "./src/app/projects/webtabs/webtabs.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WebtabsComponent);
    return WebtabsComponent;
}());



/***/ }),

/***/ "./src/app/resume/resume.component.css":
/*!*********************************************!*\
  !*** ./src/app/resume/resume.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/resume/resume.component.html":
/*!**********************************************!*\
  !*** ./src/app/resume/resume.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p><strong>Contact</strong>: ben@benDwilson.com<br />&nbsp;</p>\n<h4>EDUCATION</h4>\n<p>TEMPLE UNIVERSITY, College of Science &amp; Technology, Philadelphia, PA<br /><strong>B.Sc. in Computer Science, December 2017</strong><br />Major GPA: 3.67&nbsp; |&nbsp; Cumulative GPA: 3.48&nbsp; |&nbsp; Distinction in Major<br />&nbsp;</p>\n<h4>COURSEWORK COMPLETED</h4>\n<p>Program Design and Abstraction (Java)<br />Data Structures and Algorithms (Java)<br />Software Design (Java and C#)<br />Mathematical Concepts in Computing I &amp; II<br />Computational Probability and Statistics<br />Technical Writing<br />Web Application Programming (JavaServer Pages)<br />Client-Side Scripting (JavaScript)<br />User Experience Design<br />Mobile Application Development (Android)<br />Computer Systems and Low-Level Programming (C and Linux)<br />Systems Programming and Operating Systems (C and Linux)<br />&nbsp;</p>\n<h4>TECHNICAL SKILLS</h4>\n<p><u>Software:</u> Ten years&rsquo; experience with Windows based operating systems. Adobe Premiere and Photoshop; Microsoft Office. Experience with Unix/Linux systems for development. Programming experience with Java and C in various environments. 3 years&rsquo; experience with HTML/CSS. Web application development with JSP/Angular/JavaScript and MySQL. Experience with C# in Unity 3D and ASP.NET applications. Exposure to Agile software development through Rally.<br />&nbsp;</p>\n<h4>EXPERIENCE</h4>\n<p><strong>Team Member</strong>, April 2017 &ndash; February 2018<br />Honeygrow, Philadelphia, PA<br />&bull; Filled roles varying from cooking on a wok to interacting with guests<br />&bull; Trained incoming team members on the processes and roles around the store<br />&bull; Practiced self-management in food preparation &amp; moving between front- and back-of-house</p>\n<p><strong>Cashier/Delivery Driver</strong>, November 2015 - February 2017<br />Tribe Café, Philadelphia, PA<br />&bull; Received customers&rsquo; orders online and in-store and relayed them to the cooking staff<br />&bull; Handled payment for orders by cash and card<br />&bull; Delivered orders by bicycle</p>\n<p><strong>Computer Assistant Intern</strong>, January 2015 - November 2015<br />Free Library of Philadelphia, Lillian Marrero Branch, Philadelphia, PA<br />&bull; Assisted computer lab patrons with creating and editing résumés<br />&bull; Directed patrons to employment opportunities and helpful job search engines<br />&bull; Instructed patrons basic usage of Microsoft Word, Google Chrome, and Windows</p>\n<p><strong>Drum Set Instructor and Administration</strong>, September 2011 - August 2014<br />Downingtown School of Rock, Downingtown, PA<br />&bull; Instructed music students ages 8 to 16 drum set performance and practice routines<br />&bull; Assisted in the coordination of week-long summer camps with students<br />&bull; Performed general maintenance, cleaning, and painting<br />&nbsp;</p>\n<h4>ACTIVITIES</h4>\n<p>Small-team video game development (see <a href=\"http://www.magematch.com\">www.magematch.com</a>)<br />Drum set performance since 2006; 2012 School of Rock AllStar, 2013 School of Rock AllStar</p>"

/***/ }),

/***/ "./src/app/resume/resume.component.ts":
/*!********************************************!*\
  !*** ./src/app/resume/resume.component.ts ***!
  \********************************************/
/*! exports provided: ResumeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResumeComponent", function() { return ResumeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ResumeComponent = /** @class */ (function () {
    function ResumeComponent() {
    }
    ResumeComponent.prototype.ngOnInit = function () {
    };
    ResumeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-resume',
            template: __webpack_require__(/*! ./resume.component.html */ "./src/app/resume/resume.component.html"),
            styles: [__webpack_require__(/*! ./resume.component.css */ "./src/app/resume/resume.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ResumeComponent);
    return ResumeComponent;
}());



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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Ben\Documents\nodeprojects\personal-site\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map