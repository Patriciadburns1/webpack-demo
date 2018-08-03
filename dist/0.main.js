(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./src/helpers.js":
/*!************************!*\
  !*** ./src/helpers.js ***!
  \************************/
/*! exports provided: login, addToDom, addImg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addToDom", function() { return addToDom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addImg", function() { return addImg; });
/* harmony import */ var _users__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./users */ "./src/users.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
 
 

const login = (username, password) => {
    const user = _users__WEBPACK_IMPORTED_MODULE_0__["default"][username]; 

    if(user && user.password === password){
        return 'User logged in as:' + user.name; 
    }

    return "invalid username and or password"; 
}

//functions must be in es6 
const addToDom = (type, text, className = 'red') => {
    const element = jquery__WEBPACK_IMPORTED_MODULE_1___default()(`<${type}>`, {
        text,
        class: className
    }); 
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('#root').append(element); 
}

const addImg =(src) => {
    const img = jquery__WEBPACK_IMPORTED_MODULE_1___default()('<img>', {src}); 
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('#root').append(img); 
}

/***/ }),

/***/ "./src/users.js":
/*!**********************!*\
  !*** ./src/users.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
    DiscoStu : {
        password: 'patricia',
        name: 'Stu Smith'
    },
    SassySally : {
        password: 'sassypants',
        name: 'Sally Burns'
    },

     AuthorWoman:{
        password: 'hello',
        name: 'Virginia Wolf'
    }, 
    Sprit: {
        password: 'ilovedrinks',
        name: 'Al Franken'
    }


}); 


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaGVscGVycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXNlcnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHQTtBQUNBLDBFOztBQUVBO0FBQ0EsZ0Q7QUFDQTs7QUFFQSw4QztBQUNBOztBQUVBO0FBQ0E7QUFDQSxzRUFBMEIsS0FBSztBQUMvQjtBQUNBO0FBQ0EsS0FBSyxFO0FBQ0wsMkU7QUFDQTs7QUFFQTtBQUNBLHdFQUE0QixJQUFJLEU7QUFDaEMsdUU7QUFDQSxDOzs7Ozs7Ozs7Ozs7O0FDekJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxHIiwiZmlsZSI6IjAubWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB1c2VycyBmcm9tICcuL3VzZXJzJzsgXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknOyBcblxuZXhwb3J0IGNvbnN0IGxvZ2luID0gKHVzZXJuYW1lLCBwYXNzd29yZCkgPT4ge1xuICAgIGNvbnN0IHVzZXIgPSB1c2Vyc1t1c2VybmFtZV07IFxuXG4gICAgaWYodXNlciAmJiB1c2VyLnBhc3N3b3JkID09PSBwYXNzd29yZCl7XG4gICAgICAgIHJldHVybiAnVXNlciBsb2dnZWQgaW4gYXM6JyArIHVzZXIubmFtZTsgXG4gICAgfVxuXG4gICAgcmV0dXJuIFwiaW52YWxpZCB1c2VybmFtZSBhbmQgb3IgcGFzc3dvcmRcIjsgXG59XG5cbi8vZnVuY3Rpb25zIG11c3QgYmUgaW4gZXM2IFxuZXhwb3J0IGNvbnN0IGFkZFRvRG9tID0gKHR5cGUsIHRleHQsIGNsYXNzTmFtZSA9ICdyZWQnKSA9PiB7XG4gICAgY29uc3QgZWxlbWVudCA9ICQoYDwke3R5cGV9PmAsIHtcbiAgICAgICAgdGV4dCxcbiAgICAgICAgY2xhc3M6IGNsYXNzTmFtZVxuICAgIH0pOyBcbiAgICAkKCcjcm9vdCcpLmFwcGVuZChlbGVtZW50KTsgXG59XG5cbmV4cG9ydCBjb25zdCBhZGRJbWcgPShzcmMpID0+IHtcbiAgICBjb25zdCBpbWcgPSAkKCc8aW1nPicsIHtzcmN9KTsgXG4gICAgJCgnI3Jvb3QnKS5hcHBlbmQoaW1nKTsgXG59IiwiZXhwb3J0IGRlZmF1bHQge1xuICAgIERpc2NvU3R1IDoge1xuICAgICAgICBwYXNzd29yZDogJ3BhdHJpY2lhJyxcbiAgICAgICAgbmFtZTogJ1N0dSBTbWl0aCdcbiAgICB9LFxuICAgIFNhc3N5U2FsbHkgOiB7XG4gICAgICAgIHBhc3N3b3JkOiAnc2Fzc3lwYW50cycsXG4gICAgICAgIG5hbWU6ICdTYWxseSBCdXJucydcbiAgICB9LFxuXG4gICAgIEF1dGhvcldvbWFuOntcbiAgICAgICAgcGFzc3dvcmQ6ICdoZWxsbycsXG4gICAgICAgIG5hbWU6ICdWaXJnaW5pYSBXb2xmJ1xuICAgIH0sIFxuICAgIFNwcml0OiB7XG4gICAgICAgIHBhc3N3b3JkOiAnaWxvdmVkcmlua3MnLFxuICAgICAgICBuYW1lOiAnQWwgRnJhbmtlbidcbiAgICB9XG5cblxufTsgXG4iXSwic291cmNlUm9vdCI6IiJ9