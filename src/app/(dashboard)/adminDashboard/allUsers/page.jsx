import { authOptions } from '@/lib/authOptions';
import { getServerSession } from 'next-auth';
import AllUserTable from '../components/AllUserTable';

const ALLUsersPage = async () => {
    const session = await getServerSession(authOptions);

    if (!session) {
        return <p>You are not authenticated</p>;
    }

    const email = session?.user?.email;

    const res = await fetch(`http://localhost:5000/api/user/allUser/${email}`, {
        next: { revalidate: 0 }, 
    });

    if (!res.ok) {
        return <p>Unauthorized or failed to load users</p>;
    }

    const data = await res.json();

    return (
        <div>
            <AllUserTable data={data} />
        </div>
    );
};

export default ALLUsersPage;
