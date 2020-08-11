(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[16],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Mozaika/channelDetail/AlertChannelComponent.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Mozaika/channelDetail/AlertChannelComponent.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      crashedStreams: [],
      channelId: "",
      channelName: "",
      alertDetailModal: false,
      intervalAlert: false,
      crashChart: []
    };
  },
  created: function created() {
    this.loadAlerts();
  },
  methods: {
    disableChannelInfoFunction: function disableChannelInfoFunction() {
      var currentObj = this;
      currentObj.alertDetailModal = false;
      currentObj.channelName = "";
      currentObj.channelId = "";
      currentObj.crashChart = [];
    },
    loadAlerts: function loadAlerts() {
      var _this = this;

      axios.get("/api/channels/crashed").then(function (response) {
        _this.crashedStreams = response.data;
      });
    }
  },
  mounted: function mounted() {
    this.intervalAlert = setInterval(function () {
      this.loadAlerts();
    }.bind(this), 1000);
  },
  watch: {
    channelId: function channelId() {
      if (this.channelId !== "") {
        var currentObj = this;
        axios.post("/api/channel/chart/crash/hour", {
          id: this.channelId
        }).then(function (response) {
          currentObj.crashChart = response.data;
          currentObj.alertDetailModal = true;
        })["catch"](function (error) {
          console.log("chyba" + error);
        });
      }
    }
  },
  beforeDestroy: function beforeDestroy() {
    clearInterval(this.intervalAlert);
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Mozaika/channelDetail/AlertChannelComponent.vue?vue&type=template&id=346fb6e7&":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Mozaika/channelDetail/AlertChannelComponent.vue?vue&type=template&id=346fb6e7& ***!
  \**********************************************************************************************************************************************************************************************************************************************/
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
      _c("div", { attrs: { id: "alertDivMozaika" } }, [
        _c(
          "div",
          _vm._l(_vm.crashedStreams, function(item) {
            return _c(
              "div",
              { key: item.id, staticClass: "white--text body-1" },
              [
                _c(
                  "v-alert",
                  {
                    attrs: {
                      dense: "",
                      transition: "scroll-y-transition",
                      border: "bottom",
                      type: "error",
                      elevation: "24"
                    }
                  },
                  [
                    _c(
                      "v-row",
                      [
                        _c("v-spacer"),
                        _vm._v(" "),
                        _c("strong", { staticClass: "body-1" }, [
                          _vm._v(_vm._s(item.nazev))
                        ]),
                        _vm._v(" "),
                        _c("v-spacer"),
                        _vm._v(" "),
                        _c(
                          "v-btn",
                          {
                            staticClass: "pb-2",
                            attrs: {
                              color: "error",
                              fab: "",
                              elevation: "0",
                              "x-small": "",
                              dark: ""
                            },
                            on: {
                              click: function($event) {
                                ;(_vm.channelId = item.id),
                                  (_vm.channelName = item.nazev)
                              }
                            }
                          },
                          [_c("v-icon", [_vm._v("mdi-magnify")])],
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
          }),
          0
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.crashedStreams === false,
                expression: "crashedStreams === false"
              }
            ]
          },
          [
            _c(
              "v-alert",
              {
                attrs: {
                  transition: "scroll-y-transition",
                  border: "bottom",
                  type: "success",
                  elevation: "24"
                }
              },
              [
                _c("v-row", [
                  _c("strong", { staticClass: "body-1" }, [
                    _vm._v("Všechny kanály fungují")
                  ])
                ])
              ],
              1
            )
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c(
        "v-row",
        { attrs: { justify: "center" } },
        [
          _c(
            "v-dialog",
            {
              attrs: { persistent: "", "max-width": "800px" },
              model: {
                value: _vm.alertDetailModal,
                callback: function($$v) {
                  _vm.alertDetailModal = $$v
                },
                expression: "alertDetailModal"
              }
            },
            [
              _c(
                "v-card",
                [
                  _c(
                    "v-card-text",
                    [
                      _c("br"),
                      _vm._v(" "),
                      _c("p", { staticClass: "title text-center" }, [
                        _vm._v(
                          "\n                        Výpadky za poslední den\n                    "
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-container",
                        { attrs: { height: "1920px", fluid: "" } },
                        [
                          _c(
                            "v-timeline",
                            { attrs: { "align-top": "", dense: "" } },
                            _vm._l(_vm.crashChart, function(crashData) {
                              return _c(
                                "v-timeline-item",
                                {
                                  key: crashData.id,
                                  attrs: { color: crashData.color, small: "" }
                                },
                                [
                                  _c(
                                    "v-row",
                                    { staticClass: "pt-1" },
                                    [
                                      _c("v-col", { attrs: { cols: "12" } }, [
                                        _c("strong", [
                                          _vm._v(_vm._s(crashData.time))
                                        ])
                                      ])
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
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-card-actions",
                    [
                      _c("v-spacer"),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          attrs: { color: "red darken-1", text: "" },
                          on: {
                            click: function($event) {
                              return _vm.disableChannelInfoFunction()
                            }
                          }
                        },
                        [_vm._v("Zavřít")]
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

/***/ "./resources/js/components/Mozaika/channelDetail/AlertChannelComponent.vue":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/Mozaika/channelDetail/AlertChannelComponent.vue ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AlertChannelComponent_vue_vue_type_template_id_346fb6e7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AlertChannelComponent.vue?vue&type=template&id=346fb6e7& */ "./resources/js/components/Mozaika/channelDetail/AlertChannelComponent.vue?vue&type=template&id=346fb6e7&");
/* harmony import */ var _AlertChannelComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AlertChannelComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/Mozaika/channelDetail/AlertChannelComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AlertChannelComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AlertChannelComponent_vue_vue_type_template_id_346fb6e7___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AlertChannelComponent_vue_vue_type_template_id_346fb6e7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Mozaika/channelDetail/AlertChannelComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Mozaika/channelDetail/AlertChannelComponent.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/Mozaika/channelDetail/AlertChannelComponent.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AlertChannelComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AlertChannelComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Mozaika/channelDetail/AlertChannelComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AlertChannelComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Mozaika/channelDetail/AlertChannelComponent.vue?vue&type=template&id=346fb6e7&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/components/Mozaika/channelDetail/AlertChannelComponent.vue?vue&type=template&id=346fb6e7& ***!
  \****************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AlertChannelComponent_vue_vue_type_template_id_346fb6e7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AlertChannelComponent.vue?vue&type=template&id=346fb6e7& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Mozaika/channelDetail/AlertChannelComponent.vue?vue&type=template&id=346fb6e7&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AlertChannelComponent_vue_vue_type_template_id_346fb6e7___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AlertChannelComponent_vue_vue_type_template_id_346fb6e7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);