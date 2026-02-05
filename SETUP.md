# 🎓 Luminous Skill Center - Student Practice Platform

A professional web-based code playground built with VS Code-like features for student practice and homework submission.

## 🚀 Features

✅ **VS Code-like IDE**
- Resizable three-column layout (File Explorer, Code Editor, Live Preview)
- Monaco Editor with syntax highlighting
- Emmet abbreviation support
- Real-time preview with Run button

✅ **Student Practice System**
- Submit homework assignments
- Backend database storage (MongoDB)
- Teacher/admin dashboard to view submissions
- Grade assignments with feedback

✅ **Database Integration**
- MongoDB for scalable storage
- Mongoose ORM
- Student submissions stored with metadata

## 📋 Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Setup MongoDB Database

**Option A: MongoDB Atlas (Recommended - Cloud)**

1. Go to https://www.mongodb.com/cloud/atlas
2. Sign up for a free account
3. Create a new cluster (M0 free tier)
4. Get your connection string (looks like: `mongodb+srv://username:password@cluster.mongodb.net/database?retryWrites=true&w=majority`)
5. Add this to your `.env.local` file

**Option B: Local MongoDB**

1. Install MongoDB locally: https://www.mongodb.com/try/download/community
2. Run: `mongod`
3. Use connection string: `mongodb://localhost:27017/skill-center`

### 3. Create `.env.local` File

```bash
# Copy from example
cp .env.local.example .env.local

# Then edit .env.local and add:
MONGODB_URI=mongodb+srv://youruser:yourpass@yourcluster.mongodb.net/skill-center?retryWrites=true&w=majority
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### 4. Run Development Server

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

## 📍 Pages & Routes

### Student Pages
- **`/`** - Main playground (student code editing)
  - Query params: `?studentId=john&studentName=John&assignmentId=hw1&assignmentTitle=Basic HTML`
  
### Teacher/Admin Pages
- **`/submissions`** - View all student submissions and grade them

### API Routes
- **`POST /api/submissions`** - Submit student code
- **`GET /api/submissions`** - Fetch submissions (with filters)
- **`PATCH /api/submissions/[id]`** - Grade a submission
- **`GET /api/assignments`** - Fetch available assignments
- **`POST /api/assignments`** - Create new assignment

## 🎮 How to Use

### For Students

1. Navigate to the playground with your assignment:
   ```
   http://localhost:3000/?studentId=student1&studentName=John%20Doe&assignmentId=module1-hw1&assignmentTitle=HTML%20Basics
   ```

2. Edit code in the three-column layout:
   - **Left**: File explorer (create/delete files)
   - **Middle**: Code editor (with emmet support)
   - **Right**: Live preview

3. Drag dividers to resize columns

4. Use **Emmet** abbreviations in HTML:
   - `div.container > p*3` → creates div with 3 paragraphs
   - `form>(label+input)*5` → creates form with 5 input pairs

5. Click **Submit Code** to save your work to the database

### For Teachers

1. Go to http://localhost:3000/submissions

2. View all student submissions

3. Filter by:
   - Assignment ID
   - Student ID

4. Select a submission to view details

5. Grade the assignment:
   - Add score (0-100)
   - Add feedback
   - Click "Submit Grade"

6. Download code as text file

## 🏗️ Architecture

```
luminous-skill-center/
├── app/
│   ├── components/           # React components
│   │   ├── SkillCenter.tsx    # Main IDE
│   │   ├── CodeEditor.tsx     # Monaco editor
│   │   ├── FileExplorer.tsx   # File management
│   │   └── PreviewPanel.tsx   # Live preview
│   ├── api/
│   │   ├── submissions/       # Submission APIs
│   │   └── assignments/       # Assignment APIs
│   ├── submissions/
│   │   └── page.tsx           # Teacher dashboard
│   └── page.tsx               # Main playground
├── lib/
│   ├── models/                # Mongoose models
│   │   ├── Submission.ts
│   │   └── Assignment.ts
│   ├── context/
│   │   └── StudentContext.tsx # Student info context
│   └── db.ts                  # MongoDB connection
└── types/
    └── types.ts               # TypeScript types
```

## 🔄 Data Flow

1. **Student submits code**
   - SkillCenter → POST /api/submissions
   - API saves to MongoDB
   - Submission receives unique ID

2. **Teacher views submissions**
   - /submissions page → GET /api/submissions
   - Lists all submissions in database
   - Can filter and grade

3. **Teacher grades submission**
   - PATCH /api/submissions/[id]
   - Updates score, feedback, status
   - Changes stored in database

## 🚀 Next Steps for You

### Recommended Enhancements:

1. **Student Authentication**
   - Add NextAuth.js for student login
   - Track submissions per user
   - Prevent code cheating

2. **Assignment Management**
   - UI for creating/editing assignments
   - Set due dates
   - Auto-save student progress

3. **Rich Code Display**
   - Syntax highlighted code viewer in dashboard
   - Side-by-side diff view
   - Rubric-based grading

4. **Notifications**
   - Email on submission
   - Grade notifications to students
   - Deadline reminders

5. **Advanced Features**
   - Unit tests for assignments
   - Auto-grading logic
   - Code plagiarism detection
   - Real-time collaboration

## 🛠️ Troubleshooting

**Error: MONGODB_URI not found**
- Make sure `.env.local` exists and has the correct MongoDB connection string
- Restart the dev server after adding env variables

**Error: Can't connect to MongoDB**
- Check if MongoDB is running (if local)
- Verify connection string format
- Check MongoDB Atlas firewall rules (if cloud)

**API failing**
- Check browser console for error details
- Verify API routes exist in `/app/api/`
- Check Next.js server console for error logs

## 📝 Database Schema

### Submission Document
```json
{
  "_id": "ObjectId",
  "studentId": "string",
  "studentName": "string",
  "assignmentId": "string",
  "assignmentTitle": "string",
  "files": {
    "index.html": "file content",
    "style.css": "file content",
    "script.js": "file content"
  },
  "score": 85,
  "feedback": "Great work!",
  "status": "graded",
  "createdAt": "timestamp",
  "updatedAt": "timestamp"
}
```

### Assignment Document
```json
{
  "_id": "ObjectId",
  "title": "HTML Basics",
  "description": "Learn HTML fundamentals",
  "module": "Module 1",
  "difficulty": "beginner",
  "startCode": {
    "index.html": "<!-- starter code -->"
  },
  "dueDate": "2026-02-15",
  "active": true,
  "createdAt": "timestamp",
  "updatedAt": "timestamp"
}
```

---

**Built with:** Next.js 16 | React 19 | Tailwind CSS | MongoDB | Mongoose | Monaco Editor

Happy coding! 🎉
