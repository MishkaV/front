
import CheckSign from '../../img/icons/check.png';
import CrossSign from '../../img/icons/cross.png';

function LabView(props){
    return(
        <div className="lab_view_card">
            <h1 className="lab_card_number">Работа № 4</h1>
            <h1 className="lab_card_title">Определение постоянной Планка </h1>
            <div className="lab_card_check_state">
                <p className="lab_card_check_text">Сдано</p>
                <img className="lab_card_check_sign" src={CrossSign}></img>
            </div>
            <div className="lab_card_deadline">
                <p className="lab_card_deadline_text">Дедлайн сдачи:</p>
                <span className="lab_card_deadline_date">12/11/2020 <br/>23:59</span>
            </div>
        </div>
    );
}

export default LabView;