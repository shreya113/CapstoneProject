import { Link, link } from "react-router-dom";
const Header = () => {
    const params = "";
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <link to="/list">CRUD APP</link>

            <div className="collapse navbar-collapse">
                <ul className="navbar-ul mr-auto">
                    <li className="navbar-item">
                        <link to="/list">List User</link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/create">Create User</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to={`/edit/${params}`}>Edit User</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
export default Header;