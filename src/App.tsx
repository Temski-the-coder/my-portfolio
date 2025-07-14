import { BrowserRouter,Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';
import { Toaster } from './Components/ui/toaster';

const App = () => {
  return (
    <> 
    <Toaster />
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/404" element={<NotFound />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
