import audioIcon from "./audioIcon.png";
import "./Phonetics.css";

export default function Phonetics(props){
    return (<div className = "Phonetics text-center">
        {props.phonetics.map(function(phonetic, index){
            if (index === 1){
            return(<div key={index}>
                <div>
                    <a href={phonetic.audio}><img src={audioIcon} alt="audio icon" width="50"/></a>
                </div>
                <p>
                    {phonetic.text}
                </p>
                </div>
                );
            } else {
                return null;
            }
        })}
    </div>);
}