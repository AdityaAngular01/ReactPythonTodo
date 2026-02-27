import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "../../components/ui/card"
import { Label } from "../../components/ui/label"
import { Input } from "../../components/ui/input"
import { Button } from "../../components/ui/button"
import { Link } from "react-router-dom"
import {useState} from "react";

interface LoginForm {
    email: string;
    password: string;
}

export function Login() {
    const [loginForm, setLoginForm]= useState<LoginForm>({
        email: "",
        password: "",
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setLoginForm(prev => ({...prev, [name]: value}))
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(loginForm);
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-100 via-white to-slate-200 p-4">

            {/* App Wrapper */}
            <div className="w-full max-w-sm space-y-6">

                {/* App Branding */}
                <div className="text-center space-y-2">
                    <h1 className="text-3xl font-bold tracking-tight">
                        📝 Todo Manager
                    </h1>
                    <p className="text-muted-foreground text-sm">
                        Organize your tasks. Stay productive.
                    </p>
                </div>

                {/* Login Card */}
                <Card className="shadow-xl rounded-2xl border bg-white/80 backdrop-blur">
                    <CardHeader>
                        <CardTitle className="text-xl">
                            Login to your account
                        </CardTitle>
                        <CardDescription>
                            Enter your email below to login
                        </CardDescription>
                        <CardAction>
                            <Button variant="link" className="px-0">
                                <Link to="/register">Sign Up</Link>
                            </Button>
                        </CardAction>
                    </CardHeader>

                    <CardContent>
                        <form onSubmit={handleSubmit}>
                            <div className="flex flex-col gap-6">

                                <div className="grid gap-2">
                                    <Label htmlFor="email">Email</Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="m@example.com"
                                        name="email"
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="grid gap-2">
                                    <div className="flex items-center">
                                        <Label htmlFor="password">Password</Label>
                                        <a
                                            href="#"
                                            className="ml-auto text-sm text-muted-foreground hover:underline"
                                        >
                                            Forgot password?
                                        </a>
                                    </div>
                                    <Input id="password" type="password" placeholder={"******"} name="password" onChange={handleChange} required />
                                </div>

                            </div>
                            <div className="flex-col gap-3 mt-4">
                                <Button type="submit" className="w-full rounded-xl">
                                    Login
                                </Button>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}