const axios = require('axios');

const BASE_URL = 'https://jsonplaceholder.typicode.com';

async function getInvalidPost() {
  try {
    await axios.get(`${BASE_URL}/posts/9999`);
  } catch (error) {
    if (error.response) {
      return {
        status: error.response.status,
        message: 'Error',
      };
    } else {
      return { status: 0, message: 'Network error' };
    }
  }
}

module.exports = { getInvalidPost };
