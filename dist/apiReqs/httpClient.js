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

axiosInstance.interceptors.response.use(function (response) {
  if (response.data && response.data.error) {
    return Promise.reject(response);
  } else {
    return response;
  }
});

module.exports = axiosInstance;