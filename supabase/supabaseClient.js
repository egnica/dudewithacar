import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://icsalzniyezyrtgtfunh.supabase.co"; // Your project URL
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imljc2Fsem5peWV6eXJ0Z3RmdW5oIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY4NDEzNTcsImV4cCI6MjA2MjQxNzM1N30.FGRPwtR74TbTzZeUKKO0hFseDYVp8HDFwHYkPp00q6Q"; // From Supabase settings

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
