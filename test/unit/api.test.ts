import { buildServer } from '../../src/app';

describe('checking server', () => {
  test('is available', async () => {
    const app = buildServer();
    const response = await app.inject({
      method: 'GET',
      url: '/'
    });

    expect(response.statusCode).toEqual(200);
  });
});