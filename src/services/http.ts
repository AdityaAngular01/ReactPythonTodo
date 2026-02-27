import api from "./api"

export const http = {
    get: async <T>(url: string, params?: object): Promise<T> => {
        const { data } = await api.get<T>(url, { params })
        return data
    },

    post: async <T>(url: string, body?: object): Promise<T> => {
        const { data } = await api.post<T>(url, body)
        return data
    },

    put: async <T>(url: string, body?: object): Promise<T> => {
        const { data } = await api.put<T>(url, body)
        return data
    },

    patch: async <T>(url: string, body?: object): Promise<T> => {
        const { data } = await api.patch<T>(url, body)
        return data
    },

    delete: async <T>(url: string): Promise<T> => {
        const { data } = await api.delete<T>(url)
        return data
    },
}