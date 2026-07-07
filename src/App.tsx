import { Route, Routes } from "react-router-dom";
import { ContactsPage } from "./pages/ContactsPage";
import { HomePage } from "./pages/HomePage";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contacts" element={<ContactsPage />} />
        </Routes>
    );
};

export default App;
