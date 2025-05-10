[Back](../readme.md)

# Dude With A Car — Week 1 Notes

##  Stack Overview
- **Frontend:** Next.js (App Router)
- **Backend:** Supabase (PostgreSQL, Auth, API)
- **Hosting:** AWS Amplify
- **Auth:** Google login via Supabase Auth

---

##  Authentication Flow
- Google login is powered by Supabase Auth (`signInWithOAuth`)
- After login, Supabase handles session creation and stores it in `localStorage`
- `supabase.auth.getUser()` retrieves the current user from the stored session
- URL hash (`#access_token`) is cleaned with `window.history.replaceState` after login

---

##  Project Structure Highlights
- `supabase/supabaseClient.js` connects frontend to the Supabase project
- `/app/page.js` = public landing/login page
- `/app/dashboard/page.js` = protected dashboard for logged-in users
- `app/components/AuthWatcher.js` tracks auth state and handles redirect to `/dashboard`

---

##  Key Concepts Learned
- Supabase projects are hosted PostgreSQL backends with built-in auth
- Sessions are stored in browser localStorage, not cookies
- Supabase auto-creates a user on first login — one entry per user, not per session
- User list shown in Supabase dashboard under **Auth → Users**

---

##  Next Steps
- Set up `profiles` table to store extended user info (name, avatar, last_login, etc.)
- Track last login timestamps or visit logs
- Build the job request form on `/dashboard`
