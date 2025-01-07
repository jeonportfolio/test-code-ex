import { useEffect, useState } from "react"

const Profile = ({ userId }) => {

   const[user, setUser] = useState(null);
   const[loading, setLoading] = useState(true);

   useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(`http://jsonplaceholder.typecode.com/users/${userId}`);
            const data = await res.json();
            setUser(data);
            setLoading(false);
        };
        fetchData();
   },[]);
  
  if(loading) return <div>loading...</div>
  return (
    <div>
        <div>{user.name}</div>
        <div>{user.email}</div>
    </div>
  )
}

export default Profile