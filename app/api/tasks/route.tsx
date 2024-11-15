import db from '@/utils/db';
import { NextResponse } from 'next/server';

export const GET = async(request:Request) => {
    const tasks = await db.task.findMany()
    return NextResponse.json({data:tasks})
};
export const POST = async(request:Request) => {
    const data = await request.json();
    const task = await db.task.create({
        data: {
            content: data.content,
        }
    })
    return NextResponse.json({data: task});
};

