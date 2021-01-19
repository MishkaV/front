import {NavLink} from 'react-router-dom';
import Section from '../../Components/Main/Section';
import MyProfileSection from '../../Components/Main/MyProfileSection';
import LabView from '../../Components/Main/LabView';
import MainDialog from '../../Components/Main/MainDialog';
import $ from 'jquery';

function findActive(){
    const sectionsArr = ["Активные работы" , "Завершенные работы", "Работы на проверке", "Все работы", "Статистика"];
    const active = $("[state=active]");
    const activeText = active.text;
    let i = 0;
    sectionsArr.forEach(element => {
        i++;
        if(element === activeText){
            return i;
        }
    });
}

function MainPage(props){
    return(
        <div className="main_page_wrap">
            <MyProfileSection></MyProfileSection>
            <Section text="Активные работы" ></Section>
            <Section text="Завершенные работы" ></Section>
            <Section text="Работы на проверке" ></Section>
            <Section text="Все работы" ></Section>
            <Section text="Статистика" ></Section>
            <MainDialog active_session={`"${findActive()}"`}></MainDialog>
            <NavLink className="feedback" to="/">
                <p>Сообщить об ошибке</p>
            </NavLink>
            <NavLink className="quit_account" to="/">
                <p>Выйти</p>
            </NavLink>
        </div>
    );
}

export default MainPage;