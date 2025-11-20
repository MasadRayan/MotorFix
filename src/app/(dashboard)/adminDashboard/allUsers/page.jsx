import { authOptions } from '@/lib/authOptions';
import { getServerSession } from 'next-auth';
import React from 'react';

const ALLUsersPage = () => {
    const session = getServerSession(authOptions);
    console.log(session);
    return (
        <div>
            
        </div>
    );
};

export default ALLUsersPage;