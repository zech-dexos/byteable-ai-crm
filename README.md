# Byteable AI Challenge: [Industry Name] CRM

**Applicant Name:** [Your Name]
**Role Applied For:** [e.g., Certified Engineer / Internship / Paid Role]

## 📹 Demo Video
**Loom Link:** [Insert your Loom video link here]
*(Please ensure the video covers the Byteable Web -> VS Code workflow, feature demo, and code walkthrough)*

---

## 🚀 Project Overview
This project is a Base CRM for a **[Law Firm / Car Dealership / Ad Agency]** built using the Byteable AI workflow.

### Core Features Implemented
- [ ] **CRM Core:** Contacts, Deals/Pipeline, Notes/Tasks
- [ ] **Dashboard:** High-level analytics widgets
- [ ] **Behavior Tracking:** Event logging (e.g., login, deal update)
- [ ] **Agentic Workflow:** [Name of your agent, e.g., "Lead Follow-up Bot"]
- [ ] **Public API:** [Name of API, e.g., Google OAuth]

---

## 🛠 Tech Stack
- **Frontend:** [e.g., Next.js, React, Tailwind]
- **Backend:** [e.g., Node.js, Python/FastAPI]
- **Database:** [e.g., SQLite, Postgres, Supabase]
- **Auth:** [e.g., NextAuth, Google OAuth, Custom]

---

## 🤖 The Agentic Workflow
**Agent Name:** [e.g., Stale Deal Activator]
**Description:**
[Briefly explain what your agent does. Example: "The agent scans for deals that haven't been updated in 7 days, generates a suggested email draft using a template, and creates a task for the user to review it."]

**How to test it:**
1. Go to [Page/Route]
2. Click [Button Name]
3. Observe [Expected Result]

---

## 🔌 Byteable Web to VS Code Workflow
*Documentation of the required platform workflow.*

1. **Prototype:** Started in Byteable.ai Web.
2. **Migration:** Connected GitHub via PAT and cloned to local VS Code.
3. **Extension:** Used Byteable AI VS Code Extension for [Specific feature or general coding].

**LLM/API Key Notes:**
*[If the extension requested an OpenRouter key or other API keys, describe what happened here and how you resolved it.]*

---

## ⚙️ Setup & Installation

### 1. Clone the repo
```bash
git clone [your-repo-link]
cd [folder-name]
```

### 2. Install Dependencies
```bash
npm install
# or
pip install -r requirements.txt
```

### 3. Environment Variables
Create a `.env` file in the root directory and add the following:

```env
# Database
DATABASE_URL="file:./dev.db"

# Authentication (If applicable)
GOOGLE_CLIENT_ID="..."
GOOGLE_CLIENT_SECRET="..."
NEXTAUTH_SECRET="..."

# API Keys (If applicable)
OPENROUTER_API_KEY="..."
EXTERNAL_API_KEY="..."
```

### 4. Database Setup
```bash
# Run migrations or setup script
npx prisma db push
# or
python manage.py migrate
```

### 5. Run the App
```bash
npm run dev
# Open http://localhost:3000
```

---

## ⚖️ Trade-offs & Future Improvements
Due to the 4-hour timebox, I made the following decisions:

**Trade-off:** [e.g., Used basic styling for the login page to focus on the Agent logic.]
**Trade-off:** [e.g., Hardcoded the specific email template for the agent instead of making it dynamic.]

**What I'd do next:**
- [Improvement 1]
- [Improvement 2]

---
