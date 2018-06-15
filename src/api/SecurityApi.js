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
    define(['ApiClient', 'model/DataPointNumber', 'model/DataPointText', 'model/HistoricalData', 'model/Security', 'model/SecurityScreenGroup', 'model/SecurityScreenResult', 'model/SecuritySummary', 'model/StockPriceSummary'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/DataPointNumber'), require('../model/DataPointText'), require('../model/HistoricalData'), require('../model/Security'), require('../model/SecurityScreenGroup'), require('../model/SecurityScreenResult'), require('../model/SecuritySummary'), require('../model/StockPriceSummary'));
  } else {
    // Browser globals (root is window)
    if (!root.intrinio) {
      root.intrinio = {};
    }
    root.intrinio.SecurityApi = factory(root.intrinio.ApiClient, root.intrinio.DataPointNumber, root.intrinio.DataPointText, root.intrinio.HistoricalData, root.intrinio.Security, root.intrinio.SecurityScreenGroup, root.intrinio.SecurityScreenResult, root.intrinio.SecuritySummary, root.intrinio.StockPriceSummary);
  }
}(this, function(ApiClient, DataPointNumber, DataPointText, HistoricalData, Security, SecurityScreenGroup, SecurityScreenResult, SecuritySummary, StockPriceSummary) {
  'use strict';

  /**
   * Security service.
   * @module api/SecurityApi
   * @version 0.0.1
   */

  /**
   * Constructs a new SecurityApi. 
   * @alias module:api/SecurityApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Get All Securiites
     * @param {Object} opts Optional parameters
     * @param {String} opts.nextPage Gets the next page of data from a previous API call
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/SecuritySummary>} and HTTP response
     */
    this.getAllSecuritiesWithHttpInfo = function(opts) {
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
      var returnType = [SecuritySummary];

      return this.apiClient.callApi(
        '/securities', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get All Securiites
     * @param {Object} opts Optional parameters
     * @param {String} opts.nextPage Gets the next page of data from a previous API call
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/SecuritySummary>}
     */
    this.getAllSecurities = function(opts) {
      return this.getAllSecuritiesWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a Security by ID
     * @param {String} identifier A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Security} and HTTP response
     */
    this.getSecurityByIdWithHttpInfo = function(identifier) {
      var postBody = null;

      // verify the required parameter 'identifier' is set
      if (identifier === undefined || identifier === null) {
        throw new Error("Missing the required parameter 'identifier' when calling getSecurityById");
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
      var returnType = Security;

      return this.apiClient.callApi(
        '/securities/{identifier}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a Security by ID
     * @param {String} identifier A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Security}
     */
    this.getSecurityById = function(identifier) {
      return this.getSecurityByIdWithHttpInfo(identifier)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get Security Data Point (Number)
     * Returns a numeric value for the given &#x60;item&#x60; for the Security with the given &#x60;identifier&#x60;
     * @param {String} identifier A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID)
     * @param {String} item An Intrinio data tag or other item
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DataPointNumber} and HTTP response
     */
    this.getSecurityDataPointNumberWithHttpInfo = function(identifier, item) {
      var postBody = null;

      // verify the required parameter 'identifier' is set
      if (identifier === undefined || identifier === null) {
        throw new Error("Missing the required parameter 'identifier' when calling getSecurityDataPointNumber");
      }

      // verify the required parameter 'item' is set
      if (item === undefined || item === null) {
        throw new Error("Missing the required parameter 'item' when calling getSecurityDataPointNumber");
      }


      var pathParams = {
        'identifier': identifier,
        'item': item
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
      var returnType = DataPointNumber;

      return this.apiClient.callApi(
        '/securities/{identifier}/data_point/{item}/number', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get Security Data Point (Number)
     * Returns a numeric value for the given &#x60;item&#x60; for the Security with the given &#x60;identifier&#x60;
     * @param {String} identifier A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID)
     * @param {String} item An Intrinio data tag or other item
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DataPointNumber}
     */
    this.getSecurityDataPointNumber = function(identifier, item) {
      return this.getSecurityDataPointNumberWithHttpInfo(identifier, item)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get Security Data Point (Text)
     * Returns a text value for the given &#x60;item&#x60; for the Security with the given &#x60;identifier&#x60;
     * @param {String} identifier A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID)
     * @param {String} item An Intrinio data tag or other item
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DataPointText} and HTTP response
     */
    this.getSecurityDataPointTextWithHttpInfo = function(identifier, item) {
      var postBody = null;

      // verify the required parameter 'identifier' is set
      if (identifier === undefined || identifier === null) {
        throw new Error("Missing the required parameter 'identifier' when calling getSecurityDataPointText");
      }

      // verify the required parameter 'item' is set
      if (item === undefined || item === null) {
        throw new Error("Missing the required parameter 'item' when calling getSecurityDataPointText");
      }


      var pathParams = {
        'identifier': identifier,
        'item': item
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
      var returnType = DataPointText;

      return this.apiClient.callApi(
        '/securities/{identifier}/data_point/{item}/text', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get Security Data Point (Text)
     * Returns a text value for the given &#x60;item&#x60; for the Security with the given &#x60;identifier&#x60;
     * @param {String} identifier A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID)
     * @param {String} item An Intrinio data tag or other item
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DataPointText}
     */
    this.getSecurityDataPointText = function(identifier, item) {
      return this.getSecurityDataPointTextWithHttpInfo(identifier, item)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get Security Historical Data
     * Returns historical values for the given &#x60;item&#x60; and the Security with the given &#x60;identifier&#x60;
     * @param {String} identifier A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID)
     * @param {String} item An Intrinio data tag or other item
     * @param {Object} opts Optional parameters
     * @param {String} opts.type Filter by type, when applicable
     * @param {Date} opts.startDate Get historical data on or after this date
     * @param {Date} opts.endDate Get historical date on or before this date
     * @param {module:model/String} opts.sortOrder Sort by date &#x60;asc&#x60; or &#x60;desc&#x60; (default to desc)
     * @param {String} opts.nextPage Gets the next page of data from a previous API call
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/HistoricalData>} and HTTP response
     */
    this.getSecurityHistoricalDataWithHttpInfo = function(identifier, item, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'identifier' is set
      if (identifier === undefined || identifier === null) {
        throw new Error("Missing the required parameter 'identifier' when calling getSecurityHistoricalData");
      }

      // verify the required parameter 'item' is set
      if (item === undefined || item === null) {
        throw new Error("Missing the required parameter 'item' when calling getSecurityHistoricalData");
      }


      var pathParams = {
        'identifier': identifier,
        'item': item
      };
      var queryParams = {
        'type': opts['type'],
        'start_date': opts['startDate'],
        'end_date': opts['endDate'],
        'sort_order': opts['sortOrder'],
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
      var returnType = [HistoricalData];

      return this.apiClient.callApi(
        '/securities/{identifier}/historical_data/{item}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get Security Historical Data
     * Returns historical values for the given &#x60;item&#x60; and the Security with the given &#x60;identifier&#x60;
     * @param {String} identifier A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID)
     * @param {String} item An Intrinio data tag or other item
     * @param {Object} opts Optional parameters
     * @param {String} opts.type Filter by type, when applicable
     * @param {Date} opts.startDate Get historical data on or after this date
     * @param {Date} opts.endDate Get historical date on or before this date
     * @param {module:model/String} opts.sortOrder Sort by date &#x60;asc&#x60; or &#x60;desc&#x60; (default to desc)
     * @param {String} opts.nextPage Gets the next page of data from a previous API call
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/HistoricalData>}
     */
    this.getSecurityHistoricalData = function(identifier, item, opts) {
      return this.getSecurityHistoricalDataWithHttpInfo(identifier, item, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get Stock Prices for Security
     * Return stock prices for the Security with the given &#x60;identifier&#x60;
     * @param {String} identifier A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID)
     * @param {Object} opts Optional parameters
     * @param {Date} opts.startDate Return prices on or after the date
     * @param {Date} opts.endDate Return prices on or before the date
     * @param {module:model/String} opts.frequency Return stock prices in the given frequency (default to daily)
     * @param {String} opts.nextPage Gets the next page of data from a previous API call
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/StockPriceSummary>} and HTTP response
     */
    this.getSecurityStockPricesWithHttpInfo = function(identifier, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'identifier' is set
      if (identifier === undefined || identifier === null) {
        throw new Error("Missing the required parameter 'identifier' when calling getSecurityStockPrices");
      }


      var pathParams = {
        'identifier': identifier
      };
      var queryParams = {
        'start_date': opts['startDate'],
        'end_date': opts['endDate'],
        'frequency': opts['frequency'],
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
      var returnType = [StockPriceSummary];

      return this.apiClient.callApi(
        '/securities/{identifier}/prices', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get Stock Prices for Security
     * Return stock prices for the Security with the given &#x60;identifier&#x60;
     * @param {String} identifier A Security identifier (Ticker, FIGI, ISIN, CUSIP, Intrinio ID)
     * @param {Object} opts Optional parameters
     * @param {Date} opts.startDate Return prices on or after the date
     * @param {Date} opts.endDate Return prices on or before the date
     * @param {module:model/String} opts.frequency Return stock prices in the given frequency (default to daily)
     * @param {String} opts.nextPage Gets the next page of data from a previous API call
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/StockPriceSummary>}
     */
    this.getSecurityStockPrices = function(identifier, opts) {
      return this.getSecurityStockPricesWithHttpInfo(identifier, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Screen Securities
     * Screen securities using complex logic
     * @param {Object} opts Optional parameters
     * @param {module:model/SecurityScreenGroup} opts.logic The logic to screen with, consisting of operators, clauses, and nested groups
     * @param {String} opts.orderColumn Results returned sorted by this column
     * @param {module:model/String} opts.orderDirection Sort order to use with the order_column (default to asc)
     * @param {Boolean} opts.primaryOnly Return only primary securities (default to false)
     * @param {String} opts.nextPage Gets the next page of data from a previous API call
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/SecurityScreenResult>} and HTTP response
     */
    this.screenSecuritiesWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = opts['logic'];


      var pathParams = {
      };
      var queryParams = {
        'order_column': opts['orderColumn'],
        'order_direction': opts['orderDirection'],
        'primary_only': opts['primaryOnly'],
        'next_page': opts['nextPage'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['HttpHeaderApiKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [SecurityScreenResult];

      return this.apiClient.callApi(
        '/securities/screen', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Screen Securities
     * Screen securities using complex logic
     * @param {Object} opts Optional parameters
     * @param {module:model/SecurityScreenGroup} opts.logic The logic to screen with, consisting of operators, clauses, and nested groups
     * @param {String} opts.orderColumn Results returned sorted by this column
     * @param {module:model/String} opts.orderDirection Sort order to use with the order_column (default to asc)
     * @param {Boolean} opts.primaryOnly Return only primary securities (default to false)
     * @param {String} opts.nextPage Gets the next page of data from a previous API call
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/SecurityScreenResult>}
     */
    this.screenSecurities = function(opts) {
      return this.screenSecuritiesWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Search Securities
     * Searches for Securities matching the text &#x60;query&#x60;
     * @param {String} query 
     * @param {Object} opts Optional parameters
     * @param {String} opts.nextPage Gets the next page of data from a previous API call
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/SecuritySummary>} and HTTP response
     */
    this.searchSecuritiesWithHttpInfo = function(query, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'query' is set
      if (query === undefined || query === null) {
        throw new Error("Missing the required parameter 'query' when calling searchSecurities");
      }


      var pathParams = {
      };
      var queryParams = {
        'query': query,
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
      var returnType = [SecuritySummary];

      return this.apiClient.callApi(
        '/securities/search', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Search Securities
     * Searches for Securities matching the text &#x60;query&#x60;
     * @param {String} query 
     * @param {Object} opts Optional parameters
     * @param {String} opts.nextPage Gets the next page of data from a previous API call
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/SecuritySummary>}
     */
    this.searchSecurities = function(query, opts) {
      return this.searchSecuritiesWithHttpInfo(query, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
