# 📚 BookBridge – Frontend (React)

BookBridge is a peer-to-peer book sharing platform where users can lend and borrow books within a local community.
This frontend is built using **React** and communicates with a Django REST API to deliver a seamless, real-time user experience.

---

## 🚀 Features

### 🔐 Authentication

* User registration & login
* JWT-based authentication
* Protected routes (PrivateRoute pattern)
* Persistent login (token storage)

---

### 🏠 Home & Discovery

* Landing page with platform overview
* Featured books section
* Search-driven discovery

---

### 📚 Book Browsing

* Book list with pagination
* Advanced search (title, author)
* Filtering (category, availability)
* Sorting (latest, etc.)

---

### 📖 Book Details

* Detailed book information
* Book reviews & ratings
* List of available copies
* Owner information per copy

---

### 📦 Book Copy Interaction

* Request a specific copy
* View availability status
* Add your own book copy

---

### 🔁 Borrowing Workflow

* Send borrow requests
* Cancel pending requests
* View request status (pending/accepted/rejected)
* Seamless transition to borrow records

---

### 📊 Dashboard

* Central user hub
* Tabs for:

  * Sent Requests
  * Received Requests
  * Borrowed Books
  * Lent Books
* Stats cards:

  * Active Borrows
  * Pending Requests
  * Overdue Books

---

### ⏳ Borrow Records

* View borrowing history
* Track due dates
* Overdue indicators
* Request extensions

---

### 🔄 Extension System

* Request extension from record page
* Owner approval/rejection
* Extension history tracking

---

### 🔔 Notifications

* Real-time-style notification system
* Events:

  * Request updates
  * Extension updates
* Clickable navigation to related pages

---

### 💎 Premium Membership

* Membership badge display
* UI-based feature differentiation
* Upgrade prompts

---

### 👤 User Profile

* Profile view (public + private)
* Profile update
* User ratings & reviews
* Borrowing history overview

---

## 🧱 Tech Stack

* **Framework:** React.js
* **Styling:** Tailwind CSS
* **State Management:** Context API + Custom Hooks
* **Routing:** React Router
* **API Communication:** Axios / Fetch
* **Authentication:** JWT (via backend)

---

## ⚙️ Installation & Setup

### 1. Clone Repository

```bash
git clone https://github.com/yourusername/bookbridge-frontend.git
cd bookbridge-frontend
```

---

### 2. Install Dependencies

```bash
npm install
```

---

### 3. Environment Variables

Create a `.env` file:

```env
VITE_API_BASE_URL=http://localhost:8000/api/v1
```

---

### 4. Run Development Server

```bash
npm run dev
```

---

## 📁 Project Structure (Simplified)

```text
src/
│
├── components/        # Reusable UI components
├── pages/             # Route-based pages
├── hooks/             # Custom hooks (API, auth, etc.)
├── context/           # Global state (Auth, Notifications)
├── services/          # API calls
├── utils/             # Helper functions
├── layouts/           # Layout wrappers
└── App.jsx
```

---

## 🔗 API Integration

The frontend communicates with the backend via REST APIs:

```text
Base URL: /api/v1/
```

Key integrations:

* Auth endpoints (login/register)
* Books & Book Copies
* Borrow Requests & Records
* Extensions
* Notifications
* Dashboard stats

---

## 🧠 Key Design Patterns

* **PrivateRoute Pattern** for protected pages
* **Separation of concerns** (services, hooks, UI)
* **Reusable components** for scalability
* **Centralized API handling**
* **Context-based global state**

---

## 🎯 Core User Flow

```text
User → Browse Books → View Details  
→ Request Copy → Owner Responds  
→ Borrow Record Created → Read  
→ Extend / Return → Review
```

---

## 📈 Future Improvements

* Real-time notifications (WebSockets)
* Dark mode
* Infinite scrolling
* Mobile-first optimization
* PWA support

---

## 👨‍💻 Author

Frontend developed as part of a fullstack project using React + Django REST Framework.

---

## ⭐ Notes

This frontend is designed to handle:

* Complex user interactions
* Multi-role workflows
* Dynamic UI states based on backend logic

It complements a feature-rich backend and demonstrates real-world application structure.

---

## 📜 License

This project is for educational and portfolio purposes.
