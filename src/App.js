import { BrowserRouter as Router, Routes, Route, useParams} from 'react-router-dom';
import Layout from './layout/Layout';
import Index from './views/Index';
import NewPage from './views/NewPage';


const App = () => {
  return (
    <Router>
          <Routes>
              <Route path="/" element={<Layout />}>
                  <Route index element={<Index />} /> 
                  <Route path="newpage" element={<NewPage />} /> 
              </Route >
          </Routes>
    </Router>
 
  );
}

export default App;
