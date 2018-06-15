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
    define(['ApiClient', 'model/Security', 'model/StockExchange', 'model/StockPrice'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Security'), require('../model/StockExchange'), require('../model/StockPrice'));
  } else {
    // Browser globals (root is window)
    if (!root.intrinio) {
      root.intrinio = {};
    }
    root.intrinio.StockExchangeApi = factory(root.intrinio.ApiClient, root.intrinio.Security, root.intrinio.StockExchange, root.intrinio.StockPrice);
  }
}(this, function(ApiClient, Security, StockExchange, StockPrice) {
  'use strict';

  /**
   * StockExchange service.
   * @module api/StockExchangeApi
   * @version 0.0.1
   */

  /**
   * Constructs a new StockExchangeApi. 
   * @alias module:api/StockExchangeApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Filter Stock Exchanges
     * @param {Object} opts Optional parameters
     * @param {String} opts.city Filter by city
     * @param {String} opts.country Filter by country
     * @param {String} opts.countryCode Filter by ISO country code
     * @param {String} opts.nextPage Gets the next page of data from a previous API call
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/StockExchange>} and HTTP response
     */
    this.filterStockExchangesWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'city': opts['city'],
        'country': opts['country'],
        'country_code': opts['countryCode'],
        'next_page': opts['nextPage'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['HttpHeaderApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [StockExchange];

      return this.apiClient.callApi(
        '/stock_exchanges/filter', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Filter Stock Exchanges
     * @param {Object} opts Optional parameters
     * @param {String} opts.city Filter by city
     * @param {String} opts.country Filter by country
     * @param {String} opts.countryCode Filter by ISO country code
     * @param {String} opts.nextPage Gets the next page of data from a previous API call
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/StockExchange>}
     */
    this.filterStockExchanges = function(opts) {
      return this.filterStockExchangesWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get All Stock Exchanges
     * @param {Object} opts Optional parameters
     * @param {String} opts.nextPage Gets the next page of data from a previous API call
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/StockExchange>} and HTTP response
     */
    this.getAllStockExchangesWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'next_page': opts['nextPage'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['HttpHeaderApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [StockExchange];

      return this.apiClient.callApi(
        '/stock_exchanges', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get All Stock Exchanges
     * @param {Object} opts Optional parameters
     * @param {String} opts.nextPage Gets the next page of data from a previous API call
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/StockExchange>}
     */
    this.getAllStockExchanges = function(opts) {
      return this.getAllStockExchangesWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get Stock Exchange by ID
     * @param {String} identifier A Stock Exchange identifier (MIC or Intrinio ID)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/StockExchange} and HTTP response
     */
    this.getStockExchangeByIdWithHttpInfo = function(identifier) {
      var postBody = null;

      // verify the required parameter 'identifier' is set
      if (identifier === undefined || identifier === null) {
        throw new Error("Missing the required parameter 'identifier' when calling getStockExchangeById");
      }


      var pathParams = {
        'identifier': identifier
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['HttpHeaderApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = StockExchange;

      return this.apiClient.callApi(
        '/stock_exchanges/{identifier}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get Stock Exchange by ID
     * @param {String} identifier A Stock Exchange identifier (MIC or Intrinio ID)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/StockExchange}
     */
    this.getStockExchangeById = function(identifier) {
      return this.getStockExchangeByIdWithHttpInfo(identifier)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get Stock Prices by Exchange
     * Return daily Stock Prices for Securities on the Stock Exchange with &#x60;identifier&#x60; and on the &#x60;price_date&#x60; (or the latest date that prices are available)
     * @param {String} identifier A Stock Exchange identifier (MIC or Intrinio ID)
     * @param {Object} opts Optional parameters
     * @param {Date} opts._date The date for which to return prices
     * @param {String} opts.nextPage Gets the next page of data from a previous API call
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/StockPrice>} and HTTP response
     */
    this.getStockExchangePricesWithHttpInfo = function(identifier, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'identifier' is set
      if (identifier === undefined || identifier === null) {
        throw new Error("Missing the required parameter 'identifier' when calling getStockExchangePrices");
      }


      var pathParams = {
        'identifier': identifier
      };
      var queryParams = {
        'date': opts['_date'],
        'next_page': opts['nextPage'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['HttpHeaderApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [StockPrice];

      return this.apiClient.callApi(
        '/stock_exchanges/{identifier}/prices', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get Stock Prices by Exchange
     * Return daily Stock Prices for Securities on the Stock Exchange with &#x60;identifier&#x60; and on the &#x60;price_date&#x60; (or the latest date that prices are available)
     * @param {String} identifier A Stock Exchange identifier (MIC or Intrinio ID)
     * @param {Object} opts Optional parameters
     * @param {Date} opts._date The date for which to return prices
     * @param {String} opts.nextPage Gets the next page of data from a previous API call
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/StockPrice>}
     */
    this.getStockExchangePrices = function(identifier, opts) {
      return this.getStockExchangePricesWithHttpInfo(identifier, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get Securities by Exchange
     * Return Securities on the Stock Exchange with &#x60;identifier&#x60;
     * @param {String} identifier A Stock Exchange identifier (MIC or Intrinio ID)
     * @param {Object} opts Optional parameters
     * @param {String} opts.nextPage Gets the next page of data from a previous API call
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/Security>} and HTTP response
     */
    this.getStockExchangeSecuritiesWithHttpInfo = function(identifier, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'identifier' is set
      if (identifier === undefined || identifier === null) {
        throw new Error("Missing the required parameter 'identifier' when calling getStockExchangeSecurities");
      }


      var pathParams = {
        'identifier': identifier
      };
      var queryParams = {
        'next_page': opts['nextPage'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['HttpHeaderApiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [Security];

      return this.apiClient.callApi(
        '/stock_exchanges/{identifier}/securities', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get Securities by Exchange
     * Return Securities on the Stock Exchange with &#x60;identifier&#x60;
     * @param {String} identifier A Stock Exchange identifier (MIC or Intrinio ID)
     * @param {Object} opts Optional parameters
     * @param {String} opts.nextPage Gets the next page of data from a previous API call
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/Security>}
     */
    this.getStockExchangeSecurities = function(identifier, opts) {
      return this.getStockExchangeSecuritiesWithHttpInfo(identifier, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
