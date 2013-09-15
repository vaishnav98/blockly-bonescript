/**
 * Copyright 2013 Texas Instruments
 * http://beagleboard.org/Support/BoneScript/blockly
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview BoneScript blocks for Blockly
 * @author jdk@ti.com (Jason Kridner)
 */
'use strict';

goog.provide('Blockly.Language.bonescript');

goog.require('Blockly.Language');

Blockly.Language.bonescript_getplatform = {
  helpUrl: 'http://beagleboard.org/Support/BoneScript/getPlatform/',
  init: function() {
    this.setColour(210);
    this.appendDummyInput()
        .appendTitle("getPlatform");
    this.appendStatementInput("callback")
        .appendTitle(new Blockly.FieldTextInput("x"), "val");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};
