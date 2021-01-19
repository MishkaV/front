function Section(props){
    return(
        <div className={`_btn section_btn shadow_hover_effect ${props.name}`}>
            <span className="underline_white_effect">{props.text}</span>
        </div>
    );
}

export default Section;