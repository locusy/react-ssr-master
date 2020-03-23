/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/Header/index.js":
/*!****************************************!*\
  !*** ./src/components/Header/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Header = function (_Component) {\n    _inherits(Header, _Component);\n\n    function Header() {\n        _classCallCheck(this, Header);\n\n        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));\n    }\n\n    _createClass(Header, [{\n        key: 'render',\n        value: function render() {\n            return _react2.default.createElement(\n                'div',\n                null,\n                _react2.default.createElement(\n                    _reactRouterDom.Link,\n                    { to: '/' },\n                    '\\u9996\\u9875'\n                ),\n                _react2.default.createElement(\n                    _reactRouterDom.Link,\n                    { to: '/login' },\n                    '\\u767B\\u5F55'\n                )\n            );\n        }\n    }]);\n\n    return Header;\n}(_react.Component);\n\nexports.default = Header;\n\n//# sourceURL=webpack:///./src/components/Header/index.js?");

/***/ }),

/***/ "./src/container/Home/index.js":
/*!*************************************!*\
  !*** ./src/container/Home/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _Header = __webpack_require__(/*! ../../components/Header */ \"./src/components/Header/index.js\");\n\nvar _Header2 = _interopRequireDefault(_Header);\n\nvar _actions = __webpack_require__(/*! ./../../store/home/actions */ \"./src/store/home/actions.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n// 同构：一套react代码，在服务器端执行一次，再客户端执行一次\nvar Home = function (_Component) {\n    _inherits(Home, _Component);\n\n    function Home(props) {\n        _classCallCheck(this, Home);\n\n        return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this, props));\n    }\n\n    _createClass(Home, [{\n        key: 'componentDidMount',\n        value: function componentDidMount() {\n            // 使用数据注水后无需再调用action，页面的数据直接从window.context拿\n            // 但是因为react服务端渲染只是网站的第一个页面的渲染，如果第一次进入的是login页面，那么home页的这个数据是取不到的\n            // 但是第一次进入的页面是home页，那么这里可以取到服务端的数据，无需再请求一次，所以采取折衷，如果没有数据才请求\n            if (!this.props.list.length) {\n                this.props.getList();\n            }\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            return _react2.default.createElement(\n                'div',\n                null,\n                _react2.default.createElement(_Header2.default, null),\n                this.props.list.map(function (item) {\n                    return item;\n                }),\n                _react2.default.createElement('br', null),\n                'hello,',\n                this.props.name,\n                _react2.default.createElement(\n                    'button',\n                    { onClick: function onClick() {\n                            return alert(123);\n                        } },\n                    'click'\n                )\n            );\n        }\n    }]);\n\n    return Home;\n}(_react.Component);\n\nHome.loadData = function (store) {\n    // 这个函数负责在服务端渲染之前 把这个路由需要的数据提前加载好\n    return store.dispatch((0, _actions.ActionGetList)());\n};\n\nvar mapStateToProps = function mapStateToProps(state) {\n    return {\n        name: state.home.name,\n        list: state.home.list\n    };\n};\n\nvar mapStateToDispatch = function mapStateToDispatch(dispatch) {\n    return {\n        getList: function getList() {\n            return dispatch((0, _actions.ActionGetList)());\n        }\n    };\n};\n\nexports.default = (0, _reactRedux.connect)(mapStateToProps, mapStateToDispatch)(Home);\n\n//# sourceURL=webpack:///./src/container/Home/index.js?");

/***/ }),

/***/ "./src/container/Login/index.js":
/*!**************************************!*\
  !*** ./src/container/Login/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _Header = __webpack_require__(/*! ../../components/Header */ \"./src/components/Header/index.js\");\n\nvar _Header2 = _interopRequireDefault(_Header);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Login = function (_Component) {\n    _inherits(Login, _Component);\n\n    function Login() {\n        _classCallCheck(this, Login);\n\n        return _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).apply(this, arguments));\n    }\n\n    _createClass(Login, [{\n        key: 'render',\n        value: function render() {\n            return _react2.default.createElement(\n                'div',\n                null,\n                _react2.default.createElement(_Header2.default, null),\n                'Login yee'\n            );\n        }\n    }]);\n\n    return Login;\n}(_react.Component);\n\nexports.default = Login;\n\n//# sourceURL=webpack:///./src/container/Login/index.js?");

/***/ }),

/***/ "./src/routes.js":
/*!***********************!*\
  !*** ./src/routes.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _Home = __webpack_require__(/*! ./container/Home */ \"./src/container/Home/index.js\");\n\nvar _Home2 = _interopRequireDefault(_Home);\n\nvar _Login = __webpack_require__(/*! ./container/Login */ \"./src/container/Login/index.js\");\n\nvar _Login2 = _interopRequireDefault(_Login);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/**\n * 路由配置需要在客户端和服务端 都跑一遍\n */\n// export default (\n//     <div>\n//         <Route path=\"/\" exact component={Home}></Route>\n//         <Route path=\"/login\" exact component={Login}></Route>\n//     </div>\n// )\n\nvar routes = [{\n    path: '/',\n    component: _Home2.default,\n    exact: true\n}, {\n    path: '/login',\n    component: _Login2.default,\n    exact: true\n}];\n\nexports.default = routes;\n\n//# sourceURL=webpack:///./src/routes.js?");

/***/ }),

/***/ "./src/server/index.js":
/*!*****************************!*\
  !*** ./src/server/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _reactRouterConfig = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n\nvar _routes = __webpack_require__(/*! ./../routes */ \"./src/routes.js\");\n\nvar _routes2 = _interopRequireDefault(_routes);\n\nvar _store = __webpack_require__(/*! ../store */ \"./src/store/index.js\");\n\nvar _utils = __webpack_require__(/*! ./utils */ \"./src/server/utils.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// import Home from '../container/Home/index'\nvar app = (0, _express2.default)();\n\n/**\n * 只要是在express服务器下请求资源文件，比如<script src=\"index.js\"></script>，就会去根目录找public文件夹\n */\napp.use(_express2.default.static('public'));\n\n/**\n * 虚拟dom是一个真实Dom的javascript对象映射\n * ReactDOM.render(<Home/>, document.getElementById(\"root\"))\n */\n\n/**\n * 客户端渲染：react代码在客户端运行，消耗的是浏览器的性能\n * 服务端渲染弊端：react代码在服务器端运行，消耗的是服务器的性能，极大的消耗服务端资源\n * 服务端渲染优势：1、首屏加载速度快 2、有利于seo\n */\n\n/**\n * 将home组件渲染成字符串，直接返回给浏览器，这样在浏览器可以查看到htmt内容 形成简易的服务端渲染\n * renderToString只能将基本的信息转成字符串 点击事件等无法生效 所以需要同构\n */\n// const content = renderToString(<Home />)\n\napp.get('*', function (req, res) {\n    // const content = renderToString(\n    //     <StaticRouter location={req.path} context={{}}>\n    //         {Routes}\n    //     </StaticRouter>\n    // )\n    // res.send(\n    //     `<html>\n    //         <head>\n    //             <link rel=\"shortcut icon\" href=\"#\" />\n    //         </head>\n    //         <body>\n    //             <div id=\"root\">${content}</div>\n    //             <script src=\"index.js\"></script>\n    //         </body>\n    //     </html> `\n    // )\n\n    /**\n     *  这里用getStore函数而不是 直接使用的store 确保每次进来不同页面的时候获取的store唯一\n     */\n    var store = (0, _store.getStore)();\n\n    var promises = [];\n    /**\n     * 将store里面的异步数据也在页面可以渲染\n     */\n    // 根据路由的路径，将路由对应的组件放在matchRoutes里面\n    var matchedRoutes = (0, _reactRouterConfig.matchRoutes)(_routes2.default, req.path);\n    // console.log(matchedRoutes)\n    // 让matchRoutes里面所有的组件，对应的loadData方法执行一次，来往store里面加数据\n    matchedRoutes.forEach(function (item) {\n        console.log(item.route.component, 'item');\n        if (item.route.component.loadData) {\n            promises.push(item.route.component.loadData(store));\n        }\n    });\n    // console.log('promises', promises)\n    // 由于是异步action，所以需要等所有promise都执行完成，数据获取完成后渲染页面\n    Promise.all(promises).then(function () {\n        console.log('getState', store.getState());\n        res.send((0, _utils.render)(store, _routes2.default, req));\n    });\n});\n\napp.listen(2000, function () {\n    console.log('server is listening at port 2000...');\n});\n\n//# sourceURL=webpack:///./src/server/index.js?");

/***/ }),

/***/ "./src/server/utils.js":
/*!*****************************!*\
  !*** ./src/server/utils.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.render = undefined;\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _server = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar render = exports.render = function render(store, routes, req) {\n    var content = (0, _server.renderToString)(_react2.default.createElement(\n        _reactRedux.Provider,\n        { store: store },\n        _react2.default.createElement(\n            _reactRouterDom.StaticRouter,\n            { location: req.path, context: {} },\n            _react2.default.createElement(\n                'div',\n                null,\n                routes.map(function (route) {\n                    return _react2.default.createElement(_reactRouterDom.Route, route);\n                })\n            )\n        )\n    ));\n\n    return '<html>\\n            <head>\\n                <link rel=\"shortcut icon\" href=\"#\" />\\n            </head>\\n            <body>\\n                <div id=\"root\">' + content + '</div>\\n                <script>\\n                    // \\u6570\\u636E\\u6CE8\\u6C34\\uFF1A\\u5C06\\u670D\\u52A1\\u7AEF\\u6E32\\u67D3\\u7684\\u6570\\u636E\\u6CE8\\u5165\\u8FD9\\u91CC\\n                    // \\u4EE5\\u4FBF\\u4E8E\\u5BA2\\u6237\\u7AEF\\u8FDB\\u884C\\u6570\\u636E\\u8131\\u6C34\\uFF0C\\u65E0\\u9700\\u8BF7\\u6C42\\uFF0C\\u80FD\\u591F\\u53D6\\u5230store\\u5F02\\u6B65\\u6570\\u636E\\u5E76\\u76F4\\u63A5\\u6E32\\u67D3\\u5230\\u9875\\u9762\\n                    window.context = {\\n                        state: ' + JSON.stringify(store.getState()) + '\\n                    }\\n                </script>\\n                <script src=\"index.js\"></script>\\n            </body>\\n        </html>';\n};\n\n//# sourceURL=webpack:///./src/server/utils.js?");

/***/ }),

/***/ "./src/store/home/actions.js":
/*!***********************************!*\
  !*** ./src/store/home/actions.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.ActionGetList = undefined;\n\nvar _constant = __webpack_require__(/*! ./constant */ \"./src/store/home/constant.js\");\n\nvar homeList = function homeList(data) {\n    return {\n        type: _constant.constant.GET_HOME_LIST,\n        data: data\n    };\n};\n\nvar ActionGetList = exports.ActionGetList = function ActionGetList() {\n    return function (dispatch) {\n        // 处理异步请求\n        return new Promise(function (resolve) {\n            setTimeout(function () {\n                dispatch(homeList([123, 456, 7888]));\n                resolve();\n            }, 1000);\n        });\n    };\n};\n\n//# sourceURL=webpack:///./src/store/home/actions.js?");

/***/ }),

/***/ "./src/store/home/constant.js":
/*!************************************!*\
  !*** ./src/store/home/constant.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nvar constant = exports.constant = {\n    GET_HOME_LIST: 'GET_HOME_LIST'\n};\n\n//# sourceURL=webpack:///./src/store/home/constant.js?");

/***/ }),

/***/ "./src/store/home/index.js":
/*!*********************************!*\
  !*** ./src/store/home/index.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _reducer = __webpack_require__(/*! ./reducer */ \"./src/store/home/reducer.js\");\n\nexports.default = _reducer.reducer;\n\n//# sourceURL=webpack:///./src/store/home/index.js?");

/***/ }),

/***/ "./src/store/home/reducer.js":
/*!***********************************!*\
  !*** ./src/store/home/reducer.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nexports.reducer = reducer;\n\nvar _constant = __webpack_require__(/*! ./constant */ \"./src/store/home/constant.js\");\n\nvar initState = {\n    name: 'locusy',\n    list: []\n};\n\nfunction reducer() {\n    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;\n    var action = arguments[1];\n\n    switch (action.type) {\n        case _constant.constant.GET_HOME_LIST:\n            return _extends({}, state, {\n                list: action.data\n            });\n        default:\n            return state;\n    }\n}\n\n//# sourceURL=webpack:///./src/store/home/reducer.js?");

/***/ }),

/***/ "./src/store/index.js":
/*!****************************!*\
  !*** ./src/store/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.getClientStore = exports.getStore = undefined;\n\nvar _redux = __webpack_require__(/*! redux */ \"redux\");\n\nvar _reduxThunk = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n\nvar _reduxThunk2 = _interopRequireDefault(_reduxThunk);\n\nvar _home = __webpack_require__(/*! ./home */ \"./src/store/home/index.js\");\n\nvar _home2 = _interopRequireDefault(_home);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar reducer = (0, _redux.combineReducers)({\n    home: _home2.default\n});\n\nvar getStore = exports.getStore = function getStore() {\n    return (0, _redux.createStore)(reducer, (0, _redux.applyMiddleware)(_reduxThunk2.default));\n};\n\nvar getClientStore = exports.getClientStore = function getClientStore() {\n    var initialState = window.context.state;\n    return (0, _redux.createStore)(reducer, initialState, (0, _redux.applyMiddleware)(_reduxThunk2.default));\n};\n\n//# sourceURL=webpack:///./src/store/index.js?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "react-router-config":
/*!**************************************!*\
  !*** external "react-router-config" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-config\");\n\n//# sourceURL=webpack:///external_%22react-router-config%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-thunk\");\n\n//# sourceURL=webpack:///external_%22redux-thunk%22?");

/***/ })

/******/ });