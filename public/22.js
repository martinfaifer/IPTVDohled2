(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[22],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Mozaika/MozaikaSelectionComponent.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Mozaika/MozaikaSelectionComponent.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************/
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
var MozaikaComponent = function MozaikaComponent() {
  return __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ./MozaikaComponent */ "./resources/js/components/Mozaika/MozaikaComponent.vue"));
};

var MozaikaCustomComponent = function MozaikaCustomComponent() {
  return __webpack_require__.e(/*! import() */ 36).then(__webpack_require__.bind(null, /*! ./UserCustomMozaika */ "./resources/js/components/Mozaika/UserCustomMozaika.vue"));
};

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      userData: []
    };
  },
  created: function created() {
    this.loadUser();
  },
  components: {
    "mozaika-component": MozaikaComponent,
    "mozaikacustom-component": MozaikaCustomComponent
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
    }
  },
  mounted: function mounted() {
    this.interval = setInterval(function () {
      this.loadUser();
    }.bind(this), 10000);
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Mozaika/MozaikaSelectionComponent.vue?vue&type=template&id=5912405a&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Mozaika/MozaikaSelectionComponent.vue?vue&type=template&id=5912405a& ***!
  \************************************************************************************************************************************************************************************************************************************/
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
      _c("mozaika-component", {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.userData.customMozaika != true,
            expression: "userData.customMozaika != true"
          }
        ]
      }),
      _vm._v(" "),
      _c("mozaikacustom-component", {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.userData.customMozaika === true,
            expression: "userData.customMozaika === true"
          }
        ]
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Mozaika/MozaikaSelectionComponent.vue":
/*!***********************************************************************!*\
  !*** ./resources/js/components/Mozaika/MozaikaSelectionComponent.vue ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MozaikaSelectionComponent_vue_vue_type_template_id_5912405a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MozaikaSelectionComponent.vue?vue&type=template&id=5912405a& */ "./resources/js/components/Mozaika/MozaikaSelectionComponent.vue?vue&type=template&id=5912405a&");
/* harmony import */ var _MozaikaSelectionComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MozaikaSelectionComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/Mozaika/MozaikaSelectionComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MozaikaSelectionComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MozaikaSelectionComponent_vue_vue_type_template_id_5912405a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MozaikaSelectionComponent_vue_vue_type_template_id_5912405a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Mozaika/MozaikaSelectionComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Mozaika/MozaikaSelectionComponent.vue?vue&type=script&lang=js&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/Mozaika/MozaikaSelectionComponent.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MozaikaSelectionComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./MozaikaSelectionComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Mozaika/MozaikaSelectionComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MozaikaSelectionComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Mozaika/MozaikaSelectionComponent.vue?vue&type=template&id=5912405a&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/Mozaika/MozaikaSelectionComponent.vue?vue&type=template&id=5912405a& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MozaikaSelectionComponent_vue_vue_type_template_id_5912405a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./MozaikaSelectionComponent.vue?vue&type=template&id=5912405a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Mozaika/MozaikaSelectionComponent.vue?vue&type=template&id=5912405a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MozaikaSelectionComponent_vue_vue_type_template_id_5912405a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MozaikaSelectionComponent_vue_vue_type_template_id_5912405a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);