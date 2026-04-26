import {Routes, Route} from "react-router-dom";
import Layout from './layout/Layout';
import ProfilePage from '../pages/profile/ui/ProfilePage';
import QuestionsPage from "../pages/questions/ui/QuestionsPage"
import TodoPage from "../pages/todo/ui/TodoPage";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<ProfilePage />} />
        <Route path="/questions" element={<QuestionsPage />} />
        <Route path="/todo/:id" element={<TodoPage />} />

      </Routes>
    </Layout>
  );
};

export default App;
