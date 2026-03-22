import { useGetUserQuery} from "../../entities/user/api/userApi";

function ProfilePage() {
    const { data, isLoading, error} = useGetUserQuery();

    if (isLoading) return <p>Загрузка...</p>
    if (error) return <p>Ошибка</p>

    return (
        <div>
            <h1>{data.name}</h1>
            <p>{data.email}</p>
            <p>{data.username}</p>
        </div>
    )
}

export default ProfilePage;