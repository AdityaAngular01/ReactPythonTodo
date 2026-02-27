import { http } from "./http"

interface TaskPayload {
    title: string
}

export interface TaskResponse {
    _id:string
    title: string
    is_completed: boolean
}

interface UpdateTaskPayload {
    title: string
    is_completed: boolean
}

export const todoService = {
    createTask: (data: TaskPayload) => {
        return http.post<TaskResponse>("/task", data)
    },
    getTasks: () => {
        return http.get<TaskResponse[]>("/task")
    },
    deleteTask: (id: string) => {
        return http.delete<TaskResponse>(`/task/${id}`)
    },
    updateTask: (id: string, data: UpdateTaskPayload) => {
        return http.put<TaskResponse>(`/task/${id}`, data)
    },
    deleteAllTasks: () => {
        return http.delete<TaskResponse[]>("/task")
    }
}