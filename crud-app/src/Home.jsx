import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteUser } from "./userReducer";

function Home() {
  const users = useSelector((state) => state.users);
  console.log(users);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(
      deleteUser({
        id: id,
      })
    );
  };
  return (
    <div className="container">
      <h2>CRUD app with json server</h2>
      <Link to="/create" className="btn btn-success my-3">
        create +
      </Link>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>EMAIL</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <Link
                  to={`/edit/${user.id}`}
                  className="btn btn-sm btn-primary "
                >
                  EDIT
                </Link>
                <button
                  onClick={() => handleDelete(user.id)}
                  className="btn btn-sm btn-danger ms-2 "
                >
                  DELETE
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Home;
