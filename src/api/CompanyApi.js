/**
 * Intrinio API
 * Welcome to the Intrinio API! Through our Financial Data Marketplace, we offer a wide selection of financial data feed APIs sourced by our own proprietary processes as well as from many data vendors. For a complete API request / response reference please view the [Intrinio API documentation](https://intrinio.com/documentation/api_v2). If you need additional help in using the API, please visit the [Intrinio website](https://intrinio.com) and click on the chat icon in the lower right corner.
 *
 * OpenAPI spec version: 2.7.0
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
    define(['ApiClient', 'model/ApiResponseCompanies', 'model/ApiResponseCompaniesSearch', 'model/ApiResponseCompanyFilings', 'model/ApiResponseCompanyFundamentals', 'model/ApiResponseCompanyHistoricalData', 'model/ApiResponseCompanyNews', 'model/ApiResponseCompanySecurities', 'model/ApiResponseNews', 'model/Company', 'model/Fundamental'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ApiResponseCompanies'), require('../model/ApiResponseCompaniesSearch'), require('../model/ApiResponseCompanyFilings'), require('../model/ApiResponseCompanyFundamentals'), require('../model/ApiResponseCompanyHistoricalData'), require('../model/ApiResponseCompanyNews'), require('../model/ApiResponseCompanySecurities'), require('../model/ApiResponseNews'), require('../model/Company'), require('../model/Fundamental'));
  } else {
    // Browser globals (root is window)
    if (!root.intrinioSDK) {
      root.intrinioSDK = {};
    }
    root.intrinioSDK.CompanyApi = factory(root.intrinioSDK.ApiClient, root.intrinioSDK.ApiResponseCompanies, root.intrinioSDK.ApiResponseCompaniesSearch, root.intrinioSDK.ApiResponseCompanyFilings, root.intrinioSDK.ApiResponseCompanyFundamentals, root.intrinioSDK.ApiResponseCompanyHistoricalData, root.intrinioSDK.ApiResponseCompanyNews, root.intrinioSDK.ApiResponseCompanySecurities, root.intrinioSDK.ApiResponseNews, root.intrinioSDK.Company, root.intrinioSDK.Fundamental);
  }
}(this, function(ApiClient, ApiResponseCompanies, ApiResponseCompaniesSearch, ApiResponseCompanyFilings, ApiResponseCompanyFundamentals, ApiResponseCompanyHistoricalData, ApiResponseCompanyNews, ApiResponseCompanySecurities, ApiResponseNews, Company, Fundamental) {
  'use strict';

  /**
   * Company service.
   * @module api/CompanyApi
   * @version 3.1.0
   */

  /**
   * Constructs a new CompanyApi. 
   * @alias module:api/CompanyApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * All Companies
     * Returns all Companies. When parameters are specified, returns matching companies.
     * @param {Object} opts Optional parameters
     * @param {Date} opts.latestFilingDate Last filing date
     * @param {String} opts.sic Standard Industrial Classification code
     * @param {module:model/String} opts.template Template
     * @param {String} opts.sector Industry sector
     * @param {String} opts.industryCategory Industry category
     * @param {String} opts.industryGroup Industry group
     * @param {Number} opts.pageSize The number of results to return (default to 100)
     * @param {String} opts.nextPage Gets the next page of data from a previous API call
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ApiResponseCompanies} and HTTP response
     */
    this.getAllCompaniesWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'latest_filing_date': opts['latestFilingDate'],
        'sic': opts['sic'],
        'template': opts['template'],
        'sector': opts['sector'],
        'industry_category': opts['industryCategory'],
        'industry_group': opts['industryGroup'],
        'page_size': opts['pageSize'],
        'next_page': opts['nextPage'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ApiKeyAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = ApiResponseCompanies;

      return this.apiClient.callApi(
        '/companies', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * All Companies
     * Returns all Companies. When parameters are specified, returns matching companies.
     * @param {Object} opts Optional parameters
     * @param {Date} opts.latestFilingDate Last filing date
     * @param {String} opts.sic Standard Industrial Classification code
     * @param {module:model/String} opts.template Template
     * @param {String} opts.sector Industry sector
     * @param {String} opts.industryCategory Industry category
     * @param {String} opts.industryGroup Industry group
     * @param {Number} opts.pageSize The number of results to return (default to 100)
     * @param {String} opts.nextPage Gets the next page of data from a previous API call
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ApiResponseCompanies}
     */
    this.getAllCompanies = function(opts) {
      return this.getAllCompaniesWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * All News
     * Returns all News for all Companies
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The number of results to return (default to 100)
     * @param {String} opts.nextPage Gets the next page of data from a previous API call
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ApiResponseNews} and HTTP response
     */
    this.getAllCompanyNewsWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'page_size': opts['pageSize'],
        'next_page': opts['nextPage'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ApiKeyAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = ApiResponseNews;

      return this.apiClient.callApi(
        '/companies/news', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * All News
     * Returns all News for all Companies
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The number of results to return (default to 100)
     * @param {String} opts.nextPage Gets the next page of data from a previous API call
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ApiResponseNews}
     */
    this.getAllCompanyNews = function(opts) {
      return this.getAllCompanyNewsWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Lookup Company
     * Returns the Company with the given &#x60;identifier&#x60;
     * @param {String} identifier A Company identifier (Ticker, CIK, LEI, Intrinio ID)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Company} and HTTP response
     */
    this.getCompanyWithHttpInfo = function(identifier) {
      var postBody = null;

      // verify the required parameter 'identifier' is set
      if (identifier === undefined || identifier === null) {
        throw new Error("Missing the required parameter 'identifier' when calling getCompany");
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

      var authNames = ['ApiKeyAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Company;

      return this.apiClient.callApi(
        '/companies/{identifier}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Lookup Company
     * Returns the Company with the given &#x60;identifier&#x60;
     * @param {String} identifier A Company identifier (Ticker, CIK, LEI, Intrinio ID)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Company}
     */
    this.getCompany = function(identifier) {
      return this.getCompanyWithHttpInfo(identifier)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Data Point (Number) for Company
     * Returns a numeric value for the given &#x60;tag&#x60; for the Company with the given &#x60;identifier&#x60;
     * @param {String} identifier A Company identifier (Ticker, CIK, LEI, Intrinio ID)
     * @param {String} tag An Intrinio data tag ID or code (&lt;a href&#x3D;&#39;https://data.intrinio.com/data-tags&#39;&gt;reference&lt;/a&gt;)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link 'Number'} and HTTP response
     */
    this.getCompanyDataPointNumberWithHttpInfo = function(identifier, tag) {
      var postBody = null;

      // verify the required parameter 'identifier' is set
      if (identifier === undefined || identifier === null) {
        throw new Error("Missing the required parameter 'identifier' when calling getCompanyDataPointNumber");
      }

      // verify the required parameter 'tag' is set
      if (tag === undefined || tag === null) {
        throw new Error("Missing the required parameter 'tag' when calling getCompanyDataPointNumber");
      }


      var pathParams = {
        'identifier': identifier,
        'tag': tag
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ApiKeyAuth'];
      var contentTypes = [];
      var accepts = ['text/plain; charset=utf-8'];
      var returnType = 'Number';

      return this.apiClient.callApi(
        '/companies/{identifier}/data_point/{tag}/number', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Data Point (Number) for Company
     * Returns a numeric value for the given &#x60;tag&#x60; for the Company with the given &#x60;identifier&#x60;
     * @param {String} identifier A Company identifier (Ticker, CIK, LEI, Intrinio ID)
     * @param {String} tag An Intrinio data tag ID or code (&lt;a href&#x3D;&#39;https://data.intrinio.com/data-tags&#39;&gt;reference&lt;/a&gt;)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link 'Number'}
     */
    this.getCompanyDataPointNumber = function(identifier, tag) {
      return this.getCompanyDataPointNumberWithHttpInfo(identifier, tag)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Data Point (Text) for Company
     * Returns a text value for the given &#x60;tag&#x60; for the Company with the given &#x60;identifier&#x60;
     * @param {String} identifier A Company identifier (Ticker, CIK, LEI, Intrinio ID)
     * @param {String} tag An Intrinio data tag ID or code (&lt;a href&#x3D;&#39;https://data.intrinio.com/data-tags&#39;&gt;reference&lt;/a&gt;)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link 'String'} and HTTP response
     */
    this.getCompanyDataPointTextWithHttpInfo = function(identifier, tag) {
      var postBody = null;

      // verify the required parameter 'identifier' is set
      if (identifier === undefined || identifier === null) {
        throw new Error("Missing the required parameter 'identifier' when calling getCompanyDataPointText");
      }

      // verify the required parameter 'tag' is set
      if (tag === undefined || tag === null) {
        throw new Error("Missing the required parameter 'tag' when calling getCompanyDataPointText");
      }


      var pathParams = {
        'identifier': identifier,
        'tag': tag
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ApiKeyAuth'];
      var contentTypes = [];
      var accepts = ['text/plain; charset=utf-8'];
      var returnType = 'String';

      return this.apiClient.callApi(
        '/companies/{identifier}/data_point/{tag}/text', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Data Point (Text) for Company
     * Returns a text value for the given &#x60;tag&#x60; for the Company with the given &#x60;identifier&#x60;
     * @param {String} identifier A Company identifier (Ticker, CIK, LEI, Intrinio ID)
     * @param {String} tag An Intrinio data tag ID or code (&lt;a href&#x3D;&#39;https://data.intrinio.com/data-tags&#39;&gt;reference&lt;/a&gt;)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link 'String'}
     */
    this.getCompanyDataPointText = function(identifier, tag) {
      return this.getCompanyDataPointTextWithHttpInfo(identifier, tag)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * All Filings by Company
     * Returns a complete list of SEC filings for the Company with the given &#x60;identifier&#x60;
     * @param {String} identifier A Company identifier (Ticker, CIK, LEI, Intrinio ID)
     * @param {Object} opts Optional parameters
     * @param {String} opts.reportType Filter by &lt;a href&#x3D;\&quot;/documentation/sec_filing_report_types\&quot; target&#x3D;\&quot;_blank\&quot;&gt;report type&lt;/a&gt;. Separate values with commas to return multiple report types.
     * @param {Date} opts.startDate Filed on or after the given date
     * @param {Date} opts.endDate Filed before or after the given date
     * @param {Number} opts.pageSize The number of results to return (default to 100)
     * @param {String} opts.nextPage Gets the next page of data from a previous API call
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ApiResponseCompanyFilings} and HTTP response
     */
    this.getCompanyFilingsWithHttpInfo = function(identifier, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'identifier' is set
      if (identifier === undefined || identifier === null) {
        throw new Error("Missing the required parameter 'identifier' when calling getCompanyFilings");
      }


      var pathParams = {
        'identifier': identifier
      };
      var queryParams = {
        'report_type': opts['reportType'],
        'start_date': opts['startDate'],
        'end_date': opts['endDate'],
        'page_size': opts['pageSize'],
        'next_page': opts['nextPage'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ApiKeyAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = ApiResponseCompanyFilings;

      return this.apiClient.callApi(
        '/companies/{identifier}/filings', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * All Filings by Company
     * Returns a complete list of SEC filings for the Company with the given &#x60;identifier&#x60;
     * @param {String} identifier A Company identifier (Ticker, CIK, LEI, Intrinio ID)
     * @param {Object} opts Optional parameters
     * @param {String} opts.reportType Filter by &lt;a href&#x3D;\&quot;/documentation/sec_filing_report_types\&quot; target&#x3D;\&quot;_blank\&quot;&gt;report type&lt;/a&gt;. Separate values with commas to return multiple report types.
     * @param {Date} opts.startDate Filed on or after the given date
     * @param {Date} opts.endDate Filed before or after the given date
     * @param {Number} opts.pageSize The number of results to return (default to 100)
     * @param {String} opts.nextPage Gets the next page of data from a previous API call
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ApiResponseCompanyFilings}
     */
    this.getCompanyFilings = function(identifier, opts) {
      return this.getCompanyFilingsWithHttpInfo(identifier, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * All Fundamentals by Company
     * Returns all Fundamentals for the Company with the given &#x60;identifier&#x60;. Returns Fundamentals matching parameters when supplied.
     * @param {String} identifier A Company identifier (Ticker, CIK, LEI, Intrinio ID)
     * @param {Object} opts Optional parameters
     * @param {Date} opts.filedAfter Filed on or after this date
     * @param {Date} opts.filedBefore Filed on or before this date
     * @param {Boolean} opts.reportedOnly Only as-reported fundamentals
     * @param {Number} opts.fiscalYear Only for the given fiscal year
     * @param {module:model/String} opts.statementCode Only of the given statement code
     * @param {module:model/String} opts.type Only of the given type
     * @param {Date} opts.startDate Only on or after the given date
     * @param {Date} opts.endDate Only on or before the given date
     * @param {Number} opts.pageSize The number of results to return (default to 100)
     * @param {String} opts.nextPage Gets the next page of data from a previous API call
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ApiResponseCompanyFundamentals} and HTTP response
     */
    this.getCompanyFundamentalsWithHttpInfo = function(identifier, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'identifier' is set
      if (identifier === undefined || identifier === null) {
        throw new Error("Missing the required parameter 'identifier' when calling getCompanyFundamentals");
      }


      var pathParams = {
        'identifier': identifier
      };
      var queryParams = {
        'filed_after': opts['filedAfter'],
        'filed_before': opts['filedBefore'],
        'reported_only': opts['reportedOnly'],
        'fiscal_year': opts['fiscalYear'],
        'statement_code': opts['statementCode'],
        'type': opts['type'],
        'start_date': opts['startDate'],
        'end_date': opts['endDate'],
        'page_size': opts['pageSize'],
        'next_page': opts['nextPage'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ApiKeyAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = ApiResponseCompanyFundamentals;

      return this.apiClient.callApi(
        '/companies/{identifier}/fundamentals', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * All Fundamentals by Company
     * Returns all Fundamentals for the Company with the given &#x60;identifier&#x60;. Returns Fundamentals matching parameters when supplied.
     * @param {String} identifier A Company identifier (Ticker, CIK, LEI, Intrinio ID)
     * @param {Object} opts Optional parameters
     * @param {Date} opts.filedAfter Filed on or after this date
     * @param {Date} opts.filedBefore Filed on or before this date
     * @param {Boolean} opts.reportedOnly Only as-reported fundamentals
     * @param {Number} opts.fiscalYear Only for the given fiscal year
     * @param {module:model/String} opts.statementCode Only of the given statement code
     * @param {module:model/String} opts.type Only of the given type
     * @param {Date} opts.startDate Only on or after the given date
     * @param {Date} opts.endDate Only on or before the given date
     * @param {Number} opts.pageSize The number of results to return (default to 100)
     * @param {String} opts.nextPage Gets the next page of data from a previous API call
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ApiResponseCompanyFundamentals}
     */
    this.getCompanyFundamentals = function(identifier, opts) {
      return this.getCompanyFundamentalsWithHttpInfo(identifier, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Historical Data for Company
     * Returns historical values for the given &#x60;tag&#x60; and the Company with the given &#x60;identifier&#x60;
     * @param {String} identifier A Company identifier (Ticker, CIK, LEI, Intrinio ID)
     * @param {String} tag An Intrinio data tag ID or code (&lt;a href&#x3D;&#39;https://data.intrinio.com/data-tags&#39;&gt;reference&lt;/a&gt;)
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.frequency Return historical data in the given frequency (default to daily)
     * @param {String} opts.type Filter by type, when applicable
     * @param {Date} opts.startDate Get historical data on or after this date
     * @param {Date} opts.endDate Get historical data on or before this date
     * @param {module:model/String} opts.sortOrder Sort by date &#x60;asc&#x60; or &#x60;desc&#x60; (default to desc)
     * @param {Number} opts.pageSize The number of results to return (default to 100)
     * @param {String} opts.nextPage Gets the next page of data from a previous API call
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ApiResponseCompanyHistoricalData} and HTTP response
     */
    this.getCompanyHistoricalDataWithHttpInfo = function(identifier, tag, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'identifier' is set
      if (identifier === undefined || identifier === null) {
        throw new Error("Missing the required parameter 'identifier' when calling getCompanyHistoricalData");
      }

      // verify the required parameter 'tag' is set
      if (tag === undefined || tag === null) {
        throw new Error("Missing the required parameter 'tag' when calling getCompanyHistoricalData");
      }


      var pathParams = {
        'identifier': identifier,
        'tag': tag
      };
      var queryParams = {
        'frequency': opts['frequency'],
        'type': opts['type'],
        'start_date': opts['startDate'],
        'end_date': opts['endDate'],
        'sort_order': opts['sortOrder'],
        'page_size': opts['pageSize'],
        'next_page': opts['nextPage'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ApiKeyAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = ApiResponseCompanyHistoricalData;

      return this.apiClient.callApi(
        '/companies/{identifier}/historical_data/{tag}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Historical Data for Company
     * Returns historical values for the given &#x60;tag&#x60; and the Company with the given &#x60;identifier&#x60;
     * @param {String} identifier A Company identifier (Ticker, CIK, LEI, Intrinio ID)
     * @param {String} tag An Intrinio data tag ID or code (&lt;a href&#x3D;&#39;https://data.intrinio.com/data-tags&#39;&gt;reference&lt;/a&gt;)
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.frequency Return historical data in the given frequency (default to daily)
     * @param {String} opts.type Filter by type, when applicable
     * @param {Date} opts.startDate Get historical data on or after this date
     * @param {Date} opts.endDate Get historical data on or before this date
     * @param {module:model/String} opts.sortOrder Sort by date &#x60;asc&#x60; or &#x60;desc&#x60; (default to desc)
     * @param {Number} opts.pageSize The number of results to return (default to 100)
     * @param {String} opts.nextPage Gets the next page of data from a previous API call
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ApiResponseCompanyHistoricalData}
     */
    this.getCompanyHistoricalData = function(identifier, tag, opts) {
      return this.getCompanyHistoricalDataWithHttpInfo(identifier, tag, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * All News by Company
     * Returns news for the Company with the given &#x60;identifier&#x60;
     * @param {String} identifier A Company identifier (Ticker, CIK, LEI, Intrinio ID)
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The number of results to return (default to 100)
     * @param {String} opts.nextPage Gets the next page of data from a previous API call
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ApiResponseCompanyNews} and HTTP response
     */
    this.getCompanyNewsWithHttpInfo = function(identifier, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'identifier' is set
      if (identifier === undefined || identifier === null) {
        throw new Error("Missing the required parameter 'identifier' when calling getCompanyNews");
      }


      var pathParams = {
        'identifier': identifier
      };
      var queryParams = {
        'page_size': opts['pageSize'],
        'next_page': opts['nextPage'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ApiKeyAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = ApiResponseCompanyNews;

      return this.apiClient.callApi(
        '/companies/{identifier}/news', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * All News by Company
     * Returns news for the Company with the given &#x60;identifier&#x60;
     * @param {String} identifier A Company identifier (Ticker, CIK, LEI, Intrinio ID)
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The number of results to return (default to 100)
     * @param {String} opts.nextPage Gets the next page of data from a previous API call
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ApiResponseCompanyNews}
     */
    this.getCompanyNews = function(identifier, opts) {
      return this.getCompanyNewsWithHttpInfo(identifier, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * All Securities by Company
     * Returns Securities for the Company with the given &#x60;identifier&#x60;
     * @param {String} identifier A Company identifier (Ticker, CIK, LEI, Intrinio ID)
     * @param {Object} opts Optional parameters
     * @param {String} opts.nextPage Gets the next page of data from a previous API call
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ApiResponseCompanySecurities} and HTTP response
     */
    this.getCompanySecuritiesWithHttpInfo = function(identifier, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'identifier' is set
      if (identifier === undefined || identifier === null) {
        throw new Error("Missing the required parameter 'identifier' when calling getCompanySecurities");
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

      var authNames = ['ApiKeyAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = ApiResponseCompanySecurities;

      return this.apiClient.callApi(
        '/companies/{identifier}/securities', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * All Securities by Company
     * Returns Securities for the Company with the given &#x60;identifier&#x60;
     * @param {String} identifier A Company identifier (Ticker, CIK, LEI, Intrinio ID)
     * @param {Object} opts Optional parameters
     * @param {String} opts.nextPage Gets the next page of data from a previous API call
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ApiResponseCompanySecurities}
     */
    this.getCompanySecurities = function(identifier, opts) {
      return this.getCompanySecuritiesWithHttpInfo(identifier, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Lookup Fundamental by Company
     * Returns the Fundamental for the Company with the given &#x60;identifier&#x60; and with the given parameters
     * @param {String} identifier A Company identifier (Ticker, CIK, LEI, Intrinio ID)
     * @param {module:model/String} statementCode The statement code
     * @param {module:model/String} fiscalPeriod The fiscal period
     * @param {Number} fiscalYear The fiscal year
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Fundamental} and HTTP response
     */
    this.lookupCompanyFundamentalWithHttpInfo = function(identifier, statementCode, fiscalPeriod, fiscalYear) {
      var postBody = null;

      // verify the required parameter 'identifier' is set
      if (identifier === undefined || identifier === null) {
        throw new Error("Missing the required parameter 'identifier' when calling lookupCompanyFundamental");
      }

      // verify the required parameter 'statementCode' is set
      if (statementCode === undefined || statementCode === null) {
        throw new Error("Missing the required parameter 'statementCode' when calling lookupCompanyFundamental");
      }

      // verify the required parameter 'fiscalPeriod' is set
      if (fiscalPeriod === undefined || fiscalPeriod === null) {
        throw new Error("Missing the required parameter 'fiscalPeriod' when calling lookupCompanyFundamental");
      }

      // verify the required parameter 'fiscalYear' is set
      if (fiscalYear === undefined || fiscalYear === null) {
        throw new Error("Missing the required parameter 'fiscalYear' when calling lookupCompanyFundamental");
      }


      var pathParams = {
        'identifier': identifier,
        'statement_code': statementCode,
        'fiscal_period': fiscalPeriod,
        'fiscal_year': fiscalYear
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ApiKeyAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Fundamental;

      return this.apiClient.callApi(
        '/companies/{identifier}/fundamentals/lookup/{statement_code}/{fiscal_year}/{fiscal_period}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Lookup Fundamental by Company
     * Returns the Fundamental for the Company with the given &#x60;identifier&#x60; and with the given parameters
     * @param {String} identifier A Company identifier (Ticker, CIK, LEI, Intrinio ID)
     * @param {module:model/String} statementCode The statement code
     * @param {module:model/String} fiscalPeriod The fiscal period
     * @param {Number} fiscalYear The fiscal year
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Fundamental}
     */
    this.lookupCompanyFundamental = function(identifier, statementCode, fiscalPeriod, fiscalYear) {
      return this.lookupCompanyFundamentalWithHttpInfo(identifier, statementCode, fiscalPeriod, fiscalYear)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Search Companies
     * Searches for Companies matching the text &#x60;query&#x60;
     * @param {String} query Search parameters
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The number of results to return (default to 100)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ApiResponseCompaniesSearch} and HTTP response
     */
    this.searchCompaniesWithHttpInfo = function(query, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'query' is set
      if (query === undefined || query === null) {
        throw new Error("Missing the required parameter 'query' when calling searchCompanies");
      }


      var pathParams = {
      };
      var queryParams = {
        'query': query,
        'page_size': opts['pageSize'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ApiKeyAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = ApiResponseCompaniesSearch;

      return this.apiClient.callApi(
        '/companies/search', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Search Companies
     * Searches for Companies matching the text &#x60;query&#x60;
     * @param {String} query Search parameters
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize The number of results to return (default to 100)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ApiResponseCompaniesSearch}
     */
    this.searchCompanies = function(query, opts) {
      return this.searchCompaniesWithHttpInfo(query, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
