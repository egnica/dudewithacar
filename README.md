# 🚗 DudeWithACar – MVP Launch Plan (Real-Time Focused)

---

## 🗓️ Week 1: Setup & Auth

- Set up AWS Amplify project (connect repo, domain)
- Deploy basic Next.js skeleton (homepage + routes)
- Integrate Supabase Auth with Google login
- Add protected admin route for your dashboard
### Supabase is my backend, it handles auth, database, and API access. It’s built on top of PostgreSQL.
[week one notes](------)
---

## 🗓️ Week 2: Job Form & Database

- Build user-facing job request form (type, address, time, budget)
- Set up Supabase tables: `users`, `jobs`
- Connect form submission to Supabase via API route
- Insert new job record into DB with `status = "pending"`

---

## 🗓️ Week 3: Admin Dashboard & Realtime System

- Subscribe to `jobs` table using Supabase Realtime (admin dashboard)
- Build admin dashboard UI (pending jobs, accept/deny/counter)
- Hook up button actions to update job status in Supabase
- On user side: subscribe to job status updates
- Display job status changes in real-time (accepted, denied, countered)

---

## 🗓️ Week 4: Stripe & Job Completion

- Integrate Stripe Checkout or PaymentIntents
- Trigger Stripe payment only after job is accepted
- Add `"Mark Job as Complete"` button on admin side
- Update `jobs` table with `status = "completed"` and `completed_at`
- Show confirmation on user side in real time

---

## 🗓️ Week 5: Polish & Launch

- Add image upload to job form (stored in S3)
- Final styling with Tailwind (optional Framer Motion for animations)
- Run full end-to-end tests
- Final production deployment via Amplify
- Announce soft launch
