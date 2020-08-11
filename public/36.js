(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[36],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Mozaika/UserCustomMozaika.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Mozaika/UserCustomMozaika.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var ImgComponent = function ImgComponent() {
  return __webpack_require__.e(/*! import() */ 18).then(__webpack_require__.bind(null, /*! ./channelDetail/ImgComponent */ "./resources/js/components/Mozaika/channelDetail/ImgComponent.vue"));
};

var FFProbeComponent = function FFProbeComponent() {
  return __webpack_require__.e(/*! import() */ 19).then(__webpack_require__.bind(null, /*! ./channelDetail/ChannelDetailTreeFFprobe */ "./resources/js/components/Mozaika/channelDetail/ChannelDetailTreeFFprobe.vue"));
};

var BitrateComponent = function BitrateComponent() {
  return __webpack_require__.e(/*! import() */ 20).then(__webpack_require__.bind(null, /*! ./channelDetail/ChannelNameWithBitrate */ "./resources/js/components/Mozaika/channelDetail/ChannelNameWithBitrate.vue"));
};

var crashedStreams = function crashedStreams() {
  return __webpack_require__.e(/*! import() */ 16).then(__webpack_require__.bind(null, /*! ./channelDetail/AlertChannelComponent */ "./resources/js/components/Mozaika/channelDetail/AlertChannelComponent.vue"));
};

var ChartComponent = function ChartComponent() {
  return __webpack_require__.e(/*! import() */ 23).then(__webpack_require__.bind(null, /*! ./channelDetail/ChannelDetailCharts */ "./resources/js/components/Mozaika/channelDetail/ChannelDetailCharts.vue"));
};

var ApiDokumentaceComponent = function ApiDokumentaceComponent() {
  return __webpack_require__.e(/*! import() */ 17).then(__webpack_require__.bind(null, /*! ./channelDetail/ApiDokumentaceComponent */ "./resources/js/components/Mozaika/channelDetail/ApiDokumentaceComponent.vue"));
};

var NoteComponent = function NoteComponent() {
  return __webpack_require__.e(/*! import() */ 21).then(__webpack_require__.bind(null, /*! ./channelDetail/NoteComponent */ "./resources/js/components/Mozaika/channelDetail/NoteComponent.vue"));
};

/* harmony default export */ __webpack_exports__["default"] = (_defineProperty({
  data: function data() {
    return {
      staticStreams: [],
      contextMenu: "prehled",
      color: "",
      colorPrehled: "teal",
      colorFfprobe: "",
      colorNote: "",
      colorGrafs: "",
      colorApi: "",
      channelId: "",
      channelName: "",
      urlDokumentace: "",
      url: "",
      urlData: "",
      detailInfo: "",
      channelInfo: false,
      channelApi: "",
      problems: "",
      crashed: "",
      page: 1,
      allStreams: "",
      streams: [],
      pagination: {
        current: 1,
        total: 0
      },
      interval: false,
      crashInterval: false,
      paginationInterval: false,
      problemInterval: false,
      detailInterval: false,
      items: [],
      crashedStreams: [],
      userData: ""
    };
  },
  created: function created() {
    this.loadStaticStreams();
    this.getStreams();
  },
  components: {
    "img-component": ImgComponent,
    "channelBitrate-component": BitrateComponent,
    "ffprobeTree-component": FFProbeComponent,
    "crashed-streams": crashedStreams,
    "chart-component": ChartComponent,
    "apidokumentace-component": ApiDokumentaceComponent,
    "note-component": NoteComponent
  },
  methods: {
    loadStaticStreams: function loadStaticStreams() {
      var _this = this;

      window.axios.get("/api/user/mozaika/custom/req").then(function (response) {
        _this.staticStreams = response.data;
      });
    },
    channelInfoFunction: function channelInfoFunction() {
      var currentObj = this;
      currentObj.channelInfo = true;
    },
    disableChannelInfoFunction: function disableChannelInfoFunction() {
      var currentObj = this;
      currentObj.channelInfo = false;
      currentObj.channelName = "";
      currentObj.channelId = "";
      currentObj.contextMenu = "prehled";
    },
    getStreams: function getStreams() {
      var _this2 = this;

      window.axios.get("/api/channels/pagination?page=" + this.pagination.current).then(function (response) {
        _this2.streams = response.data.data;
        _this2.pagination.current = response.data.current_page;
        _this2.pagination.total = response.data.last_page;
      });
    },
    onPageChange: function onPageChange() {
      this.getStreams();
    }
  },
  mounted: function mounted() {
    this.interval = setInterval(function () {
      this.loadStaticStreams();
      this.getStreams();
    }.bind(this), 10000);
    this.paginationInterval = setInterval(function () {
      if (this.pagination.current <= this.pagination.total - 1) {
        this.pagination.current = this.pagination.current + 1;
        this.getStreams();
      } else {
        this.pagination.current = 1;
        this.getStreams();
      }
    }.bind(this), 30000);
  },
  watch: {
    // Presmerování na login pokud neni prihlasen uzivatel
    channelId: function channelId() {
      if (this.channelId != "") {
        if (this.channelId != "") {
          var currentObj = this;
          axios.post("/api/channel/ffprobeGet", {
            id: this.channelId
          }).then(function (response) {
            currentObj.items = response.data;
          })["catch"](function (error) {
            console.log("chyba" + error);
          });
        }
      }
    },
    bitrate: function bitrate() {
      if (this.bitrate.bit_rate) {
        this.speed = this.bitrate.bit_rate / 10000;
      }
    },
    contextMenu: function contextMenu() {
      if (this.contextMenu === "prehled") {
        this.colorPrehled = "teal", this.colorFfprobe = "", this.colorGrafs = "";
        this.colorApi = "";
        this.colorNote = "";
      } else if (this.contextMenu === "ffprobe") {
        this.colorPrehled = "", this.colorFfprobe = "teal", this.colorGrafs = "";
        this.colorApi = "";
        this.colorNote = "";
      } else if (this.contextMenu === "grafy") {
        this.colorPrehled = "", this.colorFfprobe = "", this.colorGrafs = "teal";
        this.colorApi = "";
        this.colorNote = "";
      } else if (this.contextMenu === "api") {
        this.colorPrehled = "", this.colorFfprobe = "", this.colorGrafs = "";
        this.colorNote = "";
        this.colorApi = "teal";
      } else if (this.contextMenu === "notes") {
        this.colorPrehled = "", this.colorFfprobe = "", this.colorGrafs = "";
        this.colorApi = "";
        this.colorNote = "teal";
      }
    }
  },
  beforeDestroy: function beforeDestroy() {
    clearInterval(this.interval);
  }
}, "beforeDestroy", function beforeDestroy() {
  clearInterval(this.paginationInterval);
}));

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Mozaika/UserCustomMozaika.vue?vue&type=template&id=cd622fb4&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Mozaika/UserCustomMozaika.vue?vue&type=template&id=cd622fb4& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "body-1" },
    [
      _c("crashed-streams", {
        staticClass: "mt-12",
        attrs: { transition: "scroll-y-transition" }
      }),
      _vm._v(" "),
      _c(
        "v-container",
        { staticClass: "ml-12", attrs: { fluid: "" } },
        [
          _c(
            "v-row",
            { staticClass: "mx-auto mt-1 ma-1 mr-1" },
            _vm._l(_vm.staticStreams, function(staticStream) {
              return _c(
                "div",
                { key: staticStream.id },
                [
                  _c("v-tooltip", {
                    attrs: { bottom: "" },
                    scopedSlots: _vm._u(
                      [
                        {
                          key: "activator",
                          fn: function(ref) {
                            var on = ref.on
                            return [
                              staticStream.Alert === "error"
                                ? _c(
                                    "v-card",
                                    {
                                      staticClass: "mx-auto ma-0",
                                      attrs: {
                                        flat: "",
                                        color: "red",
                                        width: "260"
                                      },
                                      on: {
                                        click: function($event) {
                                          _vm.channelInfoFunction(),
                                            (_vm.channelId = staticStream.id),
                                            (_vm.channelName =
                                              staticStream.nazev),
                                            (_vm.channelApi = staticStream.api),
                                            (_vm.urlDokumentace =
                                              staticStream.dokumentaceUrl)
                                        }
                                      }
                                    },
                                    [
                                      _c(
                                        "v-list-item",
                                        [
                                          _c(
                                            "v-list-item-content",
                                            _vm._g(
                                              { staticClass: "text-center" },
                                              on
                                            ),
                                            [
                                              _c("v-list-item-title", [
                                                _vm._v(
                                                  _vm._s(staticStream.nazev)
                                                )
                                              ]),
                                              _vm._v(" "),
                                              _c(
                                                "v-btn",
                                                {
                                                  attrs: {
                                                    color: "black",
                                                    height: "140",
                                                    width: "140"
                                                  }
                                                },
                                                [
                                                  _c(
                                                    "v-img",
                                                    {
                                                      attrs: {
                                                        height: "140",
                                                        alt: staticStream.nazev
                                                      }
                                                    },
                                                    [
                                                      _c(
                                                        "v-icon",
                                                        {
                                                          staticClass: "mt-8",
                                                          attrs: {
                                                            color: "red",
                                                            large: ""
                                                          }
                                                        },
                                                        [
                                                          _vm._v(
                                                            "\n                                                mdi-television-off\n                                            "
                                                          )
                                                        ]
                                                      )
                                                    ],
                                                    1
                                                  )
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c("v-list-item-subtitle")
                                            ],
                                            1
                                          )
                                        ],
                                        1
                                      )
                                    ],
                                    1
                                  )
                                : _c(
                                    "v-card",
                                    {
                                      staticClass: "mx-auto ma-1 mr-1",
                                      attrs: {
                                        flat: "",
                                        color: "transparent",
                                        width: "260"
                                      },
                                      on: {
                                        click: function($event) {
                                          _vm.channelInfoFunction(),
                                            (_vm.channelId = staticStream.id),
                                            (_vm.channelName =
                                              staticStream.nazev),
                                            (_vm.channelApi = staticStream.api),
                                            (_vm.urlDokumentace =
                                              staticStream.dokumentaceUrl)
                                        }
                                      }
                                    },
                                    [
                                      _c(
                                        "v-list-item",
                                        [
                                          _c(
                                            "v-list-item-content",
                                            _vm._g(
                                              { staticClass: "text-center" },
                                              on
                                            ),
                                            [
                                              _c("v-list-item-title", [
                                                _vm._v(
                                                  _vm._s(staticStream.nazev)
                                                )
                                              ]),
                                              _vm._v(" "),
                                              _c(
                                                "v-btn",
                                                {
                                                  attrs: {
                                                    color: "transparent",
                                                    height: "140",
                                                    width: "140"
                                                  }
                                                },
                                                [
                                                  staticStream.img === "false"
                                                    ? _c(
                                                        "v-img",
                                                        {
                                                          attrs: {
                                                            alt:
                                                              staticStream.nazev,
                                                            height: "140",
                                                            contain: ""
                                                          }
                                                        },
                                                        [
                                                          _c(
                                                            "v-progress-circular",
                                                            {
                                                              attrs: {
                                                                size: 70,
                                                                width: 7,
                                                                color:
                                                                  "grey lighten-5",
                                                                indeterminate:
                                                                  ""
                                                              }
                                                            }
                                                          )
                                                        ],
                                                        1
                                                      )
                                                    : staticStream.img ===
                                                      "/storage/noImg.jpg"
                                                    ? _c(
                                                        "v-img",
                                                        {
                                                          attrs: {
                                                            alt:
                                                              staticStream.nazev,
                                                            height: "140",
                                                            contain: ""
                                                          }
                                                        },
                                                        [
                                                          _c(
                                                            "v-icon",
                                                            {
                                                              staticClass:
                                                                "mt-8",
                                                              attrs: {
                                                                color: "orange",
                                                                large: ""
                                                              }
                                                            },
                                                            [
                                                              _vm._v(
                                                                "\n                                                mdi-television-off\n                                            "
                                                              )
                                                            ]
                                                          ),
                                                          _vm._v(" "),
                                                          _c(
                                                            "v-row",
                                                            {
                                                              directives: [
                                                                {
                                                                  name: "show",
                                                                  rawName:
                                                                    "v-show",
                                                                  value:
                                                                    staticStream.audioLang !=
                                                                    null,
                                                                  expression:
                                                                    "\n                                                    staticStream.audioLang != null\n                                                "
                                                                }
                                                              ],
                                                              staticClass:
                                                                "lightbox white--text fill-height",
                                                              attrs: {
                                                                align: "end"
                                                              }
                                                            },
                                                            [
                                                              _c("v-col", [
                                                                _c(
                                                                  "div",
                                                                  {
                                                                    staticClass:
                                                                      "body-1 green--text"
                                                                  },
                                                                  [
                                                                    _c(
                                                                      "strong",
                                                                      [
                                                                        _vm._v(
                                                                          "\n                                                            " +
                                                                            _vm._s(
                                                                              staticStream.audioLang
                                                                            ) +
                                                                            "\n                                                        "
                                                                        )
                                                                      ]
                                                                    )
                                                                  ]
                                                                )
                                                              ])
                                                            ],
                                                            1
                                                          )
                                                        ],
                                                        1
                                                      )
                                                    : staticStream.img ===
                                                      "/storage/radioImage.png"
                                                    ? _c(
                                                        "v-img",
                                                        {
                                                          attrs: {
                                                            alt:
                                                              staticStream.nazev,
                                                            height: "140",
                                                            contain: ""
                                                          }
                                                        },
                                                        [
                                                          _c(
                                                            "v-icon",
                                                            {
                                                              staticClass:
                                                                "mt-8",
                                                              attrs: {
                                                                large: ""
                                                              }
                                                            },
                                                            [
                                                              _vm._v(
                                                                "\n                                                mdi-radio\n                                            "
                                                              )
                                                            ]
                                                          )
                                                        ],
                                                        1
                                                      )
                                                    : _c(
                                                        "v-img",
                                                        {
                                                          attrs: {
                                                            "lazy-src":
                                                              staticStream.img,
                                                            alt:
                                                              staticStream.nazev,
                                                            src:
                                                              staticStream.img,
                                                            height: "140",
                                                            contain: ""
                                                          },
                                                          scopedSlots: _vm._u(
                                                            [
                                                              {
                                                                key:
                                                                  "placeholder",
                                                                fn: function() {
                                                                  return [
                                                                    _c(
                                                                      "v-row",
                                                                      {
                                                                        staticClass:
                                                                          "fill-height ma-0",
                                                                        attrs: {
                                                                          align:
                                                                            "center",
                                                                          justify:
                                                                            "center"
                                                                        }
                                                                      },
                                                                      [
                                                                        _c(
                                                                          "v-progress-circular",
                                                                          {
                                                                            attrs: {
                                                                              indeterminate:
                                                                                "",
                                                                              color:
                                                                                "grey lighten-5"
                                                                            }
                                                                          }
                                                                        )
                                                                      ],
                                                                      1
                                                                    )
                                                                  ]
                                                                },
                                                                proxy: true
                                                              }
                                                            ],
                                                            null,
                                                            true
                                                          )
                                                        },
                                                        [
                                                          _vm._v(" "),
                                                          _c(
                                                            "v-row",
                                                            {
                                                              directives: [
                                                                {
                                                                  name: "show",
                                                                  rawName:
                                                                    "v-show",
                                                                  value:
                                                                    staticStream.audioLang !=
                                                                    null,
                                                                  expression:
                                                                    "\n                                                    staticStream.audioLang != null\n                                                "
                                                                }
                                                              ],
                                                              staticClass:
                                                                "lightbox white--text fill-height",
                                                              attrs: {
                                                                align: "end"
                                                              }
                                                            },
                                                            [
                                                              _c("v-col", [
                                                                _c(
                                                                  "div",
                                                                  {
                                                                    staticClass:
                                                                      "body-1 green--text"
                                                                  },
                                                                  [
                                                                    _c(
                                                                      "strong",
                                                                      [
                                                                        _vm._v(
                                                                          "\n                                                            " +
                                                                            _vm._s(
                                                                              staticStream.audioLang
                                                                            ) +
                                                                            "\n                                                        "
                                                                        )
                                                                      ]
                                                                    )
                                                                  ]
                                                                )
                                                              ])
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
                                    ],
                                    1
                                  )
                            ]
                          }
                        }
                      ],
                      null,
                      true
                    )
                  })
                ],
                1
              )
            }),
            0
          ),
          _vm._v(" "),
          _c("v-divider", { staticClass: "mr-12" }),
          _vm._v(" "),
          _c(
            "v-row",
            { staticClass: "mx-auto mt-1 ma-1 mr-1" },
            _vm._l(_vm.streams, function(stream) {
              return _c(
                "div",
                { key: stream.id },
                [
                  _c("v-tooltip", {
                    attrs: { bottom: "" },
                    scopedSlots: _vm._u(
                      [
                        {
                          key: "activator",
                          fn: function(ref) {
                            var on = ref.on
                            return [
                              stream.Alert === "error"
                                ? _c(
                                    "v-card",
                                    {
                                      staticClass: "mx-auto ma-0",
                                      attrs: {
                                        flat: "",
                                        color: "red",
                                        width: "180"
                                      },
                                      on: {
                                        click: function($event) {
                                          _vm.channelInfoFunction(),
                                            (_vm.channelId = stream.id),
                                            (_vm.channelName = stream.nazev),
                                            (_vm.channelApi = stream.api),
                                            (_vm.urlDokumentace =
                                              stream.dokumentaceUrl)
                                        }
                                      }
                                    },
                                    [
                                      _c(
                                        "v-list-item",
                                        [
                                          _c(
                                            "v-list-item-content",
                                            _vm._g(
                                              { staticClass: "text-center" },
                                              on
                                            ),
                                            [
                                              _c("v-list-item-title", [
                                                _vm._v(_vm._s(stream.nazev))
                                              ]),
                                              _vm._v(" "),
                                              _c(
                                                "v-btn",
                                                {
                                                  attrs: {
                                                    color: "black",
                                                    height: "100",
                                                    width: "100"
                                                  }
                                                },
                                                [
                                                  _c(
                                                    "v-img",
                                                    {
                                                      attrs: {
                                                        height: "100",
                                                        alt: stream.nazev
                                                      }
                                                    },
                                                    [
                                                      _c(
                                                        "v-icon",
                                                        {
                                                          staticClass: "mt-8",
                                                          attrs: {
                                                            color: "red",
                                                            large: ""
                                                          }
                                                        },
                                                        [
                                                          _vm._v(
                                                            "\n                                                mdi-television-off\n                                            "
                                                          )
                                                        ]
                                                      )
                                                    ],
                                                    1
                                                  )
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c("v-list-item-subtitle")
                                            ],
                                            1
                                          )
                                        ],
                                        1
                                      )
                                    ],
                                    1
                                  )
                                : _c(
                                    "v-card",
                                    {
                                      staticClass: "mx-auto ma-1 mr-1",
                                      attrs: {
                                        flat: "",
                                        color: "transparent",
                                        width: "180"
                                      },
                                      on: {
                                        click: function($event) {
                                          _vm.channelInfoFunction(),
                                            (_vm.channelId = stream.id),
                                            (_vm.channelName = stream.nazev),
                                            (_vm.channelApi = stream.api),
                                            (_vm.urlDokumentace =
                                              stream.dokumentaceUrl)
                                        }
                                      }
                                    },
                                    [
                                      _c(
                                        "v-list-item",
                                        [
                                          _c(
                                            "v-list-item-content",
                                            _vm._g(
                                              { staticClass: "text-center" },
                                              on
                                            ),
                                            [
                                              _c("v-list-item-title", [
                                                _vm._v(_vm._s(stream.nazev))
                                              ]),
                                              _vm._v(" "),
                                              _c(
                                                "v-btn",
                                                {
                                                  attrs: {
                                                    color: "transparent",
                                                    height: "100",
                                                    width: "100"
                                                  }
                                                },
                                                [
                                                  stream.img === "false"
                                                    ? _c(
                                                        "v-img",
                                                        {
                                                          attrs: {
                                                            alt: stream.nazev,
                                                            height: "100",
                                                            contain: ""
                                                          }
                                                        },
                                                        [
                                                          _c(
                                                            "v-progress-circular",
                                                            {
                                                              attrs: {
                                                                size: 70,
                                                                width: 7,
                                                                color:
                                                                  "grey lighten-5",
                                                                indeterminate:
                                                                  ""
                                                              }
                                                            }
                                                          )
                                                        ],
                                                        1
                                                      )
                                                    : stream.img ===
                                                      "/storage/noImg.jpg"
                                                    ? _c(
                                                        "v-img",
                                                        {
                                                          attrs: {
                                                            alt: stream.nazev,
                                                            height: "100",
                                                            contain: ""
                                                          }
                                                        },
                                                        [
                                                          _c(
                                                            "v-icon",
                                                            {
                                                              staticClass:
                                                                "mt-8",
                                                              attrs: {
                                                                color: "orange",
                                                                large: ""
                                                              }
                                                            },
                                                            [
                                                              _vm._v(
                                                                "\n                                                mdi-television-off\n                                            "
                                                              )
                                                            ]
                                                          ),
                                                          _vm._v(" "),
                                                          _c(
                                                            "v-row",
                                                            {
                                                              directives: [
                                                                {
                                                                  name: "show",
                                                                  rawName:
                                                                    "v-show",
                                                                  value:
                                                                    stream.audioLang !=
                                                                    null,
                                                                  expression:
                                                                    "\n                                                    stream.audioLang != null\n                                                "
                                                                }
                                                              ],
                                                              staticClass:
                                                                "lightbox white--text fill-height",
                                                              attrs: {
                                                                align: "end"
                                                              }
                                                            },
                                                            [
                                                              _c("v-col", [
                                                                _c(
                                                                  "div",
                                                                  {
                                                                    staticClass:
                                                                      "body-1 green--text"
                                                                  },
                                                                  [
                                                                    _c(
                                                                      "strong",
                                                                      [
                                                                        _vm._v(
                                                                          "\n                                                            " +
                                                                            _vm._s(
                                                                              stream.audioLang
                                                                            ) +
                                                                            "\n                                                        "
                                                                        )
                                                                      ]
                                                                    )
                                                                  ]
                                                                )
                                                              ])
                                                            ],
                                                            1
                                                          )
                                                        ],
                                                        1
                                                      )
                                                    : stream.img ===
                                                      "/storage/radioImage.png"
                                                    ? _c(
                                                        "v-img",
                                                        {
                                                          attrs: {
                                                            alt: stream.nazev,
                                                            height: "100",
                                                            contain: ""
                                                          }
                                                        },
                                                        [
                                                          _c(
                                                            "v-icon",
                                                            {
                                                              staticClass:
                                                                "mt-8",
                                                              attrs: {
                                                                large: ""
                                                              }
                                                            },
                                                            [
                                                              _vm._v(
                                                                "\n                                                mdi-radio\n                                            "
                                                              )
                                                            ]
                                                          )
                                                        ],
                                                        1
                                                      )
                                                    : _c(
                                                        "v-img",
                                                        {
                                                          attrs: {
                                                            "lazy-src":
                                                              stream.img,
                                                            alt: stream.nazev,
                                                            src: stream.img,
                                                            height: "100",
                                                            contain: ""
                                                          },
                                                          scopedSlots: _vm._u(
                                                            [
                                                              {
                                                                key:
                                                                  "placeholder",
                                                                fn: function() {
                                                                  return [
                                                                    _c(
                                                                      "v-row",
                                                                      {
                                                                        staticClass:
                                                                          "fill-height ma-0",
                                                                        attrs: {
                                                                          align:
                                                                            "center",
                                                                          justify:
                                                                            "center"
                                                                        }
                                                                      },
                                                                      [
                                                                        _c(
                                                                          "v-progress-circular",
                                                                          {
                                                                            attrs: {
                                                                              indeterminate:
                                                                                "",
                                                                              color:
                                                                                "grey lighten-5"
                                                                            }
                                                                          }
                                                                        )
                                                                      ],
                                                                      1
                                                                    )
                                                                  ]
                                                                },
                                                                proxy: true
                                                              }
                                                            ],
                                                            null,
                                                            true
                                                          )
                                                        },
                                                        [
                                                          _vm._v(" "),
                                                          _c(
                                                            "v-row",
                                                            {
                                                              directives: [
                                                                {
                                                                  name: "show",
                                                                  rawName:
                                                                    "v-show",
                                                                  value:
                                                                    stream.audioLang !=
                                                                    null,
                                                                  expression:
                                                                    "\n                                                    stream.audioLang != null\n                                                "
                                                                }
                                                              ],
                                                              staticClass:
                                                                "lightbox white--text fill-height",
                                                              attrs: {
                                                                align: "end"
                                                              }
                                                            },
                                                            [
                                                              _c("v-col", [
                                                                _c(
                                                                  "div",
                                                                  {
                                                                    staticClass:
                                                                      "body-1 green--text"
                                                                  },
                                                                  [
                                                                    _c(
                                                                      "strong",
                                                                      [
                                                                        _vm._v(
                                                                          "\n                                                            " +
                                                                            _vm._s(
                                                                              stream.audioLang
                                                                            ) +
                                                                            "\n                                                        "
                                                                        )
                                                                      ]
                                                                    )
                                                                  ]
                                                                )
                                                              ])
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
                                    ],
                                    1
                                  )
                            ]
                          }
                        }
                      ],
                      null,
                      true
                    )
                  })
                ],
                1
              )
            }),
            0
          ),
          _vm._v(" "),
          _c("br"),
          _vm._v(" "),
          _c("v-pagination", {
            attrs: { length: _vm.pagination.total, circle: "" },
            on: { input: _vm.onPageChange },
            model: {
              value: _vm.pagination.current,
              callback: function($$v) {
                _vm.$set(_vm.pagination, "current", $$v)
              },
              expression: "pagination.current"
            }
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
              attrs: {
                fullscreen: "",
                "hide-overlay": "",
                transition: "dialog-bottom-transition"
              },
              model: {
                value: _vm.channelInfo,
                callback: function($$v) {
                  _vm.channelInfo = $$v
                },
                expression: "channelInfo"
              }
            },
            [
              _c(
                "v-card",
                [
                  _c(
                    "v-toolbar",
                    { attrs: { dark: "", color: "transparent" } },
                    [
                      _c(
                        "v-btn",
                        {
                          attrs: { icon: "", dark: "" },
                          on: {
                            click: function($event) {
                              _vm.channelInfo = false
                            }
                          }
                        },
                        [_c("v-icon", [_vm._v("mdi-close")])],
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
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: _vm.channelApi === "1",
                                  expression: "channelApi === '1'"
                                }
                              ],
                              staticClass: "white--text",
                              attrs: { color: _vm.colorApi, icon: "" },
                              on: {
                                click: function($event) {
                                  _vm.contextMenu = "api"
                                }
                              }
                            },
                            [_c("v-icon", [_vm._v("mdi-glasses")])],
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
                              attrs: { color: _vm.colorNote, icon: "" },
                              on: {
                                click: function($event) {
                                  _vm.contextMenu = "notes"
                                }
                              }
                            },
                            [_c("v-icon", [_vm._v("mdi-message")])],
                            1
                          ),
                          _vm._v(" "),
                          _c("v-spacer")
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-row",
                    { staticClass: "mt-6", attrs: { justify: "center" } },
                    [
                      _c(
                        "div",
                        [
                          _vm.contextMenu === "prehled"
                            ? _c("v-row", { staticClass: "title" }, [
                                _vm._v(_vm._s(_vm.channelName) + " - Přehled")
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.contextMenu === "api"
                            ? _c("v-row", { staticClass: "title" }, [
                                _vm._v(
                                  _vm._s(_vm.channelName) +
                                    " - Výpis z Dokumentace"
                                )
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.contextMenu === "ffprobe"
                            ? _c("v-row", { staticClass: "title" }, [
                                _vm._v(_vm._s(_vm.channelName) + " - FFProbe")
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.contextMenu === "grafy"
                            ? _c("v-row", { staticClass: "title" }, [
                                _vm._v(_vm._s(_vm.channelName) + " - Grafy")
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.contextMenu === "notes"
                            ? _c("v-row", { staticClass: "title" }, [
                                _vm._v(_vm._s(_vm.channelName) + " - Poznámky")
                              ])
                            : _vm._e()
                        ],
                        1
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-row",
                    [
                      _c(
                        "div",
                        { staticClass: "mt-12 ml-12" },
                        [
                          _vm.channelId != ""
                            ? _c("img-component", {
                                attrs: { channelId: _vm.channelId }
                              })
                            : _vm._e()
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-row",
                        { staticClass: "ml-12" },
                        [
                          _vm.channelId != "" && _vm.contextMenu === "ffprobe"
                            ? _c("ffprobeTree-component", {
                                attrs: { channelId: _vm.channelId }
                              })
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.channelId != "" && _vm.contextMenu === "api"
                            ? _c("apidokumentace-component", {
                                attrs: { channelId: _vm.channelId }
                              })
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.channelId != "" && _vm.contextMenu === "prehled"
                            ? _c("channelBitrate-component", {
                                attrs: { channelId: _vm.channelId }
                              })
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.channelId != "" && _vm.contextMenu === "grafy"
                            ? _c("chart-component", {
                                attrs: { channelId: _vm.channelId }
                              })
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.channelId != "" && _vm.contextMenu === "notes"
                            ? _c("note-component", {
                                attrs: { channelId: _vm.channelId }
                              })
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
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "transition",
        { attrs: { name: "fade", mode: "out-in" } },
        [_c("router-view")],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Mozaika/UserCustomMozaika.vue":
/*!***************************************************************!*\
  !*** ./resources/js/components/Mozaika/UserCustomMozaika.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UserCustomMozaika_vue_vue_type_template_id_cd622fb4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserCustomMozaika.vue?vue&type=template&id=cd622fb4& */ "./resources/js/components/Mozaika/UserCustomMozaika.vue?vue&type=template&id=cd622fb4&");
/* harmony import */ var _UserCustomMozaika_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserCustomMozaika.vue?vue&type=script&lang=js& */ "./resources/js/components/Mozaika/UserCustomMozaika.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UserCustomMozaika_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserCustomMozaika_vue_vue_type_template_id_cd622fb4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UserCustomMozaika_vue_vue_type_template_id_cd622fb4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Mozaika/UserCustomMozaika.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Mozaika/UserCustomMozaika.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/Mozaika/UserCustomMozaika.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserCustomMozaika_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./UserCustomMozaika.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Mozaika/UserCustomMozaika.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserCustomMozaika_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Mozaika/UserCustomMozaika.vue?vue&type=template&id=cd622fb4&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/Mozaika/UserCustomMozaika.vue?vue&type=template&id=cd622fb4& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserCustomMozaika_vue_vue_type_template_id_cd622fb4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./UserCustomMozaika.vue?vue&type=template&id=cd622fb4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Mozaika/UserCustomMozaika.vue?vue&type=template&id=cd622fb4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserCustomMozaika_vue_vue_type_template_id_cd622fb4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserCustomMozaika_vue_vue_type_template_id_cd622fb4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);