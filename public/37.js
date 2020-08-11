(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[37],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/settings/ChannelsComponents/AllChannels.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/settings/ChannelsComponents/AllChannels.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  return __webpack_require__.e(/*! import() */ 32).then(__webpack_require__.bind(null, /*! ../../alerts/AlertComponent */ "./resources/js/components/alerts/AlertComponent.vue"));
};

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      addChannelUrl: false,
      apiChannels: false,
      loadingBtn: false,
      editDialog: false,
      deleteDialog: false,
      alertDialog: false,
      alertData: false,
      api: "",
      dohledVolume: "",
      dohledBitrate: "",
      sendAlert: "",
      start: "",
      end: "",
      dialog: false,
      channelInput: "",
      ffprobeAnalyzedData: "false",
      ffprobeOutput: [],
      dohledovatKanal: true,
      radio: false,
      apis: [],
      headers: [{
        text: "IMG",
        align: "start",
        sortable: false,
        value: "img"
      }, {
        text: "Nazev kanálu",
        value: "nazev"
      }, {
        text: "URL",
        value: "url"
      }, {
        text: "Dokumentace URL",
        value: "dokumentaceUrl"
      }, {
        text: "Externi API",
        value: "api"
      }, {
        text: "Dohled Hlasitosti",
        value: "dohledVolume"
      }, {
        text: "Dohled Bitratu",
        value: "dohledBitrate"
      }, {
        text: "Dohledováno",
        value: "noMonitor"
      }, {
        text: "Zaslání mail Alertů",
        value: "sendAlert"
      }, {
        text: "Vytváření IMG",
        value: "vytvoritNahled"
      }, {
        text: "Status",
        value: "Alert"
      }, {
        text: "Akce",
        value: "actions"
      }],
      channels: [],
      search: "",
      channelId: "",
      status: "",
      createImg: "",
      channelName: "",
      loading: false,
      editdat: [],
      userData: false,
      apiUrl: "",
      channelInputRule: [function (v) {
        return !!v || "vyplňte url požadováného streamu";
      }],
      channelInputAPIRule: [function (v) {
        return !!v || "vyberte kanál, který se má dohledovat";
      }],
      namestreamRule: [function (v) {
        return !!v || "název streamu je požadovaný";
      }],
      interval: false
    };
  },
  components: {
    "alert-component": Alert
  },
  created: function created() {
    this.loadChannels();
    this.loadUserData();
    this.loadChannelApi();
    this.checkIfCanUseDokumentationAPI();
  },
  mounted: function mounted() {
    this.interval = setInterval(function () {
      var currentObj = this;
      axios.get("/api/user/get").then(function (response) {
        currentObj.userData = response.data;
      });
    }.bind(this), 5000);
  },
  methods: {
    checkIfCanUseDokumentationAPI: function checkIfCanUseDokumentationAPI() {
      var _this = this;

      window.axios.get("/api/communication/channels").then(function (response) {
        if (response.data === false) {
          _this.apiChannels = false;
        } else {
          _this.apiChannels = response.data;
        }
      });
    },
    loadChannels: function loadChannels() {
      var _this2 = this;

      window.axios.get("/api/channels").then(function (response) {
        _this2.channels = response.data;
      });
    },
    loadUserData: function loadUserData() {
      var currentObj = this;
      axios.get("/api/user/get").then(function (response) {
        currentObj.userData = response.data;
      });
    },
    loadChannelApi: function loadChannelApi() {
      var currentObj = this;
      window.axios.get("/api/api/channel").then(function (response) {
        currentObj.apis = response.data;
      });
    },
    openAlertDialog: function openAlertDialog() {
      var currentObj = this;
      axios.post("/api/channel/alerting/get", {
        channelId: this.channelId
      }).then(function (response) {
        currentObj.alertData = response.data;
        currentObj.alertDialog = true;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    closeAlertDialog: function closeAlertDialog() {
      this.alertDialog = false;
      this.start = "";
      this.end = "";
      this.alertData = false;
    },
    saveAlertDialog: function saveAlertDialog() {
      var currentObj = this;
      axios.post("/api/channel/alerting/edit", {
        channelId: this.channelId,
        start: this.start,
        end: this.end
      }).then(function (response) {
        currentObj.status = response.data;
        currentObj.alertDialog = false;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    removeAlertDialog: function removeAlertDialog() {
      var currentObj = this;
      axios.post("/api/channel/alerting/remove", {
        channelId: this.channelId
      }).then(function (response) {
        currentObj.status = response.data;
        currentObj.alertDialog = false;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    saveEditDialog: function saveEditDialog() {
      var currentObj = this;
      axios.post("/api/channel/edit", {
        channelId: this.channelId,
        url: this.editdat.url,
        nazev: this.editdat.nazev,
        dohled: this.editdat.dohled,
        apiUrl: this.editdat.dokumentaceUrl,
        api: this.editdat.api,
        dohledVolume: this.editdat.dohledVolume,
        dohledBitrate: this.editdat.dohledBitrate,
        sendAlert: this.editdat.sendAlert,
        createImg: this.editdat.vytvoritNahled
      }).then(function (response) {
        currentObj.status = response.data;
        currentObj.editDialog = false;
        currentObj.channelId = "";
        currentObj.editdat = [];
        currentObj.sendAlert = "";
        currentObj.loadChannels();
      })["catch"](function (error) {
        console.log(error);
      });
    },
    openEditDialog: function openEditDialog() {
      var currentObj = this;
      axios.post("/api/channel/getdata", {
        channelId: this.channelId
      }).then(function (response) {
        currentObj.editdat = response.data;
        currentObj.editDialog = true;
        currentObj.loadChannelApi();
      })["catch"](function (error) {
        console.log(error);
      });
    },
    closeEditDialog: function closeEditDialog() {
      this.editDialog = false;
      this.channelId = "";
    },
    openDeleteDialog: function openDeleteDialog() {
      this.deleteDialog = true;
    },
    sendDeleteDialog: function sendDeleteDialog() {
      var currentObj = this;
      currentObj.loading = true;
      axios.post("/api/channel/delete", {
        channelId: this.channelId
      }).then(function (response) {
        currentObj.status = response.data;
        currentObj.deleteDialog = false;
        currentObj.channelId = "";
        currentObj.loading = false;
        currentObj.loadChannels();
      })["catch"](function (error) {
        console.log(error);
      });
    },
    closeDeleteDialog: function closeDeleteDialog() {
      this.deleteDialog = false;
      this.channelId = "";
    },
    closeDialogAndResetImputs: function closeDialogAndResetImputs() {
      this.dialog = false;
      this.channelInput = "";
      this.ffprobeAnalyzedData = "false", this.dohledovatKanal = true, this.ffprobeOutput = [];
      this.loading = false;
    },
    runFFProbe: function runFFProbe() {
      //  analyzovat stream
      var currentObj = this;
      currentObj.loading = true;
      axios.post("/api/channel/ffprobe", {
        url: this.channelInput
      }).then(function (response) {
        if (response.data["stat"] === "error") {
          currentObj.status = response.data;
          currentObj.loading = false;
        } else {
          currentObj.ffprobeOutput = response.data;
          currentObj.ffprobeAnalyzedData = "true";
          currentObj.loading = false;
        }
      })["catch"](function (error) {
        console.log(error);
      });
    },
    saveNewImput: function saveNewImput() {
      var currentObj = this;
      currentObj.loading = true;
      axios.post("/api/channel/create", {
        url: this.channelInput,
        channelName: this.ffprobeOutput.nazev,
        dohledovat: this.dohledovatKanal,
        radio: this.radio,
        apiUrl: this.apiUrl,
        api: this.api,
        dohledVolume: this.dohledVolume,
        dohledBitrate: this.dohledBitrate,
        sendAlert: this.sendAlert,
        createImg: this.createImg
      }).then(function (response) {
        currentObj.status = response.data;
        currentObj.dialog = false;
        currentObj.channelInput = "";
        currentObj.api = "";
        currentObj.dohledVolume = "";
        currentObj.dohledBitrate = "";
        currentObj.sendAlert = "";
        currentObj.createImg = "";
        currentObj.ffprobeAnalyzedData = "false", currentObj.dohledovatKanal = true, currentObj.ffprobeOutput = [];
        currentObj.loading = false;
        currentObj.loadChannels();
      })["catch"](function (error) {
        console.log(error);
      });
    },
    // Fn pro barevné rozlišení zda je kanal monitorovan -> mdi-check => zelena, jinak mdi-close => red
    getMonitorStatus: function getMonitorStatus(noMonitor) {
      if (noMonitor === "mdi-check") return "green";else return "red";
    },
    getImg: function getImg(img) {
      if (img === "false") {
        return "/storage/noImg.jpg";
      } else {
        return img;
      }
    },
    getAlertColor: function getAlertColor(Alert) {
      if (Alert === "success") return "green--text";else return "red--text";
    }
  },
  watch: {
    status: function status() {
      var _this3 = this;

      setTimeout(function () {
        return _this3.status = false;
      }, 3000);
    }
  },
  beforeDestroy: function beforeDestroy() {
    clearInterval(this.interval);
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/settings/ChannelsComponents/AllChannels.vue?vue&type=template&id=f121040e&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/settings/ChannelsComponents/AllChannels.vue?vue&type=template&id=f121040e& ***!
  \******************************************************************************************************************************************************************************************************************************************/
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
          items: _vm.channels,
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
                                attrs: { persistent: "", "max-width": "500px" },
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
                                            [_vm._v("Nový kanál")]
                                          )
                                        ]
                                      }
                                    }
                                  ],
                                  null,
                                  false,
                                  503385827
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
                                      [_vm._v("Založení nového kanálu")]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "v-card-text",
                                      [
                                        _c(
                                          "v-row",
                                          {
                                            directives: [
                                              {
                                                name: "show",
                                                rawName: "v-show",
                                                value:
                                                  _vm.apiChannels === false ||
                                                  _vm.addChannelUrl != false,
                                                expression:
                                                  "apiChannels === false || addChannelUrl != false"
                                              }
                                            ]
                                          },
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
                                                    rules: _vm.channelInputRule,
                                                    label:
                                                      "Adresa dohledovaného streamu",
                                                    autofocus: "",
                                                    disabled:
                                                      _vm.ffprobeOutput.stat ===
                                                      "success"
                                                  },
                                                  model: {
                                                    value: _vm.channelInput,
                                                    callback: function($$v) {
                                                      _vm.channelInput = $$v
                                                    },
                                                    expression: "channelInput"
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
                                          {
                                            directives: [
                                              {
                                                name: "show",
                                                rawName: "v-show",
                                                value:
                                                  _vm.apiChannels != false ||
                                                  _vm.addChannelUrl === false,
                                                expression:
                                                  "apiChannels != false || addChannelUrl === false"
                                              }
                                            ]
                                          },
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
                                                _c("v-autocomplete", {
                                                  attrs: {
                                                    rules:
                                                      _vm.channelInputAPIRule,
                                                    items: _vm.apiChannels,
                                                    "item-text": "nazev",
                                                    "item-value": "dohledUrl",
                                                    label:
                                                      "Vyberte kanál, který chcete dohledovat"
                                                  },
                                                  model: {
                                                    value: _vm.channelInput,
                                                    callback: function($$v) {
                                                      _vm.channelInput = $$v
                                                    },
                                                    expression: "channelInput"
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
                                          {
                                            directives: [
                                              {
                                                name: "show",
                                                rawName: "v-show",
                                                value:
                                                  _vm.userData.user_role ===
                                                  "admin",
                                                expression:
                                                  "userData.user_role === 'admin'"
                                              }
                                            ]
                                          },
                                          [
                                            _c("v-switch", {
                                              attrs: {
                                                label: "Přidat kanál ručně"
                                              },
                                              model: {
                                                value: _vm.addChannelUrl,
                                                callback: function($$v) {
                                                  _vm.addChannelUrl = $$v
                                                },
                                                expression: "addChannelUrl"
                                              }
                                            })
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _vm.ffprobeOutput.stat === "success"
                                          ? _c(
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
                                                        rules:
                                                          _vm.namestreamRule,
                                                        label: "Popis streamu"
                                                      },
                                                      model: {
                                                        value:
                                                          _vm.ffprobeOutput
                                                            .nazev,
                                                        callback: function(
                                                          $$v
                                                        ) {
                                                          _vm.$set(
                                                            _vm.ffprobeOutput,
                                                            "nazev",
                                                            $$v
                                                          )
                                                        },
                                                        expression:
                                                          "ffprobeOutput.nazev"
                                                      }
                                                    })
                                                  ],
                                                  1
                                                )
                                              ],
                                              1
                                            )
                                          : _vm._e(),
                                        _vm._v(" "),
                                        _vm.ffprobeOutput.stat === "success"
                                          ? _c(
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
                                                        label:
                                                          "Url kanálu z dokumentace"
                                                      },
                                                      model: {
                                                        value: _vm.apiUrl,
                                                        callback: function(
                                                          $$v
                                                        ) {
                                                          _vm.apiUrl = $$v
                                                        },
                                                        expression: "apiUrl"
                                                      }
                                                    })
                                                  ],
                                                  1
                                                )
                                              ],
                                              1
                                            )
                                          : _vm._e(),
                                        _vm._v(" "),
                                        _c(
                                          "v-row",
                                          {
                                            directives: [
                                              {
                                                name: "show",
                                                rawName: "v-show",
                                                value:
                                                  _vm.ffprobeOutput.stat ===
                                                    "success" &&
                                                  _vm.apiUrl != "",
                                                expression:
                                                  "\n                                        ffprobeOutput.stat === 'success' &&\n                                            apiUrl != ''\n                                    "
                                              }
                                            ]
                                          },
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
                                                _c("v-autocomplete", {
                                                  attrs: {
                                                    items: _vm.apis,
                                                    "item-text": "type",
                                                    "item-value": "id",
                                                    label:
                                                      "Připojení na Externí API?"
                                                  },
                                                  model: {
                                                    value: _vm.api,
                                                    callback: function($$v) {
                                                      _vm.api = $$v
                                                    },
                                                    expression: "api"
                                                  }
                                                })
                                              ],
                                              1
                                            )
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _vm.ffprobeOutput.stat === "success"
                                          ? _c(
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
                                                    _c("v-checkbox", {
                                                      attrs: {
                                                        label:
                                                          "Dohledovat stream?"
                                                      },
                                                      model: {
                                                        value:
                                                          _vm.dohledovatKanal,
                                                        callback: function(
                                                          $$v
                                                        ) {
                                                          _vm.dohledovatKanal = $$v
                                                        },
                                                        expression:
                                                          "dohledovatKanal"
                                                      }
                                                    })
                                                  ],
                                                  1
                                                )
                                              ],
                                              1
                                            )
                                          : _vm._e(),
                                        _vm._v(" "),
                                        _vm.ffprobeOutput.stat === "success"
                                          ? _c(
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
                                                    _c("v-checkbox", {
                                                      attrs: {
                                                        label: "Radio?"
                                                      },
                                                      model: {
                                                        value: _vm.radio,
                                                        callback: function(
                                                          $$v
                                                        ) {
                                                          _vm.radio = $$v
                                                        },
                                                        expression: "radio"
                                                      }
                                                    })
                                                  ],
                                                  1
                                                )
                                              ],
                                              1
                                            )
                                          : _vm._e(),
                                        _vm._v(" "),
                                        _c(
                                          "v-row",
                                          {
                                            directives: [
                                              {
                                                name: "show",
                                                rawName: "v-show",
                                                value:
                                                  _vm.ffprobeOutput.stat ===
                                                    "success" &&
                                                  _vm.dohledovatKanal != false,
                                                expression:
                                                  "\n                                        ffprobeOutput.stat === 'success' &&\n                                            dohledovatKanal != false\n                                    "
                                              }
                                            ]
                                          },
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
                                                _c("v-checkbox", {
                                                  attrs: {
                                                    label:
                                                      "Dohledovat hlasitosti"
                                                  },
                                                  model: {
                                                    value: _vm.dohledVolume,
                                                    callback: function($$v) {
                                                      _vm.dohledVolume = $$v
                                                    },
                                                    expression: "dohledVolume"
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
                                          {
                                            directives: [
                                              {
                                                name: "show",
                                                rawName: "v-show",
                                                value:
                                                  _vm.ffprobeOutput.stat ===
                                                    "success" &&
                                                  _vm.dohledovatKanal != false,
                                                expression:
                                                  "\n                                        ffprobeOutput.stat === 'success' &&\n                                            dohledovatKanal != false\n                                    "
                                              }
                                            ]
                                          },
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
                                                _c("v-checkbox", {
                                                  attrs: {
                                                    label:
                                                      "Dohledovat datového toku"
                                                  },
                                                  model: {
                                                    value: _vm.dohledBitrate,
                                                    callback: function($$v) {
                                                      _vm.dohledBitrate = $$v
                                                    },
                                                    expression: "dohledBitrate"
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
                                          {
                                            directives: [
                                              {
                                                name: "show",
                                                rawName: "v-show",
                                                value:
                                                  _vm.ffprobeOutput.stat ===
                                                    "success" &&
                                                  _vm.dohledovatKanal != false,
                                                expression:
                                                  "\n                                        ffprobeOutput.stat === 'success' &&\n                                            dohledovatKanal != false\n                                    "
                                              }
                                            ]
                                          },
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
                                                _c("v-checkbox", {
                                                  attrs: {
                                                    label: "Vytvořit náhled"
                                                  },
                                                  model: {
                                                    value: _vm.createImg,
                                                    callback: function($$v) {
                                                      _vm.createImg = $$v
                                                    },
                                                    expression: "createImg"
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
                                          {
                                            directives: [
                                              {
                                                name: "show",
                                                rawName: "v-show",
                                                value:
                                                  _vm.ffprobeOutput.stat ===
                                                    "success" &&
                                                  _vm.dohledovatKanal != false,
                                                expression:
                                                  "\n                                        ffprobeOutput.stat === 'success' &&\n                                            dohledovatKanal != false\n                                    "
                                              }
                                            ]
                                          },
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
                                                _c("v-checkbox", {
                                                  attrs: {
                                                    label: "Zaslat alert"
                                                  },
                                                  model: {
                                                    value: _vm.sendAlert,
                                                    callback: function($$v) {
                                                      _vm.sendAlert = $$v
                                                    },
                                                    expression: "sendAlert"
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
                                        _vm.ffprobeAnalyzedData === "false" &&
                                        _vm.loading === false
                                          ? _c(
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
                                            )
                                          : _vm._e(),
                                        _vm._v(" "),
                                        _vm.channelInput != "" &&
                                        _vm.ffprobeAnalyzedData === "false"
                                          ? _c(
                                              "v-btn",
                                              {
                                                attrs: {
                                                  loading: _vm.loading,
                                                  color: "green darken-1",
                                                  text: ""
                                                },
                                                on: {
                                                  click: function($event) {
                                                    return _vm.runFFProbe()
                                                  }
                                                }
                                              },
                                              [_vm._v("Analyzovat")]
                                            )
                                          : _vm._e()
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _vm.ffprobeOutput.stat === "success"
                                      ? _c(
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
                                                  disabled:
                                                    _vm.ffprobeOutput.nazev ===
                                                    "",
                                                  color: "green darken-1",
                                                  text: ""
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
                      : _vm._e()
                  ],
                  1
                )
              ]
            },
            proxy: true
          },
          {
            key: "item.img",
            fn: function(ref) {
              var item = ref.item
              return [
                _c("v-img", {
                  attrs: {
                    src: _vm.getImg(item.img),
                    height: "25",
                    width: "25"
                  }
                })
              ]
            }
          },
          {
            key: "item.api",
            fn: function(ref) {
              var item = ref.item
              return [
                item.api != "1"
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
            key: "item.dohledVolume",
            fn: function(ref) {
              var item = ref.item
              return [
                item.dohledVolume != "1"
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
            key: "item.dohledBitrate",
            fn: function(ref) {
              var item = ref.item
              return [
                item.dohledBitrate != "1"
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
            key: "item.sendAlert",
            fn: function(ref) {
              var item = ref.item
              return [
                item.sendAlert != "1"
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
            key: "item.vytvoritNahled",
            fn: function(ref) {
              var item = ref.item
              return [
                item.vytvoritNahled != "1"
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
                _vm.userData.user_role != "náhled"
                  ? _c(
                      "v-icon",
                      {
                        staticClass: "mr-2",
                        attrs: { small: "" },
                        on: {
                          click: function($event) {
                            ;(_vm.channelId = item.id), _vm.openEditDialog()
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
                            ;(_vm.channelId = item.id), _vm.openDeleteDialog()
                          }
                        }
                      },
                      [_vm._v("mdi-delete")]
                    )
                  : _vm._e(),
                _vm._v(" "),
                _vm.userData.user_role != "náhled"
                  ? _c(
                      "v-tooltip",
                      {
                        attrs: { bottom: "" },
                        scopedSlots: _vm._u(
                          [
                            {
                              key: "activator",
                              fn: function(ref) {
                                var on = ref.on
                                return [
                                  _c(
                                    "v-icon",
                                    _vm._g(
                                      {
                                        attrs: { small: "", color: "primary" },
                                        on: {
                                          click: function($event) {
                                            ;(_vm.channelId = item.id),
                                              _vm.openAlertDialog()
                                          }
                                        }
                                      },
                                      on
                                    ),
                                    [_vm._v("mdi-bell-ring")]
                                  )
                                ]
                              }
                            }
                          ],
                          null,
                          true
                        )
                      },
                      [_vm._v(" "), _c("span", [_vm._v("Alerting")])]
                    )
                  : _vm._e(),
                _vm._v(" "),
                _c(
                  "router-link",
                  {
                    attrs: {
                      to: "channels/" + item.id + "/charts",
                      target: "_blank"
                    }
                  },
                  [
                    _c("v-icon", { attrs: { small: "", color: "teal" } }, [
                      _vm._v("mdi-chart-line")
                    ])
                  ],
                  1
                )
              ]
            }
          },
          {
            key: "item.noMonitor",
            fn: function(ref) {
              var item = ref.item
              return [
                _c(
                  "v-icon",
                  {
                    attrs: {
                      color: _vm.getMonitorStatus(item.noMonitor),
                      dark: ""
                    }
                  },
                  [_vm._v(_vm._s(item.noMonitor))]
                )
              ]
            }
          },
          {
            key: "item.Alert",
            fn: function(ref) {
              var item = ref.item
              return [
                _c(
                  "a",
                  { class: _vm.getAlertColor(item.Alert), attrs: { dark: "" } },
                  [_vm._v(_vm._s(item.Alert))]
                )
              ]
            }
          }
        ])
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
                    _vm._v("Smazat kanal?")
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
                              return _vm.closeDeleteDialog()
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
                            { attrs: { cols: "12", sm: "12", md: "12" } },
                            [
                              _c("v-text-field", {
                                attrs: {
                                  label: "Adresa dohledovaného streamu",
                                  readonly: "",
                                  disabled: ""
                                },
                                model: {
                                  value: _vm.editdat.url,
                                  callback: function($$v) {
                                    _vm.$set(_vm.editdat, "url", $$v)
                                  },
                                  expression: "editdat.url"
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
                            { attrs: { cols: "12", sm: "12", md: "12" } },
                            [
                              _c("v-text-field", {
                                attrs: {
                                  rules: _vm.namestreamRule,
                                  label: "Popis dohledovaného streamu"
                                },
                                model: {
                                  value: _vm.editdat.nazev,
                                  callback: function($$v) {
                                    _vm.$set(_vm.editdat, "nazev", $$v)
                                  },
                                  expression: "editdat.nazev"
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
                            { attrs: { cols: "12", sm: "12", md: "12" } },
                            [
                              _c("v-text-field", {
                                attrs: { label: "Url kanálu z dokumentace" },
                                model: {
                                  value: _vm.editdat.dokumentaceUrl,
                                  callback: function($$v) {
                                    _vm.$set(_vm.editdat, "dokumentaceUrl", $$v)
                                  },
                                  expression: "editdat.dokumentaceUrl"
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
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.editdat.dokumentaceUrl != null,
                              expression: "editdat.dokumentaceUrl != null"
                            }
                          ]
                        },
                        [
                          _c(
                            "v-col",
                            { attrs: { cols: "12", sm: "12", md: "12" } },
                            [
                              _c("v-autocomplete", {
                                attrs: {
                                  items: _vm.apis,
                                  "item-text": "type",
                                  "item-value": "id",
                                  label: "Připojení na Externí API?"
                                },
                                model: {
                                  value: _vm.editdat.api,
                                  callback: function($$v) {
                                    _vm.$set(_vm.editdat, "api", $$v)
                                  },
                                  expression: "editdat.api"
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
                            { attrs: { cols: "12", sm: "12", md: "12" } },
                            [
                              _c("v-checkbox", {
                                attrs: { label: "Dohledovat stream?" },
                                model: {
                                  value: _vm.editdat.dohled,
                                  callback: function($$v) {
                                    _vm.$set(_vm.editdat, "dohled", $$v)
                                  },
                                  expression: "editdat.dohled"
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
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.editdat.dohled != false,
                              expression: "editdat.dohled != false"
                            }
                          ]
                        },
                        [
                          _c(
                            "v-col",
                            { attrs: { cols: "12", sm: "12", md: "12" } },
                            [
                              _c("v-checkbox", {
                                attrs: { label: "Dohledovat hlasitosti" },
                                model: {
                                  value: _vm.editdat.dohledVolume,
                                  callback: function($$v) {
                                    _vm.$set(_vm.editdat, "dohledVolume", $$v)
                                  },
                                  expression: "editdat.dohledVolume"
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
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.editdat.dohled != false,
                              expression: "editdat.dohled != false"
                            }
                          ]
                        },
                        [
                          _c(
                            "v-col",
                            { attrs: { cols: "12", sm: "12", md: "12" } },
                            [
                              _c("v-checkbox", {
                                attrs: { label: "Dohled datového toku" },
                                model: {
                                  value: _vm.editdat.dohledBitrate,
                                  callback: function($$v) {
                                    _vm.$set(_vm.editdat, "dohledBitrate", $$v)
                                  },
                                  expression: "editdat.dohledBitrate"
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
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.editdat.vytvoritNahled != false,
                              expression: "editdat.vytvoritNahled != false"
                            }
                          ]
                        },
                        [
                          _c(
                            "v-col",
                            { attrs: { cols: "12", sm: "12", md: "12" } },
                            [
                              _c("v-checkbox", {
                                attrs: { label: "Vytvořit náhled" },
                                model: {
                                  value: _vm.editdat.vytvoritNahled,
                                  callback: function($$v) {
                                    _vm.$set(_vm.editdat, "vytvoritNahled", $$v)
                                  },
                                  expression: "editdat.vytvoritNahled"
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
                              return _vm.closeEditDialog()
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
                            disabled: _vm.editdat.nazev === "",
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
              attrs: { persistent: "", width: "1000" },
              model: {
                value: _vm.alertDialog,
                callback: function($$v) {
                  _vm.alertDialog = $$v
                },
                expression: "alertDialog"
              }
            },
            [
              _c(
                "v-card",
                [
                  _c("v-card-title", { staticClass: "headline" }, [
                    _vm._v("Nastavení, kdy kanál má posílat Alerting")
                  ]),
                  _vm._v(" "),
                  _c(
                    "v-card-text",
                    [
                      _vm.alertData != false
                        ? _c("v-row", [
                            _c("span", { staticClass: "red--text" }, [
                              _c("strong", [
                                _vm._v(
                                  "Aktualně nastavené pravidlo je nastaveno:\n                                od " +
                                    _vm._s(_vm.alertData.start_dohled) +
                                    " do\n                                " +
                                    _vm._s(_vm.alertData.end_dohled)
                                )
                              ])
                            ])
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _c(
                        "v-row",
                        { staticClass: "mt-2" },
                        [
                          _c(
                            "v-row",
                            [
                              _c("span", [
                                _vm._v("Začatek platnosti pravidla")
                              ]),
                              _vm._v(" "),
                              _c("v-time-picker", {
                                attrs: { format: "24hr" },
                                model: {
                                  value: _vm.start,
                                  callback: function($$v) {
                                    _vm.start = $$v
                                  },
                                  expression: "start"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-row",
                            [
                              _c("span", [_vm._v("Konec platnosti pravidla")]),
                              _vm._v(" "),
                              _c("v-time-picker", {
                                attrs: { format: "24hr" },
                                model: {
                                  value: _vm.end,
                                  callback: function($$v) {
                                    _vm.end = $$v
                                  },
                                  expression: "end"
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
                              return _vm.closeAlertDialog()
                            }
                          }
                        },
                        [_vm._v("Zavřít")]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          attrs: { color: "blue darken-1", text: "" },
                          on: {
                            click: function($event) {
                              return _vm.removeAlertDialog()
                            }
                          }
                        },
                        [_vm._v("Odebrat Stávající pravidlo")]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          attrs: { color: "green darken-1", text: "" },
                          on: {
                            click: function($event) {
                              return _vm.saveAlertDialog()
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
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/settings/ChannelsComponents/AllChannels.vue":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/settings/ChannelsComponents/AllChannels.vue ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AllChannels_vue_vue_type_template_id_f121040e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AllChannels.vue?vue&type=template&id=f121040e& */ "./resources/js/components/settings/ChannelsComponents/AllChannels.vue?vue&type=template&id=f121040e&");
/* harmony import */ var _AllChannels_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AllChannels.vue?vue&type=script&lang=js& */ "./resources/js/components/settings/ChannelsComponents/AllChannels.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AllChannels_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AllChannels_vue_vue_type_template_id_f121040e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AllChannels_vue_vue_type_template_id_f121040e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/settings/ChannelsComponents/AllChannels.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/settings/ChannelsComponents/AllChannels.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/settings/ChannelsComponents/AllChannels.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AllChannels_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AllChannels.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/settings/ChannelsComponents/AllChannels.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AllChannels_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/settings/ChannelsComponents/AllChannels.vue?vue&type=template&id=f121040e&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/components/settings/ChannelsComponents/AllChannels.vue?vue&type=template&id=f121040e& ***!
  \************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AllChannels_vue_vue_type_template_id_f121040e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AllChannels.vue?vue&type=template&id=f121040e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/settings/ChannelsComponents/AllChannels.vue?vue&type=template&id=f121040e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AllChannels_vue_vue_type_template_id_f121040e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AllChannels_vue_vue_type_template_id_f121040e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);