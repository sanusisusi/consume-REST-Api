import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {

const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [users, setUsers] = useState([]);

    // fetch users data from rest api
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users/")
            .then(res => res.json())
            .then(
                (data) => {
                    setIsLoaded(true);
                    setUsers(data);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])
    
if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <ul>
                {users.map(user => (
                    <li>
                        <Link to={`user/${user.id}`}>{user.name}</Link>
                    </li>
                   // <li key={user.id}>
                        //{user.name}
                    //</li>
                ))}
            </ul>
        );
    }

}

export default Home;