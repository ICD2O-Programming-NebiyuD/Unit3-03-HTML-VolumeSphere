// Copyright (c) 2022 Ms Raffin All rights reserved
//
// Created by: Ms Raffin
// Created on: March 2022
// This file contains the JS functions for index.html

"use strict";
/**
 * This function calculates area and perimeter of triangle.
 */
function calculate () {
  // input
  let radius = parseInt(document.getElementById('radius').value);


  // process
  let volume = radius ** 3 * Math.PI * (4/3);

  // output
  document.getElementById('volume').innerHTML = 'Volume is: ' + volume + ' cm3'

}
