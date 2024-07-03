import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, Repository } from '@/pages';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/repository" element={<Repository />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;