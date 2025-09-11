# 🚀 CarrAI – Personalized Career Guidance Platform

### 🏆 Smart India Hackathon (SIH) 2025  
**Problem Statement:** Provided by **Government of Jammu & Kashmir**

---

## 📖 About the Project

Choosing the right career path is one of the toughest decisions for students and parents.  
**CarrAI** is an AI-powered platform designed to solve this issue by providing **personalized career guidance**, **college recommendations**, and **real-time mentorship**, making career planning simple and accessible for every student.

---

## 🎯 Problem We Are Solving
- Lack of **personalized career guidance** for students in rural and urban areas.  
- Parents often face **confusion** due to lack of structured information.  
- Students don’t have **easy access** to local colleges and opportunities.  

---

## 💡 Our Solution
CarrAI uses **AI-powered recommendations** and **real-time data** to guide students:

1. **Landing Page** – Introduction and easy onboarding for students & parents.  
2. **Interest Form** – Collects student info (age, class, location, goals).  
3. **Career Quiz** – AI-analyzed quiz for stream & career suggestions.  
4. **Nearby Colleges** – Fetches colleges based on student’s location.  
5. **AI Career Chatbot** – Real-time Q&A with AI for career-related queries.

---

## 🔥 Current Status (MVP)
✅ Landing page built and deployed  
🔜 Next features: Interest Form, Career Quiz, Nearby Colleges, AI Chatbot

---

## 🛠️ Tech Stack
| Component      | Tech Used                              |
|----------------|---------------------------------------|
| Frontend       | Next.js, Tailwind CSS, shadcn/ui       |
| Backend/API    | Next.js API Routes                     |
| Authentication | Clerk                                 |
| Database       | PostgreSQL + Prisma                    |
| AI Integration | OpenAI/Gemini API                      |
| Hosting        | Vercel                                |
| Media Handling | Cloudinary                            |

---

## 🔗 Live Demo
🌐 [Visit CarrAI](https://your-vercel-link.vercel.app)

---
## 📂 Project Structure

```

/app
├── (auth)/                  # Login/Register
├── page.tsx                 # Landing Page
├── interest-form/           # Student Data Form (Upcoming)
├── quiz/                    # Career Quiz (Upcoming)
├── chatbot/                 # AI Chatbot (Upcoming)
└── colleges/                # Nearby Colleges (Upcoming)

/components
├── ui/                      # Reusable UI Components
├── header.tsx               # Navigation Bar
├── hero.tsx                 # Hero Section
└── theme-provider.tsx       # Theme Section

/lib
└── utils.ts                 # Helper Functions

/public
└── assets/                  # Images, Icons, and Static Files

/styles
└── globals.css              # Global Styles

```

---

## 📌 Roadmap
- [x] Build & Deploy Landing Page
- [ ] Add Student Interest Form
- [ ] Integrate Career Quiz with AI
- [ ] Add Nearby College Recommendations
- [ ] Launch AI Chatbot for Career Mentorship
- [ ] Mobile App (Future Scope)

---

## 🎯 Why CarrAI Stands Out
- **Social Impact:** Focus on helping students in remote areas.  
- **Scalability:** Easy to integrate with Govt/NGO datasets.  
- **AI-Powered:** Personalized, data-driven guidance for every student.  
- **Future Vision:** One-stop career guidance ecosystem for J&K.

---

## 🚀 How to Run Locally

Follow these steps to set up and run the project on your local machine:

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/your-repo-name.git
cd carrAI
```

### 2️⃣ Install Dependencies
```bash
npm install
```

### 3️⃣ Set Up Environment Variables
Create a `.env` file in the root folder and add your keys:
# Clerk API keys
```bash
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
```
# Clerk URLs
```bash
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/onboarding
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/onboarding
```

### 4️⃣ Run the Development Server
```bash
npm run dev
```

---

## 👨‍💻 Developer
Built by **Rishabh Singh** (SIH Hackathon Participant)

---
