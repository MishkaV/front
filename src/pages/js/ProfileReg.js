import '../css/ProfileReg.css';
import '../css/styles.css';
import {NavLink} from 'react-router-dom';
import Button from '../../Components/Button';

function ProfileReg() {
    return(
        <div className="auth-wrap">
            <div className="_content reg_content">
                <h1>Вы являетесь учеником?</h1>
                <NavLink className="reg_student_path"
                to="/student_registration/">
                    <Button name="reg_student_path_btn" text="Продолжить, как ученик"/>
                </NavLink>
                <NavLink className="reg_teacher_path"
                to="/teacher_registration/">
                    <Button name="reg_teacher_path_btn" text="Зарегистрироваться, как преподаватель"/>
                </NavLink>
            </div>
        </div>
    );
}

export default ProfileReg;