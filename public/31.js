(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[31],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/settings/DashboardComponents/newTemplates/IPTVDevicesComponent.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/settings/DashboardComponents/newTemplates/IPTVDevicesComponent.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      interval: false,
      percent: []
    };
  },
  created: function created() {
    this.loadDevices();
  },
  methods: {
    loadDevices: function loadDevices() {
      var _this = this;

      window.axios.get("/api/devices/chart").then(function (response) {
        _this.percent = response.data;
      });
    }
  },
  mounted: function mounted() {
    this.interval = setInterval(function () {
      this.loadDevices();
    }.bind(this), 30000);
  },
  beforeDestroy: function beforeDestroy() {
    clearInterval(this.interval);
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/settings/DashboardComponents/newTemplates/IPTVDevicesComponent.vue?vue&type=template&id=770eb70e&":
/*!*****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/settings/DashboardComponents/newTemplates/IPTVDevicesComponent.vue?vue&type=template&id=770eb70e& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _c(
      "div",
      [
        _c("v-row", { staticClass: "mr-12" }, [
          _vm.percent.percent === "100" || _vm.percent.percent > "80"
            ? _c(
                "div",
                [
                  _c(
                    "v-progress-circular",
                    {
                      staticClass: "mt-2 mr-6",
                      attrs: {
                        size: 100,
                        width: 3,
                        value: _vm.percent.percent,
                        color: "success"
                      }
                    },
                    [_vm._v(_vm._s(_vm.percent.percent) + " %")]
                  )
                ],
                1
              )
            : _vm.percent.percent > "60" || _vm.percent.percent < "80"
            ? _c(
                "div",
                [
                  _c(
                    "v-progress-circular",
                    {
                      staticClass: "mt-2 mr-6",
                      attrs: {
                        size: 100,
                        width: 3,
                        value: _vm.percent.percent,
                        color: "orange"
                      }
                    },
                    [_vm._v(_vm._s(_vm.percent.percent) + " %")]
                  )
                ],
                1
              )
            : _c(
                "div",
                [
                  _c(
                    "v-progress-circular",
                    {
                      staticClass: "mt-2 mr-6",
                      attrs: {
                        size: 100,
                        width: 3,
                        value: _vm.percent.percent,
                        color: "red"
                      }
                    },
                    [_vm._v(_vm._s(_vm.percent.percent) + " %")]
                  )
                ],
                1
              ),
          _vm._v(" "),
          _c("span", { staticClass: "mt-10" }, [
            _c("span", { staticClass: "display-1" }, [
              _vm._v(_vm._s(_vm.percent.checl) + " / ")
            ]),
            _vm._v(
              "\n                " +
                _vm._s(_vm.percent.celkem) +
                " funknčích zařízení\n            "
            )
          ])
        ])
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/settings/DashboardComponents/newTemplates/IPTVDevicesComponent.vue":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/settings/DashboardComponents/newTemplates/IPTVDevicesComponent.vue ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _IPTVDevicesComponent_vue_vue_type_template_id_770eb70e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IPTVDevicesComponent.vue?vue&type=template&id=770eb70e& */ "./resources/js/components/settings/DashboardComponents/newTemplates/IPTVDevicesComponent.vue?vue&type=template&id=770eb70e&");
/* harmony import */ var _IPTVDevicesComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IPTVDevicesComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/settings/DashboardComponents/newTemplates/IPTVDevicesComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _IPTVDevicesComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _IPTVDevicesComponent_vue_vue_type_template_id_770eb70e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _IPTVDevicesComponent_vue_vue_type_template_id_770eb70e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/settings/DashboardComponents/newTemplates/IPTVDevicesComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/settings/DashboardComponents/newTemplates/IPTVDevicesComponent.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************!*\
  !*** ./resources/js/components/settings/DashboardComponents/newTemplates/IPTVDevicesComponent.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_IPTVDevicesComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./IPTVDevicesComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/settings/DashboardComponents/newTemplates/IPTVDevicesComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_IPTVDevicesComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/settings/DashboardComponents/newTemplates/IPTVDevicesComponent.vue?vue&type=template&id=770eb70e&":
/*!***********************************************************************************************************************************!*\
  !*** ./resources/js/components/settings/DashboardComponents/newTemplates/IPTVDevicesComponent.vue?vue&type=template&id=770eb70e& ***!
  \***********************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_IPTVDevicesComponent_vue_vue_type_template_id_770eb70e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./IPTVDevicesComponent.vue?vue&type=template&id=770eb70e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/settings/DashboardComponents/newTemplates/IPTVDevicesComponent.vue?vue&type=template&id=770eb70e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_IPTVDevicesComponent_vue_vue_type_template_id_770eb70e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_IPTVDevicesComponent_vue_vue_type_template_id_770eb70e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);