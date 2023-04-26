"use strict";
exports.id = 801;
exports.ids = [801];
exports.modules = {

/***/ 7834:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Card)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_NextImage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(578);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_NextImage__WEBPACK_IMPORTED_MODULE_1__]);
_components_NextImage__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


function Card({ name , position , description , imageLink  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "my-4 ml-4 w-64 rounded-2xl bg-primary-400 p-5 md:my-8 md:ml-8 md:w-80 md:p-7",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "mb-5 flex items-start space-x-7",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "w-10",
                        children: imageLink ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_NextImage__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                            useSkeleton: true,
                            color: "#D9D9D9",
                            src: imageLink ?? "",
                            width: "50",
                            height: "50",
                            alt: "Icon",
                            imgClassName: "rounded-xl mt-2"
                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "h-[50px] w-[50px] rounded-full bg-[#D9D9D9]"
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "text-xl font-extrabold",
                                children: name
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: position
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                children: description
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4300:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_clsxm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1474);
/* harmony import */ var _components_links_UnstyledLink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4914);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_clsxm__WEBPACK_IMPORTED_MODULE_2__, _components_links_UnstyledLink__WEBPACK_IMPORTED_MODULE_3__]);
([_lib_clsxm__WEBPACK_IMPORTED_MODULE_2__, _components_links_UnstyledLink__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const ButtonLinkVariant = (/* unused pure expression or super */ null && ([
    "primary",
    "outline",
    "ghost",
    "light",
    "dark"
]));
const ButtonLinkSize = (/* unused pure expression or super */ null && ([
    "sm",
    "base"
]));
const ButtonLink = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ children , className , variant ="primary" , size ="base" , isDarkBg =false , leftIcon: LeftIcon , rightIcon: RightIcon , leftIconClassName , rightIconClassName , ...rest }, ref)=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_links_UnstyledLink__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        ref: ref,
        ...rest,
        className: (0,_lib_clsxm__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)("inline-flex items-center rounded font-medium", "focus:outline-none focus-visible:ring focus-visible:ring-primary-500", "shadow-sm", "transition-colors duration-75", //#region  //*=========== Size ===========
        [
            size === "base" && [
                "px-3 py-1.5",
                "text-sm md:text-base"
            ],
            size === "sm" && [
                "px-2 py-1",
                "text-xs md:text-sm"
            ]
        ], //#endregion  //*======== Size ===========
        //#region  //*=========== Variants ===========
        [
            variant === "primary" && [
                "bg-primary-500 text-white",
                "border border-primary-600",
                "hover:bg-primary-600 hover:text-white",
                "active:bg-primary-700",
                "disabled:bg-primary-700"
            ],
            variant === "outline" && [
                "text-primary-500",
                "border border-primary-500",
                "hover:bg-primary-50 active:bg-primary-100 disabled:bg-primary-100",
                isDarkBg && "hover:bg-gray-900 active:bg-gray-800 disabled:bg-gray-800"
            ],
            variant === "ghost" && [
                "text-primary-500",
                "shadow-none",
                "hover:bg-primary-50 active:bg-primary-100 disabled:bg-primary-100",
                isDarkBg && "hover:bg-gray-900 active:bg-gray-800 disabled:bg-gray-800"
            ],
            variant === "light" && [
                "bg-white text-gray-700",
                "border border-gray-300",
                "hover:bg-gray-100 hover:text-dark",
                "active:bg-white/80 disabled:bg-gray-200"
            ],
            variant === "dark" && [
                "bg-gray-900 text-white",
                "border border-gray-600",
                "hover:bg-gray-800 active:bg-gray-700 disabled:bg-gray-700"
            ]
        ], //#endregion  //*======== Variants ===========
        "disabled:cursor-not-allowed", className),
        children: [
            LeftIcon && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (0,_lib_clsxm__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)([
                    size === "base" && "mr-1",
                    size === "sm" && "mr-1.5"
                ]),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(LeftIcon, {
                    className: (0,_lib_clsxm__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)([
                        size === "base" && "md:text-md text-md",
                        size === "sm" && "md:text-md text-sm"
                    ], leftIconClassName)
                })
            }),
            children,
            RightIcon && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (0,_lib_clsxm__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)([
                    size === "base" && "ml-1",
                    size === "sm" && "ml-1.5"
                ]),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(RightIcon, {
                    className: (0,_lib_clsxm__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)([
                        size === "base" && "text-md md:text-md",
                        size === "sm" && "md:text-md text-sm"
                    ], rightIconClassName)
                })
            })
        ]
    });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ButtonLink);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;