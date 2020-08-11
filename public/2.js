(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Channel/ChannelComponent.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Channel/ChannelComponent.vue?vue&type=script&lang=js& ***!
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
//
//
//
//
//
//
//
//
//
// import Image from "./ImgComponent";
// import ChannelNameWithBitrate from "./ChannelNameWithBitrate";
// import ChannelDetailTreeFFprobe from "./ChannelDetailTreeFFprobe";
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      items: [],
      channelData: [],
      bitrate: [],
      speed: "",
      ffprobe: [],
      contextMenu: "prehled",
      color: "",
      colorPrehled: "teal",
      colorFfprobe: "",
      colorGrafs: ""
    };
  },
  created: function created() {
    var currentObj = this;
    axios.post("/api/channel/getDetail", {
      id: this.$route.params.id
    }).then(function (response) {
      currentObj.channelData = response.data;
    })["catch"](function (error) {
      console.log("chyba" + error);
    });
    axios.post("api/channel/bitrate", {
      id: this.$route.params.id
    }).then(function (response) {
      currentObj.bitrate = response.data;
    })["catch"](function (error) {
      console.log("chyba" + error);
    });
  },
  methods: {},
  //   components: {
  //     "img-component": Image,
  //     "channelBitrate-component": ChannelNameWithBitrate,
  //     "ffprobeTree-component": ChannelDetailTreeFFprobe
  //   },
  watch: {
    // Presmerování na login pokud neni prihlasen uzivatel
    bitrate: function bitrate() {
      if (this.bitrate.bit_rate) {
        this.speed = this.bitrate.bit_rate / 10000;
      }
    },
    contextMenu: function contextMenu() {
      if (this.contextMenu === "prehled") {
        this.colorPrehled = "teal", this.colorFfprobe = "", this.colorGrafs = "";
      } else if (this.contextMenu === "ffprobe") {
        this.colorPrehled = "", this.colorFfprobe = "teal", this.colorGrafs = "";
      } else if (this.contextMenu === "grafy") {
        this.colorPrehled = "", this.colorFfprobe = "", this.colorGrafs = "teal";
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Channel/ChannelComponent.vue?vue&type=template&id=35c3af51&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Channel/ChannelComponent.vue?vue&type=template&id=35c3af51& ***!
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
      _c("br"),
      _vm._v(" "),
      _c("br"),
      _vm._v(" "),
      _c("v-container", { staticClass: "ml-12", attrs: { fluid: "" } }, [
        _c(
          "div",
          { staticClass: "channelDetailImg" },
          [_c("img-component", { attrs: { img: _vm.channelData.img } })],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          [
            _c(
              "v-row",
              [
                _c(
                  "v-card",
                  { staticClass: "overflow-hidden" },
                  [
                    _c(
                      "v-app-bar",
                      {
                        staticClass: "mt-12",
                        attrs: {
                          color: "transparent",
                          fixed: "",
                          dense: "",
                          dark: ""
                        }
                      },
                      [
                        _c("v-spacer"),
                        _vm._v(" "),
                        _c(
                          "v-btn",
                          {
                            staticClass: "white--text",
                            attrs: { color: _vm.colorPrehled, icon: "" },
                            on: {
                              click: function($event) {
                                _vm.contextMenu = "prehled"
                              }
                            }
                          },
                          [_c("v-icon", [_vm._v("mdi-view-dashboard")])],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "v-btn",
                          {
                            staticClass: "white--text",
                            attrs: { color: _vm.colorFfprobe, icon: "" },
                            on: {
                              click: function($event) {
                                _vm.contextMenu = "ffprobe"
                              }
                            }
                          },
                          [_c("v-icon", [_vm._v("mdi-loupe")])],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "v-btn",
                          {
                            staticClass: "white--text",
                            attrs: { color: _vm.colorGrafs, icon: "" },
                            on: {
                              click: function($event) {
                                _vm.contextMenu = "grafy"
                              }
                            }
                          },
                          [_c("v-icon", [_vm._v("mdi-chart-bar")])],
                          1
                        ),
                        _vm._v(" "),
                        _c("v-spacer")
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
                _vm.contextMenu == "prehled"
                  ? _c("channelBitrate-component", {
                      staticClass: "mx-auto mt-10 ma-1",
                      attrs: {
                        channelName: _vm.channelData.nazev,
                        bitrate: _vm.speed
                      }
                    })
                  : _vm._e()
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "v-row",
              [
                _vm.contextMenu == "ffprobe"
                  ? _c("v-treeview", {
                      attrs: {
                        "open-on-click": "",
                        dense: "",
                        hoverable: "",
                        items: _vm.items
                      }
                    })
                  : _vm._e()
              ],
              1
            )
          ],
          1
        )
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Channel/ChannelComponent.vue":
/*!**************************************************************!*\
  !*** ./resources/js/components/Channel/ChannelComponent.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ChannelComponent_vue_vue_type_template_id_35c3af51___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChannelComponent.vue?vue&type=template&id=35c3af51& */ "./resources/js/components/Channel/ChannelComponent.vue?vue&type=template&id=35c3af51&");
/* harmony import */ var _ChannelComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChannelComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/Channel/ChannelComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ChannelComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ChannelComponent_vue_vue_type_template_id_35c3af51___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ChannelComponent_vue_vue_type_template_id_35c3af51___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Channel/ChannelComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Channel/ChannelComponent.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/Channel/ChannelComponent.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChannelComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ChannelComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Channel/ChannelComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChannelComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Channel/ChannelComponent.vue?vue&type=template&id=35c3af51&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/Channel/ChannelComponent.vue?vue&type=template&id=35c3af51& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChannelComponent_vue_vue_type_template_id_35c3af51___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ChannelComponent.vue?vue&type=template&id=35c3af51& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Channel/ChannelComponent.vue?vue&type=template&id=35c3af51&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChannelComponent_vue_vue_type_template_id_35c3af51___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChannelComponent_vue_vue_type_template_id_35c3af51___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);