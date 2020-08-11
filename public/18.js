(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[18],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Mozaika/channelDetail/ImgComponent.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Mozaika/channelDetail/ImgComponent.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["channelId"],
  data: function data() {
    return {
      channelData: [],
      interval: false
    };
  },
  created: function created() {
    this.loadDetail();
  },
  methods: {
    loadDetail: function loadDetail() {
      var currentObj = this;
      axios.post("/api/channel/getDetail", {
        id: this.channelId
      }).then(function (response) {
        currentObj.channelData = response.data;
      })["catch"](function (error) {
        console.log("chyba" + error);
      });
    }
  },
  mounted: function mounted() {
    this.interval = setInterval(function () {
      this.loadDetail();
    }.bind(this), 1000);
  },
  beforeDestroy: function beforeDestroy() {
    clearInterval(this.interval);
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Mozaika/channelDetail/ImgComponent.vue?vue&type=template&id=12f50f59&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Mozaika/channelDetail/ImgComponent.vue?vue&type=template&id=12f50f59& ***!
  \*************************************************************************************************************************************************************************************************************************************/
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
      _vm.channelData.img === "false"
        ? _c(
            "v-img",
            { attrs: { width: "720px", height: "405px", contain: "" } },
            [
              _c("v-progress-circular", {
                attrs: {
                  size: 70,
                  width: 7,
                  color: "grey lighten-5",
                  indeterminate: ""
                }
              })
            ],
            1
          )
        : _vm.channelData.img === "/storage/noImg.jpg"
        ? _c(
            "v-img",
            { attrs: { width: "720px", height: "405px", contain: "" } },
            [
              _c(
                "v-icon",
                {
                  staticClass: "mt-8 ml-12",
                  attrs: { color: "orange", large: "" }
                },
                [_vm._v("\n            mdi-television-off\n        ")]
              )
            ],
            1
          )
        : _c("v-img", {
            attrs: {
              "lazy-src": _vm.channelData.img,
              src: _vm.channelData.img,
              width: "720px",
              height: "405px",
              contain: ""
            }
          })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Mozaika/channelDetail/ImgComponent.vue":
/*!************************************************************************!*\
  !*** ./resources/js/components/Mozaika/channelDetail/ImgComponent.vue ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ImgComponent_vue_vue_type_template_id_12f50f59___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ImgComponent.vue?vue&type=template&id=12f50f59& */ "./resources/js/components/Mozaika/channelDetail/ImgComponent.vue?vue&type=template&id=12f50f59&");
/* harmony import */ var _ImgComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ImgComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/Mozaika/channelDetail/ImgComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ImgComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ImgComponent_vue_vue_type_template_id_12f50f59___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ImgComponent_vue_vue_type_template_id_12f50f59___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Mozaika/channelDetail/ImgComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Mozaika/channelDetail/ImgComponent.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/Mozaika/channelDetail/ImgComponent.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ImgComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ImgComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Mozaika/channelDetail/ImgComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ImgComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Mozaika/channelDetail/ImgComponent.vue?vue&type=template&id=12f50f59&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/Mozaika/channelDetail/ImgComponent.vue?vue&type=template&id=12f50f59& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ImgComponent_vue_vue_type_template_id_12f50f59___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ImgComponent.vue?vue&type=template&id=12f50f59& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Mozaika/channelDetail/ImgComponent.vue?vue&type=template&id=12f50f59&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ImgComponent_vue_vue_type_template_id_12f50f59___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ImgComponent_vue_vue_type_template_id_12f50f59___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);