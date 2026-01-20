import { useState, useEffect } from 'react';

export default function About() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/users'
        );

        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }

        const data = await response.json();
        setUsers(data.slice(0, 5));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <p>Loading users...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div style={{ padding: '20px' }}>
      <h2>About – Sample API Data</h2>
      <p>Fetched using useEffect in SPA</p>

      <ul>
        {users.map(user => (
          <li key={user.id}>
            <strong>{user.name}</strong> – {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}
