import './ProjectTab.css';
import { useState } from 'react';
export const ProjectTab = ({header, type, dates, description, open=false}) =>{
    const [selected, setSelected] = useState(open)
    const handleSelect = (name) =>{
        if (selected === true){
            setSelected(!selected)
        }else{
            setSelected(true)
            console.log(selected);
        }
        console.log(selected.Reading);
        
    }
    return(
        <div className={ `${selected.Devs && 'selectedProj'} , projectCard`} onClick={()=>handleSelect()} to='/projects'>
                    <div className="additional-info">
                        <h3>{header}</h3>
                        <span>Type: {type}</span> 
                        <span>Dates: {dates}</span>
                    </div>
                {selected && description} </div>
    )
}