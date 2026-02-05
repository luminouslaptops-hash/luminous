'use client';

import { useAuth } from '@/lib/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import SkillCenter from '@/app/components/SkillCenter';

export default function PlaygroundPage() {
  const { isAuthenticated, isLoading, user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push('/login');
    }
  }, [isLoading, isAuthenticated, router]);

  if (isLoading) {
    return (
      <div className="h-screen bg-[#1e1e1e] flex items-center justify-center">
        <p className="text-[#cccccc]">Loading...</p>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="h-screen bg-[#1e1e1e] flex items-center justify-center">
        <p className="text-[#cccccc]">Redirecting to login...</p>
      </div>
    );
  }

  return (
    <SkillCenter
      studentId={user?.id}
      studentName={user?.name}
      assignmentId="assignment-001"
      assignmentTitle="Web Design Basics"
    />
  );
}
