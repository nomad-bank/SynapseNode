const httpClient = require('./httpClient');

const cUrlDebug = require('../constants/cUrlDebug');

const {
  addUserKyc,
  deleteExistingDocument,
  updateUser,
  _grabRefreshToken,
  _oauthUser,
  createNode,
  verifyAchMfa,
  getAllUserNodes,
  getNode,
  getUserTransactions,
  triggerDummyTransactions,
  generateUboForm,
  getStatementsByUser,
  getStatementsByNode,
  shipCardNode,
  resetCardNode,
  verifyMicroDeposits,
  reinitiateMicroDeposits,
  updateNode,
  deleteNode,
  generateApplePayToken,
  createTransaction,
  getTransaction,
  getAllNodeTransactions,
  deleteTransaction,
  commentOnStatus,
  disputeCardTransaction,
  getAllSubnets,
  getSubnet,
  createSubnet,
  updateSubnet,
  shipCard,
  registerNewFingerprint,
  supplyDevice2FA,
  verifyFingerprint2FA
} = require('../constants/apiReqNames');

const { addQueryParams, replacePathParams } = require('../helpers/buildUrls');

module.exports[addUserKyc] = ({ bodyParams, userInfo }) => {
  const { host, headers, id } = userInfo;

  return httpClient.patch(`${host}/users/${id}`, bodyParams, { headers: headers, curlirize: cUrlDebug[addUserKyc] });
};

module.exports[deleteExistingDocument] = ({ bodyParams, userInfo }) => {
  const { host, headers, id } = userInfo;

  return httpClient.patch(`${host}/users/${id}`, bodyParams, { headers: headers, curlirize: cUrlDebug[deleteExistingDocument] });
};

module.exports[updateUser] = ({ bodyParams, userInfo }) => {
  const { host, headers, id } = userInfo;

  return httpClient.patch(`${host}/users/${id}`, bodyParams, { headers: headers, curlirize: cUrlDebug[updateUser] });
};

module.exports[_oauthUser] = ({ bodyParams, userInfo }) => {
  const { host, headers, id } = userInfo;

  return httpClient.post(`${host}/oauth/${id}`, bodyParams, { headers: headers, curlirize: cUrlDebug[_oauthUser] });
};

module.exports[createNode] = ({ bodyParams, userInfo }) => {
  const { host, headers, id } = userInfo;

  return httpClient.post(`${host}/users/${id}/nodes`, bodyParams, { headers: headers, curlirize: cUrlDebug[createNode] });
};

module.exports[verifyAchMfa] = ({ access_token, mfa_answer, userInfo }) => {
  const { host, headers, id} = userInfo;

  return httpClient.post(
    `${host}/users/${id}/nodes`,
    {
      access_token,
      mfa_answer
    },
    { headers: headers, curlirize: cUrlDebug[verifyAchMfa] }
  );
};

module.exports[getAllUserNodes] = ({ page, per_page, type, userInfo }) => {
  const { host, headers, id } = userInfo;
  const url = addQueryParams({
    originalUrl: `${host}/users/${id}/nodes`,
    page,
    per_page,
    type
  });

  return httpClient.get(url, { headers: headers, curlirize: cUrlDebug[getAllUserNodes] });
};

module.exports[getNode] = ({ node_id, full_dehydrate, force_refresh, userInfo }) => {
  const { host, headers, id } = userInfo;
  const url = addQueryParams({
    originalUrl: `${host}/users/${id}/nodes/${node_id}`,
    full_dehydrate,
    force_refresh
  });

  return httpClient.get(url, { headers: headers, curlirize: cUrlDebug[getNode] });
};

module.exports[getUserTransactions] = ({ page, per_page, filter, userInfo }) => {
  const { host, headers, id } = userInfo;
  const url = addQueryParams({
    // STATIC ENDPOINT
    originalUrl: `${host}/users/${id}/trans`,
    page,
    per_page,
    filter
  });

  return httpClient.get(url, { headers: headers, curlirize: cUrlDebug[getUserTransactions] });
};

module.exports[triggerDummyTransactions] = ({ node_id, amount, foreign_transaction, is_credit, subnet_id, type, userInfo }) => {
  const { host, headers, id } = userInfo;
  const url = addQueryParams({
    originalUrl: `${host}/users/${id}/nodes/${node_id}/dummy-tran`,
    amount,
    foreign_transaction,
    is_credit,
    subnet_id,
    type
  });

  return httpClient.get(url, { headers: headers, curlirize: cUrlDebug[triggerDummyTransactions] });
};

module.exports[generateUboForm] = ({ bodyParams, userInfo }) => {
  const { host, headers, id } = userInfo;
  const url = `${host}/users/${id}/ubo`;

  return httpClient.patch(url, bodyParams, { headers: headers, curlirize: cUrlDebug[generateUboForm] });
};

module.exports[getStatementsByUser] = ({ page, per_page, userInfo }) => {
  const { host, headers, id } = userInfo;
  const url = addQueryParams({
    originalUrl: `${host}/users/${id}/statements`,
    page,
    per_page
  });

  return httpClient.get(url, { headers: headers, curlirize: cUrlDebug[getStatementsByUser] });
};

module.exports[getStatementsByNode] = ({ node_id, page, per_page, userInfo }) => {
  const { host, headers, id } = userInfo;
  const url = addQueryParams({
    originalUrl: `${host}/users/${id}/nodes/${node_id}/statements`,
    page,
    per_page
  });

  return httpClient.get(url, { headers: headers, curlirize: cUrlDebug[getStatementsByNode] });
};

module.exports[shipCardNode] = ({ node_id, bodyParams, userInfo }) => {
  const { host, headers, id } = userInfo;
  const url = `${host}/users/${id}/nodes/${node_id}?ship=yes`;

  return httpClient.patch(url, bodyParams, { headers: headers, curlirize: cUrlDebug[shipCardNode] });
};

module.exports[resetCardNode] = ({ node_id, userInfo }) => {
  const { host, headers, id } = userInfo;
  const url = `${host}/users/${id}/nodes/${node_id}?reset=yes`;

  return httpClient.patch(url, {}, { headers: headers, curlirize: cUrlDebug[resetCardNode] });
};

module.exports[verifyMicroDeposits] = ({ node_id, bodyParams, userInfo }) => {
  const { host, headers, id } = userInfo;
  const url = `${host}/users/${id}/nodes/${node_id}`;

  return httpClient.patch(url, bodyParams, { headers: headers, curlirize: cUrlDebug[verifyMicroDeposits] });
};

module.exports[reinitiateMicroDeposits] = ({ node_id, userInfo }) => {
  const { host, headers, id } = userInfo;
  const url = `${host}/users/${id}/nodes/${node_id}?resend_micro=yes`;

  return httpClient.patch(url, {}, { headers: headers, curlirize: cUrlDebug[reinitiateMicroDeposits] });
};

module.exports[updateNode] = ({ node_id, bodyParams, userInfo }) => {
  const { host, headers, id } = userInfo;
  const url = `${host}/users/${id}/nodes/${node_id}`;

  return httpClient.patch(url, bodyParams, { headers: headers, curlirize: cUrlDebug[updateNode] });
};

module.exports[deleteNode] = ({ node_id, userInfo }) => {
  const { host, headers, id } = userInfo;
  const url = `${host}/users/${id}/nodes/${node_id}`;

  return httpClient.delete(url, { headers: headers, curlirize: cUrlDebug[deleteNode] });
};

module.exports[generateApplePayToken] = ({ node_id, bodyParams, userInfo }) => {
  const { host, headers, id } = userInfo;
  const url = `${host}/users/${id}/nodes/${node_id}/applepay`;

  return httpClient.patch(url, bodyParams, { headers: headers, curlirize: cUrlDebug[generateApplePayToken] });
};

module.exports[createTransaction] = ({ node_id, bodyParams, userInfo }) => {
  const { host, headers, id } = userInfo;
  const url = `${host}/users/${id}/nodes/${node_id}/trans`;

  return httpClient.post(url, bodyParams, { headers: headers, curlirize: cUrlDebug[createTransaction] });
};

module.exports[getTransaction] = ({ node_id, trans_id, userInfo }) => {
  const { host, headers, id } = userInfo;
  const url = `${host}/users/${id}/nodes/${node_id}/trans/${trans_id}`;

  return httpClient.get(url, { headers: headers, curlirize: cUrlDebug[getTransaction] });
};

module.exports[getAllNodeTransactions] = ({ node_id, trans_id, page, per_page, filter, userInfo }) => {
  const { host, headers, id } = userInfo;
  const url = addQueryParams({
    originalUrl: `${host}/users/${id}/nodes/${node_id}/trans`,
    page,
    per_page,
    filter
  });

  return httpClient.get(url, { headers: headers, curlirize: cUrlDebug[getAllNodeTransactions] });
};

module.exports[deleteTransaction] = ({ node_id, trans_id, userInfo }) => {
  const { host, headers, id } = userInfo;
  const url = `${host}/users/${id}/nodes/${node_id}/trans/${trans_id}`;

  return httpClient.delete(url, { headers: headers, curlirize: cUrlDebug[deleteTransaction] });
};

module.exports[commentOnStatus] = ({ node_id, trans_id, bodyParams, userInfo }) => {
  const { host, headers, id } = userInfo;
  const url = `${host}/users/${id}/nodes/${node_id}/trans/${trans_id}`;

  return httpClient.patch(url, bodyParams, { headers: headers, curlirize: cUrlDebug[commentOnStatus] });
};

module.exports[disputeCardTransaction] = ({ node_id, trans_id, bodyParams, userInfo }) => {
  const { host, headers, id } = userInfo;
  const url = `${host}/users/${id}/nodes/${node_id}/trans/${trans_id}/dispute`;

  return httpClient.patch(url, bodyParams, { headers: headers, curlirize: cUrlDebug[disputeCardTransaction] });
};

module.exports[getAllSubnets] = ({ node_id, page, per_page, userInfo }) => {
  const { host, headers, id } = userInfo;
  const url = addQueryParams({
    originalUrl: `${host}/users/${id}/nodes/${node_id}/subnets`,
    page,
    per_page
  });

  return httpClient.get(url, { headers: headers, curlirize: cUrlDebug[getAllSubnets] });
};

module.exports[getSubnet] = ({ node_id, subnet_id, full_dehydrate, userInfo }) => {
  const { host, headers, id } = userInfo;
  let url = `${host}/users/${id}/nodes/${node_id}/subnets/${subnet_id}`;
  if (full_dehydrate) {
    url = addQueryParams({
      originalUrl: url,
      full_dehydrate: 'yes',
    });
  }

  return httpClient.get(url, { headers: headers, curlirize: cUrlDebug[getSubnet] });
};

module.exports[createSubnet] = ({ node_id, bodyParams, userInfo }) => {
  const { host, headers, id } = userInfo;
  const url = `${host}/users/${id}/nodes/${node_id}/subnets`;

  return httpClient.post(url, bodyParams, { headers: headers, curlirize: cUrlDebug[createSubnet] });
};

module.exports[updateSubnet] = ({ node_id, subnet_id, bodyParams, userInfo }) => {
  const { host, headers, id } = userInfo;
  const url = `${host}/users/${id}/nodes/${node_id}/subnets/${subnet_id}`;

  return httpClient.patch(url, bodyParams, { headers: headers, curlirize: cUrlDebug[updateSubnet] });
};

module.exports[shipCard] = ({ node_id, subnet_id, bodyParams, userInfo }) => {
  const { host, headers, id } = userInfo;
  const url = `${host}/users/${id}/nodes/${node_id}/subnets/${subnet_id}/ship`;

  return httpClient.patch(url, bodyParams, { headers: headers, curlirize: cUrlDebug[shipCard] });
};

module.exports[registerNewFingerprint] = ({ refresh_token, userInfo }) => {
  const { host, headers, id } = userInfo;

  return httpClient.post(
    `${host}/oauth/${id}`,
    {
      refresh_token
    },
    { headers: headers, curlirize: cUrlDebug[registerNewFingerprint] }
  );
};

module.exports[supplyDevice2FA] = ({ device, refresh_token, userInfo }) => {
  const { host, headers, id } = userInfo;

  return httpClient.post(
    `${host}/oauth/${id}`,
    {
      refresh_token,
      "phone_number": device
    },
    { headers: headers, curlirize: cUrlDebug[supplyDevice2FA] }
  );
};

module.exports[verifyFingerprint2FA] = ({ validation_pin, refresh_token, userInfo }) => {
  const { host, headers, id } = userInfo;

  return httpClient.post(
    `${host}/oauth/${id}`,
    {
      refresh_token,
      validation_pin
    },
    { headers: headers, curlirize: cUrlDebug[verifyFingerprint2FA] }
  );
};
