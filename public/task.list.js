(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["task.list"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/TaskListComponent.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/TaskListComponent.vue?vue&type=script&lang=js& ***!
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
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      tasks: []
    };
  },
  methods: {
    getTasks: function getTasks() {
      var _this = this;

      axios.get("/api/tasks").then(function (res) {
        console.log(res.data);
        _this.tasks = res.data;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    deleteTask: function deleteTask(id) {
      var _this2 = this;

      axios["delete"]("/api/tasks/" + id).then(function (res) {
        _this2.getTasks(); // データ削除後、データ一覧を再読み込み

      })["catch"](function (error) {
        console.log(error);
      });
    }
  },
  mounted: function mounted() {
    this.getTasks();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/TaskListComponent.vue?vue&type=template&id=a75d8ec2&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/TaskListComponent.vue?vue&type=template&id=a75d8ec2& ***!
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
  return _c("div", [
    _c("div", { staticClass: "container" }, [
      _c("table", { staticClass: "table table-hover" }, [
        _vm._m(0),
        _vm._v(" "),
        _c(
          "tbody",
          _vm._l(_vm.tasks, function(task) {
            return _c("tr", { key: task.id }, [
              _c("td", [_vm._v(_vm._s(task.title))]),
              _vm._v(" "),
              _c("td", [_vm._v(_vm._s(task.publisher.name))]),
              _vm._v(" "),
              _c("td", [_vm._v(_vm._s(task.author))]),
              _vm._v(" "),
              _c("td", [_vm._v(_vm._s(task.year_of_publication))]),
              _vm._v(" "),
              _c(
                "td",
                [
                  _c(
                    "router-link",
                    {
                      attrs: {
                        to: { name: "task.show", params: { taskId: task.id } }
                      }
                    },
                    [
                      _c("button", { staticClass: "btn btn-secondary" }, [
                        _vm._v("詳細")
                      ])
                    ]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "td",
                [
                  _c(
                    "router-link",
                    {
                      attrs: {
                        to: { name: "task.edit", params: { taskId: task.id } }
                      }
                    },
                    [
                      _c("button", { staticClass: "btn btn-secondary" }, [
                        _vm._v("編集")
                      ])
                    ]
                  )
                ],
                1
              )
            ])
          }),
          0
        )
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", { staticClass: "thead-light" }, [
      _c("tr", [
        _c("th", { attrs: { scope: "col" } }, [_vm._v("タイトル")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("出版社")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("著者")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("出版年")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("詳細")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("編集")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/TaskListComponent.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/TaskListComponent.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TaskListComponent_vue_vue_type_template_id_a75d8ec2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TaskListComponent.vue?vue&type=template&id=a75d8ec2& */ "./resources/js/components/TaskListComponent.vue?vue&type=template&id=a75d8ec2&");
/* harmony import */ var _TaskListComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TaskListComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/TaskListComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TaskListComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TaskListComponent_vue_vue_type_template_id_a75d8ec2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TaskListComponent_vue_vue_type_template_id_a75d8ec2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/TaskListComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/TaskListComponent.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/TaskListComponent.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskListComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./TaskListComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/TaskListComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskListComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/TaskListComponent.vue?vue&type=template&id=a75d8ec2&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/TaskListComponent.vue?vue&type=template&id=a75d8ec2& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskListComponent_vue_vue_type_template_id_a75d8ec2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./TaskListComponent.vue?vue&type=template&id=a75d8ec2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/TaskListComponent.vue?vue&type=template&id=a75d8ec2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskListComponent_vue_vue_type_template_id_a75d8ec2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskListComponent_vue_vue_type_template_id_a75d8ec2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);