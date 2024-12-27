import React, { useState } from 'react';
import axios from 'axios';
import usersData from '../user.json';

const RandomUserTable = () => {
    const [users, setUsers] = useState([]);

    const addUser = () => {
        try {
            const randomIndex = Math.floor(Math.random() * usersData.length);
            const randomUser = usersData[randomIndex];
            setUsers([...users, randomUser]);
        } catch (error) {
            console.log(error);
        }
    };

    const deleteUser = (index) => {
        const newUsers = [...users];
        newUsers.splice(index, 1);
        setUsers(newUsers);
    };

    return (
        <>    
        <div > 
         <div>
            <button onClick={addUser}>Add Record</button>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={index}>
                            <td>{user.name}</td>
                            <td>{user.height}</td>
                            <td>{user.mass}</td>
                            <td>
                                <button onClick={() => deleteUser(index)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </div> 
        </>

    );
};

export default RandomUserTable;

















