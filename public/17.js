(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[17],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Mozaika/channelDetail/ApiDokumentaceComponent.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Mozaika/channelDetail/ApiDokumentaceComponent.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      items: [],
      channel: [],
      interval: false
    };
  },
  created: function created() {
    this.loadChannelInfo();
    this.loadChannelDetail();
  },
  methods: {
    loadChannelInfo: function loadChannelInfo() {
      var currentObj = this;
      axios.post("/api/communication/channel", {
        id: this.channelId
      }).then(function (response) {
        currentObj.items = response.data;
      })["catch"](function (error) {
        console.log("chyba" + error);
      });
    },
    loadChannelDetail: function loadChannelDetail() {
      var currentObj = this;
      axios.post("/api/channel/getDetail", {
        id: this.channelId
      }).then(function (response) {
        currentObj.channel = response.data;
      })["catch"](function (error) {
        console.log("chyba" + error);
      });
    }
  },
  mounted: function mounted() {
    this.interval = setInterval(function () {
      this.loadChannelInfo();
      this.loadChannelDetail();
    }.bind(this), 1000);
  },
  beforeDestroy: function beforeDestroy() {
    clearInterval(this.interval);
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Mozaika/channelDetail/ApiDokumentaceComponent.vue?vue&type=template&id=ba899c10&":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Mozaika/channelDetail/ApiDokumentaceComponent.vue?vue&type=template&id=ba899c10& ***!
  \************************************************************************************************************************************************************************************************************************************************/
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
          staticClass: "mt-10 ml-6",
          attrs: { scrollable: "", flat: "", color: "transparent" }
        },
        [
          _c(
            "v-card-text",
            [
              _c("v-row", { staticClass: "font-weight-bold mb-3" }, [
                _c(
                  "a",
                  {
                    attrs: {
                      target: "_blank",
                      href: _vm.channel.dokumentaceUrl
                    }
                  },
                  [_vm._v("Proklik do dokumentace")]
                )
              ]),
              _vm._v(" "),
              _c(
                "v-row",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.items != "",
                      expression: "items != ''"
                    }
                  ],
                  staticClass: "font-weight-bold"
                },
                [
                  _c("span", { staticClass: "font-weight-bold" }, [
                    _vm._v("Příjem kanálu:")
                  ]),
                  _vm._v(" "),
                  _vm._l(_vm.items.multicastDevice, function(multicastDevice) {
                    return _c(
                      "span",
                      {
                        key: multicastDevice.name,
                        staticClass: "ml-2 teal--text"
                      },
                      [_vm._v(_vm._s(multicastDevice.name))]
                    )
                  }),
                  _vm._v(" "),
                  _c("span", { staticClass: "font-weight-bold ml-8" }, [
                    _vm._v("Transcoder:")
                  ]),
                  _vm._v(" "),
                  _vm._l(_vm.items.h264Device, function(transcoder) {
                    return _c(
                      "span",
                      { key: transcoder.name, staticClass: "ml-2 teal--text" },
                      [
                        _c(
                          "a",
                          {
                            attrs: {
                              target: "_blank",
                              href: _vm.items.h264deviceUrl
                            }
                          },
                          [_vm._v(_vm._s(transcoder.name))]
                        )
                      ]
                    )
                  })
                ],
                2
              ),
              _vm._v(" "),
              _c(
                "v-row",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.items != "",
                      expression: "items != ''"
                    }
                  ],
                  staticClass: "font-weight-bold mt-3"
                },
                [_vm._v("\n                Multicast\n            ")]
              ),
              _vm._v(" "),
              _vm._l(_vm.items.multicast, function(multicast) {
                return _c(
                  "div",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.items != "",
                        expression: "items != ''"
                      }
                    ],
                    key: multicast.id,
                    staticClass: "ml-6 mt-1"
                  },
                  [
                    _c("v-row", { staticClass: "mt-1 font-weight-bold" }, [
                      _vm._v(
                        "\n                    IP k STB:\n                    "
                      ),
                      _c("span", { staticClass: "teal--text ml-2" }, [
                        _vm._v(
                          "\n                        " +
                            _vm._s(multicast.ipKstb)
                        )
                      ])
                    ])
                  ],
                  1
                )
              }),
              _vm._v(" "),
              _c(
                "v-row",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.items != "",
                      expression: "items != ''"
                    }
                  ],
                  staticClass: "font-weight-bold mt-3"
                },
                [_vm._v("\n                H264\n            ")]
              ),
              _vm._v(" "),
              _vm._l(_vm.items.h264, function(h264) {
                return _c(
                  "div",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.items != "",
                        expression: "items != ''"
                      }
                    ],
                    key: h264.K1080,
                    staticClass: "ml-6 mt-1"
                  },
                  [
                    _c(
                      "v-row",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: h264.K1080 != null,
                            expression: "h264.K1080 != null"
                          }
                        ],
                        staticClass: "mt-1 font-weight-bold"
                      },
                      [
                        _vm._v(
                          "\n                    1080p:\n                    "
                        ),
                        _c("span", { staticClass: "teal--text ml-2" }, [
                          _vm._v(_vm._s(h264.K1080))
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "v-row",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: h264.K404 != null,
                            expression: "h264.K404 != null"
                          }
                        ],
                        staticClass: "mt-1 font-weight-bold"
                      },
                      [
                        _vm._v(
                          "\n                    404p:\n                    "
                        ),
                        _c("span", { staticClass: "teal--text ml-2" }, [
                          _vm._v(_vm._s(h264.K404))
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "v-row",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: h264.K576 != null,
                            expression: "h264.K576 != null"
                          }
                        ],
                        staticClass: "mt-1 font-weight-bold"
                      },
                      [
                        _vm._v(
                          "\n                    576p:\n                    "
                        ),
                        _c("span", { staticClass: "teal--text ml-2" }, [
                          _vm._v(_vm._s(h264.K576))
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "v-row",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: h264.K720 != null,
                            expression: "h264.K720 != null"
                          }
                        ],
                        staticClass: "mt-1 font-weight-bold"
                      },
                      [
                        _vm._v(
                          "\n                    720p:\n                    "
                        ),
                        _c("span", { staticClass: "teal--text ml-2" }, [
                          _vm._v(_vm._s(h264.K720))
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "v-row",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: h264.m3u8_HLS_kdekoliv != null,
                            expression: "h264.m3u8_HLS_kdekoliv != null"
                          }
                        ],
                        staticClass: "mt-1 font-weight-bold"
                      },
                      [
                        _vm._v(
                          "\n                    HLS kdekoliv:\n                    "
                        ),
                        _c("span", { staticClass: "teal--text ml-2" }, [
                          _vm._v(_vm._s(h264.m3u8_HLS_kdekoliv))
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "v-row",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: h264.m3u8_mobile != null,
                            expression: "h264.m3u8_mobile != null"
                          }
                        ],
                        staticClass: "mt-1 font-weight-bold"
                      },
                      [
                        _vm._v(
                          "\n                    HLS mobile:\n                    "
                        ),
                        _c("span", { staticClass: "teal--text ml-2" }, [
                          _vm._v(_vm._s(h264.m3u8_mobile))
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "v-row",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: h264.m3u8_stb != null,
                            expression: "h264.m3u8_stb != null"
                          }
                        ],
                        staticClass: "mt-1 font-weight-bold"
                      },
                      [
                        _vm._v(
                          "\n                    HLS stb:\n                    "
                        ),
                        _c("span", { staticClass: "teal--text ml-2" }, [
                          _vm._v(_vm._s(h264.m3u8_stb))
                        ])
                      ]
                    )
                  ],
                  1
                )
              }),
              _vm._v(" "),
              _c(
                "v-row",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.items != "",
                      expression: "items != ''"
                    }
                  ],
                  staticClass: "font-weight-bold mt-3"
                },
                [_vm._v("\n                H265\n            ")]
              ),
              _vm._v(" "),
              _vm._l(_vm.items.h265, function(h265) {
                return _c(
                  "div",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.items != "",
                        expression: "items != ''"
                      }
                    ],
                    key: h265.id,
                    staticClass: "ml-6 mt-1"
                  },
                  [
                    _c(
                      "v-row",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: h265.K1080 != null,
                            expression: "h265.K1080 != null"
                          }
                        ],
                        staticClass: "mt-1 font-weight-bold"
                      },
                      [
                        _vm._v(
                          "\n                    1080p:\n                    "
                        ),
                        _c("span", { staticClass: "teal--text ml-2" }, [
                          _vm._v(_vm._s(h265.K1080))
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "v-row",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: h265.K720 != null,
                            expression: "h265.K720 != null"
                          }
                        ],
                        staticClass: "mt-1 font-weight-bold"
                      },
                      [
                        _vm._v(
                          "\n                    720p:\n                    "
                        ),
                        _c("span", { staticClass: "teal--text ml-2" }, [
                          _vm._v(_vm._s(h265.K720))
                        ])
                      ]
                    )
                  ],
                  1
                )
              })
            ],
            2
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

/***/ "./resources/js/components/Mozaika/channelDetail/ApiDokumentaceComponent.vue":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/Mozaika/channelDetail/ApiDokumentaceComponent.vue ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ApiDokumentaceComponent_vue_vue_type_template_id_ba899c10___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ApiDokumentaceComponent.vue?vue&type=template&id=ba899c10& */ "./resources/js/components/Mozaika/channelDetail/ApiDokumentaceComponent.vue?vue&type=template&id=ba899c10&");
/* harmony import */ var _ApiDokumentaceComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ApiDokumentaceComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/Mozaika/channelDetail/ApiDokumentaceComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ApiDokumentaceComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ApiDokumentaceComponent_vue_vue_type_template_id_ba899c10___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ApiDokumentaceComponent_vue_vue_type_template_id_ba899c10___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Mozaika/channelDetail/ApiDokumentaceComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Mozaika/channelDetail/ApiDokumentaceComponent.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/components/Mozaika/channelDetail/ApiDokumentaceComponent.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ApiDokumentaceComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ApiDokumentaceComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Mozaika/channelDetail/ApiDokumentaceComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ApiDokumentaceComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Mozaika/channelDetail/ApiDokumentaceComponent.vue?vue&type=template&id=ba899c10&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/components/Mozaika/channelDetail/ApiDokumentaceComponent.vue?vue&type=template&id=ba899c10& ***!
  \******************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ApiDokumentaceComponent_vue_vue_type_template_id_ba899c10___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ApiDokumentaceComponent.vue?vue&type=template&id=ba899c10& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Mozaika/channelDetail/ApiDokumentaceComponent.vue?vue&type=template&id=ba899c10&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ApiDokumentaceComponent_vue_vue_type_template_id_ba899c10___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ApiDokumentaceComponent_vue_vue_type_template_id_ba899c10___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);