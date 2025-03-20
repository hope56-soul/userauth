// Load environment variables from the global window object
const SUPABASE_URL = window.SUPABASE_URL;
const SUPABASE_ANON_KEY = window.SUPABASE_ANON_KEY;

// Use the global supabase object to create the client
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Authentication functions
const signUp = async (email, password) => {
  const { user, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: 'https://hope56-soul.github.io/userauth/',
    },
  });
  if (error) throw error;
  return user;
};

const signIn = async (email, password) => {
  const { user, error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) throw error;
  return user;
};

const resetPassword = async (email) => {
  const { data, error } = await supabase.auth.resetPasswordForEmail(email);
  if (error) throw error;
  return data;
};

const signOut = async () => {
  const { error } = await supabase.auth.signOut();
  if (error) throw error;
};

// Export authentication functions
export { supabase, signUp, signIn, resetPassword, signOut };
