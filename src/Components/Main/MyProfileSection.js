import {NavLink} from 'react-router-dom';

function MyProfileSection(){
    return(
        <div className="profile_wrap">
            <div className="profile_circle"></div>
            <NavLink className="profile_name" to="/">
                <p className="profile_name_text">Мой кабинет</p>
            </NavLink>
        </div>
    );
}

export default MyProfileSection;