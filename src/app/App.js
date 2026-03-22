import {Routes, Route} from "react-router-dom";
import Layout from './layout/Layout';
import ProfilePage from '../pages/profile/ProfilePage';
import QuestionsPage from "../pages/questions/QuestionsPage"
import TodoPage from "../pages/todo/TodoPage";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<ProfilePage />} />
        <Route path="/questions" element={<div>QUESTIONS</div>} />
        <Route path="/todo/:id" element={<TodoPage />} />

      </Routes>
    </Layout>
  );
};

export default App;
