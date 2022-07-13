import audioIcon from "./audioIcon.png";
import "./Phonetics.css";

export default function Phonetics(props){
    return (<div className = "Phonetics">
        {props.phonetics.map(function(phonetic, index){
            return(<div key={index}>
                <span>
                    <a href={phonetic.audio}><img src={audioIcon} alt="audio icon" width="50"/></a>
                </span>
                <p>
                    {phonetic.text}
                </p>
                </div>
                );
        })}
    </div>);
}