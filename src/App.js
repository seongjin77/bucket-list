import { Container } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Error from "./pages/404page/404page";
import Initial from "./pages/initial/Initial";
import Login from "./pages/login/Login";
import Sign from "./pages/sign/Sign";

function App() {
    return (
        <Container maxWidth="md">
            <Header />
            <Routes>
                <Route path="/" element={<Initial />} />
                <Route path="/signin" element={<Login />} />
                <Route path="/signup" element={<Sign />} />
                <Route path="/*" element={<Error />} />
            </Routes>
        </Container>
    );
}

export default App;
