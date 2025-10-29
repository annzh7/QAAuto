const axios = require('axios');

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  headers: { 'Content-Type': 'application/json' },
});

api.interceptors.request.use(
  (config) => {
    console.log('[REQUEST]', {
      method: config.method?.toUpperCase(),
      url: config.baseURL + config.url,
      headers: config.headers,
      data: config.data,
    });
    return config;
  },
  (error) => {
    console.error('[REQUEST ERROR]', error.message);
    return Promise.reject(error);
  },
);

api.interceptors.response.use(
  (response) => {
    console.log('[RESPONSE]', {
      status: response.status,
      url: response.config.url,
      data: response.data,
    });
    return response;
  },
  (error) => {
    if (error.response) {
      console.error('[RESPONSE ERROR]', {
        status: error.response.status,
        url: error.config.url,
        data: error.response.data,
      });
    } else {
      console.error('[NETWORK ERROR]', error.message);
    }
    return Promise.reject(error);
  },
);

test('Get all posts', async () => {
  const response = await api.get('/posts');
  expect(response.status).toBe(200);
  expect(Array.isArray(response.data)).toBe(true);
});

test('Get all users', async () => {
  const response = await api.get('/users');
  expect(response.status).toBe(200);
  expect(Array.isArray(response.data)).toBe(true);
});

test('Get all albums', async () => {
  const response = await api.get('/albums');
  expect(response.status).toBe(200);
  expect(Array.isArray(response.data)).toBe(true);
});

test('Get album with id 1', async () => {
  const response = await api.get('/albums/1');
  expect(response.status).toBe(200);
  expect(response.data).toHaveProperty('id', 1);
});

test('Add new post', async () => {
  const response = await api.post('/posts', {
    title: 'foo',
    body: 'bar',
    userId: 1,
  });
  expect(response.status).toBe(201);
  expect(response.data).toHaveProperty('id');
});
