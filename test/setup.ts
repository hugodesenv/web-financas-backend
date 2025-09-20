// Configurações globais para os testes
import 'reflect-metadata';

// Configurar variáveis de ambiente para testes
process.env.NODE_ENV = 'test';
process.env.JWT_SECRET = 'test-secret-key';

// Timeout global para testes
jest.setTimeout(10000);

