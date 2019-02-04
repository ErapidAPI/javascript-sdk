/**
 * Intrinio API
 * Welcome to the Intrinio API! Through our Financial Data Marketplace, we offer a wide selection of financial data feed APIs sourced by our own proprietary processes as well as from many data vendors. For a complete API request / response reference please view the [Intrinio API documentation](https://intrinio.com/documentation/api_v2). If you need additional help in using the API, please visit the [Intrinio website](https://intrinio.com) and click on the chat icon in the lower right corner.
 *
 * OpenAPI spec version: 2.1.1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.0-SNAPSHOT
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/SecurityScreenClause', 'model/SecurityScreenGroup'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./SecurityScreenClause'), require('./SecurityScreenGroup'));
  } else {
    // Browser globals (root is window)
    if (!root.intrinioSDK) {
      root.intrinioSDK = {};
    }
    root.intrinioSDK.SecurityScreenGroup = factory(root.intrinioSDK.ApiClient, root.intrinioSDK.SecurityScreenClause, root.intrinioSDK.SecurityScreenGroup);
  }
}(this, function(ApiClient, SecurityScreenClause, SecurityScreenGroup) {
  'use strict';




  /**
   * The SecurityScreenGroup model module.
   * @module model/SecurityScreenGroup
   * @version 2.0.0
   */

  /**
   * Constructs a new <code>SecurityScreenGroup</code>.
   * A group of clauses and groups combined with a logic operator, used to screen securities
   * @alias module:model/SecurityScreenGroup
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>SecurityScreenGroup</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SecurityScreenGroup} obj Optional instance to populate.
   * @return {module:model/SecurityScreenGroup} The populated <code>SecurityScreenGroup</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('operator')) {
        obj['operator'] = ApiClient.convertToType(data['operator'], 'String');
      }
      if (data.hasOwnProperty('clauses')) {
        obj['clauses'] = ApiClient.convertToType(data['clauses'], [SecurityScreenClause]);
      }
      if (data.hasOwnProperty('groups')) {
        obj['groups'] = ApiClient.convertToType(data['groups'], [SecurityScreenGroup]);
      }
    }
    return obj;
  }

  /**
   * The logic operator for the group (AND, OR, NOT)
   * @member {String} operator
   */
  exports.prototype['operator'] = undefined;
  /**
   * The logic clauses in the group
   * @member {Array.<module:model/SecurityScreenClause>} clauses
   */
  exports.prototype['clauses'] = undefined;
  /**
   * The nested groups within the group
   * @member {Array.<module:model/SecurityScreenGroup>} groups
   */
  exports.prototype['groups'] = undefined;



  return exports;
}));


