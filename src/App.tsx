import { Routes, Route } from "react-router-dom"
import ProtectedRoute from "./routes/ProtectedRoute"
import PublicRoute from "./routes/PublicRoute"
import {Login} from "./pages/forms/Login.tsx";
import {Register} from "./pages/forms/Register.tsx";
import {Dashboard} from "./pages/dashboard";

function App() {
  return (
      <Routes>

        {/* Public Auth Routes */}
        <Route element={<PublicRoute />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

        {/* Protected Routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Dashboard />} />
        </Route>

      </Routes>
  )
}

export default App