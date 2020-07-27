const curlirize = require('axios-curlirize');
const axiosLogger = require('axios-logger');
const axiosInstance = require('axios').default.create();

curlirize(axiosInstance, (result, err) => {
  const { command } = result;
  if (err) {
    console.error(err);
  } else {
    console.info(`[SYNAPSE CLIENT][cURL] ${command}`);
  }
});

axiosInstance.interceptors.response.use(response => {
  return axiosLogger.responseLogger(response, {
    prefixText: 'SYNAPSE CLIENT'
  });
});

axiosInstance.interceptors.response.use(response => {
  console.log(`LAA ERROR NORMAL JSON -> ${JSON.stringify(response)}`);
  console.log(`LAA ERROR NORMAL NORMAL -> ${response}`);
  return axiosLogger.responseLogger(response);
});

axiosInstance.interceptors.response.use(response => {
  console.log(`LAA ERROR PREFIX JSON -> ${JSON.stringify(response)}`);
  console.log(`LAA ERROR PREFIX NORMAL -> ${response}`);
  return axiosLogger.responseLogger(response, {
    prefixText: 'LAA'
  });
});

axiosInstance.interceptors.response.use(function (response) {
  if (response.data && response.data.error) {
    return Promise.reject(response);
  } else {
    return response;
  }
});

module.exports = axiosInstance;