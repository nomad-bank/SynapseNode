import {AxiosPromise} from "axios";

export interface User {

  addUserKyc(bodyParams): AxiosPromise;
  deleteExistingDocument(bodyParams): AxiosPromise;
  updateUser(bodyParams): AxiosPromise;
  createNode(bodyParams, idempotency_key): AxiosPromise;
  verifyAchMfa(access_token, mfa_answer, idempotency_key): AxiosPromise;
  getAllUserNodes(queryParams): AxiosPromise;
  getNode(node_id, queryParams): AxiosPromise;
  getUserTransactions(queryParams): AxiosPromise;
  triggerDummyTransactions(node_id, queryParams): AxiosPromise;
  generateUboForm(bodyParams): AxiosPromise;
  getStatementsByUser(queryParams): AxiosPromise;
  getStatementsByNode(node_id, queryParams): AxiosPromise;
  shipCardNode(node_id, bodyParams): AxiosPromise;
  resetCardNode(node_id): AxiosPromise;
  verifyMicroDeposits(node_id, bodyParams): AxiosPromise;
  reinitiateMicroDeposits(node_id): AxiosPromise;
  updateNode(node_id, bodyParams): AxiosPromise;
  deleteNode(node_id): AxiosPromise;
  generateApplePayToken(node_id, bodyParams): AxiosPromise;
  createTransaction(node_id, bodyParams, idempotency_key): AxiosPromise;
  getTransaction(node_id, trans_id): AxiosPromise;
  getAllNodeTransactions(node_id, queryParams): AxiosPromise;
  deleteTransaction(node_id, trans_id): AxiosPromise;
  commentOnStatus(node_id, trans_id, bodyParams): AxiosPromise;
  disputeCardTransaction(node_id, trans_id, bodyParams): AxiosPromise;
  getAllSubnets(node_id, queryParams): AxiosPromise;
  getSubnet(node_id, subnet_id): AxiosPromise;
  createSubnet(node_id, bodyParams, idempotency_key): AxiosPromise;
  updateSubnet(node_id, subnet_id, bodyParams): AxiosPromise;
  shipCard(node_id, subnet_id, bodyParams): AxiosPromise;
  registerNewFingerprint(fp): Promise<AxiosPromise>;
  supplyDevice2FA(fp, device): Promise<AxiosPromise>;
  verifyFingerprint2FA(fp, validation_pin): Promise<AxiosPromise>;
  updateIpAddress(ip): object;

}

export interface Client {

  createUser(bodyParams, ip_address, options): Promise<User>;
  getAllUsers(queryParams): AxiosPromise;
  getUser(user_id, options): Promise<User>;
  getPlatformTransactions(queryParams): AxiosPromise;
  getPlatformNodes(queryParams): AxiosPromise;
  getInstitutions(): AxiosPromise;
  issuePublicKey(scope): AxiosPromise;
  createSubscription(url, scope, idempotency_key): AxiosPromise;
  getAllSubscriptions(queryParams): AxiosPromise;
  getSubscription(subscription_id): AxiosPromise;
  updateSubscription(subscription_id, bodyParams): AxiosPromise;
  locateAtms(queryParams): AxiosPromise;
  getCryptoQuotes(): AxiosPromise;
  getCryptoMarketData(queryParams): AxiosPromise;
  getWebhookLogs(): AxiosPromise;
  getTradeMarketData(queryParams): AxiosPromise;

}
