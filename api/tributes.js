import { Redis } from '@upstash/redis';

// Hook up to the exact KV variables Vercel just generated for you
const kv = new Redis({
  url: process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL || process.env.KV_URL,
  token: process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN,
});

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
