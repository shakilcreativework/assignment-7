# 👥 KeenKeeper — Keep Your Friendships Alive

## 📌 Project Overview

KeenKeeper is a modern friendship management web application designed to help users maintain meaningful relationships. It allows users to track interactions, manage friends, and stay consistent with communication goals.

---

## 🚀 Live Features

### 🔝 Navbar

* Fully responsive navigation bar
* Includes logo and navigation links (Home, Timeline, Stats)
* Active route highlighting
* Icons for better UX

### 🎯 Home Page

* Beautiful banner with title, subtitle, and CTA button
* 4 summary cards (Total Friends, On Track, Need Attention, Interactions)
* Responsive design across all devices

### 👫 Friends Section

* Dynamic friend cards loaded from JSON data
* Each card includes:

  * Profile picture
  * Name
  * Days since last contact
  * Tags
  * Status (color-coded)
* Clickable cards → navigate to Friend Details page

### 👤 Friend Details Page

#### Left Section:

* Profile info (image, name, email, bio)
* Status with color indicator
* Tags display
* Action buttons (Snooze, Archive, Delete)

#### Right Section:

* 📊 Stats Cards:

  * Days Since Contact
  * Goal
  * Next Due Date

* 🎯 Relationship Goal Card

* ⚡ Quick Check-In:

  * Call
  * Text
  * Video

✅ Clicking any check-in button:

* Adds a timeline entry
* Shows toast notification

---

### 📜 Timeline Page

* Displays all interaction history
* Each entry includes:

  * Date
  * Icon (Call / Text / Video)
  * Title (e.g., "Call with John")

### 🔍 Timeline Filter (Challenge Feature)

* Filter by:

  * Call
  * Text
  * Video

---

### 📊 Stats Page (Challenge Feature)

* Friendship Analytics section
* Pie chart showing interaction distribution
* Built using Recharts

---

### 🦶 Footer

* Clean and minimal footer design
* Matches overall UI style

---

### 📱 Responsive Design

* Fully responsive for:

  * Mobile
  * Tablet
  * Desktop

---

### ⚙️ Additional Features

* 404 Not Found Page
* Loading spinner while fetching data
* Toast notifications for interactions
* SPA routing (no reload issues after deployment)

---

## 🛠️ Technologies Used

* React JS
* React Router
* Tailwind CSS
* DaisyUI
* React Toastify
* CLSX
* Recharts

---

## 📂 Data Structure (Example)

```json
{
  "id": 1,
  "name": "John Doe",
  "picture": "https://example.com/photo.jpg",
  "email": "john@example.com",
  "days_since_contact": 12,
  "status": "overdue",
  "tags": ["college", "close friend"],
  "bio": "Met in university. Love hiking together.",
  "goal": 14,
  "next_due_date": "2025-07-20"
}
```

---

## ⭐ Key Features

1. 📊 Track and manage friendships efficiently
2. ⚡ Instant timeline updates with toast feedback
3. 📱 Fully responsive and user-friendly UI

---

## 🧪 Installation & Setup

```bash
# Clone the repository
git clone https://github.com/shakilcreativework/assignment-7.git

# Navigate to project folder
cd keenkeeper

# Install dependencies
npm install

# Run the project
npm run dev
```

---

## 📅 Deadlines

* 🐣 Basic (60 marks): 17 April 2026 (11:59 PM)
* ⏱️ Late (30 marks): After deadline

---

## 🙌 Final Notes

* Clean code structure
* Meaningful commits
* Optimized user experience
* Error-free deployment ready

---

## 📧 Contact

If you have any questions or suggestions, feel free to reach out.

---

**✨ Keep your friendships alive with KeenKeeper!**
