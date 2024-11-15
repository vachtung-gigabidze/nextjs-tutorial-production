import EditForm from "@/app/components/editForm"
import { getTask } from "@/utils/actions"
import Link from "next/link"


const SingleTaskPage = async ({params}:any) => {
  const { id } = await params
  const task = await getTask(id)
    return (
      <>
    <div className="mb-16">
        <Link href='/tasks' className="btn btn-accent">
            назад к задачам
        </Link>
    </div>
        <EditForm task={task}></EditForm>
      </>
  )
}

export default SingleTaskPage