import { Redis } from '@upstash/redis';

// Redis.fromEnv() automatically uses UPSTASH_REDIS_REST_URL and UPSTASH_REDIS_REST_TOKEN
const kv = Redis.fromEnv();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const newTribute = req.body;
      
      // Store tribute in Upstash Redis list named 'tributes'
      await kv.lpush('tributes', JSON.stringify(newTribute));
      
      return res.status(200).json({ success: true, tribute: newTribute });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Database failed to save tribute' });
    }
  }

  if (req.method === 'GET') {
    try {
      // Fetch top 50 tributes from Redis
      const tributes = await kv.lrange('tributes', 0, 50);
      return res.status(200).json({ tributes });
    } catch (error) {
      return res.status(500).json({ error: 'Database failed to fetch tributes' });
    }
  }

  res.setHeader('Allow', ['GET', 'POST']);
  return res.status(405).end(`Method ${req.method} Not Allowed`);
}
