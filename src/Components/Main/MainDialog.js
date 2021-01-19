import LabView from "./LabView";
import {NavLink} from 'react-router-dom';
function MainDialog(props){
    if(props.active_session===1){
        return(
            <div className="main_dialog_section_wrap">
                <LabView></LabView>
                <LabView></LabView>
                <LabView></LabView>
                <LabView></LabView>
                <NavLink className="to_all_labs" to="/"><p className="to_all_labs_text"></p></NavLink>
            </div>
        );
    }
    
}

export default MainDialog;