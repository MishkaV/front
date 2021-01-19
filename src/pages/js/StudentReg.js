
import '../css/styles.css';
import '../css/StudentReg.css';

import {NavLink} from 'react-router-dom';
import { Component, useState, useEffect } from 'react';
import Button from '../../Components/Button';

function StudentReg() {
    return(
        <div className="_content reg_wrap">
           <form className="reg_form">
                    <p className="reg_form_text">Регистрация <br/>нового пользователя</p>
                    <section className="fio">
                        <input type="text" className="reg_input shadow_hover_effect" id="reg_fname_input" placeholder="Имя пользователя"></input>
                        <input type="text" className="reg_input shadow_hover_effect" id="reg_sname_input" placeholder="Фамилия пользователя"></input>
                        <input type="text" className="reg_input shadow_hover_effect" id="reg_tname_input" placeholder="Отчество пользователя"></input>
                    </section>
                    <section className="reg_birthday">
                        <p>Дата рождения: </p>
                        {/* пофиксить */}
                        <div className="date_inputs">
                            <input type="number" className="reg_input shadow_hover_effect" id="bday_input" min="1" max="31" placeholder="День"></input>
                            <input type="number" className="reg_input shadow_hover_effect" id="bmonth_input" min="1" max="12" placeholder="Месяц"></input>
                            <input type="number" className="reg_input shadow_hover_effect" id="byear_input" min="2003" max="2021"placeholder="Год"></input>
                        </div>
                    </section>
                    <section className="reg_school">
                        <p>Введите полное название вашей организации<br/>(или выберите из списка) :</p>
                        <input type="text" className="reg_input shadow_hover_effect" id="schoolname_input" placeholder="Название учебного заведения"></input>
                        <p>Введите класс обучения :</p>
                        <input type="text" className="reg_input shadow_hover_effect" id="number_of_class_input" placeholder="Класс обучения"></input>
                    </section>
                    <p>Загрузите ваше фото: </p>
                    <div className="avatar_upload">
                        {/* 
                        <div className="reg_save_btn">
                            <span>Сохранить</span>
                            <input type="file" className="circle_avatar"></input>
                            <span onclick="avatarDownload()" className="save_avatar_upload">Сохранить</span>
                        </div> */}
                        <img class="profile-pic" src="" />
                        <div class="upload-button">
		                <i class="fa fa-arrow-circle-up" aria-hidden="true"></i>
	                    </div>
	                    <input class="file-upload" type="file" accept="image/*"/>
                    </div>
                </form>
                <NavLink className="reg_student" to="/">
                    <Button text='Зарегистрироваться' name='reg_btn'/>
                </NavLink>
        </div>
    );
}

export default StudentReg;