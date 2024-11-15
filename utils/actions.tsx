'use server'

import { redirect } from "next/navigation";
import prisma from "./db";
import { revalidatePath } from "next/cache";
import { z } from "zod";


export const getAllTasks = async () => {
    return await prisma.task.findMany({
        orderBy: {
            createdAt: 'desc'
        }
    });
}

export const createTask = async (formData: FormData) => {   
    const content = formData.get('content') as string
    await prisma.task.create({ data: { content, }, });
    revalidatePath('/tasks')
}
export const createTaskCustom = async (prevState: any, formData: FormData) => {  
    //await new Promise((resolve) => setTimeout(resolve, 2000)); 
    const content = formData.get('content') as string
    const Task = z.object({
        content: z.string().min(5),
    })
    try {
        Task.parse({content})
        await prisma.task.create({ data: { content, }, });        
        revalidatePath('/tasks')
        return {message: {type:`выполнено`, error: ''}}
    } catch (error) {
        return {message: {type:`ошибка`, error: `${(error as z.ZodError).issues[0].message}` as string}}
    }
}

export const deleteTask = async (formData: FormData) => {   
    const taskId = formData.get('id') as string
    await prisma.task.delete({where: { id:taskId, }, });
    revalidatePath('/tasks')
}

export const getTask = async (id:string) =>{
    return prisma.task.findUnique({where:{id,}})
}
export const editTask = async (formData:FormData) =>{
    const id = formData.get('id') as string;
    const content = formData.get('content') as string;
    const completed = formData.get('completed') as  string;

    await prisma.task.update({data: {content, completed: completed === 'on'?true:false }, where: {id}});

    redirect('/tasks');
}