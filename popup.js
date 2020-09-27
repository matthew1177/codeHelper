// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

let changeColor = document.getElementById('changeColor');

changeColor.onclick = function(element) {
  let color = element.target.value;
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		chrome.tabs.executeScript(
			tabs[0].id,
			{file: 'three.min.js'}, function() {
				chrome.tabs.executeScript(tabs[0].id, {file: 'gsap.min.js'}, function() {
					chrome.tabs.executeScript(tabs[0].id, {file: 'codeBuilder.js'});
				});
				
			});
	});
};

let c3 = document.getElementById('c3');

c3.onclick = function(element) {
  let color = element.target.value;
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		chrome.tabs.executeScript(
			tabs[0].id,
			{file: 'three.min.js'}, function() {
				chrome.tabs.executeScript(tabs[0].id, {file: 'gsap.min.js'}, function() {
					chrome.tabs.executeScript(tabs[0].id, {file: 'codeBuilder2.js'});
				});
				
			});
	});
};

let c2 = document.getElementById('c2');

c2.onclick = function(element) {
  let color = element.target.value;
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(
        tabs[0].id,
        {file: "hover.js"});
    chrome.tabs.insertCSS(
        tabs[0].id,
        {file: "hover.css"});
    
  });
};