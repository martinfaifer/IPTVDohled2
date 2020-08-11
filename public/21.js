(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[21],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Mozaika/channelDetail/NoteComponent.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Mozaika/channelDetail/NoteComponent.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["channelId"],
  data: function data() {
    return {
      messeges: [],
      channel: [],
      noteDialog: false,
      note: "",
      noteId: "",
      noteRule: [function (v) {
        return !!v || "pole nesmí být prázdné";
      }],
      interval: false
    };
  },
  created: function created() {
    this.loadNotes();
  },
  methods: {
    loadNotes: function loadNotes() {
      var currentObj = this;
      axios.post("/api/channel/messeges", {
        id: this.channelId
      }).then(function (response) {
        currentObj.messeges = response.data;
      })["catch"](function (error) {
        console.log("chyba" + error);
      });
    },
    newNote: function newNote() {
      this.noteDialog = true;
    },
    saveNewNote: function saveNewNote() {
      var currentObj = this;
      axios.post("/api/channel/message/create", {
        channelId: this.channelId,
        note: this.note
      }).then(function (response) {
        currentObj.status = response.data;
        currentObj.note = "";
        currentObj.noteDialog = false;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    deleteNote: function deleteNote() {
      var currentObj = this;
      axios.post("/api/channel/message/delete", {
        noteId: this.noteId
      }).then(function (response) {
        currentObj.status = response.data;
        currentObj.noteId = "";
      })["catch"](function (error) {
        console.log(error);
      });
    },
    closeNewNote: function closeNewNote() {
      this.noteDialog = false, this.note = "";
    }
  },
  mounted: function mounted() {
    this.interval = setInterval(function () {
      this.loadNotes();
    }.bind(this), 1000);
  },
  beforeDestroy: function beforeDestroy() {
    clearInterval(this.interval);
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Mozaika/channelDetail/NoteComponent.vue?vue&type=template&id=5e6f9c48&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Mozaika/channelDetail/NoteComponent.vue?vue&type=template&id=5e6f9c48& ***!
  \**************************************************************************************************************************************************************************************************************************************/
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
        "v-timeline",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.messeges != false,
              expression: "messeges != false"
            }
          ],
          staticClass: "mt-12 ml-12",
          attrs: { width: "800px" }
        },
        _vm._l(_vm.messeges, function(singleMessege) {
          return _c(
            "v-timeline-item",
            {
              key: singleMessege.id,
              attrs: { large: "" },
              scopedSlots: _vm._u(
                [
                  {
                    key: "icon",
                    fn: function() {
                      return [
                        _c(
                          "v-avatar",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: singleMessege.avatar != false,
                                expression: "singleMessege.avatar != false"
                              }
                            ]
                          },
                          [_c("img", { attrs: { src: singleMessege.avatar } })]
                        ),
                        _vm._v(" "),
                        _c(
                          "v-icon",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: singleMessege.avatar === false,
                                expression: "singleMessege.avatar === false"
                              }
                            ]
                          },
                          [_vm._v("mdi-account-circle")]
                        )
                      ]
                    },
                    proxy: true
                  },
                  {
                    key: "opposite",
                    fn: function() {
                      return [
                        _c("span", [_vm._v(_vm._s(singleMessege.user))]),
                        _vm._v(" "),
                        _c("p", [
                          _c("small", [
                            _vm._v(_vm._s(singleMessege.created_at))
                          ])
                        ])
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
              _vm._v(" "),
              _c(
                "v-card",
                { staticClass: "elevation-2", attrs: { width: "250px" } },
                [
                  _c(
                    "v-card-actions",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: singleMessege.showActions === true,
                          expression: "singleMessege.showActions === true"
                        }
                      ]
                    },
                    [
                      _c("v-spacer"),
                      _vm._v(" "),
                      _c(
                        "v-icon",
                        {
                          attrs: { small: "", color: "red" },
                          on: {
                            click: function($event) {
                              ;(_vm.noteId = singleMessege.id), _vm.deleteNote()
                            }
                          }
                        },
                        [_vm._v("mdi-delete")]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("v-card-text", [_vm._v(_vm._s(singleMessege.note))])
                ],
                1
              )
            ],
            1
          )
        }),
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "mt-12 ml-12" },
        [
          _c(
            "v-btn",
            {
              attrs: { color: "success", outlined: "", text: "", small: "" },
              on: {
                click: function($event) {
                  return _vm.newNote()
                }
              }
            },
            [_vm._v("Vytvořit novou poznámku")]
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
              attrs: { persistent: "", "max-width": "600px" },
              model: {
                value: _vm.noteDialog,
                callback: function($$v) {
                  _vm.noteDialog = $$v
                },
                expression: "noteDialog"
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
                        "v-container",
                        [
                          _c(
                            "v-col",
                            { attrs: { cols: "12", sm: "12", md: "12" } },
                            [
                              _c("v-textarea", {
                                attrs: {
                                  rules: _vm.noteRule,
                                  required: "",
                                  autofocus: "",
                                  hint: "nová poznámka"
                                },
                                model: {
                                  value: _vm.note,
                                  callback: function($$v) {
                                    _vm.note = $$v
                                  },
                                  expression: "note"
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
                          attrs: { color: "error", text: "" },
                          on: {
                            click: function($event) {
                              return _vm.closeNewNote()
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
                            color: "success",
                            disabled: _vm.note === "",
                            text: ""
                          },
                          on: {
                            click: function($event) {
                              return _vm.saveNewNote()
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

/***/ "./resources/js/components/Mozaika/channelDetail/NoteComponent.vue":
/*!*************************************************************************!*\
  !*** ./resources/js/components/Mozaika/channelDetail/NoteComponent.vue ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NoteComponent_vue_vue_type_template_id_5e6f9c48___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NoteComponent.vue?vue&type=template&id=5e6f9c48& */ "./resources/js/components/Mozaika/channelDetail/NoteComponent.vue?vue&type=template&id=5e6f9c48&");
/* harmony import */ var _NoteComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NoteComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/Mozaika/channelDetail/NoteComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _NoteComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _NoteComponent_vue_vue_type_template_id_5e6f9c48___WEBPACK_IMPORTED_MODULE_0__["render"],
  _NoteComponent_vue_vue_type_template_id_5e6f9c48___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Mozaika/channelDetail/NoteComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Mozaika/channelDetail/NoteComponent.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/Mozaika/channelDetail/NoteComponent.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NoteComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./NoteComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Mozaika/channelDetail/NoteComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NoteComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Mozaika/channelDetail/NoteComponent.vue?vue&type=template&id=5e6f9c48&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/components/Mozaika/channelDetail/NoteComponent.vue?vue&type=template&id=5e6f9c48& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NoteComponent_vue_vue_type_template_id_5e6f9c48___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./NoteComponent.vue?vue&type=template&id=5e6f9c48& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Mozaika/channelDetail/NoteComponent.vue?vue&type=template&id=5e6f9c48&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NoteComponent_vue_vue_type_template_id_5e6f9c48___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NoteComponent_vue_vue_type_template_id_5e6f9c48___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);