import './App.css';
import EntryForm from 'pages/EntryForm/EntryForm';
import { MainPage } from 'pages/MainPage/components/MainPage';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<EntryForm />} />
      <Route path="/registration" element={<EntryForm form='registration'/>} />
      <Route path="/" element={<MainPage />} />
    </Routes>
  );
}

export default App;
