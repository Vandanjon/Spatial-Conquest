import { BrowserRouter, Routes, Route } from "react-router-dom";

import Screen from "./pages/Screen";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Screen />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
