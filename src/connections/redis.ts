import { createClient as createRedisClient } from 'redis';
import dotenv from 'dotenv';


dotenv.config();
let redisPassword: string = process.env.REDIS_PASSWORD;
let redisHost: string = process.env.REDIS_HOST;
let redisPort: number = parseInt(process.env.REDIS_PORT || '0', 10);


export const redisClient = createRedisClient({
  password: redisPassword,
  socket: {
    host: redisHost,
    port: redisPort,
  },
});