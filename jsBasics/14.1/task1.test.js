const axios = require('axios');

const BASE_URL = 'https://jsonplaceholder.typicode.com';

test('Get all posts', async () => {
  const response = await axios.get(`${BASE_URL}/posts`, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  console.log(response.data);
  expect(response.status).toBe(200);
  expect(Array.isArray(response.data)).toBe(true);
});

test('Get all users', async () => {
  const response2 = await axios.get(`${BASE_URL}/users`, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  console.log(response2.data);
  expect(response2.status).toBe(200);
  expect(Array.isArray(response2.data)).toBe(true);
});

test('Get all albums', async () => {
  const response3 = await axios.get(`${BASE_URL}/albums`, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  console.log(response3.data);
  expect(response3.status).toBe(200);
  expect(Array.isArray(response3.data)).toBe(true);
});

test('Get album with id 1', async () => {
  const response4 = await axios.get(`${BASE_URL}/albums/1`, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  console.log(response4.data);
  expect(response4.status).toBe(200);
  expect(response4.data).toHaveProperty('id', 1);
});

test('Add new post', async () => {
  var response5 = await axios.post(
    `${BASE_URL}/posts`,
    {
      title: 'foo',
      body: 'bar',
      userId: 1,
    },
    {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );
  console.log(response5.data);
  expect(response5.data).toHaveProperty('id');
});
