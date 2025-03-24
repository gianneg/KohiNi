import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://mdpoqcrjpyidpgvgdbvu.supabase.co'
const supabaseKey = 'REDACTED'
const supabase = createClient(supabaseUrl, supabaseKey)

export {supabase}