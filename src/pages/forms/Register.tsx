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
import {Link} from "react-router-dom";
import {type ChangeEvent, type FormEvent, useState} from "react";
import {authService} from "../../services/authService";


interface RegisterForm {
    full_name: string;
    email: string;
    password: string;
    confirm_password: string;
}

export function Register() {

    const [registerForm, setRegisterForm] = useState<RegisterForm>({
        full_name:"",
        email: "",
        password: "",
        confirm_password: "",
    })

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setRegisterForm(prev => ({...prev, [name]: value}))
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const response = await authService.register(registerForm);
        localStorage.setItem("token", response.access_token)
        if (response.access_token) {
            window.location.href = "/";
        }
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
                        Create your account and start organizing
                    </p>
                </div>

                {/* Register Card */}
                <Card className="shadow-xl rounded-2xl border bg-white/80 backdrop-blur">
                    <CardHeader>
                        <CardTitle className="text-xl">
                            Create an account
                        </CardTitle>
                        <CardDescription>
                            Fill in the details below to register
                        </CardDescription>
                        <CardAction>
                            <Button variant="link" className="px-0">
                                <Link to="/login">Login</Link>
                            </Button>
                        </CardAction>
                    </CardHeader>

                    <CardContent>
                        <form onSubmit={handleSubmit}>
                            <div className="flex flex-col gap-6">

                                {/* Full Name */}
                                <div className="grid gap-2">
                                    <Label htmlFor="fullname">Full Name</Label>
                                    <Input
                                        id="fullname"
                                        type="text"
                                        placeholder="John Doe"
                                        name="full_name"
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                {/* Email */}
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

                                {/* Password */}
                                <div className="grid gap-2">
                                    <Label htmlFor="password">Password</Label>
                                    <Input
                                        id="password"
                                        type="password"
                                        placeholder={"******"}
                                        name="password"
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                {/* Confirm Password */}
                                <div className="grid gap-2">
                                    <Label htmlFor="confirmPassword">
                                        Confirm Password
                                    </Label>
                                    <Input
                                        id="confirmPassword"
                                        type="password"
                                        placeholder={"******"}
                                        name="confirm_password"
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                            </div>
                            <div className="flex-col gap-3 mt-4">
                                <Button type="submit" className="w-full rounded-xl">
                                    Create Account
                                </Button>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}