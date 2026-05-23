import {Routes, Route} from "react-router-dom";
import Layout from './layout/Layout';
import ProfilePage from '@/pages/profile/ui/ProfilePage';
import QuestionsPage from "@/pages/questions/ui/SSR"
import TodoPage from "@/pages/todo/ui/TodoPage";
import DailyCodingPage from "@/pages/daily-coding/ui/DailyCodingPage";
import GeneralPage from "@/pages/general/ui/GeneralPage";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<ProfilePage />} />
        <Route path="/questions" element={<QuestionsPage />} />
        <Route path="/todo/:id" element={<TodoPage />} />
        <Route path="/daily-coding" element={<DailyCodingPage />} />
        <Route path="/general" element={<GeneralPage />} />

      </Routes>
    </Layout>
  );
};

export default App;
