import { createClient as createSupabaseClient, SupabaseClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';


dotenv.config();
let supabaseUrl = process.env.SUPABASE_URL;
let supabaseApiKey = process.env.SUPABASE_API_KEY;

export const supabaseClient: SupabaseClient = createSupabaseClient(
    supabaseUrl,
    supabaseApiKey
);