

function Button(props){
    return(
        <div className={`_btn ${props.name} shadow_hover_effect`}>
            <span className="underline_blue_effect">{props.text}</span>
        </div>
    );
}

export default Button;