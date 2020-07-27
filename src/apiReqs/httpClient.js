const curlirize = require('axios-curlirize');
const axiosLogger = require('axios-logger');
const axiosInstance = require('axios').default.create();

curlirize(axiosInstance, (result, err) => {
  const { command } = result;
  console.log(`LAA RESPONSE CURLIRIZE JSON ${JSON.stringify(result)}`);
  console.log(`LAA RESPONSE CURLIRIZE ${result}`);
  if (err) {
    console.error(err);
  } else {
    console.info(`[SYNAPSE CLIENT][cURL] ${command}`);
  }
});

axiosInstance.interceptors.response.use((response) => {
  console.log(`LAA RESPONSE JSON ${JSON.stringify(response)}`);
  console.log(`LAA RESPONSE ${response}`);
  return axiosLogger.responseLogger(response, {
    prefixText: 'SYNAPSE CLIENT',
  });
});

axiosInstance.interceptors.response.use(function (response) {
  console.log(`LAA RESPONSE ERROR JSON ${JSON.stringify(response)}`);
  console.log(`LAA RESPONSE ERROR ${response}`);
  if (response.data && response.data.error) {
    return Promise.reject(response);
  } else {
    return response;
  }
});

module.exports = axiosInstance;
