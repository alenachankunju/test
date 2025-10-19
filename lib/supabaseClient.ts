
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://wfzvhuaocqeqcbidzvqd.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndmenZodWFvY3FlcWNiaWR6dnFkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA4NTUyMjUsImV4cCI6MjA3NjQzMTIyNX0.HYcdL9sTAb_3QIPqTNUboLNKYsth2oD4VHUK8iEj4mU';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
