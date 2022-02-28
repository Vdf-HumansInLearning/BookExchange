import './App.css';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DetailsPage from './pages/DetailsPage';
import DashboardPage from './pages/DashboardPage';
import MyCartPage from './pages/MyCartPage';
import AccountPage from './pages/AccountPage';
import ProfilePage from './pages/ProfilePage';
import AddBookPage from './pages/AddBookPage';
import AdminPage from './pages/AdminPage';
import NotFoundPage from './pages/NotFoundPage';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/" element={<DashboardPage />} />
        <Route path="/details" element={<DetailsPage />}>
          <Route path=":id" element={<DetailsPage />} />
        </Route>
        <Route path="/cart" element={<MyCartPage />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/addbook" element={<AddBookPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="*" element={<NotFoundPage />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
