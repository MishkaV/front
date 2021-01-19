
import {NavLink} from 'react-router-dom';
import Button from '../../Components/Button';
import '../css/styles.css';
import '../css/Auth.css';


function Auth() {
    return(
        <div className="auth-wrap">
            <div className="_content auth-content">
                <form className="auth-form">
                    <h1>Авторизация</h1>
                    <input type="text" className="reg_input shadow_hover_effect" id="auth-login" placeholder="Логин или электронная почта"></input>
                    <input type="password" className="reg_input shadow_hover_effect" id="auth-password" placeholder="Пароль"></input>
                    <NavLink className="auth_sign_in"
                    to="/main_active/">
                        <Button text="Войти"/>
                    </NavLink>
                    <div className="auth_other_section">
                        <NavLink to="/" className="auth-change-pswrd">
                            <span className="underline_white_effect">Забыли пароль?</span>
                        </NavLink>
                        <NavLink to="/new_user_registration/" className="auth-reg">
                            <span className="underline_white_effect">Зарегистрироваться</span>
                        </NavLink>
                    </div>
                    
                </form>
            </div>
        </div>
    );
}

export default Auth;