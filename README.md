# Get Me A Chai ☕💙

A modern crowdfunding platform where creators can receive support from their audience — one chai at a time.

Built with **Next.js**, **MongoDB**, **NextAuth**, and **Razorpay**, Get Me A Chai lets users create personalized support pages, receive payments, and manage their creator profile through a clean dashboard.

---

## 🚀 Features

* 🔐 GitHub Authentication with NextAuth
* 👤 Creator profile pages with custom usernames
* 💸 Razorpay payment integration
* 📊 Personal dashboard for profile management
* 🧾 Payment history and supporter leaderboard
* 🎨 Responsive UI built with Tailwind CSS
* 🌙 Clean modern design with smooth UX

---

## 🛠️ Tech Stack

### Frontend
- Next.js 15
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
Get-Me-A-Chai/
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
│   ├── tea.gif
│   ├── avatar.gif
│   └── ...
│
└── README.md
```

---

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/your-username/get-me-a-chai.git
cd get-me-a-chai
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create environment variables

Create a `.env.local` file in the root directory and add:

```env
MONGO_URI=your_mongodb_connection_string

GITHUB_ID=your_github_oauth_client_id
GITHUB_SECRET=your_github_oauth_client_secret

NEXTAUTH_SECRET=your_nextauth_secret
NEXTAUTH_URL=http://localhost:3000

NEXT_PUBLIC_URL=http://localhost:3000

RAZORPAY_KEY_ID=your_razorpay_key_id             #only for safety purposes
RAZORPAY_KEY_SECRET=your_razorpay_key_secret     #only for safety purposes
```

---

## ▶️ Run Locally

```bash
npm run dev
```

Open in browser:

```bash
http://localhost:3000
```

---

## 🔐 Authentication Flow

Users sign in using GitHub OAuth via NextAuth.

On first login:

* user is authenticated
* profile is created in MongoDB
* username is generated automatically

Returning users are directly logged in.

---

## 💳 Payment Flow

1. A supporter visits a creator page
2. Enters:

   * name
   * message
   * amount
3. Razorpay checkout opens
4. Payment is verified
5. Donation is stored in MongoDB
6. Creator sees it in supporter leaderboard

---

## 🧠 Future Improvements

* Google Authentication
* Creator profile customization
* Dark / Light mode toggle
* Email notifications
* Payment analytics dashboard
* Profile verification badges
* Comment / supporter wall

---

## 🤝 Contributing

Pull requests are welcome.

If you'd like to improve the project, feel free to fork the repo and submit a PR.

---

## 📜 License

This project is licensed under the MIT License.

---

## 💙 Acknowledgements

* Next.js
* Tailwind CSS
* NextAuth
* Razorpay
* MongoDB

---

Made with chai, code, and a slightly concerning amount of debugging. ☕

