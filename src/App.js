import { Container } from "@mui/material";
import { Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Error from "./pages/404page/404page";
import Login from "./pages/login/Login";
import Sign from "./pages/sign/Sign";
import Todo from "./pages/todo/Todo";
import { PrivateRoute, PublicRoute } from "./router/Router";

function App() {
    return (
        <Container maxWidth="md">
            <Header />
            <Routes>
                <Route path="/" element={<Navigate to="/todo" />} />
                <Route
                    path="/todo"
                    element={
                        <PrivateRoute>
                            <Todo />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/signin"
                    element={
                        <PublicRoute>
                            <Login />
                        </PublicRoute>
                    }
                />
                <Route
                    path="/signup"
                    element={
                        <PublicRoute>
                            <Sign />
                        </PublicRoute>
                    }
                />
                <Route path="/*" element={<Error />} />
            </Routes>
        </Container>
    );
}

export default App;
