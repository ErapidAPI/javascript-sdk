/**
 * Intrinio API
 * Welcome to the Intrinio API! Through our Financial Data Marketplace, we offer a wide selection of financial data feed APIs sourced by our own proprietary processes as well as from many data vendors. For a complete API request / response reference please view the [Intrinio API documentation](https://intrinio.com/documentation/api_v2). If you need additional help in using the API, please visit the [Intrinio website](https://intrinio.com) and click on the chat icon in the lower right corner.
 *
 * OpenAPI spec version: 2.2.0
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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.intrinioSDK);
  }
}(this, function(expect, intrinioSDK) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new intrinioSDK.CryptoSnapshot();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('CryptoSnapshot', function() {
    it('should create an instance of CryptoSnapshot', function() {
      // uncomment below and update the code to test CryptoSnapshot
      //var instane = new intrinioSDK.CryptoSnapshot();
      //expect(instance).to.be.a(intrinioSDK.CryptoSnapshot);
    });

    it('should have the property lastUpdated (base name: "last_updated")', function() {
      // uncomment below and update the code to test the property lastUpdated
      //var instane = new intrinioSDK.CryptoSnapshot();
      //expect(instance).to.be();
    });

    it('should have the property bid (base name: "bid")', function() {
      // uncomment below and update the code to test the property bid
      //var instane = new intrinioSDK.CryptoSnapshot();
      //expect(instance).to.be();
    });

    it('should have the property bidSize (base name: "bid_size")', function() {
      // uncomment below and update the code to test the property bidSize
      //var instane = new intrinioSDK.CryptoSnapshot();
      //expect(instance).to.be();
    });

    it('should have the property ask (base name: "ask")', function() {
      // uncomment below and update the code to test the property ask
      //var instane = new intrinioSDK.CryptoSnapshot();
      //expect(instance).to.be();
    });

    it('should have the property askSize (base name: "ask_size")', function() {
      // uncomment below and update the code to test the property askSize
      //var instane = new intrinioSDK.CryptoSnapshot();
      //expect(instance).to.be();
    });

    it('should have the property change (base name: "change")', function() {
      // uncomment below and update the code to test the property change
      //var instane = new intrinioSDK.CryptoSnapshot();
      //expect(instance).to.be();
    });

    it('should have the property changePercent (base name: "change_percent")', function() {
      // uncomment below and update the code to test the property changePercent
      //var instane = new intrinioSDK.CryptoSnapshot();
      //expect(instance).to.be();
    });

    it('should have the property volume (base name: "volume")', function() {
      // uncomment below and update the code to test the property volume
      //var instane = new intrinioSDK.CryptoSnapshot();
      //expect(instance).to.be();
    });

    it('should have the property open (base name: "open")', function() {
      // uncomment below and update the code to test the property open
      //var instane = new intrinioSDK.CryptoSnapshot();
      //expect(instance).to.be();
    });

    it('should have the property high (base name: "high")', function() {
      // uncomment below and update the code to test the property high
      //var instane = new intrinioSDK.CryptoSnapshot();
      //expect(instance).to.be();
    });

    it('should have the property low (base name: "low")', function() {
      // uncomment below and update the code to test the property low
      //var instane = new intrinioSDK.CryptoSnapshot();
      //expect(instance).to.be();
    });

    it('should have the property lastTradeSide (base name: "last_trade_side")', function() {
      // uncomment below and update the code to test the property lastTradeSide
      //var instane = new intrinioSDK.CryptoSnapshot();
      //expect(instance).to.be();
    });

    it('should have the property lastTradeTime (base name: "last_trade_time")', function() {
      // uncomment below and update the code to test the property lastTradeTime
      //var instane = new intrinioSDK.CryptoSnapshot();
      //expect(instance).to.be();
    });

    it('should have the property lastTradePrice (base name: "last_trade_price")', function() {
      // uncomment below and update the code to test the property lastTradePrice
      //var instane = new intrinioSDK.CryptoSnapshot();
      //expect(instance).to.be();
    });

    it('should have the property lastTradeSize (base name: "last_trade_size")', function() {
      // uncomment below and update the code to test the property lastTradeSize
      //var instane = new intrinioSDK.CryptoSnapshot();
      //expect(instance).to.be();
    });

  });

}));