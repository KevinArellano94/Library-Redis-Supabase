import { createClient as createSupabaseClient, SupabaseClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';


dotenv.config();
let supabaseUrl :string = process.env.SUPABASE_URL;
let supabaseApiKey :string = process.env.SUPABASE_API_KEY;

export const supabaseClient: SupabaseClient = createSupabaseClient(
    supabaseUrl,
    supabaseApiKey
);