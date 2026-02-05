# Quick Start Guide

## 🎯 For Student - First Time Setup

### Step 1: Start the App
```bash
npm run dev
```
Visit: http://localhost:3000

### Step 2: Try an Assignment
Use this URL (with your student info):
```
http://localhost:3000/?studentId=john123&studentName=John%20Doe&assignmentId=hw1&assignmentTitle=Build%20a%20Landing%20Page
```

### Step 3: Start Coding
1. Create/edit files on the left
2. Write HTML/CSS/JS in the middle
3. See live preview on the right
4. Click **Submit Code** when done

### Step 4: Check Your Submission
Your code is now in the database! ✅

---

## 👨‍🏫 For Teacher - First Time Setup

### Step 1: Start the App
```bash
npm run dev
```

### Step 2: View Submissions
Go to: http://localhost:3000/submissions

### Step 3: Grade Assignments
1. Click on a student submission
2. Enter score (0-100)
3. Add feedback
4. Click **Submit Grade**

---

## ⚙️ First-Time System Setup (One Time Only)

### 1. Setup MongoDB (Choose One)

**Easy (Cloud):**
- Go to https://www.mongodb.com/cloud/atlas
- Create free account & cluster
- Get connection string

**Or Local:**
- Install MongoDB Desktop
- Run in background
- Use: `mongodb://localhost:27017/skill-center`

### 2. Create `.env.local`
```bash
MONGODB_URI=your_connection_string_here
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### 3. Restart Dev Server
```bash
npm run dev
```

That's it! System is ready. ✅

---

## 🎮 Keyboard Shortcuts

**In Code Editor:**
- `Tab` - Emmet abbreviation expand
- `Ctrl+/` - Comment
- `Ctrl+S` - Save (auto-saved)
- `Ctrl+Z` - Undo
- `Ctrl+Y` - Redo

**Emmet Examples:**
- `html5` → Full HTML5 template
- `div.container` → `<div class="container"></div>`
- `form>input*5` → 5 input fields in form
- `ul>li*3` → List with 3 items

---

## 📊 Database URLs

**View MongoDB (Atlas):**
1. Go to https://cloud.mongodb.com
2. Login → Project → Database
3. Click "Browse Collections"
4. See submissions and assignments

---

## ❌ Common Issues & Fixes

| Issue | Fix |
|-------|-----|
| No database connection | Check `.env.local` has MONGODB_URI |
| Submissions not saving | Verify MongoDB is running |
| API errors | Check browser DevTools Console |
| Code not rendering | Ensure HTML files are created |

---

## 📞 Need Help?

Check logs:
```bash
# Terminal output shows server errors
# Browser Console shows client errors (F12)
```

---

Happy Teaching & Learning! 🎓
