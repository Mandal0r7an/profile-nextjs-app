import { Routes, Route } from "react-router-dom";

import Layout from './layout/Layout';

import ProfilePage from '@/pages/profile/ui/ProfilePage';
import QuestionsPage from "@/pages/questions/ui/SSR";
import TodoPage from "@/pages/todo/ui/TodoPage";
import DailyCodingPage from "@/pages/daily-coding/ui/DailyCodingPage";
import GeneralPage from "@/pages/general/ui/GeneralPage";
import { NotFoundPage } from "@/pages/not-found/ui";
import { EntrancePage } from "@/pages/entrance/ui";
import Header from "@/widgets/header/Header";

function App() {
    return (
        <Routes>

            <Route path="/" element={
                    <Layout>
                        <ProfilePage />
                    </Layout>
                }
            />

            <Route path="/questions" element={
                    <Layout>
                        <QuestionsPage />
                    </Layout>
                }
            />

            <Route path="/todo/:id" element={
                    <Layout>
                        <TodoPage />
                    </Layout>
                }
            />

            <Route path="/daily-coding" element={
                    <Layout>
                        <DailyCodingPage />
                    </Layout>
                }
            />

            <Route path="/general" element={
                    <Layout>
                        <GeneralPage />
                    </Layout>
                }
            />

            <Route path="*" element={<NotFoundPage />}
            />

            <Route path="/entrance" element={<EntrancePage />}
            />

        </Routes>
    );
}

export default App;