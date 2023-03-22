import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SharedLayout from "./shared_layout/SharedLayout";
import MainPage from "./components/main_page/MainPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<MainPage />}></Route>
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
