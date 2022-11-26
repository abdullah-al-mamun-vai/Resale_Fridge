import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './pages/Route/Router';
import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <div className='container mx-auto'>
      <RouterProvider router={router}>

      </RouterProvider>
      <Toaster />
    </div>
  );
}

export default App;
