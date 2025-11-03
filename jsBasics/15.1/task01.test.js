const { getInvalidPost } = require('./task01');

test('getInvalidPost() should return correct message and code 404', async () => {
  const result = await getInvalidPost();

  expect(result.status).toBe(404);
  expect(result.message).toBe('Error');
});
