// task02.test.js
const axios = require('axios');
const { getHeaders } = require('./task02');

const BASE_URL = 'https://jsonplaceholder.typicode.com';

jest.mock('axios');

test('should call axios.get with custom headers and params', async () => {
  axios.get.mockResolvedValue({ data: { success: true } });
  const data = await getHeaders();

  expect(data).toEqual({ success: true });
  expect(axios.get).toHaveBeenCalledWith(
    `${BASE_URL}`,
    expect.objectContaining({
      headers: { Authorization: 'Bearer Token' },
      params: { userId: 123, sort: 'desc' },
    }),
  );
});
