// This is the supabase service for the statistics_aggregation table in the database
import { supabase } from '@/utils/supabase';
// This is the catchError global utility error handler
import { catchError } from '@/utils/catchError';
// Fetches the weekly expenses for a user
export const fetchWeeklyExpenses = async (user_id: string) => {
  const { data, error } = await supabase
    .from('user_weekly_expenses')
    .select('*')
    .eq('user_id', user_id);

  if (error) {
    catchError(error);
    return [];
  }

  return data;
};

// Fetches the monthly expenses for a user
export const fetchMonthlyExpenses = async (user_id: string) => {
  const { data, error } = await supabase
    .from('user_monthly_expenses')
    .select('*')
    .eq('user_id', user_id);

  if (error) {
    console.error('Error fetching monthly expenses:', error);
    return [];
  }

  return data;
};

// Fetches the yearly expenses for a user
export const fetchYearlyExpenses = async (user_id: string) => {
  const { data, error } = await supabase
    .from('user_yearly_expenses')
    .select('*')
    .eq('user_id', user_id);

  if (error) {
    console.error('Error fetching yearly expenses:', error);
    return [];
  }

  return data;
};
