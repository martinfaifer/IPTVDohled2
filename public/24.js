(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[24],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/settings/DashboardComponents/CrashedChannels.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/settings/DashboardComponents/CrashedChannels.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      userData: [],
      tableLoading: "true",
      interval: false,
      devices: [],
      headers: [{
        text: "Zařízení po API",
        align: "center",
        value: "name"
      }, {
        text: "Status",
        value: "status"
      }]
    };
  },
  created: function created() {
    this.loadDevices();
    this.loadUser();
  },
  methods: {
    getCountColor: function getCountColor(count) {
      return "red--text";
    },
    loadDevices: function loadDevices() {
      var _this = this;

      window.axios.get("/api/devices/connection/api").then(function (response) {
        _this.devices = response.data;
        _this.tableLoading = "false";
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
      this.loadDevices();
    }.bind(this), 300000);
    this.interval = setInterval(function () {
      this.loadUser();
    }.bind(this), 10000);
  },
  beforeDestroy: function beforeDestroy() {
    clearInterval(this.interval);
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/settings/DashboardComponents/CrashedChannels.vue?vue&type=template&id=2a542650&":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/settings/DashboardComponents/CrashedChannels.vue?vue&type=template&id=2a542650& ***!
  \***********************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "mb-5" },
    [
      _c("v-data-table", {
        staticClass: "elevation-1",
        attrs: {
          dense: _vm.userData.dense,
          width: "100px",
          loading: _vm.tableLoading === "true",
          "loading-text": "Načítám data ...",
          headers: _vm.headers,
          items: _vm.devices
        },
        scopedSlots: _vm._u([
          {
            key: "item.status",
            fn: function(ref) {
              var item = ref.item
              return [
                item.status != "online"
                  ? _c("v-icon", { attrs: { color: "red" } }, [
                      _vm._v("mdi-close")
                    ])
                  : _c("v-icon", { attrs: { color: "green" } }, [
                      _vm._v("mdi-check")
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

/***/ "./resources/js/components/settings/DashboardComponents/CrashedChannels.vue":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/settings/DashboardComponents/CrashedChannels.vue ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CrashedChannels_vue_vue_type_template_id_2a542650___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CrashedChannels.vue?vue&type=template&id=2a542650& */ "./resources/js/components/settings/DashboardComponents/CrashedChannels.vue?vue&type=template&id=2a542650&");
/* harmony import */ var _CrashedChannels_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CrashedChannels.vue?vue&type=script&lang=js& */ "./resources/js/components/settings/DashboardComponents/CrashedChannels.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CrashedChannels_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CrashedChannels_vue_vue_type_template_id_2a542650___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CrashedChannels_vue_vue_type_template_id_2a542650___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/settings/DashboardComponents/CrashedChannels.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/settings/DashboardComponents/CrashedChannels.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/components/settings/DashboardComponents/CrashedChannels.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CrashedChannels_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./CrashedChannels.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/settings/DashboardComponents/CrashedChannels.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CrashedChannels_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/settings/DashboardComponents/CrashedChannels.vue?vue&type=template&id=2a542650&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/components/settings/DashboardComponents/CrashedChannels.vue?vue&type=template&id=2a542650& ***!
  \*****************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CrashedChannels_vue_vue_type_template_id_2a542650___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./CrashedChannels.vue?vue&type=template&id=2a542650& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/settings/DashboardComponents/CrashedChannels.vue?vue&type=template&id=2a542650&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CrashedChannels_vue_vue_type_template_id_2a542650___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CrashedChannels_vue_vue_type_template_id_2a542650___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);