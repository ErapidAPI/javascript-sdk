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
    root.intrinio.StockExchange = factory(root.intrinio.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The StockExchange model module.
   * @module model/StockExchange
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>StockExchange</code>.
   * An organized and regulated financial market in which securities are bought and sold.
   * @alias module:model/StockExchange
   * @class
   */
  var exports = function() {
    var _this = this;











  };

  /**
   * Constructs a <code>StockExchange</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/StockExchange} obj Optional instance to populate.
   * @return {module:model/StockExchange} The populated <code>StockExchange</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('mic')) {
        obj['mic'] = ApiClient.convertToType(data['mic'], 'String');
      }
      if (data.hasOwnProperty('acronym')) {
        obj['acronym'] = ApiClient.convertToType(data['acronym'], 'String');
      }
      if (data.hasOwnProperty('city')) {
        obj['city'] = ApiClient.convertToType(data['city'], 'String');
      }
      if (data.hasOwnProperty('country')) {
        obj['country'] = ApiClient.convertToType(data['country'], 'String');
      }
      if (data.hasOwnProperty('country_code')) {
        obj['country_code'] = ApiClient.convertToType(data['country_code'], 'String');
      }
      if (data.hasOwnProperty('website')) {
        obj['website'] = ApiClient.convertToType(data['website'], 'String');
      }
      if (data.hasOwnProperty('first_stock_price_date')) {
        obj['first_stock_price_date'] = ApiClient.convertToType(data['first_stock_price_date'], 'Date');
      }
      if (data.hasOwnProperty('last_stock_price_date')) {
        obj['last_stock_price_date'] = ApiClient.convertToType(data['last_stock_price_date'], 'Date');
      }
    }
    return obj;
  }

  /**
   * The Intrinio ID for the Stock Exchange
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * The name of the exchange
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * The Market Identifier Code (MIC) of the exchange
   * @member {String} mic
   */
  exports.prototype['mic'] = undefined;
  /**
   * The acronym of the exchange's name
   * @member {String} acronym
   */
  exports.prototype['acronym'] = undefined;
  /**
   * The city in which the exchange is located
   * @member {String} city
   */
  exports.prototype['city'] = undefined;
  /**
   * The country in which the exchange is located
   * @member {String} country
   */
  exports.prototype['country'] = undefined;
  /**
   * The 2-digit code of the exchange's country
   * @member {String} country_code
   */
  exports.prototype['country_code'] = undefined;
  /**
   * The website of the exchange
   * @member {String} website
   */
  exports.prototype['website'] = undefined;
  /**
   * The earliest date for which Intrinio has stock prices for the exchange
   * @member {Date} first_stock_price_date
   */
  exports.prototype['first_stock_price_date'] = undefined;
  /**
   * The latest date for which Intrinio has stock prices for the exchange
   * @member {Date} last_stock_price_date
   */
  exports.prototype['last_stock_price_date'] = undefined;



  return exports;
}));


