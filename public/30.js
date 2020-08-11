(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[30],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/settings/DashboardComponents/newTemplates/DiskSpaceComponent.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/settings/DashboardComponents/newTemplates/DiskSpaceComponent.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      interval: false,
      percent: []
    };
  },
  created: function created() {
    this.loadHdd();
  },
  methods: {
    loadHdd: function loadHdd() {
      var _this = this;

      window.axios.get("/api/disk").then(function (response) {
        _this.percent = response.data;
      });
    }
  },
  mounted: function mounted() {
    this.interval = setInterval(function () {
      this.loadHdd();
    }.bind(this), 60000);
  },
  beforeDestroy: function beforeDestroy() {
    clearInterval(this.interval);
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/settings/DashboardComponents/newTemplates/DiskSpaceComponent.vue?vue&type=template&id=7c7453f8&":
/*!***************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/settings/DashboardComponents/newTemplates/DiskSpaceComponent.vue?vue&type=template&id=7c7453f8& ***!
  \***************************************************************************************************************************************************************************************************************************************************************/
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
          _c(
            "div",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.percent.percents < "80",
                  expression: "percent.percents < '80'"
                }
              ]
            },
            [
              _c(
                "v-progress-circular",
                {
                  staticClass: "mt-2 mr-6",
                  attrs: {
                    size: 100,
                    width: 3,
                    value: _vm.percent.percents,
                    color: "green"
                  }
                },
                [_vm._v(_vm._s(_vm.percent.percents) + " %")]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value:
                    _vm.percent.percents > "80" && _vm.percent.percents < "90",
                  expression:
                    "percent.percents > '80' && percent.percents < '90'"
                }
              ]
            },
            [
              _c(
                "v-progress-circular",
                {
                  staticClass: "mt-2 mr-6",
                  attrs: {
                    size: 100,
                    width: 3,
                    value: _vm.percent.percents,
                    color: "orange"
                  }
                },
                [_vm._v(_vm._s(_vm.percent.percents) + " %")]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.percent.percents > "90",
                  expression: "percent.percents > '90'"
                }
              ]
            },
            [
              _c(
                "v-progress-circular",
                {
                  staticClass: "mt-2 mr-6",
                  attrs: {
                    size: 100,
                    width: 3,
                    value: _vm.percent.percents,
                    color: "red"
                  }
                },
                [_vm._v(_vm._s(_vm.percent.percents) + " %")]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("span", { staticClass: "mt-10" }, [
            _c("span", { staticClass: "display-1" }, [
              _vm._v(_vm._s(_vm.percent.freeSpace) + "GB /")
            ]),
            _vm._v(
              "\n                " +
                _vm._s(_vm.percent.allspace) +
                "GB využití HDD\n            "
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

/***/ "./resources/js/components/settings/DashboardComponents/newTemplates/DiskSpaceComponent.vue":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/settings/DashboardComponents/newTemplates/DiskSpaceComponent.vue ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DiskSpaceComponent_vue_vue_type_template_id_7c7453f8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DiskSpaceComponent.vue?vue&type=template&id=7c7453f8& */ "./resources/js/components/settings/DashboardComponents/newTemplates/DiskSpaceComponent.vue?vue&type=template&id=7c7453f8&");
/* harmony import */ var _DiskSpaceComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DiskSpaceComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/settings/DashboardComponents/newTemplates/DiskSpaceComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DiskSpaceComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DiskSpaceComponent_vue_vue_type_template_id_7c7453f8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DiskSpaceComponent_vue_vue_type_template_id_7c7453f8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/settings/DashboardComponents/newTemplates/DiskSpaceComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/settings/DashboardComponents/newTemplates/DiskSpaceComponent.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************!*\
  !*** ./resources/js/components/settings/DashboardComponents/newTemplates/DiskSpaceComponent.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DiskSpaceComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./DiskSpaceComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/settings/DashboardComponents/newTemplates/DiskSpaceComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DiskSpaceComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/settings/DashboardComponents/newTemplates/DiskSpaceComponent.vue?vue&type=template&id=7c7453f8&":
/*!*********************************************************************************************************************************!*\
  !*** ./resources/js/components/settings/DashboardComponents/newTemplates/DiskSpaceComponent.vue?vue&type=template&id=7c7453f8& ***!
  \*********************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DiskSpaceComponent_vue_vue_type_template_id_7c7453f8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./DiskSpaceComponent.vue?vue&type=template&id=7c7453f8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/settings/DashboardComponents/newTemplates/DiskSpaceComponent.vue?vue&type=template&id=7c7453f8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DiskSpaceComponent_vue_vue_type_template_id_7c7453f8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DiskSpaceComponent_vue_vue_type_template_id_7c7453f8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);