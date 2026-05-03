import { useGetUserQuery } from "../../../entities/user/api/userApi";

export type Skill = {
    name: string;
    value: number;
};

export const useProfile = () => {
    const { data, isLoading, error} = useGetUserQuery();

    const progress = 50; // Пример прогресса, можно заменить на реальное значение

    const skills = [
        { name: 'Python', value: 80 },
        { name: 'Next.js', value: 65 },
        { name: 'TypeScript', value: 30 },
        { name: 'JavaScript', value: 15 },
    ]

    return {
        user: data,
        isLoading,
        error,
        progress,
        skills,
    };
};    