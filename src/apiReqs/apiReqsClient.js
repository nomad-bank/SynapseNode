const httpClient = require('./httpClient');

const cUrlDebug = require('../constants/cUrlDebug');

const {
  createUser,
  getAllUsers,
  getUser,
  getPlatformTransactions,
  getPlatformNodes,
  getInstitutions,
  issuePublicKey,
  createSubscription,
  getAllSubscriptions,
  getSubscription,
  updateSubscription,
  locateAtms,
  getCryptoQuotes,
  getCryptoMarketData,
  getWebhookLogs,
  getTradeMarketData,
  verifyAddress
} = require('../constants/apiReqNames');

const { addQueryParams, replacePathParams } = require('../helpers/buildUrls');

module.exports[createUser] = ({
                                bodyParams,
                                headers,
                                clientInfo
                              }) => {
  const { host } = clientInfo;

  // WILL NEED TO IMPLEMENT STATIC ENDPOINTS
  return httpClient.post(`${host}/users`, bodyParams, { headers: headers, curlirize: cUrlDebug[createUser] });
};

module.exports[getAllUsers] = ({
                                 query,
                                 page,
                                 per_page,
                                 show_refresh_tokens,
                                 clientInfo
                               }) => {
  const { host, headers } = clientInfo;

  return httpClient.get(
    addQueryParams({
      // STATIC ENDPOINT
      originalUrl: `${host}/users`,
      query,
      page,
      per_page,
      show_refresh_tokens
    }),
    { headers: headers, curlirize: cUrlDebug[getAllUsers] }
  );
};

module.exports[getUser] = ({ user_id, full_dehydrate, headers, clientInfo }) => {
  const { host } = clientInfo;
  // REFACTOR TO USE ADD_QUERY_PARAMS
  const url = `${host}/users/${user_id}?full_dehydrate=${full_dehydrate ? 'yes' : 'no'}`;

  // REFACTOR TO USE REPLACE_PATH_PARAMS
  return httpClient.get(url, { headers: headers, curlirize: cUrlDebug[getUser] });
};

module.exports[getPlatformTransactions] = ({ page, per_page, filter, clientInfo }) => {
  const { host, headers } = clientInfo;

  return httpClient.get(
    addQueryParams({
      // STATIC ENDPOINT
      originalUrl: `${host}/trans`,
      page,
      per_page,
      filter
    }),
    { headers: headers, curlirize: cUrlDebug[getPlatformTransactions] }
  );
};

module.exports[getPlatformNodes] = ({ page, per_page, filter, clientInfo }) => {
  const { host, headers } = clientInfo;
  const url = addQueryParams({
    // STATIC ENDPOINT
    originalUrl: `${host}/nodes`,
    page,
    per_page,
    filter
  });

  return httpClient.get(url, { headers: headers, curlirize: cUrlDebug[getPlatformNodes] });
};

module.exports[getInstitutions] = ({ clientInfo }) => {
  const { host, headers } = clientInfo;
  const url = `${host}/institutions`

  return httpClient.get(url, { headers: headers, curlirize: cUrlDebug[getInstitutions] });
};

module.exports[issuePublicKey] = ({ scope, clientInfo }) => {
  const { host, headers } = clientInfo;
  const url = `${host}/client?issue_public_key=yes&scope=${scope.join()}`;

  return httpClient.get(url, { headers: headers, curlirize: cUrlDebug[issuePublicKey] });
};

module.exports[createSubscription] = ({ url, scope, clientInfo }) => {
  const { host, headers } = clientInfo;
  const reqBody = { url, scope };
  const baseUrl = `${host}/subscriptions`;

  return httpClient.post(baseUrl, reqBody, { headers: headers, curlirize: cUrlDebug[createSubscription] });
};

module.exports[getAllSubscriptions] = ({ page, per_page, clientInfo }) => {
  const { host, headers } = clientInfo;
  const url = addQueryParams({
    // STATIC ENDPOINT?
    originalUrl: `${host}/subscriptions`,
    page,
    per_page
  });

  return httpClient.get(url, { headers: headers, curlirize: cUrlDebug[getAllSubscriptions] });
};

module.exports[getSubscription] = ({ subscription_id, clientInfo }) => {
  const { host, headers } = clientInfo;
  const url = `${host}/subscriptions/${subscription_id}`;

  return httpClient.get(url, { headers: headers, curlirize: cUrlDebug[getSubscription] });
};

module.exports[updateSubscription] = ({ subscription_id, bodyParams, clientInfo}) => {
  const { host, headers } = clientInfo;
  const url = `${host}/subscriptions/${subscription_id}`;
  // CHECK IF VALID BODY PARAMS???
  const reqBody = bodyParams;

  return httpClient.patch(url, reqBody, { headers: headers, curlirize: cUrlDebug[updateSubscription] });
};

module.exports[locateAtms] = ({ page, per_page, zip, radius, lat, lon, clientInfo }) => {
  const { host, headers } = clientInfo;
  const url = addQueryParams({
    originalUrl: `${host}/nodes/atms`,
    page,
    per_page,
    zip,
    radius,
    lat,
    lon
  });

  return httpClient.get(url, { headers: headers, curlirize: cUrlDebug[locateAtms] });
};

module.exports[verifyAddress] = ({ address_city, address_country_code, address_postal_code, address_street, address_subdivision, clientInfo }) => {
  const { host, headers } = clientInfo;
  const reqBody = { address_city, address_country_code, address_postal_code, address_street, address_subdivision };
  const baseUrl = `${host}/address-verification`;

  return httpClient.post(baseUrl, reqBody, { headers: headers, curlirize: cUrlDebug[verifyAddress] });
};

module.exports[getCryptoQuotes] = ({ clientInfo }) => {
  const { host, headers } = clientInfo;
  const url = `${host}/nodes/crypto-quotes`;

  return httpClient.get(url, { headers: headers, curlirize: cUrlDebug[getCryptoQuotes] });
};

module.exports[getCryptoMarketData] = ({ limit, currency, clientInfo }) => {
  const { host, headers } = clientInfo;
  const url = addQueryParams({
    originalUrl: `${host}/nodes/crypto-market-watch`,
    limit,
    currency
  });

  return httpClient.get(url, { headers: headers, curlirize: cUrlDebug[getCryptoMarketData] });
};

module.exports[getWebhookLogs] = ({ clientInfo }) => {
  const { host, headers } = clientInfo;
  const url = `${host}/subscriptions/logs`;

  return httpClient.get(url, { headers: headers, curlirize: cUrlDebug[getWebhookLogs] });
};

module.exports[getTradeMarketData] = ({ ticker, clientInfo }) => {
  const { host, headers } = clientInfo;
  const url = addQueryParams({
    originalUrl: `${host}/nodes/trade-market-watch`,
    ticker
  });

  return httpClient.get(url, { headers: headers, curlirize: cUrlDebug[getTradeMarketData] });
};
