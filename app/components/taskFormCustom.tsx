'use client'
import { createTaskCustom } from '@/utils/actions';
import { useEffect } from 'react';
import { useFormStatus } from 'react-dom';
import { useActionState } from 'react';
import toast from 'react-hot-toast';

const SubmitBtn = () => {
    const {pending} = useFormStatus()
    return <button type='submit' className='btn btn-primary join-item' disabled={pending}>
        {pending? 'подождите...':'Создать задачу'}
        
    </button>
}

const initState = {
    message: {
        type:"",
        error:"",
    },
}

const TaskFormCustom = () => {
    const [state, formAction] = useActionState(createTaskCustom, initState)
    useEffect(()=>{
        if (state.message.type === 'ошибка') {
            toast.error(state.message.error)
            return
        }
        if (state.message.type === 'выполнено') {
            toast.success('выполнено выполнено')
        }
    }, [state]);
    return (
        <form action={formAction}>
            {/* {state.message ? <p className='mb-2'>{state.message}</p>:null} */}
            <div className='join w-full'>
                <input type="text" className='input input-bordered join-item w-full' placeholder='пиши...' name='content' required />
                <SubmitBtn/>
            </div>
        </form>

    )
}

export default TaskFormCustom