import * as React from "react";

const { ipcRenderer } = require('electron')
import { ComponentBaseProperties, ComponentBaseState, ComponentBase } from "../../base-classes";


interface ProjectsProperties extends ComponentBaseProperties {

}
interface ProjectsState extends ComponentBaseState {
 
}

export class Projects extends ComponentBase<ProjectsProperties, ProjectsState>{
    state = {
        issues:{}
    }
    public render() {
        ipcRenderer.on('projects', (event: any, issues: any) => {
            this.setState({ issues: issues})
        })
        return (
         <div className="projects-container">
        
         </div>
        )
    }

}