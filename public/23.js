(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[23],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Mozaika/channelDetail/ChannelDetailCharts.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Mozaika/channelDetail/ChannelDetailCharts.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
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
      channelFormats: [],
      volumes: [],
      dayVolumesdata: [],
      bitrates: [],
      dayBitrates: [],
      crasheddata: [],
      items: ["Hlasitost", "Datový tok", "Výpadky"],
      value: ""
    };
  },
  watch: {
    // Presmerování na login pokud neni prihlasen uzivatel
    bitrate: function bitrate() {
      if (this.bitrate.bit_rate) {
        this.speed = this.bitrate.bit_rate / 10000;
      }
    },
    value: function value() {
      if (this.value === "Hlasitost") {
        this.volumes = [];
        this.bitrates = [];
        this.dayVolumesdata = [];
        this.dayBitrates = [];
        var currentObj = this;
        axios.post("/api/channel/volume", {
          id: this.channelId
        }).then(function (response) {
          currentObj.volumes = response.data;
        })["catch"](function (error) {
          console.log("chyba" + error);
        }); // graf s daty za jeden den

        axios.post("/api/channel/volume/dayData", {
          id: this.channelId
        }).then(function (response) {
          currentObj.dayVolumesdata = response.data;
        })["catch"](function (error) {
          console.log("chyba" + error);
        });
      } else if (this.value === "Datový tok") {
        this.volumes = [];
        this.bitrates = [];
        this.dayVolumesdata = [];
        this.dayBitrates = [];

        var _currentObj = this;

        axios.post("/api/channel/bitrates", {
          id: this.channelId
        }).then(function (response) {
          _currentObj.bitrates = response.data;
        })["catch"](function (error) {
          console.log("chyba" + error);
        }); // Data datového toku za jeden den

        axios.post("/api/channel/bitrate/dayData", {
          id: this.channelId
        }).then(function (response) {
          _currentObj.dayBitrates = response.data;
        })["catch"](function (error) {
          console.log("chyba" + error);
        });
      } else if (this.value === "Výpadky") {
        this.volumes = [];
        this.bitrates = [];
        this.dayVolumesdata = [];
        this.dayBitrates = [];

        var _currentObj2 = this;

        axios.post("/api/channel/chart/crash/hour", {
          id: this.channelId
        }).then(function (response) {
          if (response.data.status === "false") {
            _currentObj2.crasheddata = response.data.status;
          } else {
            _currentObj2.crasheddata = response.data;
          }
        })["catch"](function (error) {
          console.log("chyba" + error);
        });
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Mozaika/channelDetail/ChannelDetailCharts.vue?vue&type=template&id=4f6c5b9a&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Mozaika/channelDetail/ChannelDetailCharts.vue?vue&type=template&id=4f6c5b9a& ***!
  \********************************************************************************************************************************************************************************************************************************************/
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
        { staticClass: "ml-6 mt-2", attrs: { flat: "" } },
        [
          _c(
            "v-card-text",
            [
              _c(
                "v-row",
                [
                  _c(
                    "v-col",
                    { staticClass: "d-flex", attrs: { cols: "8", sm: "6" } },
                    [
                      _c("v-select", {
                        attrs: {
                          items: _vm.items,
                          label: "Typ Grafu",
                          dense: ""
                        },
                        model: {
                          value: _vm.value,
                          callback: function($$v) {
                            _vm.value = $$v
                          },
                          expression: "value"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("v-spacer"),
                  _vm._v(" "),
                  _vm.value === "Hlasitost"
                    ? _c(
                        "div",
                        [
                          _c("br"),
                          _vm._v(" "),
                          _c("p", { staticClass: "text-center" }, [
                            _vm._v(
                              "\n                        Graf hlasitosti, posledních 60 záznamů\n                    "
                            )
                          ]),
                          _vm._v(" "),
                          _c("line-chart", {
                            attrs: {
                              label: "úroveň hlasitosti v dB",
                              width: "800px",
                              height: "250px",
                              xtitle: "posledních 60min",
                              ytitle: "dB",
                              data: _vm.volumes
                            }
                          }),
                          _vm._v(" "),
                          _c("br"),
                          _vm._v(" "),
                          _c("p", { staticClass: "text-center" }, [
                            _vm._v("Graf hlasitosti za 24h")
                          ]),
                          _vm._v(" "),
                          _c("line-chart", {
                            attrs: {
                              label: "úroveň hlasitosti v dB",
                              width: "800px",
                              height: "250px",
                              xtitle: "Data za jeden den",
                              ytitle: "dB",
                              data: _vm.dayVolumesdata
                            }
                          })
                        ],
                        1
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.value === "Datový tok"
                    ? _c(
                        "div",
                        [
                          _c("br"),
                          _vm._v(" "),
                          _c("p", { staticClass: "text-center" }, [
                            _vm._v(
                              "\n                        Graf bitratu, posledních 60 záznamů\n                    "
                            )
                          ]),
                          _vm._v(" "),
                          _c("line-chart", {
                            attrs: {
                              label: "bitrate v Mbps",
                              width: "800px",
                              height: "250px",
                              xtitle: "posledních 60min",
                              ytitle: "Bitrate",
                              data: _vm.bitrates
                            }
                          }),
                          _vm._v(" "),
                          _c("br"),
                          _vm._v(" "),
                          _c("p", { staticClass: "text-center" }, [
                            _vm._v("Graf bitratu za 24h")
                          ]),
                          _vm._v(" "),
                          _c("line-chart", {
                            attrs: {
                              label: "bitrate v Mbps",
                              width: "800px",
                              height: "250px",
                              xtitle: "Data za jeden den",
                              ytitle: "Bitrate",
                              data: _vm.dayBitrates
                            }
                          })
                        ],
                        1
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.value === "Výpadky"
                    ? _c("div", [
                        _c("br"),
                        _vm._v(" "),
                        _c("p", { staticClass: "text-center" }, [
                          _vm._v("Graf výpadků za 24h")
                        ]),
                        _vm._v(" "),
                        _vm.crasheddata === "false"
                          ? _c(
                              "div",
                              [
                                _c("v-alert", { attrs: { type: "success" } }, [
                                  _vm._v(
                                    "\n                            Kanál nemá evidovaný žádný výpadek\n                        "
                                  )
                                ])
                              ],
                              1
                            )
                          : _c(
                              "div",
                              [
                                _c(
                                  "v-timeline",
                                  {
                                    attrs: {
                                      width: "200px",
                                      "align-top": "",
                                      dense: ""
                                    }
                                  },
                                  _vm._l(_vm.crasheddata, function(crashData) {
                                    return _c(
                                      "v-timeline-item",
                                      {
                                        key: crashData.id,
                                        attrs: {
                                          color: crashData.color,
                                          small: ""
                                        }
                                      },
                                      [
                                        _c(
                                          "v-row",
                                          { staticClass: "pt-1" },
                                          [
                                            _c(
                                              "v-col",
                                              { attrs: { cols: "12" } },
                                              [
                                                _c("strong", [
                                                  _vm._v(_vm._s(crashData.time))
                                                ])
                                              ]
                                            )
                                          ],
                                          1
                                        )
                                      ],
                                      1
                                    )
                                  }),
                                  1
                                )
                              ],
                              1
                            )
                      ])
                    : _vm._e()
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

/***/ "./resources/js/components/Mozaika/channelDetail/ChannelDetailCharts.vue":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/Mozaika/channelDetail/ChannelDetailCharts.vue ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ChannelDetailCharts_vue_vue_type_template_id_4f6c5b9a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChannelDetailCharts.vue?vue&type=template&id=4f6c5b9a& */ "./resources/js/components/Mozaika/channelDetail/ChannelDetailCharts.vue?vue&type=template&id=4f6c5b9a&");
/* harmony import */ var _ChannelDetailCharts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChannelDetailCharts.vue?vue&type=script&lang=js& */ "./resources/js/components/Mozaika/channelDetail/ChannelDetailCharts.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ChannelDetailCharts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ChannelDetailCharts_vue_vue_type_template_id_4f6c5b9a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ChannelDetailCharts_vue_vue_type_template_id_4f6c5b9a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Mozaika/channelDetail/ChannelDetailCharts.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Mozaika/channelDetail/ChannelDetailCharts.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/components/Mozaika/channelDetail/ChannelDetailCharts.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChannelDetailCharts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ChannelDetailCharts.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Mozaika/channelDetail/ChannelDetailCharts.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChannelDetailCharts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Mozaika/channelDetail/ChannelDetailCharts.vue?vue&type=template&id=4f6c5b9a&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/components/Mozaika/channelDetail/ChannelDetailCharts.vue?vue&type=template&id=4f6c5b9a& ***!
  \**************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChannelDetailCharts_vue_vue_type_template_id_4f6c5b9a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ChannelDetailCharts.vue?vue&type=template&id=4f6c5b9a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Mozaika/channelDetail/ChannelDetailCharts.vue?vue&type=template&id=4f6c5b9a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChannelDetailCharts_vue_vue_type_template_id_4f6c5b9a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChannelDetailCharts_vue_vue_type_template_id_4f6c5b9a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);