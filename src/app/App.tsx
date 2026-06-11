import { Routes, Route } from "react-router-dom";
import Layout from './layout/Layout';
import ProfilePage from '@/pages/profile/ui/ProfilePage';
import QuestionPage from "@/pages/questions/ui/QuestionPage";
import TodoPage from "@/pages/todo/ui/TodoPage";
import DailyCodingPage from "@/pages/daily-coding/ui/DailyCodingPage";
import GeneralPage from "@/pages/general/ui/GeneralPage";
import TasksPage from "@/pages/tasks/ui/TasksPage";
import { NotFoundPage } from "@/pages/not-found/ui";
import { EntrancePage } from "@/pages/entrance/ui";
import { SubscriptionPage } from "@/pages/subscription/ui/SubscriptionPage";

function App() {
    return (
        <Routes>

            <Route path="/profile" element={
                    <Layout>
                        <ProfilePage />
                    </Layout>
                }
            />

            <Route path="/questions" element={
                    <Layout>
                        <QuestionPage />
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

            <Route path="/tasks" element={
                    <Layout>
                        <TasksPage />
                    </Layout>
                }
            />

            <Route path="*" element={<NotFoundPage />}
            />

            <Route path="/entrance" element={<EntrancePage />}
            />

            <Route path="/subscription" element={
                    <Layout>
                        <SubscriptionPage />
                    </Layout>
                }
            />

        </Routes>
    );
}

export default App;