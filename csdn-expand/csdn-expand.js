// ==UserScript==
// @name         csdn-expand
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  自动展开CSDN隐藏的正文
// @author       Nicolas·Lemon
// @match        *://blog.csdn.net/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    // 获取页面元素，移除相应css样式
    let e = $('.hide-article-box');
    if (e.length > 0) {
        e.remove();
        $('#article_content').removeAttr('style');
    }

})();