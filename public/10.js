(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/settings/devices/DeviceComponent.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/settings/devices/DeviceComponent.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _alerts_AlertComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../alerts/AlertComponent */ "./resources/js/components/alerts/AlertComponent.vue");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    var _ref;

    return _ref = {
      device: "",
      deviceName: "",
      deviceIp: "",
      deviceId: "",
      dohledType: "",
      loadingBtn: false,
      editDialog: false,
      deleteDialog: false,
      alertDialog: false,
      alertData: false,
      dialog: false,
      editDevice: [],
      deviceNameRule: [function (v) {
        return !!v || "musí být vyplněný název zařízení";
      }],
      deviceIpRule: [function (v) {
        return !!v || "je zapotřebí IPv4 adresa";
      }],
      deviceDohledTypeRule: [function (v) {
        return !!v || "vyberte jak dohledovat zařízení";
      }],
      headers: [{
        text: "Nazev",
        value: "name"
      }, {
        text: "IP",
        value: "ip"
      }, {
        text: "Status",
        value: "status"
      }, {
        text: "Akce",
        value: "actions"
      }],
      devices: [],
      search: ""
    }, _defineProperty(_ref, "deviceId", ""), _defineProperty(_ref, "status", ""), _defineProperty(_ref, "loading", false), _defineProperty(_ref, "userData", false), _defineProperty(_ref, "interval", false), _ref;
  },
  components: {
    "alert-component": _alerts_AlertComponent__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  created: function created() {
    this.loadDevices();
    this.loadUserData();
  },
  mounted: function mounted() {
    this.interval = setInterval(function () {
      this.loadUserData();
    }.bind(this), 5000);
  },
  methods: {
    loadDevices: function loadDevices() {
      var currentObj = this;
      window.axios.get("/api/devices").then(function (response) {
        if (response.data.stat === "warning") {
          currentObj.status = response.data;
        } else {
          currentObj.devices = response.data;
        }
      });
    },
    loadUserData: function loadUserData() {
      var currentObj = this;
      axios.get("/api/user/get").then(function (response) {
        currentObj.userData = response.data;
      });
    },
    closeDialogAndResetImputs: function closeDialogAndResetImputs() {
      this.dialog = false;
      this.editDialog = false;
      this.deleteDialog = false, this.deviceId = "";
      this.deviceName = "";
      this.deviceIp = "";
      this.dohledType = "";
    },
    saveNewImput: function saveNewImput() {
      var currentObj = this;
      currentObj.loading = true;
      axios.post("/api/device/create", {
        deviceName: this.deviceName,
        deviceIp: this.deviceIp,
        dohledType: this.dohledType
      }).then(function (response) {
        currentObj.status = response.data;
        currentObj.dialog = false;
        currentObj.deviceName = "";
        currentObj.deviceIp = "";
        currentObj.dohledType = "";
        currentObj.loadDevices();
      })["catch"](function (error) {
        console.log(error);
      });
    },
    openEditDialogAndTakeDataAboutDevice: function openEditDialogAndTakeDataAboutDevice() {
      var currentObj = this;
      axios.post("/api/device/get", {
        deviceId: this.deviceId
      }).then(function (response) {
        currentObj.editDevice = response.data;
        currentObj.editDialog = true;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    saveEditDialog: function saveEditDialog() {
      var currentObj = this;
      currentObj.loading = true;
      axios.post("/api/device/edit", {
        deviceName: this.editDevice.name,
        deviceId: this.deviceId,
        deviceIp: this.editDevice.ip,
        dohledType: this.dohledType
      }).then(function (response) {
        currentObj.status = response.data;
        currentObj.editDialog = false;
        currentObj.editDevice = "";
        currentObj.dohledType = "";
        currentObj.deviceId = "";
        currentObj.loadDevices();
      })["catch"](function (error) {
        console.log(error);
      });
    },
    openDeleteDialog: function openDeleteDialog() {
      this.deleteDialog = true;
    },
    sendDeleteDialog: function sendDeleteDialog() {
      var currentObj = this;
      currentObj.loading = true;
      axios.post("/api/device/delete", {
        deviceId: this.deviceId
      }).then(function (response) {
        currentObj.status = response.data;
        currentObj.deleteDialog = false;
        currentObj.deviceId = "";
        currentObj.loadDevices();
      })["catch"](function (error) {
        console.log(error);
      });
    }
  },
  watch: {
    status: function status() {
      var _this = this;

      setTimeout(function () {
        return _this.status = false;
      }, 3000);
    }
  },
  beforeDestroy: function beforeDestroy() {
    clearInterval(this.interval);
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/settings/devices/DeviceComponent.vue?vue&type=template&id=6a4a8fd4&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/settings/devices/DeviceComponent.vue?vue&type=template&id=6a4a8fd4& ***!
  \***********************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "body-2" },
    [
      _c("br"),
      _vm._v(" "),
      _c(
        "transition",
        { attrs: { name: "fade", mode: "out-in" } },
        [
          _vm.status != []
            ? _c("alert-component", { attrs: { status: _vm.status } })
            : _vm._e()
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        [
          _c("v-data-table", {
            staticClass: "elevation-0 mr-12",
            attrs: {
              dense: _vm.userData.dense,
              headers: _vm.headers,
              items: _vm.devices,
              search: _vm.search
            },
            scopedSlots: _vm._u([
              {
                key: "top",
                fn: function() {
                  return [
                    _c(
                      "v-toolbar",
                      { attrs: { color: "transparent", flat: "" } },
                      [
                        _c("v-text-field", {
                          attrs: {
                            autofocus: "",
                            "append-icon": "mdi-magnify",
                            label: "Hledání...",
                            "single-line": "",
                            "hide-details": ""
                          },
                          model: {
                            value: _vm.search,
                            callback: function($$v) {
                              _vm.search = $$v
                            },
                            expression: "search"
                          }
                        }),
                        _vm._v(" "),
                        _c("v-spacer"),
                        _vm._v(" "),
                        _c("v-spacer"),
                        _vm._v(" "),
                        _vm.userData.user_role != "náhled"
                          ? _c(
                              "div",
                              [
                                _c(
                                  "v-dialog",
                                  {
                                    attrs: {
                                      persistent: "",
                                      "max-width": "500px"
                                    },
                                    scopedSlots: _vm._u(
                                      [
                                        {
                                          key: "activator",
                                          fn: function(ref) {
                                            var on = ref.on
                                            return [
                                              _c(
                                                "v-btn",
                                                _vm._g(
                                                  {
                                                    staticClass: "mb-2",
                                                    attrs: {
                                                      color: "teal",
                                                      dark: ""
                                                    }
                                                  },
                                                  on
                                                ),
                                                [_vm._v("Nové zařízení")]
                                              )
                                            ]
                                          }
                                        }
                                      ],
                                      null,
                                      false,
                                      3220441421
                                    ),
                                    model: {
                                      value: _vm.dialog,
                                      callback: function($$v) {
                                        _vm.dialog = $$v
                                      },
                                      expression: "dialog"
                                    }
                                  },
                                  [
                                    _vm._v(" "),
                                    _c(
                                      "v-card",
                                      [
                                        _c(
                                          "v-card-title",
                                          { staticClass: "headline" },
                                          [_vm._v("Založení nového zařízení")]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "v-card-text",
                                          [
                                            _c(
                                              "v-row",
                                              [
                                                _c(
                                                  "v-col",
                                                  {
                                                    attrs: {
                                                      cols: "12",
                                                      sm: "6",
                                                      md: "6"
                                                    }
                                                  },
                                                  [
                                                    _c("v-text-field", {
                                                      attrs: {
                                                        label: "Název zařízení",
                                                        rules:
                                                          _vm.deviceNameRule,
                                                        autofocus: "",
                                                        required: ""
                                                      },
                                                      model: {
                                                        value: _vm.deviceName,
                                                        callback: function(
                                                          $$v
                                                        ) {
                                                          _vm.deviceName = $$v
                                                        },
                                                        expression: "deviceName"
                                                      }
                                                    })
                                                  ],
                                                  1
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "v-col",
                                                  {
                                                    attrs: {
                                                      cols: "12",
                                                      sm: "6",
                                                      md: "6"
                                                    }
                                                  },
                                                  [
                                                    _c("v-text-field", {
                                                      attrs: {
                                                        label: "IP",
                                                        rules: _vm.deviceIpRule,
                                                        hint: "IPv4 pro dohled"
                                                      },
                                                      model: {
                                                        value: _vm.deviceIp,
                                                        callback: function(
                                                          $$v
                                                        ) {
                                                          _vm.deviceIp = $$v
                                                        },
                                                        expression: "deviceIp"
                                                      }
                                                    })
                                                  ],
                                                  1
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "v-col",
                                                  {
                                                    attrs: {
                                                      cols: "12",
                                                      sm: "12"
                                                    }
                                                  },
                                                  [
                                                    _c("v-autocomplete", {
                                                      attrs: {
                                                        rules:
                                                          _vm.deviceDohledTypeRule,
                                                        items: ["ping", "api"],
                                                        label:
                                                          "typ dohledu zařízení"
                                                      },
                                                      model: {
                                                        value: _vm.dohledType,
                                                        callback: function(
                                                          $$v
                                                        ) {
                                                          _vm.dohledType = $$v
                                                        },
                                                        expression: "dohledType"
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
                                                attrs: {
                                                  color: "red darken-1",
                                                  text: ""
                                                },
                                                on: {
                                                  click: function($event) {
                                                    return _vm.closeDialogAndResetImputs()
                                                  }
                                                }
                                              },
                                              [_vm._v("Zavřít")]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "v-btn",
                                              {
                                                attrs: {
                                                  color: "green darken-1",
                                                  text: "",
                                                  disabled:
                                                    _vm.deviceName === "" ||
                                                    _vm.deviceIp === "" ||
                                                    _vm.dohledType === ""
                                                },
                                                on: {
                                                  click: function($event) {
                                                    return _vm.saveNewImput()
                                                  }
                                                }
                                              },
                                              [_vm._v("Uložit")]
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
                          : _vm._e()
                      ],
                      1
                    )
                  ]
                },
                proxy: true
              },
              {
                key: "item.status",
                fn: function(ref) {
                  var item = ref.item
                  return [
                    _c(
                      "v-icon",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: item.status === "success",
                            expression: "item.status === 'success'"
                          }
                        ],
                        attrs: { color: "green", dark: "" }
                      },
                      [_vm._v("mdi-check")]
                    ),
                    _vm._v(" "),
                    _c(
                      "v-icon",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: item.status === "fail",
                            expression: "item.status === 'fail'"
                          }
                        ],
                        attrs: { color: "red", dark: "" }
                      },
                      [_vm._v("mdi-close")]
                    ),
                    _vm._v(" "),
                    _c(
                      "v-icon",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: item.status === "waiting",
                            expression: "item.status === 'waiting'"
                          }
                        ],
                        attrs: { color: "orange", dark: "" }
                      },
                      [_vm._v("mdi-repeat")]
                    )
                  ]
                }
              },
              {
                key: "item.actions",
                fn: function(ref) {
                  var item = ref.item
                  return [
                    _vm.userData.user_role != "náhled"
                      ? _c(
                          "v-icon",
                          {
                            staticClass: "mr-2",
                            attrs: { small: "" },
                            on: {
                              click: function($event) {
                                ;(_vm.deviceId = item.id),
                                  _vm.openEditDialogAndTakeDataAboutDevice()
                              }
                            }
                          },
                          [_vm._v("mdi-pencil")]
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.userData.user_role != "náhled"
                      ? _c(
                          "v-icon",
                          {
                            attrs: { small: "", color: "red" },
                            on: {
                              click: function($event) {
                                ;(_vm.deviceId = item.id),
                                  _vm.openDeleteDialog()
                              }
                            }
                          },
                          [_vm._v("mdi-delete")]
                        )
                      : _vm._e()
                  ]
                }
              }
            ])
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-row",
        { attrs: { justify: "center" } },
        [
          _c(
            "v-dialog",
            {
              attrs: { persistent: "", "max-width": "500" },
              model: {
                value: _vm.editDialog,
                callback: function($$v) {
                  _vm.editDialog = $$v
                },
                expression: "editDialog"
              }
            },
            [
              _c(
                "v-card",
                [
                  _c(
                    "v-card-text",
                    [
                      _c(
                        "v-row",
                        [
                          _c(
                            "v-col",
                            { attrs: { cols: "12", sm: "6", md: "6" } },
                            [
                              _c("v-text-field", {
                                attrs: {
                                  label: "Název zařízení",
                                  rules: _vm.deviceNameRule,
                                  autofocus: "",
                                  required: ""
                                },
                                model: {
                                  value: _vm.editDevice.name,
                                  callback: function($$v) {
                                    _vm.$set(_vm.editDevice, "name", $$v)
                                  },
                                  expression: "editDevice.name"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            { attrs: { cols: "12", sm: "6", md: "6" } },
                            [
                              _c("v-text-field", {
                                attrs: {
                                  label: "IP",
                                  rules: _vm.deviceIpRule,
                                  hint: "IPv4 pro dohled"
                                },
                                model: {
                                  value: _vm.editDevice.ip,
                                  callback: function($$v) {
                                    _vm.$set(_vm.editDevice, "ip", $$v)
                                  },
                                  expression: "editDevice.ip"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            { attrs: { cols: "12", sm: "12" } },
                            [
                              _c("v-autocomplete", {
                                attrs: {
                                  rules: _vm.deviceDohledTypeRule,
                                  items: ["ping", "api"],
                                  label: "typ dohledu zařízení"
                                },
                                model: {
                                  value: _vm.dohledType,
                                  callback: function($$v) {
                                    _vm.dohledType = $$v
                                  },
                                  expression: "dohledType"
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
                              return _vm.closeDialogAndResetImputs()
                            }
                          }
                        },
                        [_vm._v("Zavřít")]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          attrs: {
                            disabled:
                              _vm.editDevice.name === "" ||
                              _vm.editDevice.ip === "",
                            color: "green darken-1",
                            text: ""
                          },
                          on: {
                            click: function($event) {
                              return _vm.saveEditDialog()
                            }
                          }
                        },
                        [_vm._v("Editovat")]
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
      ),
      _vm._v(" "),
      _c(
        "v-row",
        { attrs: { justify: "center" } },
        [
          _c(
            "v-dialog",
            {
              attrs: { persistent: "", "max-width": "500" },
              model: {
                value: _vm.deleteDialog,
                callback: function($$v) {
                  _vm.deleteDialog = $$v
                },
                expression: "deleteDialog"
              }
            },
            [
              _c(
                "v-card",
                [
                  _c("v-card-title", { staticClass: "headline" }, [
                    _vm._v("Smazat zařízení?")
                  ]),
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
                              return _vm.closeDialogAndResetImputs()
                            }
                          }
                        },
                        [_vm._v("Nemazat")]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          attrs: {
                            loading: _vm.loading,
                            color: "green darken-1",
                            text: ""
                          },
                          on: {
                            click: function($event) {
                              return _vm.sendDeleteDialog()
                            }
                          }
                        },
                        [_vm._v("Smazat")]
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

/***/ "./resources/js/components/settings/devices/DeviceComponent.vue":
/*!**********************************************************************!*\
  !*** ./resources/js/components/settings/devices/DeviceComponent.vue ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DeviceComponent_vue_vue_type_template_id_6a4a8fd4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DeviceComponent.vue?vue&type=template&id=6a4a8fd4& */ "./resources/js/components/settings/devices/DeviceComponent.vue?vue&type=template&id=6a4a8fd4&");
/* harmony import */ var _DeviceComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DeviceComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/settings/devices/DeviceComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DeviceComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DeviceComponent_vue_vue_type_template_id_6a4a8fd4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DeviceComponent_vue_vue_type_template_id_6a4a8fd4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/settings/devices/DeviceComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/settings/devices/DeviceComponent.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/settings/devices/DeviceComponent.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DeviceComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./DeviceComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/settings/devices/DeviceComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DeviceComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/settings/devices/DeviceComponent.vue?vue&type=template&id=6a4a8fd4&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/settings/devices/DeviceComponent.vue?vue&type=template&id=6a4a8fd4& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DeviceComponent_vue_vue_type_template_id_6a4a8fd4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./DeviceComponent.vue?vue&type=template&id=6a4a8fd4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/settings/devices/DeviceComponent.vue?vue&type=template&id=6a4a8fd4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DeviceComponent_vue_vue_type_template_id_6a4a8fd4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DeviceComponent_vue_vue_type_template_id_6a4a8fd4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);