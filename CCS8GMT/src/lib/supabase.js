import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://mdpoqcrjpyidpgvgdbvu.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1kcG9xY3JqcHlpZHBndmdkYnZ1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI0NTEzMTIsImV4cCI6MjA1ODAyNzMxMn0.lmNhG2TBkQYPNnPt_GEbJhtTyokEZtoMTuVnMRvNHgk'
const supabase = createClient(supabaseUrl, supabaseKey)

export {supabase}