(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["task"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/TaskEditComponent.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/TaskEditComponent.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    taskId: Number
  },
  data: function data() {
    return {
      task: {}
    };
  },
  methods: {
    getTask: function getTask() {
      var _this = this;

      axios.get("/api/tasks/" + this.taskId).then(function (res) {
        _this.task = res.data;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    updateData: function updateData() {
      var _this2 = this;

      axios.put("/api/tasks/" + this.taskId, this.task).then(function (res) {
        _this2.$router.push({
          name: "task.list"
        }); // データ更新後、一覧ページにリダイレクト

      })["catch"](function (error) {
        console.log(error);
      });
    }
  },
  mounted: function mounted() {
    this.getTask();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/TaskEditComponent.vue?vue&type=template&id=e57eaa9a&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/TaskEditComponent.vue?vue&type=template&id=e57eaa9a& ***!
  \********************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "container" }, [
    _c("div", { staticClass: "row justify-content-center" }, [
      _c("div", { staticClass: "col-sm-6" }, [
        _c(
          "form",
          {
            on: {
              submit: function($event) {
                $event.preventDefault()
                return _vm.updateData($event)
              }
            }
          },
          [
            _c("div", { staticClass: "form-group row" }, [
              _c(
                "label",
                {
                  staticClass: "col-sm-3 col-form-label",
                  attrs: { for: "id" }
                },
                [_vm._v("ID")]
              ),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.task.id,
                    expression: "task.id"
                  }
                ],
                staticClass: "col-sm-9 form-control-plaintext",
                attrs: { type: "text", readonly: "", id: "id" },
                domProps: { value: _vm.task.id },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.task, "id", $event.target.value)
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group row" }, [
              _c(
                "label",
                {
                  staticClass: "col-sm-3 col-form-label",
                  attrs: { for: "title" }
                },
                [_vm._v("タイトル")]
              ),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.task.title,
                    expression: "task.title"
                  }
                ],
                staticClass: "col-sm-9 form-control",
                attrs: { type: "text", id: "title" },
                domProps: { value: _vm.task.title },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.task, "title", $event.target.value)
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group row" }, [
              _c(
                "label",
                {
                  staticClass: "col-sm-3 col-form-label",
                  attrs: { for: "content" }
                },
                [_vm._v("出版社")]
              ),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.task.content,
                    expression: "task.content"
                  }
                ],
                staticClass: "col-sm-9 form-control",
                attrs: { type: "text", id: "content" },
                domProps: { value: _vm.task.content },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.task, "content", $event.target.value)
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group row" }, [
              _c(
                "label",
                {
                  staticClass: "col-sm-3 col-form-label",
                  attrs: { for: "person-in-charge" }
                },
                [_vm._v("著者")]
              ),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.task.person_in_charge,
                    expression: "task.person_in_charge"
                  }
                ],
                staticClass: "col-sm-9 form-control",
                attrs: { type: "text", id: "person-in-charge" },
                domProps: { value: _vm.task.person_in_charge },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.task, "person_in_charge", $event.target.value)
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c(
              "button",
              { staticClass: "btn btn-secondary", attrs: { type: "submit" } },
              [_vm._v("更新")]
            )
          ]
        )
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/TaskEditComponent.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/TaskEditComponent.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TaskEditComponent_vue_vue_type_template_id_e57eaa9a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TaskEditComponent.vue?vue&type=template&id=e57eaa9a& */ "./resources/js/components/TaskEditComponent.vue?vue&type=template&id=e57eaa9a&");
/* harmony import */ var _TaskEditComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TaskEditComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/TaskEditComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TaskEditComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TaskEditComponent_vue_vue_type_template_id_e57eaa9a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TaskEditComponent_vue_vue_type_template_id_e57eaa9a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/TaskEditComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/TaskEditComponent.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/TaskEditComponent.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskEditComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./TaskEditComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/TaskEditComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskEditComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/TaskEditComponent.vue?vue&type=template&id=e57eaa9a&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/TaskEditComponent.vue?vue&type=template&id=e57eaa9a& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskEditComponent_vue_vue_type_template_id_e57eaa9a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./TaskEditComponent.vue?vue&type=template&id=e57eaa9a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/TaskEditComponent.vue?vue&type=template&id=e57eaa9a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskEditComponent_vue_vue_type_template_id_e57eaa9a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskEditComponent_vue_vue_type_template_id_e57eaa9a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);