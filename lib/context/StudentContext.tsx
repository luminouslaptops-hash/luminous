'use client';

import React, { createContext, useContext, useState } from 'react';

interface StudentContextType {
  studentId: string;
  studentName: string;
  assignmentId: string;
  assignmentTitle: string;
  setStudentInfo: (info: Partial<StudentContextType>) => void;
}

const StudentContext = createContext<StudentContextType | undefined>(undefined);

export function StudentProvider({ children }: { children: React.ReactNode }) {
  const [studentInfo, setStudentInfoState] = useState<StudentContextType>({
    studentId: 'demo-student',
    studentName: 'Demo Student',
    assignmentId: 'assignment-001',
    assignmentTitle: 'Web Design Basics',
    setStudentInfo: (info) => {
      setStudentInfoState((prev) => ({ ...prev, ...info }));
    },
  });

  return (
    <StudentContext.Provider value={studentInfo}>
      {children}
    </StudentContext.Provider>
  );
}

export function useStudent() {
  const context = useContext(StudentContext);
  if (context === undefined) {
    throw new Error('useStudent must be used within StudentProvider');
  }
  return context;
}
