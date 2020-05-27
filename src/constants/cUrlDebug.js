const {

  //Client
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
  verifyAddress,

  // User
  addUserKyc,
  deleteExistingDocument,
  updateUser,
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

//Client
module.exports[createUser] = false;
module.exports[getAllUsers] = false;
module.exports[getUser] = false;
module.exports[getPlatformTransactions] = false;
module.exports[getPlatformNodes] = false;
module.exports[getInstitutions] = false;
module.exports[issuePublicKey] = false;
module.exports[createSubscription] = false;
module.exports[getAllSubscriptions] = false;
module.exports[getSubscription] = false;
module.exports[updateSubscription] = false;
module.exports[locateAtms] = false;
module.exports[verifyAddress] = false;
module.exports[getCryptoQuotes] = false;
module.exports[getCryptoMarketData] = false;
module.exports[getWebhookLogs] = false;
module.exports[getTradeMarketData] = false;

// User
module.exports[addUserKyc] = false;
module.exports[deleteExistingDocument] = false;
module.exports[updateUser] = false;
module.exports[_oauthUser] = false;
module.exports[createNode] = false;
module.exports[verifyAchMfa] = false;
module.exports[getAllUserNodes] = false;
module.exports[getNode] = false;
module.exports[getUserTransactions] = false;
module.exports[triggerDummyTransactions] = false;
module.exports[generateUboForm] = false;
module.exports[getStatementsByUser] = false;
module.exports[getStatementsByNode] = false;
module.exports[shipCardNode] = false;
module.exports[resetCardNode] = false;
module.exports[verifyMicroDeposits] = false;
module.exports[reinitiateMicroDeposits] = false;
module.exports[updateNode] = false;
module.exports[deleteNode] = false;
module.exports[generateApplePayToken] = false;
module.exports[createTransaction] = false;
module.exports[getTransaction] = false;
module.exports[getAllNodeTransactions] = false;
module.exports[deleteTransaction] = false;
module.exports[commentOnStatus] = false;
module.exports[disputeCardTransaction] = false;
module.exports[getAllSubnets] = false;
module.exports[getSubnet] = false;
module.exports[createSubnet] = false;
module.exports[updateSubnet] = false;
module.exports[shipCard] = false;
module.exports[registerNewFingerprint] = false;
module.exports[supplyDevice2FA] = false;
module.exports[verifyFingerprint2FA] = false;
