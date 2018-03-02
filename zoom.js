/*    JavaScript 
      Exercise 07_05
      Photo zoom
 *    Variables and functions
      Author: 
      Date:


 *    Filename: zoom.js
 */

"use strict"; // interpret document contents in JavaScript strict mode

/* global variables */
var photoOrderArray = window.opener.photoOrder;
var figFilename = "images/IMG_0" + photoOrderArray[2] + ".jpg";

/* populate img element and create event listener */
function pageSetup() {
    document.getElementsByTagName("img")[0].src = figFilename; // assign filename to img element
    createEventListener();
}

/* close window*/
function closeWin() {
    window.close();
}

/* create an event listener for the close button*/
function createEventListener() {
    var closeWindowDiv = document.getElementsByTagName("p")[0];
    closeWindowDiv.addEventListener("click", closeWin);
}

/* add img src value and create event listener when page finishes loading */
window.onload = pageSetup;