(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/settings/logs/LogComponent.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/settings/logs/LogComponent.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      searchMail: "",
      searchUser: "",
      userData: [],
      headers: [{
        text: "Uživatel",
        align: "start",
        value: "userId"
      }, {
        text: "Akce",
        value: "akce"
      }, {
        text: "Data",
        value: "data"
      }, {
        text: "Vytvořeno",
        value: "created_at"
      }],
      headersMail: [{
        text: "Cílový mail",
        align: "start",
        value: "to"
      }, {
        text: "Obsah",
        value: "body"
      }, {
        text: "Vytvořeno",
        value: "created_at"
      }],
      userhistorie: false,
      mailHistore: false,
      items: ["Uživatelský Log", "Odeslané maily"],
      value: "Uživatelský Log",
      tableMailLoading: true,
      tableUsersLoading: true
    };
  },
  created: function created() {
    var _this = this;

    // Informace, zda jsou nefunknčí streamy
    window.axios.get("/api/users/history").then(function (response) {
      _this.userhistorie = response.data;
      _this.tableUsersLoading = false;
    });
    var currentObj = this;
    axios.get("/api/user/get").then(function (response) {
      currentObj.userData = response.data;
    });
  },
  mounted: function mounted() {
    this.interval = setInterval(function () {
      var currentObj = this;
      axios.get("/api/user/get").then(function (response) {
        currentObj.userData = response.data;
      });
    }.bind(this), 5000);
  },
  watch: {
    value: function value() {
      var _this2 = this;

      if (this.value === "Uživatelský Log") {
        window.axios.get("/api/users/history").then(function (response) {
          _this2.userhistorie = response.data;
          _this2.tableUsersLoading = false;
        });
        this.mailHistore = [];
        this.tableMailLoading = true;
      } else if (this.value === "Odeslané maily") {
        window.axios.get("/api/mail/history").then(function (response) {
          _this2.mailHistore = response.data;
          _this2.tableMailLoading = false;
        });
        this.userhistorie = [];
        this.tableUsersLoading = true;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/settings/logs/LogComponent.vue?vue&type=template&id=f1055890&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/settings/logs/LogComponent.vue?vue&type=template&id=f1055890& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "body-2" },
    [
      _c("br"),
      _vm._v(" "),
      _c(
        "v-row",
        { attrs: { justify: "start" } },
        [
          _c(
            "v-col",
            { staticClass: "d-flex", attrs: { cols: "3", sm: "3" } },
            [
              _c("v-select", {
                attrs: { items: _vm.items, label: "Typ dat", dense: "" },
                model: {
                  value: _vm.value,
                  callback: function($$v) {
                    _vm.value = $$v
                  },
                  expression: "value"
                }
              })
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("br"),
      _vm._v(" "),
      _vm.value == "Uživatelský Log" && _vm.userhistorie == false
        ? _c("v-data-table", {
            staticClass: "elevation-1 mr-12",
            attrs: {
              loading: "",
              "loading-text": "Načítám data, prosím počkejte"
            }
          })
        : _vm._e(),
      _vm._v(" "),
      _vm.value == "Uživatelský Log" && _vm.userhistorie != false
        ? _c("v-data-table", {
            staticClass: "elevation-1 mr-12",
            attrs: {
              dense: _vm.userData.dense,
              "fixed-header": "",
              loading: _vm.tableUsersLoading === "true",
              "loading-text": "načítám data ...",
              headers: _vm.headers,
              items: _vm.userhistorie,
              "sort-by": ["created_at"],
              "sort-desc": [true],
              search: _vm.searchUser,
              "multi-sort": ""
            },
            scopedSlots: _vm._u(
              [
                {
                  key: "top",
                  fn: function() {
                    return [
                      _c(
                        "v-toolbar",
                        { attrs: { flat: "" } },
                        [
                          _c("v-text-field", {
                            attrs: {
                              autofocus: "",
                              "append-icon": "mdi-magnify",
                              label: "Hledání...",
                              "single-line": "",
                              "hide-details": ""
                            },
                            model: {
                              value: _vm.searchUser,
                              callback: function($$v) {
                                _vm.searchUser = $$v
                              },
                              expression: "searchUser"
                            }
                          })
                        ],
                        1
                      )
                    ]
                  },
                  proxy: true
                }
              ],
              null,
              false,
              3972085170
            )
          })
        : _vm._e(),
      _vm._v(" "),
      _vm.value == "Odeslané maily" && _vm.mailHistore == false
        ? _c("v-data-table", {
            staticClass: "elevation-1 mr-12",
            attrs: {
              loading: "",
              "loading-text": "Načítám data, prosím počkejte"
            }
          })
        : _vm._e(),
      _vm._v(" "),
      _vm.value == "Odeslané maily" && _vm.mailHistore != false
        ? _c("v-data-table", {
            staticClass: "elevation-1 mr-12",
            attrs: {
              dense: _vm.userData.dense,
              "fixed-header": "",
              search: _vm.searchMail,
              headers: _vm.headersMail,
              items: _vm.mailHistore,
              "sort-by": ["created_at"],
              "sort-desc": [true],
              "multi-sort": ""
            },
            scopedSlots: _vm._u(
              [
                {
                  key: "top",
                  fn: function() {
                    return [
                      _c(
                        "v-toolbar",
                        { attrs: { flat: "" } },
                        [
                          _c("v-text-field", {
                            attrs: {
                              autofocus: "",
                              "append-icon": "mdi-magnify",
                              label: "Hledání...",
                              "single-line": "",
                              "hide-details": ""
                            },
                            model: {
                              value: _vm.searchMail,
                              callback: function($$v) {
                                _vm.searchMail = $$v
                              },
                              expression: "searchMail"
                            }
                          })
                        ],
                        1
                      )
                    ]
                  },
                  proxy: true
                }
              ],
              null,
              false,
              3494371882
            )
          })
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/settings/logs/LogComponent.vue":
/*!****************************************************************!*\
  !*** ./resources/js/components/settings/logs/LogComponent.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LogComponent_vue_vue_type_template_id_f1055890___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LogComponent.vue?vue&type=template&id=f1055890& */ "./resources/js/components/settings/logs/LogComponent.vue?vue&type=template&id=f1055890&");
/* harmony import */ var _LogComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LogComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/settings/logs/LogComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _LogComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _LogComponent_vue_vue_type_template_id_f1055890___WEBPACK_IMPORTED_MODULE_0__["render"],
  _LogComponent_vue_vue_type_template_id_f1055890___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/settings/logs/LogComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/settings/logs/LogComponent.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/settings/logs/LogComponent.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LogComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./LogComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/settings/logs/LogComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LogComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/settings/logs/LogComponent.vue?vue&type=template&id=f1055890&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/settings/logs/LogComponent.vue?vue&type=template&id=f1055890& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LogComponent_vue_vue_type_template_id_f1055890___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./LogComponent.vue?vue&type=template&id=f1055890& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/settings/logs/LogComponent.vue?vue&type=template&id=f1055890&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LogComponent_vue_vue_type_template_id_f1055890___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LogComponent_vue_vue_type_template_id_f1055890___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);