(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[35],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Navigation/GuiComponent.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Navigation/GuiComponent.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
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
var Alert = function Alert() {
  return __webpack_require__.e(/*! import() */ 32).then(__webpack_require__.bind(null, /*! ../alerts/AlertComponent */ "./resources/js/components/alerts/AlertComponent.vue"));
};

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      staticChannels: [],
      channels: [],
      customMozaika: false,
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
    this.loadChannels();
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
          currentObj.customMozaika = response.data.customMozaika;

          if (response.data.customMozaika === true) {
            currentObj.customMozaika = response.data.customMozaika;
            currentObj.staticChannels = response.data.staticChannels;
          }
        }
      });
    },
    loadChannels: function loadChannels() {
      var currentObj = this;
      axios.get("/api/calendar/channels").then(function (response) {
        currentObj.channels = response.data;
      });
    },
    userEdit: function userEdit() {
      var currentObj = this;
      axios.post("/api/user/edit/gui", {
        userId: this.userData.id,
        pagination: this.userData.pagination,
        mozaikaAlphaBet: this.userData.mozaikaAlphaBet,
        dense: this.userData.dense,
        customMozaika: this.customMozaika,
        staticChannels: this.staticChannels
      }).then(function (response) {
        currentObj.status = response.data;
        currentObj.loadUser();
        console.log(response.data);
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Navigation/GuiComponent.vue?vue&type=template&id=5505e322&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Navigation/GuiComponent.vue?vue&type=template&id=5505e322& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
        _vm._v("Nastavení zobrazení")
      ]),
      _vm._v(" "),
      _c(
        "v-container",
        { staticClass: "body-1", attrs: { fluid: "" } },
        [
          _c(
            "v-row",
            { staticClass: "mt-3" },
            [_c("v-subheader", [_vm._v("Nastavení mozaiky")])],
            1
          ),
          _vm._v(" "),
          _c(
            "v-row",
            { staticClass: "mt-3" },
            [
              _c(
                "v-col",
                { attrs: { cols: "4", sm: "4", md: "4" } },
                [
                  _c("v-text-field", {
                    attrs: {
                      label: "počet zobrazených náhledů v mozaice",
                      autofocus: ""
                    },
                    model: {
                      value: _vm.userData.pagination,
                      callback: function($$v) {
                        _vm.$set(_vm.userData, "pagination", $$v)
                      },
                      expression: "userData.pagination"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-col",
                { attrs: { cols: "3", sm: "3", md: "3" } },
                [
                  _c("v-checkbox", {
                    attrs: { label: "Abecední řazení kanálů v mozaice" },
                    model: {
                      value: _vm.userData.mozaikaAlphaBet,
                      callback: function($$v) {
                        _vm.$set(_vm.userData, "mozaikaAlphaBet", $$v)
                      },
                      expression: "userData.mozaikaAlphaBet"
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
            { staticClass: "mt-3" },
            [
              _c(
                "v-col",
                { attrs: { cols: "3", sm: "3", md: "3" } },
                [
                  _c("v-switch", {
                    attrs: { label: "vytvoření statických kanálů v mozaice" },
                    model: {
                      value: _vm.customMozaika,
                      callback: function($$v) {
                        _vm.customMozaika = $$v
                      },
                      expression: "customMozaika"
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
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.customMozaika === true,
                  expression: "customMozaika === true"
                }
              ]
            },
            [
              _c(
                "v-col",
                { attrs: { cols: "4", sm: "4", md: "4" } },
                [
                  _c("v-combobox", {
                    attrs: {
                      items: _vm.channels,
                      "item-text": "nazev",
                      "item-value": "id",
                      label: "Vyberte kanály",
                      hint: "Maximálně 14 kanálů pro 4K rozlišení",
                      "hide-selected": "",
                      multiple: "",
                      "persistent-hint": "",
                      "small-chips": "",
                      dense: ""
                    },
                    model: {
                      value: _vm.staticChannels,
                      callback: function($$v) {
                        _vm.staticChannels = $$v
                      },
                      expression: "staticChannels"
                    }
                  })
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("v-divider"),
          _vm._v(" "),
          _c(
            "v-row",
            { staticClass: "mt-3" },
            [_c("v-subheader", [_vm._v("Nastavení GUI")])],
            1
          ),
          _vm._v(" "),
          _c(
            "v-row",
            { staticClass: "mt-3" },
            [
              _c(
                "v-col",
                { attrs: { cols: "3", sm: "3", md: "3" } },
                [
                  _c("v-checkbox", {
                    attrs: { label: "Kompaktní mód" },
                    model: {
                      value: _vm.userData.dense,
                      callback: function($$v) {
                        _vm.$set(_vm.userData, "dense", $$v)
                      },
                      expression: "userData.dense"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-col",
                { attrs: { cols: "3", sm: "3", md: "3" } },
                [
                  _c("v-switch", {
                    attrs: { disabled: "", label: "Dark mode" }
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

/***/ "./resources/js/components/Navigation/GuiComponent.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/Navigation/GuiComponent.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GuiComponent_vue_vue_type_template_id_5505e322___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GuiComponent.vue?vue&type=template&id=5505e322& */ "./resources/js/components/Navigation/GuiComponent.vue?vue&type=template&id=5505e322&");
/* harmony import */ var _GuiComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GuiComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/Navigation/GuiComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _GuiComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _GuiComponent_vue_vue_type_template_id_5505e322___WEBPACK_IMPORTED_MODULE_0__["render"],
  _GuiComponent_vue_vue_type_template_id_5505e322___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Navigation/GuiComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Navigation/GuiComponent.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/Navigation/GuiComponent.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GuiComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./GuiComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Navigation/GuiComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GuiComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Navigation/GuiComponent.vue?vue&type=template&id=5505e322&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/Navigation/GuiComponent.vue?vue&type=template&id=5505e322& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GuiComponent_vue_vue_type_template_id_5505e322___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./GuiComponent.vue?vue&type=template&id=5505e322& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Navigation/GuiComponent.vue?vue&type=template&id=5505e322&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GuiComponent_vue_vue_type_template_id_5505e322___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GuiComponent_vue_vue_type_template_id_5505e322___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);