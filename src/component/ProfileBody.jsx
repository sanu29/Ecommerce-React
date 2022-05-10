export function ProfileBody(user) {
    return <div className="profile-main padding-32">
        <div className="font-color-primary heading-2">Personal Information</div>
        <div className="d-flex align-items-center justify-content-center padding-32 ">

            <div>
                <table className="profile-data w-100" >
                    <tbody className="profile-data w-100">
                    <tr className="menu-option d-flex ">
                        <td className="w-100 text-align-left font-weight-bold">First Name</td>
                        <td className="w-100 text-align-left">{user.firstName}</td>
                    </tr>
                    <tr className="menu-option d-flex ">
                        <td className="w-100 text-align-left font-weight-bold">Last  Name</td>
                        <td className="w-100 text-align-left">{user.lastName}</td>
                    </tr>
                    <tr className="menu-option d-flex ">
                        <td className="w-100 text-align-left font-weight-bold">Email Id</td>
                        <td className="w-100 text-align-left">{user.email}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>

    </div>;
}
