# 🚗 DudeWithACar – MVP Launch Plan 

---

## Phase 1: Setup & Auth

- Set up AWS Amplify project (connect repo, domain)
- Deploy basic Next.js skeleton (homepage + routes)
- Integrate Supabase Auth with Google login
- Add protected admin route for your dashboard
### Supabase is my backend, it handles auth, database, and API access. It’s built on top of PostgreSQL.
[Phase one notes](./notes/week1-notes.md)
---

## Phase 2: Job Form & Database

- Build user-facing job request form (type, address, time, budget)
- Set up Supabase tables: `users`, `jobs`
- Connect form submission to Supabase via API route
- Insert new job record into DB with `status = "pending"`

---

##  Phase 3: Admin Dashboard & Realtime System

- Subscribe to `jobs` table using Supabase Realtime (admin dashboard)
- Build admin dashboard UI (pending jobs, accept/deny/counter)
- Hook up button actions to update job status in Supabase
- On user side: subscribe to job status updates
- Display job status changes in real-time (accepted, denied, countered)

---

##  Phasek 4: Stripe & Job Completion

- Integrate Stripe Checkout or PaymentIntents
- Trigger Stripe payment only after job is accepted
- Add `"Mark Job as Complete"` button on admin side
- Update `jobs` table with `status = "completed"` and `completed_at`
- Show confirmation on user side in real time

---

##  Phase 5: Polish & Launch

- Add image upload to job form (stored in S3)
- Final styling plus Framer Motion for animations
- Run full end-to-end tests
- Final production deployment via Amplify
- Announce soft launch
---



#  Tech Stack — Dude With A Car

A breakdown of the tools and technologies powering the project.

---

##  Supabase
**“The backend.”**  
A hosted backend platform built on top of PostgreSQL. Handles:
-  Authentication (Google login, user sessions)
-  Database (relational, scalable, secure)
-  API access (REST & GraphQL endpoints)
-  Storage and Edge Functions (for future expansion)

Used for: **user management, job data, session tracking**

---

##  Next.js
**“The frontend framework.”**  
A full-stack React framework built for fast, modern web apps. Uses the **App Router** system for better file-based routing and client/server control.

Used for: **UI, routing, login screen, dashboard**

---

##  Supabase JS Client
**“The bridge between frontend and backend.”**  
A JavaScript SDK that connects your app to Supabase.  
You configure it in `supabase/supabaseClient.js` with your project URL and anon key.

Used for: **auth calls, data fetches, inserting records, managing sessions**

---

##  AWS Amplify
**“The hosting platform.”**  
A powerful service to deploy and host your Next.js frontend with GitHub integration, continuous deployment, and custom domains.

Used for: **deploying dudewithacar.com live**

---

##  Framer Motion 
**“Frontend animation library.”**  
Will be used to add polished transitions and UI animations for smoother interactions.

---

##  Stripe 
**“Payment processor.”**  
Will be integrated to collect payments for accepted jobs.

---
