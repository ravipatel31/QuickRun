
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Pages/Login';
import Homepage from './Pages/Homepage';
import { Toaster } from 'react-hot-toast';
function App() {


  return (
    <>
    <div className="App">
      <Toaster 
      position='top-right' 
      toastOptions={{
        success: {
          duration: 2000,
          theme: {
            primary: '#0AAD95',
            secondary: 'black',
          },},
        error: {
          duration: 2000,
          }
        }
        }></Toaster>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
       <Route path="/homepage/:userid" element={<Homepage/>} />
      </Routes>
    </BrowserRouter>
    </div>
    </>
  )
}

export default App
