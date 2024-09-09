import { createClient } from "redis";

const redisClient = createClient({
  url: `redis://${process.env.REDIS_HOST}:${process.env.REDIS_PORT}`,
});

redisClient.on("error", (err) => {
  console.error("Redis error:", err);
});

redisClient.connect().catch((err) => {
  console.error("Redis connection error:", err);
});

export default redisClient;
