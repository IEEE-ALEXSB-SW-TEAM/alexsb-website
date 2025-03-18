import Redis from "ioredis";
import dotenv from "dotenv";

dotenv.config();

const redisClient = new Redis(process.env.UPSTASH_REDIS_URL);

redisClient.on("connect", () => console.log("Connected to Upstash Redis"));
redisClient.on("error", (err) => console.error("Redis error:", err));

await redisClient.set("foo", "bar", "EX", 10);

export default redisClient;
