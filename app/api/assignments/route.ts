import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import Assignment from '@/lib/models/Assignment';

export async function GET(request: NextRequest) {
  try {
    await connectDB();

    const { searchParams } = new URL(request.url);
    const module = searchParams.get('module');

    let query: any = { active: true };
    if (module) query.module = module;

    const assignments = await Assignment.find(query).sort({ createdAt: -1 });

    return NextResponse.json(assignments);
  } catch (error) {
    console.error('Fetch error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch assignments' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    await connectDB();

    const body = await request.json();
    const { title, description, module, difficulty, startCode, dueDate } =
      body;

    if (!title || !description || !module) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const assignment = await Assignment.create({
      title,
      description,
      module,
      difficulty,
      startCode: startCode || new Map(),
      dueDate,
      active: true,
    });

    return NextResponse.json(assignment, { status: 201 });
  } catch (error) {
    console.error('Create error:', error);
    return NextResponse.json(
      { error: 'Failed to create assignment' },
      { status: 500 }
    );
  }
}
