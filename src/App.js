import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import routes from './router/router';

function App() {
  const queryClient = new QueryClient()
  return (
    <div className="App container mx-auto">
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={routes} ></RouterProvider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
