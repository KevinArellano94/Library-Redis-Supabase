import { supabaseClient } from './connections/supabase.js';
import { redisClient } from './connections/redis.js';

export async function fetchBooks(): Promise<void> {
  try {
    await redisClient.connect();

    const cachedBooks = await redisClient.get('books');

    if (cachedBooks) {
      const books = JSON.parse(cachedBooks);
      console.log('Fetched books from Redis cache:', books);
      await redisClient.quit();
      return;
    }

    const { data, error } = await supabaseClient.from('books').select('*');

    if (error) {
      throw error;
    }

    await redisClient.set('books', JSON.stringify(data));
    console.log('Fetched books from Supabase:', data);

    await redisClient.quit();
  } catch (error) {
    console.error('Error fetching books:', error.message);
    await redisClient.quit();
  }
}