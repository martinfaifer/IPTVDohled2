(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/settings/SettingsComponent.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/settings/SettingsComponent.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
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
//
//
//
//
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
      userData: false
    };
  },
  created: function created() {
    var currentObj = this;
    axios.get("/api/user/get").then(function (response) {
      currentObj.userData = response.data;
    });
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/settings/SettingsComponent.vue?vue&type=template&id=79d9b899&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/settings/SettingsComponent.vue?vue&type=template&id=79d9b899& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
      _c("v-container", { staticClass: "mr-11 ml-11", attrs: { fluid: "" } }, [
        _c(
          "div",
          { staticClass: "mt-1" },
          [
            _c(
              "v-app-bar",
              {
                staticClass: "mt-12",
                attrs: {
                  color: "transparent",
                  fixed: "",
                  dense: "",
                  flat: "",
                  dark: ""
                }
              },
              [
                _c(
                  "v-row",
                  { attrs: { justify: "center", fixed: "" } },
                  [
                    _c(
                      "v-card",
                      { attrs: { fixed: "", flat: "", color: "transparent" } },
                      [
                        _c(
                          "v-toolbar",
                          {
                            attrs: {
                              color: "transparent",
                              flat: "",
                              dense: "",
                              dark: ""
                            }
                          },
                          [
                            _c("v-spacer"),
                            _vm._v(" "),
                            _c(
                              "v-tooltip",
                              {
                                attrs: { bottom: "" },
                                scopedSlots: _vm._u([
                                  {
                                    key: "activator",
                                    fn: function(ref) {
                                      var on = ref.on
                                      return [
                                        _c(
                                          "v-btn",
                                          _vm._g(
                                            {
                                              staticClass: "white--text",
                                              attrs: {
                                                link: "",
                                                to: "/settings/dashboard",
                                                icon: ""
                                              }
                                            },
                                            on
                                          ),
                                          [
                                            _vm.$route.path ===
                                            "/settings/dashboard"
                                              ? _c(
                                                  "v-icon",
                                                  { attrs: { color: "teal" } },
                                                  [_vm._v("mdi-view-dashboard")]
                                                )
                                              : _c("v-icon", [
                                                  _vm._v("mdi-view-dashboard")
                                                ])
                                          ],
                                          1
                                        )
                                      ]
                                    }
                                  }
                                ])
                              },
                              [_vm._v(" "), _c("span", [_vm._v("Dashboard")])]
                            ),
                            _vm._v(" "),
                            _c(
                              "v-tooltip",
                              {
                                attrs: { bottom: "" },
                                scopedSlots: _vm._u([
                                  {
                                    key: "activator",
                                    fn: function(ref) {
                                      var on = ref.on
                                      return [
                                        _c(
                                          "v-btn",
                                          _vm._g(
                                            {
                                              staticClass: "white--text",
                                              attrs: {
                                                link: "",
                                                to: "/settings/devices",
                                                icon: ""
                                              }
                                            },
                                            on
                                          ),
                                          [
                                            _vm.$route.path ===
                                            "/settings/devices"
                                              ? _c(
                                                  "v-icon",
                                                  { attrs: { color: "teal" } },
                                                  [
                                                    _vm._v(
                                                      "mdi-tablet-cellphone"
                                                    )
                                                  ]
                                                )
                                              : _c("v-icon", [
                                                  _vm._v("mdi-tablet-cellphone")
                                                ])
                                          ],
                                          1
                                        )
                                      ]
                                    }
                                  }
                                ])
                              },
                              [_vm._v(" "), _c("span", [_vm._v("Zařízení")])]
                            ),
                            _vm._v(" "),
                            _c(
                              "v-tooltip",
                              {
                                attrs: { bottom: "" },
                                scopedSlots: _vm._u([
                                  {
                                    key: "activator",
                                    fn: function(ref) {
                                      var on = ref.on
                                      return [
                                        _c(
                                          "v-btn",
                                          _vm._g(
                                            {
                                              staticClass: "white--text",
                                              attrs: {
                                                link: "",
                                                to: "/settings/channels",
                                                icon: ""
                                              }
                                            },
                                            on
                                          ),
                                          [
                                            _vm.$route.path ===
                                            "/settings/channels"
                                              ? _c(
                                                  "v-icon",
                                                  { attrs: { color: "teal" } },
                                                  [
                                                    _vm._v(
                                                      "mdi-television-guide"
                                                    )
                                                  ]
                                                )
                                              : _c("v-icon", [
                                                  _vm._v("mdi-television-guide")
                                                ])
                                          ],
                                          1
                                        )
                                      ]
                                    }
                                  }
                                ])
                              },
                              [_vm._v(" "), _c("span", [_vm._v("Kanály")])]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                directives: [
                                  {
                                    name: "show",
                                    rawName: "v-show",
                                    value: _vm.userData.user_role == "admin",
                                    expression: "userData.user_role == 'admin'"
                                  }
                                ]
                              },
                              [
                                _c(
                                  "v-tooltip",
                                  {
                                    attrs: { bottom: "" },
                                    scopedSlots: _vm._u([
                                      {
                                        key: "activator",
                                        fn: function(ref) {
                                          var on = ref.on
                                          return [
                                            _c(
                                              "v-btn",
                                              _vm._g(
                                                {
                                                  staticClass: "white--text",
                                                  attrs: {
                                                    link: "",
                                                    to: "/settings/users",
                                                    icon: ""
                                                  }
                                                },
                                                on
                                              ),
                                              [
                                                _vm.$route.path ===
                                                "/settings/users"
                                                  ? _c(
                                                      "v-icon",
                                                      {
                                                        attrs: { color: "teal" }
                                                      },
                                                      [
                                                        _vm._v(
                                                          "mdi-account-multiple"
                                                        )
                                                      ]
                                                    )
                                                  : _c("v-icon", [
                                                      _vm._v(
                                                        "mdi-account-multiple"
                                                      )
                                                    ])
                                              ],
                                              1
                                            )
                                          ]
                                        }
                                      }
                                    ])
                                  },
                                  [
                                    _vm._v(" "),
                                    _c("span", [_vm._v("Uživatelé")])
                                  ]
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
                                    value: _vm.userData.user_role == "admin",
                                    expression: "userData.user_role == 'admin'"
                                  }
                                ]
                              },
                              [
                                _c(
                                  "v-tooltip",
                                  {
                                    attrs: { bottom: "" },
                                    scopedSlots: _vm._u([
                                      {
                                        key: "activator",
                                        fn: function(ref) {
                                          var on = ref.on
                                          return [
                                            _c(
                                              "v-btn",
                                              _vm._g(
                                                {
                                                  staticClass: "white--text",
                                                  attrs: {
                                                    link: "",
                                                    to: "/settings/alerts",
                                                    icon: ""
                                                  }
                                                },
                                                on
                                              ),
                                              [
                                                _vm.$route.path ===
                                                "/settings/alerts"
                                                  ? _c(
                                                      "v-icon",
                                                      {
                                                        attrs: { color: "teal" }
                                                      },
                                                      [_vm._v("mdi-bell")]
                                                    )
                                                  : _c("v-icon", [
                                                      _vm._v("mdi-bell")
                                                    ])
                                              ],
                                              1
                                            )
                                          ]
                                        }
                                      }
                                    ])
                                  },
                                  [
                                    _vm._v(" "),
                                    _c("span", [_vm._v("Nastavení Alertingu")])
                                  ]
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
                                    value: _vm.userData.user_role == "admin",
                                    expression: "userData.user_role == 'admin'"
                                  }
                                ]
                              },
                              [
                                _c(
                                  "v-tooltip",
                                  {
                                    attrs: { bottom: "" },
                                    scopedSlots: _vm._u([
                                      {
                                        key: "activator",
                                        fn: function(ref) {
                                          var on = ref.on
                                          return [
                                            _c(
                                              "v-btn",
                                              _vm._g(
                                                {
                                                  staticClass: "white--text",
                                                  attrs: {
                                                    link: "",
                                                    to: "/settings/logs",
                                                    icon: ""
                                                  }
                                                },
                                                on
                                              ),
                                              [
                                                _vm.$route.path ===
                                                "/settings/logs"
                                                  ? _c(
                                                      "v-icon",
                                                      {
                                                        attrs: { color: "teal" }
                                                      },
                                                      [_vm._v("mdi-git")]
                                                    )
                                                  : _c("v-icon", [
                                                      _vm._v("mdi-git")
                                                    ])
                                              ],
                                              1
                                            )
                                          ]
                                        }
                                      }
                                    ])
                                  },
                                  [_vm._v(" "), _c("span", [_vm._v("Log")])]
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
                                    value: _vm.userData.user_role == "admin",
                                    expression: "userData.user_role == 'admin'"
                                  }
                                ]
                              },
                              [
                                _c(
                                  "v-tooltip",
                                  {
                                    attrs: { bottom: "" },
                                    scopedSlots: _vm._u([
                                      {
                                        key: "activator",
                                        fn: function(ref) {
                                          var on = ref.on
                                          return [
                                            _c(
                                              "v-btn",
                                              _vm._g(
                                                {
                                                  staticClass: "white--text",
                                                  attrs: {
                                                    link: "",
                                                    to: "/settings/api/users",
                                                    icon: ""
                                                  }
                                                },
                                                on
                                              ),
                                              [
                                                _vm.$route.path ===
                                                "/settings/api/users"
                                                  ? _c(
                                                      "v-icon",
                                                      {
                                                        attrs: { color: "teal" }
                                                      },
                                                      [
                                                        _vm._v(
                                                          "mdi-swap-horizontal"
                                                        )
                                                      ]
                                                    )
                                                  : _vm.$route.path ===
                                                    "/settings/api/iptv_doku"
                                                  ? _c(
                                                      "v-icon",
                                                      {
                                                        attrs: { color: "teal" }
                                                      },
                                                      [
                                                        _vm._v(
                                                          "mdi-swap-horizontal"
                                                        )
                                                      ]
                                                    )
                                                  : _c("v-icon", [
                                                      _vm._v(
                                                        "mdi-swap-horizontal"
                                                      )
                                                    ])
                                              ],
                                              1
                                            )
                                          ]
                                        }
                                      }
                                    ])
                                  },
                                  [_vm._v(" "), _c("span", [_vm._v("Log")])]
                                )
                              ],
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
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "transition",
              { attrs: { name: "fade", mode: "out-in" } },
              [_c("router-view", { staticClass: "mt-16" })],
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

/***/ "./resources/js/components/settings/SettingsComponent.vue":
/*!****************************************************************!*\
  !*** ./resources/js/components/settings/SettingsComponent.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SettingsComponent_vue_vue_type_template_id_79d9b899___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SettingsComponent.vue?vue&type=template&id=79d9b899& */ "./resources/js/components/settings/SettingsComponent.vue?vue&type=template&id=79d9b899&");
/* harmony import */ var _SettingsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SettingsComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/settings/SettingsComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SettingsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SettingsComponent_vue_vue_type_template_id_79d9b899___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SettingsComponent_vue_vue_type_template_id_79d9b899___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/settings/SettingsComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/settings/SettingsComponent.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/settings/SettingsComponent.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SettingsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./SettingsComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/settings/SettingsComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SettingsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/settings/SettingsComponent.vue?vue&type=template&id=79d9b899&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/settings/SettingsComponent.vue?vue&type=template&id=79d9b899& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SettingsComponent_vue_vue_type_template_id_79d9b899___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./SettingsComponent.vue?vue&type=template&id=79d9b899& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/settings/SettingsComponent.vue?vue&type=template&id=79d9b899&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SettingsComponent_vue_vue_type_template_id_79d9b899___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SettingsComponent_vue_vue_type_template_id_79d9b899___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);