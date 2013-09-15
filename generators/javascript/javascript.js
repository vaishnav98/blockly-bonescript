/**
 * Copyright 2013 Texas Instruments Inc.
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
 * @fileoverview Generating JavaScript function blocks
 * @author jdk@ti.com (Jason Kridner)
 */
'use strict';

goog.provide('Blockly.JavaScript.javascript');

goog.require('Blockly.JavaScript');

Blockly.JavaScript.javascript_settimeout = function() {
  var value_callback = Blockly.JavaScript.valueToCode(this, 'callback', Blockly.JavaScript.ORDER_COMMA);
  var value_timeout = Blockly.JavaScript.valueToCode(this, 'timeout', Blockly.JavaScript.ORDER_COMMA);
  var code = 'setTimeout(' + value_callback + ', ' + value_timeout + ');\n';
  return code;
};

Blockly.JavaScript.javascript_consolelog = function() {
  var value_log = Blockly.JavaScript.valueToCode(this, 'log', Blockly.JavaScript.ORDER_COMMA) || null;
  var code = 'console.log(' + value_log + ');\n';
  return code;
};
