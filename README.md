# Get Me A Chai ☕💙

A modern crowdfunding platform where creators can receive support from their fans — one chai at a time.

**Get Me A Chai** lets supporters contribute to creators through small payments, helping fund projects, ideas, and creative work in a simple and engaging way.

---

## 🚀 Features

- 🔐 GitHub Authentication with NextAuth
- 👤 User Dashboard for profile customization
- 💸 Razorpay Payment Integration
- 🎯 Personalized Creator Pages
- 📊 Supporter leaderboard with payment history
- 🖼️ Custom profile and cover images
- 📱 Fully responsive UI
- 🌙 Clean modern design with Tailwind CSS

---

## 🛠️ Tech Stack

### Frontend
- Next.js 14 (App Router)
- React.js
- Tailwind CSS

### Backend
- Next.js Server Actions
- Next.js API Routes

### Authentication
- NextAuth.js
- GitHub OAuth

### Database
- MongoDB
- Mongoose

### Payments
- Razorpay

### Notifications
- React Toastify

---

## 📂 Project Structure

```bash
GetMeAChai/
│
├── app/
│   ├── api/
│   │   ├── auth/[...nextauth]/route.js
│   │   └── razorpay/route.js
│   │
│   ├── about/page.js
│   ├── dashboard/page.js
│   ├── login/page.js
│   ├── [username]/page.js
│   ├── layout.js
│   └── page.js
│
├── components/
│   ├── Dashboard.js
│   ├── Footer.js
│   ├── Navbar.js
│   ├── PaymentPage.js
│   └── SessionWrapper.js
│
├── db/
│   └── connectDb.js
│
├── models/
│   ├── Payment.js
│   └── User.js
│
├── actions/
│   └── useractions.js
│
├── public/
│   └── assets...
│
└── README.md
