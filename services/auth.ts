import { supabase } from '@/utils/supabase';

// Sign in with email and password
export const signIn = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    throw error;
  }

  return data;
};

// Sign up with email and password
type SignUpData = {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
};
export const signUp = async ({
  email,
  first_name,
  last_name,
  password,
}: SignUpData) => {
  const { data: authData, error: authError } = await supabase.auth.signUp({
    email,
    password,
  });

  // If there is an error, sign out the user and throw the error
  if (authError) {
    await supabase.auth.signOut();
    throw authError;
  }
  const { error: profileError } = await supabase
    .from('users')
    .insert({
      email,
      first_name,
      last_name,
      has_membership: false, // TODO: Change this to true if you have a membership system
    })
    .select();

  // If there is an error, sign out the user and throw the error
  if (profileError) {
    await supabase.auth.signOut();
    throw profileError;
  }

  return authData;
};

// Sign out the current user
export const signOut = async () => {
  await supabase.auth.signOut();
};
