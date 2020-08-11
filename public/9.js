(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/settings/UsersComponent.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/settings/UsersComponent.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var Alert = function Alert() {
  return __webpack_require__.e(/*! import() */ 32).then(__webpack_require__.bind(null, /*! ../alerts/AlertComponent */ "./resources/js/components/alerts/AlertComponent.vue"));
};

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      editDialog: false,
      deleteDialog: false,
      dialog: false,
      removeAPI: false,
      createAPI: false,
      userId: "",
      user: "",
      users: [],
      headers: [{
        text: "Jméno",
        align: "start",
        value: "name"
      }, {
        text: "Příjmení",
        value: "surname"
      }, {
        text: "email",
        value: "email"
      }, {
        text: "pagination",
        value: "pagination"
      }, {
        text: "dense",
        value: "dense"
      }, {
        text: "mozaikaAlphaBet",
        value: "mozaikaAlphaBet"
      }, {
        text: "API přístup",
        value: "apiKey"
      }, {
        text: "Uživatelská role ",
        value: "user_role"
      }, {
        text: "Akce",
        value: "actions"
      }],
      userRoles: ["admin", "editor", "náhled"],
      value: "editor",
      name: "",
      surname: "",
      email: "",
      password: "",
      search: "",
      edit: [],
      status: "",
      userData: false,
      nameRule: [function (v) {
        return !!v || "jméno je požadováno";
      }],
      surnameRule: [function (v) {
        return !!v || "příjmení je požadováno";
      }],
      mailRule: [function (v) {
        return !!v || "email je požadován";
      }],
      passwordRule: [function (v) {
        return !!v || "heslo je požadováno";
      }],
      userroleRule: [function (v) {
        return !!v || "vyberte uživatelské oprávnění";
      }],
      interval: false
    };
  },
  components: {
    "alert-component": Alert
  },
  created: function created() {
    var _this = this;

    // Informace, zda jsou nefunknčí streamy
    window.axios.get("/api/users/get").then(function (response) {
      _this.users = response.data;
    });
    var currentObj = this;
    axios.get("/api/user/get").then(function (response) {
      currentObj.userData = response.data;
    });
  },
  mounted: function mounted() {
    this.interval = setInterval(function () {
      var currentObj = this;
      axios.get("/api/user/get").then(function (response) {
        currentObj.userData = response.data;
      });
    }.bind(this), 10000);
  },
  methods: {
    closeDialog: function closeDialog() {
      this.name = "";
      this.surname = "";
      this.email = "";
      this.password = "";
      this.dialog = false;
      this.edit = [];
      this.editDialog = false;
    },
    saveNewUser: function saveNewUser() {
      var currentObj = this;
      axios.post("/api/user/create", {
        name: this.name,
        surname: this.surname,
        password: this.password,
        email: this.email,
        userRole: this.value
      }).then(function (response) {
        currentObj.status = response.data;

        if (currentObj.status.stat === "success") {
          currentObj.name = "";
          currentObj.surname = "";
          currentObj.email = "";
          currentObj.password = "";
          currentObj.dialog = false;
          window.axios.get("/api/users/get").then(function (response) {
            currentObj.users = response.data;
          });
        }
      })["catch"](function (error) {
        console.log(error);
      });
    },
    getUserData: function getUserData() {
      var currentObj = this;
      axios.post("/api/user/getUserdata", {
        userId: this.userId
      }).then(function (response) {
        currentObj.edit = response.data;
        currentObj.editDialog = true;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    saveEditDialog: function saveEditDialog() {
      var currentObj = this;
      axios.post("/api/user/settings/edit", {
        userId: this.userId,
        name: this.edit.name,
        surname: this.edit.surname,
        password: this.password,
        email: this.edit.email,
        userRole: this.value,
        removeAPI: this.removeAPI,
        createAPI: this.createAPI
      }).then(function (response) {
        currentObj.status = response.data;

        if (currentObj.status.stat === "success") {
          currentObj.edit = [];
          currentObj.editDialog = false;
          window.axios.get("/api/users/get").then(function (response) {
            currentObj.users = response.data;
          });
        }
      })["catch"](function (error) {
        console.log(error);
      });
    },
    remove: function remove() {
      var currentObj = this;
      axios.post("/api/user/remove", {
        userId: this.userId
      }).then(function (response) {
        currentObj.status = response.data;

        if (currentObj.status.stat === "success") {
          currentObj.userId = "";
          window.axios.get("/api/users/get").then(function (response) {
            currentObj.users = response.data;
          });
        }
      })["catch"](function (error) {
        console.log(error);
      });
    }
  },
  watch: {
    status: function status() {
      var _this2 = this;

      setTimeout(function () {
        return _this2.status = false;
      }, 3000);
    }
  },
  beforeDestroy: function beforeDestroy() {
    clearInterval(this.interval);
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/settings/UsersComponent.vue?vue&type=template&id=4705ce66&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/settings/UsersComponent.vue?vue&type=template&id=4705ce66& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _c("br"),
    _vm._v(" "),
    _vm.userData.user_role == "admin"
      ? _c("div", [
          _c("div", { staticClass: "body-2 mr-lg-12" }, [
            _c(
              "div",
              { staticClass: "body-2" },
              [
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
                _c("v-data-table", {
                  staticClass: "elevation-1",
                  attrs: {
                    dense: _vm.userData.dense,
                    headers: _vm.headers,
                    items: _vm.users,
                    search: _vm.search
                  },
                  scopedSlots: _vm._u(
                    [
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
                                                [_vm._v("Nový uživatel")]
                                              )
                                            ]
                                          }
                                        }
                                      ],
                                      null,
                                      false,
                                      2270467778
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
                                          [
                                            _vm._v(
                                              "Založení nového\n                                        uživatele"
                                            )
                                          ]
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
                                                      cols: "6",
                                                      sm: "6",
                                                      md: "6"
                                                    }
                                                  },
                                                  [
                                                    _c("v-text-field", {
                                                      attrs: {
                                                        rules: _vm.nameRule,
                                                        label: "Jméno",
                                                        required: "",
                                                        autofocus: ""
                                                      },
                                                      model: {
                                                        value: _vm.name,
                                                        callback: function(
                                                          $$v
                                                        ) {
                                                          _vm.name = $$v
                                                        },
                                                        expression: "name"
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
                                                      cols: "6",
                                                      sm: "6",
                                                      md: "6"
                                                    }
                                                  },
                                                  [
                                                    _c("v-text-field", {
                                                      attrs: {
                                                        rules: _vm.surnameRule,
                                                        label: "Příjmení",
                                                        required: ""
                                                      },
                                                      model: {
                                                        value: _vm.surname,
                                                        callback: function(
                                                          $$v
                                                        ) {
                                                          _vm.surname = $$v
                                                        },
                                                        expression: "surname"
                                                      }
                                                    })
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
                                                _c(
                                                  "v-col",
                                                  {
                                                    attrs: {
                                                      cols: "12",
                                                      sm: "12",
                                                      md: "12"
                                                    }
                                                  },
                                                  [
                                                    _c("v-text-field", {
                                                      attrs: {
                                                        rules: _vm.mailRule,
                                                        label:
                                                          "e-mailova adresa",
                                                        required: ""
                                                      },
                                                      model: {
                                                        value: _vm.email,
                                                        callback: function(
                                                          $$v
                                                        ) {
                                                          _vm.email = $$v
                                                        },
                                                        expression: "email"
                                                      }
                                                    })
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
                                                _c(
                                                  "v-col",
                                                  {
                                                    attrs: {
                                                      cols: "12",
                                                      sm: "12",
                                                      md: "12"
                                                    }
                                                  },
                                                  [
                                                    _c("v-text-field", {
                                                      attrs: {
                                                        type: "password",
                                                        rules: _vm.passwordRule,
                                                        label: "Heslo",
                                                        required: ""
                                                      },
                                                      model: {
                                                        value: _vm.password,
                                                        callback: function(
                                                          $$v
                                                        ) {
                                                          _vm.password = $$v
                                                        },
                                                        expression: "password"
                                                      }
                                                    })
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
                                                _c(
                                                  "v-col",
                                                  {
                                                    staticClass: "d-flex",
                                                    attrs: {
                                                      cols: "8",
                                                      sm: "12"
                                                    }
                                                  },
                                                  [
                                                    _c("v-select", {
                                                      attrs: {
                                                        items: _vm.userRoles,
                                                        rules: _vm.userroleRule,
                                                        label: "Práva",
                                                        dense: "",
                                                        required: ""
                                                      },
                                                      model: {
                                                        value: _vm.value,
                                                        callback: function(
                                                          $$v
                                                        ) {
                                                          _vm.value = $$v
                                                        },
                                                        expression: "value"
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
                                                    return _vm.closeDialog()
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
                                                    _vm.name === "" ||
                                                    _vm.surname === "" ||
                                                    _vm.email === "" ||
                                                    _vm.password === "" ||
                                                    _vm.value === "",
                                                  color: "green darken-1",
                                                  text: ""
                                                },
                                                on: {
                                                  click: function($event) {
                                                    return _vm.saveNewUser()
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
                          ]
                        },
                        proxy: true
                      },
                      {
                        key: "item.dense",
                        fn: function(ref) {
                          var item = ref.item
                          return [
                            item.dense != "true"
                              ? _c("v-icon", { attrs: { color: "red" } }, [
                                  _vm._v("mdi-close")
                                ])
                              : _c("v-icon", { attrs: { color: "green" } }, [
                                  _vm._v("mdi-check")
                                ])
                          ]
                        }
                      },
                      {
                        key: "item.mozaikaAlphaBet",
                        fn: function(ref) {
                          var item = ref.item
                          return [
                            item.mozaikaAlphaBet != "true"
                              ? _c("v-icon", { attrs: { color: "red" } }, [
                                  _vm._v("mdi-close")
                                ])
                              : _c("v-icon", { attrs: { color: "green" } }, [
                                  _vm._v("mdi-check")
                                ])
                          ]
                        }
                      },
                      {
                        key: "item.apiKey",
                        fn: function(ref) {
                          var item = ref.item
                          return [
                            item.apiKey != true
                              ? _c("v-icon", { attrs: { color: "red" } }, [
                                  _vm._v("mdi-close")
                                ])
                              : _c("v-icon", { attrs: { color: "green" } }, [
                                  _vm._v("mdi-check")
                                ])
                          ]
                        }
                      },
                      {
                        key: "item.actions",
                        fn: function(ref) {
                          var item = ref.item
                          return [
                            _c(
                              "v-icon",
                              {
                                staticClass: "mr-2",
                                attrs: { small: "" },
                                on: {
                                  click: function($event) {
                                    ;(_vm.userId = item.id), _vm.getUserData()
                                  }
                                }
                              },
                              [_vm._v("mdi-pencil")]
                            ),
                            _vm._v(" "),
                            _c(
                              "v-icon",
                              {
                                attrs: { small: "", color: "red" },
                                on: {
                                  click: function($event) {
                                    ;(_vm.userId = item.id), _vm.remove()
                                  }
                                }
                              },
                              [_vm._v("mdi-delete")]
                            )
                          ]
                        }
                      }
                    ],
                    null,
                    false,
                    741391780
                  )
                }),
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
                                      {
                                        attrs: { cols: "6", sm: "6", md: "6" }
                                      },
                                      [
                                        _c("v-text-field", {
                                          attrs: {
                                            label: "Jméno",
                                            required: "",
                                            autofocus: ""
                                          },
                                          model: {
                                            value: _vm.edit.name,
                                            callback: function($$v) {
                                              _vm.$set(_vm.edit, "name", $$v)
                                            },
                                            expression: "edit.name"
                                          }
                                        })
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "v-col",
                                      {
                                        attrs: { cols: "6", sm: "6", md: "6" }
                                      },
                                      [
                                        _c("v-text-field", {
                                          attrs: {
                                            label: "Příjmení",
                                            required: ""
                                          },
                                          model: {
                                            value: _vm.edit.surname,
                                            callback: function($$v) {
                                              _vm.$set(_vm.edit, "surname", $$v)
                                            },
                                            expression: "edit.surname"
                                          }
                                        })
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
                                    _c(
                                      "v-col",
                                      {
                                        attrs: {
                                          cols: "12",
                                          sm: "12",
                                          md: "12"
                                        }
                                      },
                                      [
                                        _c("v-text-field", {
                                          attrs: {
                                            label: "e-mailova adresa",
                                            required: ""
                                          },
                                          model: {
                                            value: _vm.edit.email,
                                            callback: function($$v) {
                                              _vm.$set(_vm.edit, "email", $$v)
                                            },
                                            expression: "edit.email"
                                          }
                                        })
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
                                    _c(
                                      "v-col",
                                      {
                                        attrs: {
                                          cols: "12",
                                          sm: "12",
                                          md: "12"
                                        }
                                      },
                                      [
                                        _c("v-text-field", {
                                          attrs: {
                                            type: "password",
                                            label: "Heslo"
                                          },
                                          model: {
                                            value: _vm.password,
                                            callback: function($$v) {
                                              _vm.password = $$v
                                            },
                                            expression: "password"
                                          }
                                        })
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
                                    _c(
                                      "v-col",
                                      {
                                        staticClass: "d-flex",
                                        attrs: { cols: "8", sm: "12" }
                                      },
                                      [
                                        _c("v-select", {
                                          attrs: {
                                            items: _vm.userRoles,
                                            label: "Práva",
                                            dense: "",
                                            required: ""
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
                                    )
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _vm.edit.apiKey === true
                                  ? _c(
                                      "v-row",
                                      [
                                        _c("v-checkbox", {
                                          attrs: {
                                            label: "odebrání API klíče"
                                          },
                                          model: {
                                            value: _vm.removeAPI,
                                            callback: function($$v) {
                                              _vm.removeAPI = $$v
                                            },
                                            expression: "removeAPI"
                                          }
                                        })
                                      ],
                                      1
                                    )
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.edit.apiKey != true
                                  ? _c(
                                      "v-row",
                                      [
                                        _c("v-checkbox", {
                                          attrs: {
                                            label: "založení API klíče"
                                          },
                                          model: {
                                            value: _vm.createAPI,
                                            callback: function($$v) {
                                              _vm.createAPI = $$v
                                            },
                                            expression: "createAPI"
                                          }
                                        })
                                      ],
                                      1
                                    )
                                  : _vm._e()
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
                                        return _vm.closeDialog()
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
                )
              ],
              1
            )
          ])
        ])
      : _vm.userData.user_role == "editor" || _vm.userData.user_role == "náhled"
      ? _c(
          "div",
          [
            _c("v-alert", { staticClass: "body-2", attrs: { type: "error" } }, [
              _vm._v("Nemáte přístup do této sekce")
            ])
          ],
          1
        )
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/settings/UsersComponent.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/settings/UsersComponent.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UsersComponent_vue_vue_type_template_id_4705ce66___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UsersComponent.vue?vue&type=template&id=4705ce66& */ "./resources/js/components/settings/UsersComponent.vue?vue&type=template&id=4705ce66&");
/* harmony import */ var _UsersComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UsersComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/settings/UsersComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UsersComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UsersComponent_vue_vue_type_template_id_4705ce66___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UsersComponent_vue_vue_type_template_id_4705ce66___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/settings/UsersComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/settings/UsersComponent.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/settings/UsersComponent.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UsersComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./UsersComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/settings/UsersComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UsersComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/settings/UsersComponent.vue?vue&type=template&id=4705ce66&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/settings/UsersComponent.vue?vue&type=template&id=4705ce66& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UsersComponent_vue_vue_type_template_id_4705ce66___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./UsersComponent.vue?vue&type=template&id=4705ce66& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/settings/UsersComponent.vue?vue&type=template&id=4705ce66&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UsersComponent_vue_vue_type_template_id_4705ce66___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UsersComponent_vue_vue_type_template_id_4705ce66___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);