import { supabase } from '@/utils/supabase';
import React, {
  useState,
  useEffect,
  createContext,
  PropsWithChildren,
} from 'react';
import { Session, User } from '@supabase/supabase-js';
import { User_DB } from '@/types/database.types';
import { getUser } from '@/services/auth';

type AuthProps = {
  user_auth: User | null;
  user: User_DB | null;
  session: Session | null;
  initialized?: boolean;
  signOut?: () => void;
};

// The context stores the authentication state
export const AuthContext = createContext<Partial<AuthProps>>({});

// Custom hook to read the context values
export function useAuth() {
  return React.useContext(AuthContext);
}

// Provider component that wraps your app and makes auth object available to any child component that calls useAuth().
export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [user_auth, set_auth_user] = useState<User | null>();
  const [session, setSession] = useState<Session | null>(null);
  const [initialized, setInitialized] = useState<boolean>(false);

  const [user, setUser] = useState<User_DB | null>();

  useEffect(() => {
    // Listen for changes to authentication state
    const { data } = supabase.auth.onAuthStateChange(async (event, session) => {
      setSession(session);
      set_auth_user(session ? session.user : null);
      setInitialized(true);
    });
    return () => {
      data.subscription.unsubscribe();
    };
  }, []);

  useEffect(() => {
    (async () => {
      if (user_auth && user_auth.email) {
        try {
          const user = await getUser(user_auth.email);
          setUser(user);
        } catch (error) {
          console.log(error);
        }
      }
    })();
  }, [user_auth]);

  // Log out the user
  const signOut = async () => {
    await supabase.auth.signOut();
  };

  const value = {
    user_auth,
    session,
    initialized,
    signOut,
    user,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
