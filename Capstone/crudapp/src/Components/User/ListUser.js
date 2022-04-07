import { useEffect } from "react";
import UserService from "../../Services/UserService";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const ListUser = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        UserService.getUser().then((res) => {
            console.log(res.data);
            dispatchEvent({type: "users", value: res.data});
        });
    }, []);
    return (
        <div className="container">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>FullName</th>
                        <th>Email</th>
                        <th>Phone no</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Default</td>
                        <td>Default</td>
                        <td>Default</td>
                        <td>
                            <Link to="/create" className="btn btn-warning">
                                Edit
                            </Link>
                            <button type="button" className="btn btn-danger">
                                Delete
                            </button>
                        </td>
                    </tr>
                    <tr>
                    <td>Default</td>
                    <td>Default</td>
                    <td>Default</td>
                    <td>
                        <Link to="/create" className="btn btn-warning">
                        Edit
                        </Link>
                    </td>
                    </tr>
                </tbody>
            </table>

        </div>
    )
};

export default ListUser;