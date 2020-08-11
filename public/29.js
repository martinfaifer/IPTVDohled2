(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[29],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/settings/DashboardComponents/newTemplates/ChannelsWithAudioProblem.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/settings/DashboardComponents/newTemplates/ChannelsWithAudioProblem.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      userData: [],
      interval: false,
      crashed: [],
      headers: [{
        text: "Problémová IPTV zařízení",
        align: "center",
        value: "name"
      }]
    };
  },
  created: function created() {
    this.loadIptvDevices();
    this.loadUser();
  },
  methods: {
    loadUser: function loadUser() {
      var currentObj = this;
      axios.get("/api/user/get").then(function (response) {
        currentObj.userData = response.data;
      });
    },
    loadIptvDevices: function loadIptvDevices() {
      var _this = this;

      window.axios.get("/api/devices/crash").then(function (response) {
        _this.crashed = response.data;
      });
    }
  },
  mounted: function mounted() {
    this.interval = setInterval(function () {
      this.loadIptvDevices();
      this.loadUser();
    }.bind(this), 10000);
  },
  beforeDestroy: function beforeDestroy() {
    clearInterval(this.interval);
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/settings/DashboardComponents/newTemplates/ChannelsWithAudioProblem.vue?vue&type=template&id=2e8ce6af&":
/*!*********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/settings/DashboardComponents/newTemplates/ChannelsWithAudioProblem.vue?vue&type=template&id=2e8ce6af& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "mb-8" },
    [
      _c("v-data-table", {
        staticClass: "elevation-1",
        attrs: {
          dense: _vm.userData.dense,
          "fixed-header": "",
          headers: _vm.headers,
          items: _vm.crashed,
          "item-key": "name"
        },
        scopedSlots: _vm._u([
          {
            key: "item.name",
            fn: function(ref) {
              var item = ref.item
              return [
                _c("span", { staticClass: "red--text", attrs: { dark: "" } }, [
                  _vm._v(_vm._s(item.name))
                ])
              ]
            }
          }
        ])
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/settings/DashboardComponents/newTemplates/ChannelsWithAudioProblem.vue":
/*!********************************************************************************************************!*\
  !*** ./resources/js/components/settings/DashboardComponents/newTemplates/ChannelsWithAudioProblem.vue ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ChannelsWithAudioProblem_vue_vue_type_template_id_2e8ce6af___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChannelsWithAudioProblem.vue?vue&type=template&id=2e8ce6af& */ "./resources/js/components/settings/DashboardComponents/newTemplates/ChannelsWithAudioProblem.vue?vue&type=template&id=2e8ce6af&");
/* harmony import */ var _ChannelsWithAudioProblem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChannelsWithAudioProblem.vue?vue&type=script&lang=js& */ "./resources/js/components/settings/DashboardComponents/newTemplates/ChannelsWithAudioProblem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ChannelsWithAudioProblem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ChannelsWithAudioProblem_vue_vue_type_template_id_2e8ce6af___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ChannelsWithAudioProblem_vue_vue_type_template_id_2e8ce6af___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/settings/DashboardComponents/newTemplates/ChannelsWithAudioProblem.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/settings/DashboardComponents/newTemplates/ChannelsWithAudioProblem.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************!*\
  !*** ./resources/js/components/settings/DashboardComponents/newTemplates/ChannelsWithAudioProblem.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChannelsWithAudioProblem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ChannelsWithAudioProblem.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/settings/DashboardComponents/newTemplates/ChannelsWithAudioProblem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChannelsWithAudioProblem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/settings/DashboardComponents/newTemplates/ChannelsWithAudioProblem.vue?vue&type=template&id=2e8ce6af&":
/*!***************************************************************************************************************************************!*\
  !*** ./resources/js/components/settings/DashboardComponents/newTemplates/ChannelsWithAudioProblem.vue?vue&type=template&id=2e8ce6af& ***!
  \***************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChannelsWithAudioProblem_vue_vue_type_template_id_2e8ce6af___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ChannelsWithAudioProblem.vue?vue&type=template&id=2e8ce6af& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/settings/DashboardComponents/newTemplates/ChannelsWithAudioProblem.vue?vue&type=template&id=2e8ce6af&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChannelsWithAudioProblem_vue_vue_type_template_id_2e8ce6af___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChannelsWithAudioProblem_vue_vue_type_template_id_2e8ce6af___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);