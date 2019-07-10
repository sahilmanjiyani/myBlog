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

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"about-component\">\n  <div class=\"intro\">\n    <div class=\"container\">\n      <h1>ABOUT</h1>\n    </div>\n  </div>\n  <div class=\"breadcrumbs\">\n    <div class=\"container\">\n        <p>Home / About</p>\n    </div>\n  </div>\n  <div class=\"comp-body\"> \n      <div class=\"container\">\n        <div class=\"content\">\n            <section class=\"skills\">\n                <div class=\"tech-header\">\n                  <h4>My Skills:</h4>\n                </div>\n                <div class=\"tech-progress-bar\">\n                    <div class=\"progress-bar\">\n                        <h5>Angular </h5>\n                        <mat-progress-bar mode=\"determinate\" value=\"40\"></mat-progress-bar>\n                        <span>40%</span>\n                    </div>\n                    <div class=\"progress-bar\">\n                        <h5>Node.js</h5>\n                        <mat-progress-bar mode=\"determinate\" value=\"40\"></mat-progress-bar>\n                        <span>40%</span>\n                    </div>\n                    <div class=\"progress-bar\">\n                        <h5>JavaScript</h5>\n                        <mat-progress-bar mode=\"determinate\" value=\"40\"></mat-progress-bar>\n                        <span>40%</span>\n                    </div>\n                    <div class=\"progress-bar\">\n                        <h5>Java</h5>\n                        <mat-progress-bar mode=\"determinate\" value=\"40\"></mat-progress-bar>\n                        <span>40%</span>\n                    </div>\n                    <div class=\"progress-bar\">\n                        <h5>Python</h5>\n                        <mat-progress-bar mode=\"determinate\" value=\"40\"></mat-progress-bar>\n                        <span>40%</span>\n                    </div>\n                  \n                </div>\n              \n\n            </section>\n            <section class=\"tech-logos\">\n              <div class=\"tech-header\">\n                <h4>My Tech Stacks:</h4>\n              </div>\n              <div class=\"tech-logo-icons\">\n                  <fa-icon [icon]=\"['fab','angular']\" size=\"3x\"></fa-icon>\n                  <fa-icon [icon]=\"['fab','node']\" size=\"3x\"></fa-icon>\n                  <fa-icon [icon]=\"['fab','js']\" size=\"3x\"></fa-icon>\n                  <fa-icon [icon]=\"['fab','html5']\" size=\"3x\"></fa-icon>\n                  <fa-icon [icon]=\"['fab','css3']\" size=\"3x\"></fa-icon>\n                  <fa-icon [icon]=\"['fab','sass']\" size=\"3x\"></fa-icon>\n                  <fa-icon [icon]=\"['fab','php']\" size=\"3x\"></fa-icon>\n                  <fa-icon [icon]=\"['fab','java']\" size=\"3x\"></fa-icon>\n                  <fa-icon [icon]=\"['fab','python']\" size=\"3x\"></fa-icon>\n                  <fa-icon [icon]=\"['fas','database']\" size=\"3x\"></fa-icon>\n                  <fa-icon [icon]=\"['fab','aws']\" size=\"3x\"></fa-icon>\n              </div>\n            </section>\n        </div>\n        <div class=\"aside\">\n          <section>\n            <h4>aside</h4>\n          </section>\n        </div>\n      </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/about/about.component.scss":
/*!********************************************!*\
  !*** ./src/app/about/about.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".about-component .intro {\n  background-color: #ffffff;\n  padding: 3em 0 1.5em; }\n  .about-component .intro h1 {\n    font-family: 'Elianto', sans-serif;\n    font-size: 3em; }\n  .about-component .breadcrumbs {\n  background-color: #32383e;\n  color: white;\n  padding: 0.23em 0; }\n  .about-component .comp-body {\n  padding: 3.5em 0; }\n  .about-component .comp-body .content {\n    background-color: #ffffff;\n    display: inline-block;\n    width: 70%; }\n  .about-component .comp-body .content .skills .tech-progress-bar {\n      width: 60%; }\n  .about-component .comp-body .content .skills .tech-progress-bar .progress-bar {\n        display: flex; }\n  .about-component .comp-body .content .skills .tech-progress-bar .progress-bar h5 {\n          width: 25%; }\n  .about-component .comp-body .content .skills .tech-progress-bar .progress-bar mat-progress-bar {\n          align-self: center;\n          margin: 0 1em; }\n  .about-component .comp-body .content .tech-logos .tech-logo-icons {\n      display: flex;\n      flex-wrap: wrap;\n      justify-content: space-around; }\n  .about-component .comp-body .content .tech-logos .tech-logo-icons fa-icon {\n        font-size: 1.8em;\n        padding: 1.5em; }\n  .about-component .comp-body .aside {\n    width: 24%;\n    display: inline-block;\n    float: right;\n    background-color: #ffffff; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvQzpcXFVzZXJzXFxTYWhpbCBNYW5qaXlhbmlcXERvY3VtZW50c1xccG9ydGZvbGlvL3NyY1xcYXBwXFxhYm91dFxcYWJvdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFHUSx5QkFBeUI7RUFDekIsb0JBQW9CLEVBQUE7RUFKNUI7SUFNWSxrQ0FBaUM7SUFDakMsY0FBYyxFQUFBO0VBUDFCO0VBWVEseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixpQkFBaUIsRUFBQTtFQWR6QjtFQWtCUSxnQkFBZ0IsRUFBQTtFQWxCeEI7SUFvQlkseUJBQXlCO0lBQ3pCLHFCQUFxQjtJQUNyQixVQUFVLEVBQUE7RUF0QnRCO01BeUJvQixVQUFVLEVBQUE7RUF6QjlCO1FBMkJ3QixhQUFhLEVBQUE7RUEzQnJDO1VBNkI0QixVQUFVLEVBQUE7RUE3QnRDO1VBZ0M0QixrQkFBa0I7VUFDbEIsYUFBYSxFQUFBO0VBakN6QztNQTJDb0IsYUFBYTtNQUNiLGVBQWU7TUFDZiw2QkFBNkIsRUFBQTtFQTdDakQ7UUErQ3dCLGdCQUFnQjtRQUNoQixjQUFjLEVBQUE7RUFoRHRDO0lBc0RZLFVBQVU7SUFDVixxQkFBcUI7SUFDckIsWUFBWTtJQUNaLHlCQUF5QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWJvdXQtY29tcG9uZW50IHtcblxuICAgIC5pbnRybyB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgICAgIHBhZGRpbmc6IDNlbSAwIDEuNWVtO1xuICAgICAgICBoMSB7XG4gICAgICAgICAgICBmb250LWZhbWlseTonRWxpYW50bycsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICBmb250LXNpemU6IDNlbTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAuYnJlYWRjcnVtYnMge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzIzODNlO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIHBhZGRpbmc6IDAuMjNlbSAwO1xuICAgIH1cblxuICAgIC5jb21wLWJvZHkge1xuICAgICAgICBwYWRkaW5nOiAzLjVlbSAwO1xuICAgICAgICAuY29udGVudCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgd2lkdGg6IDcwJTtcbiAgICAgICAgICAgIC5za2lsbHMge1xuICAgICAgICAgICAgICAgIC50ZWNoLXByb2dyZXNzLWJhciB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA2MCU7XG4gICAgICAgICAgICAgICAgICAgIC5wcm9ncmVzcy1iYXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGg1IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjUlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgbWF0LXByb2dyZXNzLWJhciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCAxZW07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC50ZWNoLWxvZ29zIHtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAudGVjaC1sb2dvLWljb25zIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgICAgICAgICAgICAgICAgZmEtaWNvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuOGVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMS41ZW07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9ICAgIFxuICAgICAgICB9ICAgXG4gICAgICAgIC5hc2lkZSB7XG4gICAgICAgICAgICB3aWR0aDogMjQlO1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbn1cblxuXG4gICJdfQ== */"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.scss */ "./src/app/about/about.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _blog_blog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./blog/blog.component */ "./src/app/blog/blog.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./projects/projects.component */ "./src/app/projects/projects.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");








var routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_7__["AboutComponent"] },
    { path: 'blog', component: _blog_blog_component__WEBPACK_IMPORTED_MODULE_4__["BlogComponent"] },
    { path: 'projects', component: _projects_projects_component__WEBPACK_IMPORTED_MODULE_6__["ProjectsComponent"] },
    { path: 'contact', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_5__["ContactComponent"] },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  <div class=\"header-container\">\n      <a mat-button routerLink=\"/\" >Home</a>\n      <a mat-button routerLink=\"about\">About</a>\n      <a mat-button routerLink=\"blog\" >Blog</a>\n      <a mat-button routerLink=\"projects\" >Projects</a>\n      <a mat-button routerLink=\"contact\" >Contact</a>\n  </div>\n</header>\n<main>\n      <router-outlet></router-outlet>\n</main>\n<footer>\n  <div class=\"footer-container\">\n      Designed and Developed by <span>Sahil Manjiyani</span>\n  </div>\n</footer>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "header .header-container {\n  background-color: #f5f5f5;\n  padding: 0.8em 0;\n  text-align: center; }\n  header .header-container a.mat-button {\n    font-family: 'Lato', sans-serif;\n    font-size: 1.2em;\n    margin: 0 0.5em; }\n  footer .footer-container {\n  background-color: #32383e;\n  color: #c3c7ca;\n  padding: 0.4em 0;\n  text-align: center; }\n  footer .footer-container span {\n    color: #ffffff; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxTYWhpbCBNYW5qaXlhbmlcXERvY3VtZW50c1xccG9ydGZvbGlvL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFUSx5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLGtCQUFrQixFQUFBO0VBSjFCO0lBTVksK0JBQStCO0lBQy9CLGdCQUFnQjtJQUNoQixlQUFlLEVBQUE7RUFNM0I7RUFFUSx5QkFBeUI7RUFDekIsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixrQkFBa0IsRUFBQTtFQUwxQjtJQU9ZLGNBQWMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImhlYWRlciB7XG4gICAgLmhlYWRlci1jb250YWluZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xuICAgICAgICBwYWRkaW5nOiAwLjhlbSAwO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGEubWF0LWJ1dHRvbiB7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICAgICAgICAgIG1hcmdpbjogMCAwLjVlbTsgICAgICAgIFxuICAgICAgICB9XG4gICAgfVxufVxuXG5cbmZvb3RlciB7XG4gICAgLmZvb3Rlci1jb250YWluZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzIzODNlO1xuICAgICAgICBjb2xvcjogI2MzYzdjYTtcbiAgICAgICAgcGFkZGluZzogMC40ZW0gMDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICB9XG4gICAgfVxufSJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'portfolio';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm5/grid-list.es5.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm5/expansion.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm5/divider.es5.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm5/progress-bar.es5.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ "./node_modules/@fortawesome/free-regular-svg-icons/index.es.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./projects/projects.component */ "./src/app/projects/projects.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _blog_blog_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./blog/blog.component */ "./src/app/blog/blog.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
























var AppModule = /** @class */ (function () {
    function AppModule() {
        _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_13__["library"].add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_14__["fas"], _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_15__["fab"], _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_16__["far"]);
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_18__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_19__["HomeComponent"],
                _projects_projects_component__WEBPACK_IMPORTED_MODULE_20__["ProjectsComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_21__["ContactComponent"],
                _blog_blog_component__WEBPACK_IMPORTED_MODULE_22__["BlogComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_23__["AboutComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_17__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["MatMenuModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__["MatGridListModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__["MatExpansionModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"],
                _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__["MatDividerModule"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_12__["FontAwesomeModule"],
                _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_11__["MatProgressBarModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_18__["AppComponent"]]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/blog/blog.component.html":
/*!******************************************!*\
  !*** ./src/app/blog/blog.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"blog-component\">\n    <div class=\"intro\">\n      <div class=\"container\">\n        <!-- use the pipe filter for title -->\n        <h1>BLOG</h1> \n      </div>\n    </div>\n    <div class=\"breadcrumbs\">\n      <div class=\"container\">\n        <!-- fetch page title -->\n          <p>Home / Blog</p>\n      </div>\n    </div>\n    <div class=\"comp-body\">\n        <div class=\"container\">\n          <div class=\"content\">\n              <mat-accordion>\n                  <mat-expansion-panel (opened)=\"panelOpenState = true\"\n                                       (closed)=\"panelOpenState = false\">\n                    <mat-expansion-panel-header>\n                      <mat-panel-title>\n                      <img src=\"../../assets/images/Projects/millenniumled.png\" alt=\"MillenniumLED\">\n                      <span>the name of a book, composition, or other artistic work.</span>  \n                      </mat-panel-title>\n                      <mat-panel-description>\n                        Currently I am {{panelOpenState ? 'open' : 'closed'}}\n                      </mat-panel-description>\n                    </mat-expansion-panel-header>\n                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>\n                  </mat-expansion-panel>\n                  <mat-expansion-panel (opened)=\"panelOpenState = true\"\n                                       (closed)=\"panelOpenState = false\">\n                    <mat-expansion-panel-header>\n                      <mat-panel-title>\n                      <img src=\"../../assets/images/Projects/millenniumled.png\" alt=\"MillenniumLED\">\n                      <span>the name of a book, composition, or other artistic work.</span>\n                      </mat-panel-title>\n                      <mat-panel-description>\n                        Currently I am {{panelOpenState ? 'open' : 'closed'}}\n                      </mat-panel-description>\n                    </mat-expansion-panel-header>\n                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>\n                  </mat-expansion-panel>\n                  <mat-expansion-panel (opened)=\"panelOpenState = true\"\n                                       (closed)=\"panelOpenState = false\">\n                    <mat-expansion-panel-header>\n                      <mat-panel-title>\n                      <img src=\"../../assets/images/Projects/millenniumled.png\" alt=\"MillenniumLED\">\n                      <span>the name of a book, composition, or other artistic work.</span>\n                      </mat-panel-title>\n                      <mat-panel-description>\n                        Currently I am {{panelOpenState ? 'open' : 'closed'}}\n                      </mat-panel-description>\n                    </mat-expansion-panel-header>\n                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>\n                  </mat-expansion-panel>\n                </mat-accordion>\n                \n          </div>\n          <div class=\"aside\">\n            <section>\n              <h4>Aside</h4>\n              <p>underconstruction!</p>\n            </section>\n          </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/blog/blog.component.scss":
/*!******************************************!*\
  !*** ./src/app/blog/blog.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".blog-component .intro {\n  background-color: #ffffff;\n  padding: 3em 0 1.5em; }\n  .blog-component .intro h1 {\n    font-family: 'Elianto', sans-serif;\n    font-size: 3em; }\n  .blog-component .breadcrumbs {\n  background-color: #32383e;\n  color: white;\n  padding: 0.23em 0; }\n  .blog-component .comp-body {\n  padding: 3.5em 0; }\n  .blog-component .comp-body .content {\n    width: 70%;\n    display: inline-block; }\n  .blog-component .comp-body .content mat-accordion mat-expansion-panel {\n      margin-bottom: 0.6em; }\n  .blog-component .comp-body .content mat-accordion mat-expansion-panel mat-expansion-panel-header {\n        height: unset !important; }\n  .blog-component .comp-body .content mat-accordion mat-expansion-panel mat-expansion-panel-header mat-panel-title {\n          height: unset;\n          padding: 0.5em;\n          max-height: 8em; }\n  .blog-component .comp-body .content mat-accordion mat-expansion-panel mat-expansion-panel-header mat-panel-title span {\n            align-self: center;\n            font-size: 1.6em;\n            padding: 0 1em; }\n  .blog-component .comp-body .content mat-accordion mat-expansion-panel mat-expansion-panel-header mat-panel-title img {\n            max-width: 30%;\n            border-radius: 7%;\n            border: 1px solid #ececec; }\n  .blog-component .comp-body .content mat-accordion mat-expansion-panel mat-expansion-panel-header mat-panel-description {\n          align-self: center; }\n  .blog-component .comp-body .aside {\n    width: 28%;\n    float: right;\n    background-color: #ffffff; }\n  .blog-component .comp-body .aside section {\n      padding: 1em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmxvZy9DOlxcVXNlcnNcXFNhaGlsIE1hbmppeWFuaVxcRG9jdW1lbnRzXFxwb3J0Zm9saW8vc3JjXFxhcHBcXGJsb2dcXGJsb2cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFUSx5QkFBeUI7RUFDekIsb0JBQW9CLEVBQUE7RUFINUI7SUFLWSxrQ0FBaUM7SUFDakMsY0FBYyxFQUFBO0VBTjFCO0VBV1EseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixpQkFBaUIsRUFBQTtFQWJ6QjtFQWlCUSxnQkFBZ0IsRUFBQTtFQWpCeEI7SUFtQlksVUFBVTtJQUNWLHFCQUFxQixFQUFBO0VBcEJqQztNQXVCb0Isb0JBQW9CLEVBQUE7RUF2QnhDO1FBeUJ3Qix3QkFBd0IsRUFBQTtFQXpCaEQ7VUEyQjRCLGFBQWE7VUFDYixjQUFjO1VBQ2QsZUFBZSxFQUFBO0VBN0IzQztZQStCZ0Msa0JBQWtCO1lBQ2xCLGdCQUFnQjtZQUNoQixjQUFjLEVBQUE7RUFqQzlDO1lBb0NnQyxjQUFjO1lBQ2QsaUJBQWlCO1lBQ2pCLHlCQUF5QixFQUFBO0VBdEN6RDtVQTBDNEIsa0JBQWtCLEVBQUE7RUExQzlDO0lBbURZLFVBQVU7SUFDVixZQUFZO0lBQ1oseUJBQXlCLEVBQUE7RUFyRHJDO01BdURnQixZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9ibG9nL2Jsb2cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmxvZy1jb21wb25lbnQge1xuICAgIC5pbnRybyB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgICAgIHBhZGRpbmc6IDNlbSAwIDEuNWVtO1xuICAgICAgICBoMSB7XG4gICAgICAgICAgICBmb250LWZhbWlseTonRWxpYW50bycsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICBmb250LXNpemU6IDNlbTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAuYnJlYWRjcnVtYnMge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzIzODNlO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIHBhZGRpbmc6IDAuMjNlbSAwO1xuICAgIH1cblxuICAgIC5jb21wLWJvZHkge1xuICAgICAgICBwYWRkaW5nOiAzLjVlbSAwOyAgIFxuICAgICAgICAuY29udGVudCB7XG4gICAgICAgICAgICB3aWR0aDogNzAlO1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgbWF0LWFjY29yZGlvbntcbiAgICAgICAgICAgICAgICBtYXQtZXhwYW5zaW9uLXBhbmVse1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjZlbTtcbiAgICAgICAgICAgICAgICAgICAgbWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXJ7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXQtcGFuZWwtdGl0bGV7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiB1bnNldDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLjVlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiA4ZW07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjZlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMCAxZW07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltZ3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAzMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDclO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZWNlY2VjO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG1hdC1wYW5lbC1kZXNjcmlwdGlvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5hc2lkZSB7XG4gICAgICAgICAgICB3aWR0aDogMjglO1xuICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgICAgIHNlY3Rpb257XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMWVtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIFxufVxuXG4gICJdfQ== */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BlogComponent = /** @class */ (function () {
    function BlogComponent() {
    }
    BlogComponent.prototype.ngOnInit = function () {
    };
    BlogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-blog',
            template: __webpack_require__(/*! ./blog.component.html */ "./src/app/blog/blog.component.html"),
            styles: [__webpack_require__(/*! ./blog.component.scss */ "./src/app/blog/blog.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BlogComponent);
    return BlogComponent;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"contact-component\">\n    <div class=\"intro\">\n      <div class=\"container\">\n        <h1>CONTACT</h1>\n      </div>\n    </div>\n    <div class=\"breadcrumbs\">\n      <div class=\"container\">\n          <p>Home / Contact</p>\n      </div>\n    </div>\n    <div class=\"comp-body\">\n        <div class=\"container\">\n          <div class=\"content\">\n              <section class=\"contact-details\">\n                <h3>See you:</h3>\n                <div>\n                  <ul>\n                    <li><i class=\"material-icons\">phone</i> \n                        <span> (647)-563-5363 </span></li>\n                    <li><i class=\"material-icons\">plocation_on</i>\n                        <span>Toronto, Canada</span> </li>\n                    <li><i class=\"material-icons\">email</i> \n                        <a href=\"mailto:sahilmanjiyani14@hotmail.com\">\n                          sahilmanjiyani14@hotmail.com</a></li>\n                  </ul>\n                </div>\n                <div class=\"g-map\">\n                    <iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d152659.28543970262!2d-79.3569924041066!3d43.681148922530866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb90d7c63ba5%3A0x323555502ab4c477!2sToronto%2C+ON!5e0!3m2!1sen!2sca!4v1556007723747!5m2!1sen!2sca\" width=\"600\" height=\"450\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>\n                </div>\n              </section>\n          </div>\n          <div class=\"aside\">\n            <section>\n              <h4>aside</h4>\n            </section>\n          </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/contact/contact.component.scss":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".contact-component .intro {\n  background-color: #ffffff;\n  padding: 3em 0 1.5em; }\n  .contact-component .intro h1 {\n    font-family: 'Elianto', sans-serif;\n    font-size: 3em; }\n  .contact-component .breadcrumbs {\n  background-color: #32383e;\n  color: white;\n  padding: 0.23em 0; }\n  .contact-component .comp-body {\n  padding: 3.5em 0; }\n  .contact-component .comp-body .content {\n    width: 70%;\n    display: inline-block; }\n  .contact-component .comp-body .content .contact-details {\n      background-color: #ffffff;\n      padding: 3em 2em; }\n  .contact-component .comp-body .content .contact-details li {\n        width: 40%;\n        display: inline-flex;\n        padding: 1em 0; }\n  .contact-component .comp-body .content .contact-details li span, .contact-component .comp-body .content .contact-details li a {\n          margin-left: 1em; }\n  .contact-component .comp-body .aside {\n    width: 24%;\n    display: inline-block;\n    float: right;\n    background-color: #f5f5f5; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC9DOlxcVXNlcnNcXFNhaGlsIE1hbmppeWFuaVxcRG9jdW1lbnRzXFxwb3J0Zm9saW8vc3JjXFxhcHBcXGNvbnRhY3RcXGNvbnRhY3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFHUSx5QkFBeUI7RUFDekIsb0JBQW9CLEVBQUE7RUFKNUI7SUFNWSxrQ0FBaUM7SUFDakMsY0FBYyxFQUFBO0VBUDFCO0VBWVEseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixpQkFBaUIsRUFBQTtFQWR6QjtFQWtCUSxnQkFBZ0IsRUFBQTtFQWxCeEI7SUFvQlksVUFBVTtJQUNWLHFCQUFxQixFQUFBO0VBckJqQztNQXVCZ0IseUJBQXlCO01BQ3pCLGdCQUFnQixFQUFBO0VBeEJoQztRQTBCb0IsVUFBVTtRQUNWLG9CQUFvQjtRQUNwQixjQUFjLEVBQUE7RUE1QmxDO1VBOEJ3QixnQkFBZ0IsRUFBQTtFQTlCeEM7SUFvQ1ksVUFBVTtJQUNWLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1oseUJBQXlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFjdC1jb21wb25lbnQge1xuXG4gICAgLmludHJvIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgcGFkZGluZzogM2VtIDAgMS41ZW07XG4gICAgICAgIGgxIHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OidFbGlhbnRvJywgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogM2VtO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIC5icmVhZGNydW1icyB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzMjM4M2U7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgcGFkZGluZzogMC4yM2VtIDA7XG4gICAgfVxuXG4gICAgLmNvbXAtYm9keSB7XG4gICAgICAgIHBhZGRpbmc6IDMuNWVtIDA7ICAgXG4gICAgICAgIC5jb250ZW50IHtcbiAgICAgICAgICAgIHdpZHRoOiA3MCU7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAuY29udGFjdC1kZXRhaWxze1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogM2VtIDJlbTtcbiAgICAgICAgICAgICAgICBsaSB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0MCU7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxZW0gMDtcbiAgICAgICAgICAgICAgICAgICAgc3BhbixhIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxZW07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLmFzaWRlIHtcbiAgICAgICAgICAgIHdpZHRoOiAyNCU7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xuICAgICAgICB9XG4gICAgfVxuICAgIFxufVxuXG5cbiAgIl19 */"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.scss */ "./src/app/contact/contact.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"home-component\">\n  <div class=\"container\">\n      <section class=\"intro\">\n        <div class=\"intro-container\">\n          <div class=\"intro-content\">\n            <div>\n                  <div class=\"heading\">\n                    <h1>Sahil Manjiyani</h1>\n                    <h3>Software Developer</h3>\n                  </div>\n                  <div class=\"details\">\n                    <ul>\n                      <li><a href=\"\"><i class=\"fa fa-linkedin\"></i></a></li>\n                      <li><a href=\"\"><i class=\"fa fa-stack-overflow\"></i></a> </li>\n                      <li><a href=\"\"><i class=\"fa fa-github-square\"></i></a></li>\n                    </ul>\n                  </div>\n            </div>\n            \n          </div>\n          <div class=\"intro-image\">\n            <img  src=\"../../assets/images/20190128_103434.jpg\" alt=\"\">\n          </div>\n        </div>\n      </section>\n      <section class=\"my-expertise\">\n        <div class=\"expertise-header\">\n          <h2>What I do</h2>\n          <mat-divider></mat-divider>\n        </div>\n        <div class=\"expertise-card\">\n          <mat-card class=\"example-card\">\n            <mat-card-content>\n              <fa-icon class=\"bullseye\" [icon]=\"['fas','bullseye']\" size=\"2x\" ></fa-icon>\n              <h4>UI Design</h4>\n              <p>\n                The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.\n                A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally\n                bred for hunting.\n              </p>\n            </mat-card-content>\n          </mat-card>\n          <mat-card class=\"example-card\">\n            <mat-card-content>\n              <fa-icon class=\"code\" [icon]=\"['fas','code']\" size=\"2x\" ></fa-icon>\n              <h4>Web Development</h4>\n              <p>\n                The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.\n                A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally\n                bred for hunting.\n              </p>\n            </mat-card-content>\n          </mat-card>\n          <mat-card class=\"\">\n            <mat-card-content>\n              <fa-icon class=\"terminal\" [icon]=\"['fas','terminal']\" size=\"2x\" ></fa-icon>\n              <h4>App Development</h4>\n              <p>\n                The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.\n                A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally\n                bred for hunting.\n              </p>\n            </mat-card-content>\n          </mat-card>\n        </div>\n      </section>\n      <section class=\"blog-compartment\">\n        <div class=\"blog-header\">\n          <h2>Blog</h2>\n          <mat-divider></mat-divider>\n        </div>\n        <div class=\"blog-cards\">\n            <mat-card class=\"example-card\">\n              <img mat-card-image src=\"../../assets/images/Projects/millenniumled.png\" alt=\"Photo of a Shiba Inu\">\n              <mat-card-header>\n                  <mat-card-title>Shiba Inu</mat-card-title>\n                  <mat-card-subtitle>Dog Breed</mat-card-subtitle>\n                </mat-card-header>\n                <mat-card-content>\n                  <p>\n                    The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.\n                    A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally\n                    bred for hunting.\n                  </p>\n                </mat-card-content>\n                <mat-card-actions>\n                  <button mat-button>LIKE</button>\n                  <button mat-button>SHARE</button>\n                </mat-card-actions>\n              </mat-card>\n              <mat-card class=\"example-card\">\n                  <img mat-card-image src=\"../../assets/images/Projects/millenniumled.png\" alt=\"Photo of a Shiba Inu\">\n                  <mat-card-header>\n                    <mat-card-title>Shiba Inu</mat-card-title>\n                    <mat-card-subtitle>Dog Breed</mat-card-subtitle>\n                  </mat-card-header>\n                  <mat-card-content>\n                    <p>\n                      The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.\n                      A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally\n                      bred for hunting.\n                    </p>\n                  </mat-card-content>\n                  <mat-card-actions>\n                    <button mat-button>LIKE</button>\n                    <button mat-button>SHARE</button>\n                  </mat-card-actions>\n                </mat-card>\n                <mat-card class=\"example-card\">\n                    <img mat-card-image src=\"../../assets/images/Projects/millenniumled.png\" alt=\"Photo of a Shiba Inu\">\n                    <mat-card-header>\n                        <!-- <div mat-card-avatar class=\"example-header-image\"></div> -->\n                        <mat-card-title>Shiba Inu</mat-card-title>\n                        <mat-card-subtitle>Dog Breed</mat-card-subtitle>\n                    </mat-card-header>\n                    <mat-card-content>\n                      <p>\n                        The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.\n                        A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally\n                        bred for hunting.\n                      </p>\n                    </mat-card-content>\n                    <mat-card-actions>\n                      <button mat-button>LIKE</button>\n                      <button mat-button>SHARE</button>\n                    </mat-card-actions>\n                  </mat-card>\n        </div>\n      </section>\n      <!-- <section class=\"project-compartment\">\n        <div class=\"project-header\">\n          <h2>Projects</h2>\n          <mat-divider></mat-divider>\n        </div>\n        <div class=\"project-cards\">\n          Underconstruction!\n        </div>\n      </section>\n      <section class=\"recommendation-compartment\">\n          <div class=\"recommendation-header\">\n            <h2>Recommendation</h2>\n            <mat-divider></mat-divider>\n          </div>\n          <div class=\"recommendation-cards\">\n            Underconstruction!\n          </div>\n        </section> -->\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".home-component {\n  background-color: #ffffff; }\n  .home-component section {\n    padding-bottom: 3em; }\n  .home-component .intro {\n    padding-top: 2em; }\n  .home-component .intro .intro-container {\n      display: flex; }\n  .home-component .intro .intro-container .intro-content {\n        width: 50%;\n        display: flex;\n        align-self: center;\n        background-image: linear-gradient(to right, #f5f5f5, white);\n        padding: 1em; }\n  .home-component .intro .intro-container .intro-content .heading h1 {\n          font-size: 2.3em; }\n  .home-component .intro .intro-container .intro-content .details ul {\n          margin-top: 0.3em; }\n  .home-component .intro .intro-container .intro-content .details ul li {\n            display: inline;\n            margin-right: 1em; }\n  .home-component .intro .intro-container .intro-content .details ul li i {\n              font-size: 1.3em; }\n  .home-component .intro .intro-container .intro-image {\n        width: 50%; }\n  .home-component .intro .intro-container .intro-image img {\n          width: 40%;\n          border-radius: 50%;\n          border: 5px solid #ececec;\n          margin: auto;\n          display: block; }\n  .home-component .my-expertise .expertise-header h2 {\n    text-align: center;\n    margin-bottom: 0.2em; }\n  .home-component .my-expertise .expertise-card {\n    display: flex;\n    justify-content: space-between;\n    padding: 0.4em 0; }\n  .home-component .my-expertise .expertise-card mat-card {\n      width: 30%;\n      display: inline-block; }\n  .home-component .my-expertise .expertise-card mat-card mat-card-content {\n        padding: 0 0.7em; }\n  .home-component .my-expertise .expertise-card mat-card mat-card-content h4 {\n          margin: 1em 0;\n          font-size: 1.2em; }\n  .home-component .my-expertise .expertise-card mat-card mat-card-content fa-icon.bullseye {\n          color: #3f65f3; }\n  .home-component .my-expertise .expertise-card mat-card mat-card-content fa-icon.code {\n          color: #ee4e23; }\n  .home-component .my-expertise .expertise-card mat-card mat-card-content fa-icon.terminal {\n          color: #5ec127; }\n  .home-component .blog-compartment .blog-header h2 {\n    text-align: center;\n    margin-bottom: 0.2em; }\n  .home-component .blog-compartment .blog-cards {\n    display: flex;\n    justify-content: space-between;\n    padding: 0.4em 0; }\n  .home-component .blog-compartment .blog-cards mat-card {\n      width: 30%;\n      display: inline-block; }\n  .home-component .project-compartment .project-header h2 {\n    text-align: center;\n    margin-bottom: 0.2em; }\n  .home-component .recommendation-compartment .recommendation-header h2 {\n    text-align: center;\n    margin-bottom: 0.2em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcVXNlcnNcXFNhaGlsIE1hbmppeWFuaVxcRG9jdW1lbnRzXFxwb3J0Zm9saW8vc3JjXFxhcHBcXGhvbWVcXGhvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBeUIsRUFBQTtFQUQ3QjtJQUdRLG1CQUFtQixFQUFBO0VBSDNCO0lBTVEsZ0JBQWdCLEVBQUE7RUFOeEI7TUFRWSxhQUFhLEVBQUE7RUFSekI7UUFVZ0IsVUFBVTtRQUNWLGFBQWE7UUFDYixrQkFBa0I7UUFDbEIsMkRBQTJEO1FBQzNELFlBQVksRUFBQTtFQWQ1QjtVQWlCd0IsZ0JBQWdCLEVBQUE7RUFqQnhDO1VBc0J3QixpQkFBaUIsRUFBQTtFQXRCekM7WUF3QjRCLGVBQWU7WUFDZixpQkFBaUIsRUFBQTtFQXpCN0M7Y0EyQmdDLGdCQUFnQixFQUFBO0VBM0JoRDtRQW1DZ0IsVUFBVSxFQUFBO0VBbkMxQjtVQXFDd0IsVUFBVTtVQUNWLGtCQUFrQjtVQUNsQix5QkFBeUI7VUFDekIsWUFBWTtVQUNaLGNBQWMsRUFBQTtFQXpDdEM7SUFpRGdCLGtCQUFrQjtJQUNsQixvQkFBb0IsRUFBQTtFQWxEcEM7SUFzRFksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixnQkFBZ0IsRUFBQTtFQXhENUI7TUEwRGdCLFVBQVU7TUFDVixxQkFBcUIsRUFBQTtFQTNEckM7UUE2RG9CLGdCQUFnQixFQUFBO0VBN0RwQztVQStEd0IsYUFBYTtVQUNiLGdCQUFnQixFQUFBO0VBaEV4QztVQW1Fd0IsY0FBYyxFQUFBO0VBbkV0QztVQXNFd0IsY0FBYyxFQUFBO0VBdEV0QztVQXlFd0IsY0FBYyxFQUFBO0VBekV0QztJQW1GZ0Isa0JBQWtCO0lBQ2xCLG9CQUFvQixFQUFBO0VBcEZwQztJQXdGWSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLGdCQUFnQixFQUFBO0VBMUY1QjtNQTRGZ0IsVUFBVTtNQUNWLHFCQUFxQixFQUFBO0VBN0ZyQztJQW9HZ0Isa0JBQWtCO0lBQ2xCLG9CQUFvQixFQUFBO0VBckdwQztJQTRHZ0Isa0JBQWtCO0lBQ2xCLG9CQUFvQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhvbWUtY29tcG9uZW50IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgIHNlY3Rpb24ge1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogM2VtO1xuICAgIH1cbiAgICAuaW50cm8ge1xuICAgICAgICBwYWRkaW5nLXRvcDogMmVtO1xuICAgICAgICAuaW50cm8tY29udGFpbmVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAuaW50cm8tY29udGVudCB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmNWY1ZjUsIHdoaXRlKTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxZW07XG4gICAgICAgICAgICAgICAgLmhlYWRpbmcge1xuICAgICAgICAgICAgICAgICAgICBoMSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIuM2VtO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5kZXRhaWxzIHtcbiAgICAgICAgICAgICAgICAgICAgdWwge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMC4zZW07XG4gICAgICAgICAgICAgICAgICAgICAgICBsaSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMWVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuM2VtO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5pbnRyby1pbWFnZSB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0MCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDVweCBzb2xpZCAjZWNlY2VjO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgIH0gXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLm15LWV4cGVydGlzZSB7XG4gICAgICAgIC5leHBlcnRpc2UtaGVhZGVyIHtcbiAgICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMC4yZW07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLmV4cGVydGlzZS1jYXJkIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICBwYWRkaW5nOiAwLjRlbSAwO1xuICAgICAgICAgICAgbWF0LWNhcmQge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAzMCU7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgIG1hdC1jYXJkLWNvbnRlbnQge1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDAuN2VtO1xuICAgICAgICAgICAgICAgICAgICBoNCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDFlbSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBmYS1pY29uLmJ1bGxzZXllIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjM2Y2NWYzO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGZhLWljb24uY29kZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2VlNGUyMztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBmYS1pY29uLnRlcm1pbmFsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNWVjMTI3O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgXG4gICAgfVxuICAgIC5ibG9nLWNvbXBhcnRtZW50IHtcbiAgICAgICAgLmJsb2ctaGVhZGVyIHtcbiAgICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMC4yZW07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLmJsb2ctY2FyZHMge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAuNGVtIDA7XG4gICAgICAgICAgICBtYXQtY2FyZCB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDMwJTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLnByb2plY3QtY29tcGFydG1lbnQge1xuICAgICAgICAucHJvamVjdC1oZWFkZXIge1xuICAgICAgICAgICAgaDIge1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAucmVjb21tZW5kYXRpb24tY29tcGFydG1lbnQge1xuICAgICAgICAucmVjb21tZW5kYXRpb24taGVhZGVyIHtcbiAgICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMC4yZW07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59Il19 */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/projects/projects.component.html":
/*!**************************************************!*\
  !*** ./src/app/projects/projects.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"projects-component\">\n    <div class=\"intro\">\n      <div class=\"container\">\n        <h1>PROJECTS</h1>\n      </div>\n    </div>\n    <div class=\"breadcrumbs\">\n      <div class=\"container\">\n          <p>Home / Projects</p>\n      </div>\n    </div>\n    <div class=\"comp-body\">\n        <div class=\"container\">\n          <div class=\"content\">\n              <div class=\"projects-tiles\">\n                  <div class=\"tile\">\n                      <img src=\"../../assets/images/Projects/millenniumled.png\" alt=\"MillenniumLED\">\n                  </div>\n                  <div class=\"tile\">\n                      <img src=\"../../assets/images/Projects/web-tech-1.png\" alt=\"Web Technology I - Porject\">\n                  </div>\n                  <div class=\"tile\">\n                      <img src=\"../../assets/images/Projects/web-tech-2.png\" alt=\"Web Technology II - Porject\">\n                  </div>\n                  <!-- <mat-grid-list cols=\"2\" rowHeight=\"2:1\">\n                      <mat-grid-tile>\n                        \n                      </mat-grid-tile>\n                      <mat-grid-tile>\n                        <img src=\"../../assets/images/Projects/web-tech-2.png\" alt=\"\">\n                      </mat-grid-tile>\n                      <mat-grid-tile>\n                        <img src=\"../../assets/images/Projects/millenniumled.png\" alt=\"\">\n                      </mat-grid-tile>\n                    </mat-grid-list> -->\n    \n              </div>\n          </div>\n          <div class=\"aside\">\n            <section>\n              <h4>aside</h4>\n            </section>\n          </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/projects/projects.component.scss":
/*!**************************************************!*\
  !*** ./src/app/projects/projects.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".projects-component .intro {\n  background-color: #ffffff;\n  padding: 3em 0 1.5em; }\n  .projects-component .intro h1 {\n    font-family: 'Elianto', sans-serif;\n    font-size: 3em; }\n  .projects-component .breadcrumbs {\n  background-color: #32383e;\n  color: white;\n  padding: 0.23em 0; }\n  .projects-component .comp-body {\n  padding: 3.5em 0; }\n  .projects-component .comp-body .content {\n    width: 70%;\n    display: inline-block; }\n  .projects-component .comp-body .content .projects-tiles {\n      background-color: #ffffff;\n      padding: 0.5em 0.5em;\n      display: flex;\n      flex-wrap: wrap;\n      justify-content: space-around; }\n  .projects-component .comp-body .content .projects-tiles .tile {\n        width: 48%; }\n  .projects-component .comp-body .content .projects-tiles .tile img {\n          width: 100%;\n          border: 1px solid #c3c7ca;\n          border-radius: 3%; }\n  .projects-component .comp-body .content .projects-tiles .tile :hover {\n          box-shadow: 0px 0px 6px 0px; }\n  .projects-component .comp-body .aside {\n    width: 24%;\n    float: right;\n    background-color: #f5f5f5; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdHMvQzpcXFVzZXJzXFxTYWhpbCBNYW5qaXlhbmlcXERvY3VtZW50c1xccG9ydGZvbGlvL3NyY1xcYXBwXFxwcm9qZWN0c1xccHJvamVjdHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFUSx5QkFBeUI7RUFDekIsb0JBQW9CLEVBQUE7RUFINUI7SUFLWSxrQ0FBaUM7SUFDakMsY0FBYyxFQUFBO0VBTjFCO0VBV1EseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixpQkFBaUIsRUFBQTtFQWJ6QjtFQWlCUSxnQkFBZ0IsRUFBQTtFQWpCeEI7SUFtQlksVUFBVTtJQUNWLHFCQUFxQixFQUFBO0VBcEJqQztNQXNCZ0IseUJBQXlCO01BQ3pCLG9CQUFvQjtNQUNwQixhQUFhO01BQ2IsZUFBZTtNQUNmLDZCQUE2QixFQUFBO0VBMUI3QztRQTZCb0IsVUFBVSxFQUFBO0VBN0I5QjtVQStCd0IsV0FBVztVQUNYLHlCQUF5QjtVQUN6QixpQkFBaUIsRUFBQTtFQWpDekM7VUFtQ3lCLDJCQUEyQixFQUFBO0VBbkNwRDtJQTBDWSxVQUFVO0lBQ1YsWUFBWTtJQUNaLHlCQUF5QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcHJvamVjdHMvcHJvamVjdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvamVjdHMtY29tcG9uZW50IHtcbiAgICAuaW50cm8ge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgICAgICBwYWRkaW5nOiAzZW0gMCAxLjVlbTtcbiAgICAgICAgaDEge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6J0VsaWFudG8nLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgZm9udC1zaXplOiAzZW07XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLmJyZWFkY3J1bWJzIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzMyMzgzZTtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBwYWRkaW5nOiAwLjIzZW0gMDtcbiAgICB9XG5cbiAgICAuY29tcC1ib2R5IHtcbiAgICAgICAgcGFkZGluZzogMy41ZW0gMDsgICBcbiAgICAgICAgLmNvbnRlbnQge1xuICAgICAgICAgICAgd2lkdGg6IDcwJTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIC5wcm9qZWN0cy10aWxlc3tcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAuNWVtIDAuNWVtO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC50aWxle1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDglO1xuICAgICAgICAgICAgICAgICAgICBpbWd7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjM2M3Y2E7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzJTtcbiAgICAgICAgICAgICAgICAgICAgIH0gJiA6aG92ZXJ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCA2cHggMHB4O1xuICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAuYXNpZGUge1xuICAgICAgICAgICAgd2lkdGg6IDI0JTtcbiAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG59XG5cbiAgIl19 */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProjectsComponent = /** @class */ (function () {
    function ProjectsComponent() {
        this.tiles = [
            { text: 'One', cols: 3, rows: 1, color: 'lightblue' },
            { text: 'Two', cols: 1, rows: 2, color: 'lightgreen' },
            { text: 'Three', cols: 1, rows: 1, color: 'lightpink' },
            { text: 'Four', cols: 2, rows: 1, color: '#DDBDF1' },
        ];
    }
    ProjectsComponent.prototype.ngOnInit = function () {
    };
    ProjectsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-projects',
            template: __webpack_require__(/*! ./projects.component.html */ "./src/app/projects/projects.component.html"),
            styles: [__webpack_require__(/*! ./projects.component.scss */ "./src/app/projects/projects.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProjectsComponent);
    return ProjectsComponent;
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

module.exports = __webpack_require__(/*! C:\Users\Sahil Manjiyani\Documents\portfolio\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map