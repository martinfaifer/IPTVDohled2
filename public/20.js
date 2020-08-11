(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[20],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Mozaika/channelDetail/ChannelNameWithBitrate.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Mozaika/channelDetail/ChannelNameWithBitrate.vue?vue&type=script&lang=js& ***!
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      bitrate: "",
      speed: "",
      channelFormats: [],
      volumes: [],
      value: [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0],
      bitrates: [],
      interval: false
    };
  },
  created: function created() {
    this.loadBitrate();
    this.loadFFprobe();
    this.loadVolume();
    this.loadBitrates();
  },
  methods: {
    loadBitrate: function loadBitrate() {
      var currentObj = this;
      axios.post("api/channel/bitrate", {
        id: this.channelId
      }).then(function (response) {
        currentObj.bitrate = response.data;
      })["catch"](function (error) {
        console.log("chyba" + error);
      });
    },
    loadFFprobe: function loadFFprobe() {
      var currentObj = this;
      axios.post("/api/channel/ffprobe/formats", {
        id: this.channelId
      }).then(function (response) {
        currentObj.channelFormats = response.data;
      })["catch"](function (error) {
        console.log("chyba" + error);
      });
    },
    loadVolume: function loadVolume() {
      var currentObj = this;
      axios.post("/api/channel/volume", {
        id: this.channelId
      }).then(function (response) {
        currentObj.volumes = response.data;
      })["catch"](function (error) {
        console.log("chyba" + error);
      });
    },
    loadBitrates: function loadBitrates() {
      var currentObj = this;
      axios.post("/api/channel/bitrates", {
        id: this.channelId
      }).then(function (response) {
        currentObj.bitrates = response.data;
      })["catch"](function (error) {
        console.log("chyba" + error);
      });
    }
  },
  mounted: function mounted() {
    this.interval = setInterval(function () {
      this.loadBitrate();
      this.loadFFprobe();
      this.loadVolume();
      this.loadBitrates();
    }.bind(this), 30000);
  },
  watch: {
    // Presmerování na login pokud neni prihlasen uzivatel
    bitrate: function bitrate() {
      if (this.bitrate.bit_rate) {
        this.speed = this.bitrate.bit_rate / 10000;
      }
    }
  },
  beforeDestroy: function beforeDestroy() {
    clearInterval(this.interval);
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Mozaika/channelDetail/ChannelNameWithBitrate.vue?vue&type=template&id=0a1b7f58&":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Mozaika/channelDetail/ChannelNameWithBitrate.vue?vue&type=template&id=0a1b7f58& ***!
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
    [
      _c(
        "v-card",
        {
          staticClass: "ml-6 mt-10",
          attrs: { flat: "", height: "100%", width: "850px" }
        },
        [
          _c(
            "v-card-text",
            [
              _c(
                "v-row",
                [
                  _vm.speed != ""
                    ? _c("div", { staticClass: "font-weight-bold" }, [
                        _vm._v(
                          "\n                    Bitrate:\n                    "
                        ),
                        _c("span", { staticClass: "teal--text" }, [
                          _vm._v(_vm._s(_vm.speed) + " Mbps")
                        ])
                      ])
                    : _c("div", { staticClass: "font-weight-bold" }, [
                        _vm._v(
                          "\n                    Bitrate:\n                    "
                        ),
                        _c("span", { staticClass: "red--text" }, [
                          _vm._v("0 Mbps")
                        ])
                      ]),
                  _vm._v(" "),
                  _c("v-spacer"),
                  _vm._v(" "),
                  _vm._l(_vm.channelFormats.video, function(video) {
                    return _c("div", [
                      video != "error"
                        ? _c("p", { staticClass: "font-weight-bold" }, [
                            _vm._v(
                              "\n                        Video formát:\n                        "
                            ),
                            _c("span", { staticClass: "teal--text" }, [
                              _vm._v(_vm._s(video))
                            ])
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      video === "error"
                        ? _c("p", { staticClass: "font-weight-bold" }, [
                            _vm._v(
                              "\n                        Video formát:\n                        "
                            ),
                            _c("span", { staticClass: "red--text" }, [
                              _vm._v(_vm._s(video))
                            ])
                          ])
                        : _vm._e()
                    ])
                  }),
                  _vm._v(" "),
                  _c("v-spacer"),
                  _vm._v(" "),
                  _vm._l(_vm.channelFormats.audio, function(audio) {
                    return _c("div", [
                      audio != "error"
                        ? _c("p", { staticClass: "font-weight-bold" }, [
                            _vm._v(
                              "\n                        Audio formát:\n                        "
                            ),
                            _c("span", { staticClass: "teal--text" }, [
                              _vm._v(_vm._s(audio))
                            ])
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      audio === "error"
                        ? _c("p", { staticClass: "font-weight-bold" }, [
                            _vm._v(
                              "\n                        Audio formát:\n                        "
                            ),
                            _c("span", { staticClass: "red--text" }, [
                              _vm._v(_vm._s(audio))
                            ])
                          ])
                        : _vm._e()
                    ])
                  })
                ],
                2
              ),
              _vm._v(" "),
              _c("br"),
              _vm._v(" "),
              _c(
                "v-row",
                [
                  _c("br"),
                  _vm._v(" "),
                  _c("p", { staticClass: "text-center" }, [
                    _vm._v(
                      "\n                    Graf hlasitosti, posledních 60 záznamů\n                "
                    )
                  ]),
                  _vm._v(" "),
                  _c("line-chart", {
                    attrs: {
                      label: "úroveň hlasitosti v dB",
                      width: "850px",
                      height: "250px",
                      ytitle: "dB",
                      data: _vm.volumes
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c("br"),
              _vm._v(" "),
              _c(
                "v-row",
                [
                  _c("br"),
                  _vm._v(" "),
                  _c("p", { staticClass: "text-center" }, [
                    _vm._v(
                      "\n                    Graf bitratu, posledních 60 záznamů\n                "
                    )
                  ]),
                  _vm._v(" "),
                  _c("line-chart", {
                    attrs: {
                      label: "bitrate v Mbps",
                      width: "850px",
                      height: "250px",
                      ytitle: "Bitrate Mbps",
                      data: _vm.bitrates
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
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Mozaika/channelDetail/ChannelNameWithBitrate.vue":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/Mozaika/channelDetail/ChannelNameWithBitrate.vue ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ChannelNameWithBitrate_vue_vue_type_template_id_0a1b7f58___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChannelNameWithBitrate.vue?vue&type=template&id=0a1b7f58& */ "./resources/js/components/Mozaika/channelDetail/ChannelNameWithBitrate.vue?vue&type=template&id=0a1b7f58&");
/* harmony import */ var _ChannelNameWithBitrate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChannelNameWithBitrate.vue?vue&type=script&lang=js& */ "./resources/js/components/Mozaika/channelDetail/ChannelNameWithBitrate.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ChannelNameWithBitrate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ChannelNameWithBitrate_vue_vue_type_template_id_0a1b7f58___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ChannelNameWithBitrate_vue_vue_type_template_id_0a1b7f58___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Mozaika/channelDetail/ChannelNameWithBitrate.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Mozaika/channelDetail/ChannelNameWithBitrate.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/components/Mozaika/channelDetail/ChannelNameWithBitrate.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChannelNameWithBitrate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ChannelNameWithBitrate.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Mozaika/channelDetail/ChannelNameWithBitrate.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChannelNameWithBitrate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Mozaika/channelDetail/ChannelNameWithBitrate.vue?vue&type=template&id=0a1b7f58&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/components/Mozaika/channelDetail/ChannelNameWithBitrate.vue?vue&type=template&id=0a1b7f58& ***!
  \*****************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChannelNameWithBitrate_vue_vue_type_template_id_0a1b7f58___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ChannelNameWithBitrate.vue?vue&type=template&id=0a1b7f58& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Mozaika/channelDetail/ChannelNameWithBitrate.vue?vue&type=template&id=0a1b7f58&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChannelNameWithBitrate_vue_vue_type_template_id_0a1b7f58___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChannelNameWithBitrate_vue_vue_type_template_id_0a1b7f58___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);