import { http } from "./http"

interface LoginPayload {
    email: string
    password: string
}

interface LoginResponse {
    access_token: string
    token_type: string
}

interface RegisterPayload {
    full_name: string
    email: string
    password: string
    confirm_password: string
}

export const authService = {
    login: (data: LoginPayload) => {
        return http.post<LoginResponse>("/auth/login", data)
    },

    register: (data: RegisterPayload) => {
        return http.post<LoginResponse>("/auth/signup", data)
    },
}