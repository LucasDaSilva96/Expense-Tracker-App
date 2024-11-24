import { supabase } from '@/utils/supabase';

type feedBackProps = {
  message: string;
  user_id: string;
  rating?: number;
};

// Create feedback for a user in the database
export const createFeedback = async ({
  message,
  user_id,
  rating,
}: feedBackProps) => {
  const { data, error } = await supabase
    .from('feedback')
    .insert({ message, user_id, rating });

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

// Fetch all feedback from the database
export const fetchFeedback = async () => {
  const { data, error } = await supabase.from('feedback').select('*');

  if (error) {
    throw new Error(error.message);
  }

  return data;
};
