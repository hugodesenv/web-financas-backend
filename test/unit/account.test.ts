import { buildServer } from "../../src/app";
import { HTTPStatus } from "../../src/shared/utils/constants.utils";

describe('Account Authentication', () => {
  let app: any;

  beforeAll(async () => {
    app = buildServer();
    await app.ready();
  });

  afterAll(async () => {
    await app.close();
  });

  describe('POST /api/token', () => {
    test('should authenticate user with valid credentials', async () => {
      const response = await app.inject({
        method: 'POST',
        url: '/api/token',
        payload: {
          username: "hugo",
          password: "hugo"
        }
      });

      expect(response.statusCode).toBe(HTTPStatus.ACCEPTED);
      
      const body = JSON.parse(response.body);
      expect(body).toHaveProperty('token');
      expect(typeof body.token).toBe('string');
      expect(body.token.length).toBeGreaterThan(0);
    });

    test('should reject authentication with invalid username', async () => {
      const response = await app.inject({
        method: 'POST',
        url: '/api/token',
        payload: {
          username: "invalid_user",
          password: "hugo"
        }
      });

      expect(response.statusCode).toBe(HTTPStatus.UNAUTHORIZED);
    });

    test('should reject authentication with invalid password', async () => {
      const response = await app.inject({
        method: 'POST',
        url: '/api/token',
        payload: {
          username: "hugo",
          password: "wrong_password"
        }
      });

      expect(response.statusCode).toBe(HTTPStatus.UNAUTHORIZED);
    });

    test('should reject authentication with missing username', async () => {
      const response = await app.inject({
        method: 'POST',
        url: '/api/token',
        payload: {
          password: "hugo"
        }
      });

      expect(response.statusCode).toBe(400); // Bad Request - validation error
    });

    test('should reject authentication with missing password', async () => {
      const response = await app.inject({
        method: 'POST',
        url: '/api/token',
        payload: {
          username: "hugo"
        }
      });

      expect(response.statusCode).toBe(400); // Bad Request - validation error
    });

    test('should reject authentication with empty credentials', async () => {
      const response = await app.inject({
        method: 'POST',
        url: '/api/token',
        payload: {
          username: "",
          password: ""
        }
      });

      expect(response.statusCode).toBe(400); // Bad Request - validation error
    });

    test('should reject authentication with invalid payload format', async () => {
      const response = await app.inject({
        method: 'POST',
        url: '/api/token',
        payload: {
          user: "hugo",
          pass: "hugo"
        }
      });

      expect(response.statusCode).toBe(400); // Bad Request - validation error
    });
  });
});