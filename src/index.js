import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Marque from './components/Marque';
import Marques from './components/Marques';
import NotFound from './components/NotFound';
import Cars from './components/Cars';
import Car from './components/Car';
import NewCar from './components/NewCar';

// mon router 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const MyApp = () => (
  <Router>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='cars' element={<Cars />}>
        <Route path=':model' element={<Car />} />
        <Route path='new' element={<NewCar />} />
      </Route>
      <Route path='marques/:name' element={<Marque />} />
      <Route path='marques' element={<Marques />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  </Router>
)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MyApp />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
