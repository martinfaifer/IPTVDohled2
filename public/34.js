(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[34],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Navigation/UserComponent.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Navigation/UserComponent.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
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
var Alert = function Alert() {
  return __webpack_require__.e(/*! import() */ 32).then(__webpack_require__.bind(null, /*! ../alerts/AlertComponent */ "./resources/js/components/alerts/AlertComponent.vue"));
};

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      contextMenu: "user",
      colorIconUser: "",
      colorIconGui: "",
      colorIconAlert: "",
      colorIconApi: "",
      todayChannelDialogNotification: false,
      mailMotifikace: false,
      rememberMe: true,
      userData: false,
      modalEditUser: false,
      status: [],
      password: "",
      logout: "false",
      message: "",
      snackbar: true,
      crashedStreams: [],
      intervalAlert: false
    };
  },
  created: function created() {
    this.loadUser();
  },
  components: {
    "alert-component": Alert
  },
  methods: {
    loadUser: function loadUser() {
      var currentObj = this;
      axios.get("/api/user/get").then(function (response) {
        if (response.data.stat === "error") {
          currentObj.$router.push("/login");
        } else {
          currentObj.userData = response.data;
        }
      });
    },
    userEdit: function userEdit() {
      var currentObj = this;
      axios.post("/api/user/edit", {
        userId: this.userData.id,
        mail: this.userData.email,
        password: this.password,
        name: this.userData.name,
        surname: this.userData.surname
      }).then(function (response) {
        currentObj.status = response.data;
        currentObj.loadUser();
        console.log(currentObj.status);
      })["catch"](function (error) {
        console.log(error);
      });
    }
  },
  watch: {
    status: function status() {
      var _this = this;

      setTimeout(function () {
        return _this.status = false;
      }, 3000);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Navigation/UserComponent.vue?vue&type=template&id=bd9746fc&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Navigation/UserComponent.vue?vue&type=template&id=bd9746fc& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
    [
      _vm.status.isAlert === "isAlert"
        ? _c("alert-component", { attrs: { status: _vm.status } })
        : _vm._e(),
      _vm._v(" "),
      _c("v-row", { staticClass: "title", attrs: { justify: "center" } }, [
        _vm._v("Nastavení uživatele")
      ]),
      _vm._v(" "),
      _c(
        "v-container",
        { staticClass: "body-1", attrs: { fluid: "" } },
        [
          _c(
            "v-row",
            { staticClass: "mt-6" },
            [
              _c(
                "v-col",
                { attrs: { cols: "6", sm: "6", md: "6" } },
                [
                  _c("v-text-field", {
                    attrs: { label: "jméno", autofocus: "" },
                    model: {
                      value: _vm.userData.name,
                      callback: function($$v) {
                        _vm.$set(_vm.userData, "name", $$v)
                      },
                      expression: "userData.name"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-col",
                { attrs: { cols: "6", sm: "6", md: "6" } },
                [
                  _c("v-text-field", {
                    attrs: { label: "příjmení" },
                    model: {
                      value: _vm.userData.surname,
                      callback: function($$v) {
                        _vm.$set(_vm.userData, "surname", $$v)
                      },
                      expression: "userData.surname"
                    }
                  })
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-row",
            { staticClass: "mt-6" },
            [
              _c(
                "v-col",
                { attrs: { cols: "6", sm: "6", md: "6" } },
                [
                  _c("v-text-field", {
                    attrs: { label: "e-mail" },
                    model: {
                      value: _vm.userData.email,
                      callback: function($$v) {
                        _vm.$set(_vm.userData, "email", $$v)
                      },
                      expression: "userData.email"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-col",
                { attrs: { cols: "6", sm: "6", md: "6" } },
                [
                  _c("v-text-field", {
                    attrs: { label: "změna hesla", type: "password" },
                    model: {
                      value: _vm.password,
                      callback: function($$v) {
                        _vm.password = $$v
                      },
                      expression: "password"
                    }
                  })
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-row",
        [
          _c("v-spacer"),
          _vm._v(" "),
          _c(
            "v-btn",
            {
              attrs: { color: "green darken-1", type: "submit", text: "" },
              on: {
                click: function($event) {
                  _vm.userEdit(), (_vm.modalEditUser = false)
                }
              }
            },
            [_vm._v("Uložit")]
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Navigation/UserComponent.vue":
/*!**************************************************************!*\
  !*** ./resources/js/components/Navigation/UserComponent.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UserComponent_vue_vue_type_template_id_bd9746fc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserComponent.vue?vue&type=template&id=bd9746fc& */ "./resources/js/components/Navigation/UserComponent.vue?vue&type=template&id=bd9746fc&");
/* harmony import */ var _UserComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/Navigation/UserComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UserComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserComponent_vue_vue_type_template_id_bd9746fc___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UserComponent_vue_vue_type_template_id_bd9746fc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Navigation/UserComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Navigation/UserComponent.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/Navigation/UserComponent.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./UserComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Navigation/UserComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Navigation/UserComponent.vue?vue&type=template&id=bd9746fc&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/Navigation/UserComponent.vue?vue&type=template&id=bd9746fc& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserComponent_vue_vue_type_template_id_bd9746fc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./UserComponent.vue?vue&type=template&id=bd9746fc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Navigation/UserComponent.vue?vue&type=template&id=bd9746fc&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserComponent_vue_vue_type_template_id_bd9746fc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserComponent_vue_vue_type_template_id_bd9746fc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);