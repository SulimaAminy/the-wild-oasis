import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://rasuqldlhjhmaugdvlrh.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJhc3VxbGRsaGpobWF1Z2R2bHJoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzMyMDg5MDksImV4cCI6MjA0ODc4NDkwOX0.mSCbDPAkQd3qaSIQpE3oBS2Hg2v2Rj8nwj3mEOJfI7s";
const supabase = createClient(supabaseUrl, supabaseKey);


export default supabase;