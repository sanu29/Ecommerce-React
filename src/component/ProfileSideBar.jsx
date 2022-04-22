import { NavLink } from "react-router-dom";

export const ProfileSideBar = () => {
    const activeStyle = {
        color: 'var(--primary  )',
        fontWeight: "bold"
    };
    return( <div className="profile-sidebar ">
        <div className="menu-option d-flex justify-content-center align-items-center heading-2 font-color-primary  ">
            <span class="material-icons ">
                person
            </span>
            Account Details

        </div>
        <NavLink to={"/profile"} style={({ isActive }) => isActive ? activeStyle : undefined} className="option menu-option">Profile</NavLink>
        <NavLink to={"/address"} className="option menu-option">Address</NavLink>
        <NavLink to={"/order"} className="option menu-option">Orders</NavLink>
    </div>);
};
