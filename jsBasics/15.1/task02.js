const axios = require('axios');

const BASE_URL = 'https://jsonplaceholder.typicode.com';

async function getHeaders() {
  const response = await axios.get(`${BASE_URL}`, {
    headers: { Authorization: 'Bearer Token' },
    params: { userId: 123, sort: 'desc' },
  });
  return response.data;
}

module.exports = { getHeaders };
