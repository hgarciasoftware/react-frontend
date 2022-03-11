import ListStudents from './components/ListStudents';
import AddStudent from './components/AddStudent';
import UpdateStudent from './components/UpdateStudent';
import DeleteStudent from './components/DeleteStudent';
import ViewStudent from './components/ViewStudent';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<ListStudents />}></Route>
            <Route path="/students" element={<ListStudents />}></Route>
            <Route path="/add-student" element={<AddStudent />}></Route>
            <Route path="/update-student/:id" element={<UpdateStudent />}></Route>
            <Route path="/delete-student/:id" element={<DeleteStudent />}></Route>
            <Route path="/view-student/:id" element={<ViewStudent />}></Route>
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
