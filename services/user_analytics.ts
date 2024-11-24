import { supabase } from '@/utils/supabase';

// This function fetches user analytics data from the user_analytics table
export const fetchUserAnalytics = async () => {
  const { data, error } = await supabase
    .from('user_analytics')
    .select('*')
    .order('created_at', { ascending: false });
  if (error) {
    throw error;
  }
  return data;
};
