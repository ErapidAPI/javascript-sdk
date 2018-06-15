/**
 * Intrinio API
 * Welcome to the Intrinio API! Through our Marketplace, we offer a wide selection of financial data feeds sourced by our own proprietary processes as well as from many data vendors. The primary application of the Intrinio API is for use in third-party applications and integrations or for end-users utilizing the Excel add-in and Google Sheets add-on. The Intrinio API uses HTTPS verbs and a RESTful endpoint structure, which makes it easy to request data from Intrinio. Responses are delivered in JSON format. If you need additional help in using the API, go to our home page (https://intrinio.com) and click on the chat icon in the lower right corner.
 *
 * OpenAPI spec version: 2.0.1
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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.intrinio) {
      root.intrinio = {};
    }
    root.intrinio.SecuritySummary = factory(root.intrinio.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The SecuritySummary model module.
   * @module model/SecuritySummary
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>SecuritySummary</code>.
   * The summary of a financial instrument representing shares of ownership in a publicly-traded company
   * @alias module:model/SecuritySummary
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>SecuritySummary</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SecuritySummary} obj Optional instance to populate.
   * @return {module:model/SecuritySummary} The populated <code>SecuritySummary</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('company_id')) {
        obj['company_id'] = ApiClient.convertToType(data['company_id'], 'String');
      }
      if (data.hasOwnProperty('ticker')) {
        obj['ticker'] = ApiClient.convertToType(data['ticker'], 'String');
      }
      if (data.hasOwnProperty('composite_ticker')) {
        obj['composite_ticker'] = ApiClient.convertToType(data['composite_ticker'], 'String');
      }
      if (data.hasOwnProperty('figi')) {
        obj['figi'] = ApiClient.convertToType(data['figi'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
    }
    return obj;
  }

  /**
   * The Intrinio ID for Security
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * The Intrinio ID for the Company for which the Security is issued
   * @member {String} company_id
   */
  exports.prototype['company_id'] = undefined;
  /**
   * The common/local ticker of the Security
   * @member {String} ticker
   */
  exports.prototype['ticker'] = undefined;
  /**
   * The country-composite ticker of the Security
   * @member {String} composite_ticker
   */
  exports.prototype['composite_ticker'] = undefined;
  /**
   * The OpenFIGI identifier
   * @member {String} figi
   */
  exports.prototype['figi'] = undefined;
  /**
   * The name of the Security
   * @member {String} name
   */
  exports.prototype['name'] = undefined;



  return exports;
}));


