import { useEffect, useState } from "react";
import UserData from "./UserData";
const Api = "http://localhost:3031/users";

function TableItems() {
  const [users, setUsers] = useState([]);

  const fetchUser = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);

      if (data.length > 0) {
        setUsers(data);
      }
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchUser(Api);
  }, []);

  return (
    <>
      <div className="container mt-4">
        <div className="table-responsive">
          <table className="table table-bordered table-striped table-hover">
            <thead className="table-dark">
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
              </tr>
            </thead>
            <tbody>
              <UserData users={users} />
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default TableItems;
