import { Route, Routes } from "react-router-dom"

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/login" element={<h1>Login page</h1>} />
            <Route path="/register" element={<h1>Register page</h1>} />
            <Route path="/" element={<h1>Home page</h1>} />
        </Routes>
    )
}

export default AppRoutes
