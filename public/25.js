(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[25],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/settings/DashboardComponents/CurrentCrashedChannels.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/settings/DashboardComponents/CurrentCrashedChannels.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      userData: [],
      interval: false,
      crashed: [],
      headers: [{
        text: "Nefunkční kanály",
        align: "center",
        value: "nazev"
      }]
    };
  },
  created: function created() {
    // Informace, zda jsou nefunknčí streamy
    this.loadCrashedChannels();
    this.loadUser();
  },
  methods: {
    getNazevColor: function getNazevColor(nazev) {
      return "red--text";
    },
    loadCrashedChannels: function loadCrashedChannels() {
      var _this = this;

      window.axios.get("/api/channels/crashed/forDashboard").then(function (response) {
        _this.crashed = response.data;
      });
    },
    loadUser: function loadUser() {
      var currentObj = this;
      axios.get("/api/user/get").then(function (response) {
        currentObj.userData = response.data;
      });
    }
  },
  mounted: function mounted() {
    this.interval = setInterval(function () {
      this.loadCrashedChannels();
      this.loadUser();
    }.bind(this), 5000);
  },
  beforeDestroy: function beforeDestroy() {
    clearInterval(this.interval);
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/settings/DashboardComponents/CurrentCrashedChannels.vue?vue&type=template&id=f407fd5a&":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/settings/DashboardComponents/CurrentCrashedChannels.vue?vue&type=template&id=f407fd5a& ***!
  \******************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "md-5" }, [
    _vm.crashed != false
      ? _c(
          "div",
          [
            _c("v-data-table", {
              staticClass: "elevation-1",
              attrs: {
                dense: _vm.userData.dense,
                "loading-text": "načítají se data",
                headers: _vm.headers,
                items: _vm.crashed,
                "item-key": "name"
              },
              scopedSlots: _vm._u(
                [
                  {
                    key: "item.nazev",
                    fn: function(ref) {
                      var item = ref.item
                      return [
                        _c(
                          "router-link",
                          {
                            attrs: {
                              to: "/settings/channels/" + item.id + "/charts",
                              target: "_blank"
                            }
                          },
                          [
                            _c(
                              "a",
                              {
                                class: _vm.getNazevColor(item.nazev),
                                attrs: { dark: "" }
                              },
                              [_vm._v(_vm._s(item.nazev))]
                            )
                          ]
                        )
                      ]
                    }
                  }
                ],
                null,
                false,
                3359875080
              )
            })
          ],
          1
        )
      : _c(
          "div",
          [
            _c(
              "v-alert",
              {
                staticClass: "font-weight-regular",
                attrs: { type: "success" }
              },
              [_vm._v("Není zde žádný alert")]
            )
          ],
          1
        )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/settings/DashboardComponents/CurrentCrashedChannels.vue":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/settings/DashboardComponents/CurrentCrashedChannels.vue ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CurrentCrashedChannels_vue_vue_type_template_id_f407fd5a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CurrentCrashedChannels.vue?vue&type=template&id=f407fd5a& */ "./resources/js/components/settings/DashboardComponents/CurrentCrashedChannels.vue?vue&type=template&id=f407fd5a&");
/* harmony import */ var _CurrentCrashedChannels_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CurrentCrashedChannels.vue?vue&type=script&lang=js& */ "./resources/js/components/settings/DashboardComponents/CurrentCrashedChannels.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CurrentCrashedChannels_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CurrentCrashedChannels_vue_vue_type_template_id_f407fd5a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CurrentCrashedChannels_vue_vue_type_template_id_f407fd5a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/settings/DashboardComponents/CurrentCrashedChannels.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/settings/DashboardComponents/CurrentCrashedChannels.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/components/settings/DashboardComponents/CurrentCrashedChannels.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CurrentCrashedChannels_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./CurrentCrashedChannels.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/settings/DashboardComponents/CurrentCrashedChannels.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CurrentCrashedChannels_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/settings/DashboardComponents/CurrentCrashedChannels.vue?vue&type=template&id=f407fd5a&":
/*!************************************************************************************************************************!*\
  !*** ./resources/js/components/settings/DashboardComponents/CurrentCrashedChannels.vue?vue&type=template&id=f407fd5a& ***!
  \************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CurrentCrashedChannels_vue_vue_type_template_id_f407fd5a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./CurrentCrashedChannels.vue?vue&type=template&id=f407fd5a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/settings/DashboardComponents/CurrentCrashedChannels.vue?vue&type=template&id=f407fd5a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CurrentCrashedChannels_vue_vue_type_template_id_f407fd5a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CurrentCrashedChannels_vue_vue_type_template_id_f407fd5a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);