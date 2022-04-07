const AddUser = () => {
    return(
        <div className="container m-2">
            <h3>Create new user</h3>
            <form>
                <div className="form-group">
                    <label htmlFor="fullname">FullName</label>
                    <input
                    type="text"
                    name="fullname"
                    id="fullname"
                    className="form-control"
                    placeholder="Enter Fullname"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                    type="email"
                    name="email"
                    id="email"
                    className="form-control"
                    placeholder="Enter Email"
                    />
                </div>
                <div className="form-check form-check-inline">
                    <input
                    type="radio"
                    name="gender"
                    id="gender"
                    className="form-check-input"
                    value="Male"
                    />
                    <label htmlFor="gender" className="form-check-lable">
                        Male
                    </label>
                </div>
                <div className="form-check form-check-inline">
                    <input
                    type="radio"
                    name="gender"
                    id="gender"
                    className="form-check-input"
                    value="Female"
                    />
                    <label htmlFor="gender" className="form-check-lable">
                        Female
                    </label>
                </div>
            </form>
        </div>
    )
};

export default AddUser;