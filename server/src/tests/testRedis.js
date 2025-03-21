import redisClient from "../config/redis.js";

(async () => {
  try {
    console.log("Testing Redis connection...");

    await redisClient.set("testKey", "Hello, Upstash!", "EX", 60); 

    const value = await redisClient.get("testKey");

    console.log("Redis Test Passed! Retrieved Value:", value);

    await redisClient.quit();
    console.log("Redis connection closed.");
  } catch (err) {
    console.error("Redis Test Failed:", err);
    process.exit(1); 
  }
})();
