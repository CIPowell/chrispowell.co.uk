/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

// Dean Attali / Beautiful Jekyll 2016
__webpack_require__(0);

var main = {

    bigImgEl: null,
    numImgs: null,

    init: function init() {
        // Shorten the navbar after scrolling a little bit down
        $(window).scroll(function () {
            if ($(".navbar").offset().top > 50) {
                $(".navbar").addClass("top-nav-short");
            } else {
                $(".navbar").removeClass("top-nav-short");
            }
        });

        // On mobile, hide the avatar when expanding the navbar menu
        $('#main-navbar').on('show.bs.collapse', function () {
            $(".navbar").addClass("top-nav-expanded");
        });
        $('#main-navbar').on('hidden.bs.collapse', function () {
            $(".navbar").removeClass("top-nav-expanded");
        });

        // On mobile, when clicking on a multi-level navbar menu, show the child links
        $('#main-navbar').on("click", ".navlinks-parent", function (e) {
            var target = e.target;
            $.each($(".navlinks-parent"), function (key, value) {
                if (value == target) {
                    $(value).parent().toggleClass("show-children");
                } else {
                    $(value).parent().removeClass("show-children");
                }
            });
        });

        // Ensure nested navbar menus are not longer than the menu header
        var menus = $(".navlinks-container");
        if (menus.length > 0) {
            var navbar = $("#main-navbar ul");
            var fakeMenuHtml = "<li class='fake-menu' style='display:none;'><a></a></li>";
            navbar.append(fakeMenuHtml);
            var fakeMenu = $(".fake-menu");

            $.each(menus, function (i) {
                var parent = $(menus[i]).find(".navlinks-parent");
                var children = $(menus[i]).find(".navlinks-children a");
                var words = [];
                $.each(children, function (idx, el) {
                    words = words.concat($(el).text().trim().split(/\s+/));
                });
                var maxwidth = 0;
                $.each(words, function (id, word) {
                    fakeMenu.html("<a>" + word + "</a>");
                    var width = fakeMenu.width();
                    if (width > maxwidth) {
                        maxwidth = width;
                    }
                });
                $(menus[i]).css('min-width', maxwidth + 'px');
            });

            fakeMenu.remove();
        }

        // show the big header image
        main.initImgs();
    },

    initImgs: function initImgs() {
        // If the page was large images to randomly select from, choose an image
        if ($("#header-big-imgs").length > 0) {
            main.bigImgEl = $("#header-big-imgs");
            main.numImgs = main.bigImgEl.attr("data-num-img");

            // 2fc73a3a967e97599c9763d05e564189
            // set an initial image
            var imgInfo = main.getImgInfo();
            var src = imgInfo.src;
            var desc = imgInfo.desc;
            main.setImg(src, desc);

            // For better UX, prefetch the next image so that it will already be loaded when we want to show it
            var getNextImg = function getNextImg() {
                var imgInfo = main.getImgInfo();
                var src = imgInfo.src;
                var desc = imgInfo.desc;

                var prefetchImg = new Image();
                prefetchImg.src = src;
                // if I want to do something once the image is ready: `prefetchImg.onload = function(){}`

                setTimeout(function () {
                    var img = $("<div></div>").addClass("big-img-transition").css("background-image", 'url(' + src + ')');
                    $(".intro-header.big-img").prepend(img);
                    setTimeout(function () {
                        img.css("opacity", "1");
                    }, 50);

                    // after the animation of fading in the new image is done, prefetch the next one
                    //img.one("transitioned webkitTransitionEnd oTransitionEnd MSTransitionEnd", function(){
                    setTimeout(function () {
                        main.setImg(src, desc);
                        img.remove();
                        getNextImg();
                    }, 1000);
                    //});
                }, 6000);
            };

            // If there are multiple images, cycle through them
            if (main.numImgs > 1) {
                getNextImg();
            }
        }
    },

    getImgInfo: function getImgInfo() {
        var randNum = Math.floor(Math.random() * main.numImgs + 1);
        var src = main.bigImgEl.attr("data-img-src-" + randNum);
        var desc = main.bigImgEl.attr("data-img-desc-" + randNum);

        return {
            src: src,
            desc: desc
        };
    },

    setImg: function setImg(src, desc) {
        $(".intro-header.big-img").css("background-image", 'url(' + src + ')');
        if ((typeof desc === "undefined" ? "undefined" : _typeof(desc)) !== ( true ? "undefined" : _typeof(undefined)) && desc !== false) {
            $(".img-desc").text(desc).show();
        } else {
            $(".img-desc").hide();
        }
    }
};

// 2fc73a3a967e97599c9763d05e564189

document.addEventListener('DOMContentLoaded', main.init);

/***/ })
/******/ ]);