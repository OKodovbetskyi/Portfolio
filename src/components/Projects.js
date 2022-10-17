import React from "react";
import Card from "./Card";
const Projects = React.forwardRef((props, ref) =>{
    return(
        <Card ref={ref} id="projects" cardName="<Projects>" cardNamec="</Projects>">
        <div>
            <h2>My Projects</h2>
        </div>
        </Card>
    )
})
export default Projects;