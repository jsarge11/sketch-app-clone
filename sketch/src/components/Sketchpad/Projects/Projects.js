import React, { Component} from 'react';
import rename from './projects-assets/rename.png';
import trashCan from './projects-assets/trash-can.png';
import ElementDisplay from './ElementDisplay/ElementDisplay';
import { connect } from 'react-redux';

import { getProjects, addProject, deleteProject, editProject, selectedProject } from '../../../ducks/projectsReducer';
import {  getElements } from '../../../ducks/shapesReducer';


import './projects.css';

class Projects extends Component{
    constructor(props){
      super(props);
      this.state = {
        projectsDisplay: true,
        selectedProject: null,
        editProject: null,
        addProject: false
      }
      this.handleDisplay = this.handleDisplay.bind(this);
      this.addProjectToggle = this.addProjectToggle.bind(this);
      this.addToProjects = this.addToProjects.bind(this);
      this.selectProject = this.selectProject.bind(this);
      this.editProject = this.editProject.bind(this);
      this.renameProject = this.renameProject.bind(this);
      this.removeProject = this.removeProject.bind(this);
      
    }

    componentDidMount(){
      this.props.getProjects();
    }

//// CONDITIONAL RENDER TO DISPLAY PROJECTS /////
    handleDisplay(){
      if(this.state.projectsDisplay){
      this.setState({
        projectsDisplay: false
      })}else{
      this.setState({
        projectsDisplay: true,
      })}
    }

    /////CONDITIONAL RENDER FOR ADD PROJECT /////
    addProjectToggle(){
      if(this.state.addProject === false){
        this.setState({
          addProject: true
        })
      }else{
        this.setState({
          addProject: false
        })
      }
    }
////// ADD NEW PROJECT ////////
    addToProjects(e, val){
      let b = val;
      let str = b.length;
      if(e.key === 'Enter' && str > 0){
      this.props.addProject({ name: val});
      this.setState({
        addProject: false,
        selectedProject: null
      })
      
      }else if(e.key === 'Enter' && str === 0){
        let count = this.props.projects.length + 1;
        let newVal = `Project ${count}`;
        this.props.addProject({ name: newVal});
        this.setState({
          addProject: false,
          selectedProject:null
        })
      }
    }
    //////CONDITIONAL RENDER FOR DISPLAY SELECTED PROJECT //////
    selectProject(val,id){
      this.setState({
        selectedProject: val
      });
      console.log("IDI", id)
      this.props.getElements(id);
      this.props.selectedProject(id)
    }
    ////CONDITIONAL RENDER FOR EDIT/////
    editProject(val){
      console.log(val)
        this.setState({
          editProject: val
        })
    
    }

    ////EDIT PROJECT /////
    renameProject(e, val, id){
      let b = val;
      let str = b.length;
      let editProject = this.state.editProject;
      let newVal = this.props.projects[editProject].pad_name;
     if(e.key === 'Enter' && str > 0 ){
        
        console.log('value', val);
        console.log('id', id)
        this.props.editProject(id, {name: val})
        this.setState({
          editProject: null,
          selectedProject: null
        })
     
      }else if(e.key === 'Enter' && str === 0 ){
        // let count = this.props.projects.length + 1;
        // let newVal = `Project ${count}`
        console.log('value', val);
        console.log('id', id)
        this.props.editProject(id, {name: newVal})
        this.setState({
          editProject: null,
          
        })
    }
  }

///DELTE PROJECT////
    removeProject(id){
      this.props.deleteProject(id)
      this.setState({
        selectedProject: null
      })
    }

    

    
    
    


  render(){
    console.log(this.props.projects)
    let { editProject } = this.state;
   
   let {projects} = this.props;
   //// CONDITIONAL RENDER TO MAP PROJECTS /////
   let displayAllProjects = this.props.projects && this.props.projects.map((e,i)=> {
    return(
       
       
      <div id="ske-projects-display" key={i} onClick={() => this.selectProject( e.pad_name, e.pad_id )} onDoubleClick={() => this.editProject(i)}>
          { i === editProject 
            ? 
            <input type='text' className="ske-projects-rename-input" placeholder={projects[editProject].pad_name} onKeyPress={ (e) => this.renameProject(e, e.target.value, projects[editProject].pad_id)}/> 
            : 
            <div>{e.pad_name}</div> 
          }
        <div>
          <img id="ske-projects-rename" src={rename} alt="" onClick={() => this.editProject(i)}/>
          <img id="ske-projects-rename" src={trashCan} alt="" onClick={() => this.removeProject(e.pad_id)}/>
        </div>
      </div>
         
      )
      });
      ////////^^^^ CONDITIONAL RENDER TO MAP PROJECTS ^^^//////
    return (
      // CONDITONAL RENDER TO DISPLAY PROJECTS
      <div id="ske-projects">
      { this.props.projects.length > 0 ? <div className="ske-user-name-display">{this.props.projects[0].first_name}'s Projects</div> : <div></div> }
        <div id="ske-all-projects-header">
          { this.state.projectsDisplay === false ? 
            <div id="ske-projects-triangle" 
              onClick={()=> this.handleDisplay()}></div> 
              : 
            <div id="ske-projects-triangle2" 
              onClick={()=> this.handleDisplay()}></div>}

            Projects 
            <span id="ske-projects-plus" onClick={() => this.addProjectToggle()}>+</span>
        </div>
              {/* ^^^^ CONDITIONAL RENDER TO DISPLAY PROJECTS ^^^*/}


            
                  { /*CONDITONAL MAP RENDER OF PROJECTS */ }
        { this.state.projectsDisplay ? displayAllProjects
            : 
            <div></div>  
        }
              {/*^^^^^CONDITIONAL MAP RENDER OF PROJECTS ^^^^^*/}

       
                        {/*CONDITIONAL RENDER OF INPUT TO ADD PROJECT */}
          
        { !this.state.addProject ? <div></div> : <input type='text' className='ske-add-project-input' placeholder="Add Project" onKeyPress={ (e) => this.addToProjects(e, e.target.value)}/> }
                {/* ^^^^ CONDITIONAL RENDER OF INPUT TO ADD PROJECT ^^^^*/}

        
                        { /*DISPLAY SELECTED PROJECT */}
        <div>{this.state.selectedProject === null ? <div></div> : <div id="ske-selected-project-display">{this.state.selectedProject}</div>  }</div> 
                      {/* ^^^^ DISPLAY SELECTED PROJECT ^^^^*/}
                      {/* DISPLAYING PROJECT SPECIFIC ELEMENTS*/}
              { this.props.selectedProject !== null ? <ElementDisplay/> : <div></div> }
                      {/* ^^^^DISPLAYING PROJECT SPECIFIC ELEMENTS^^^^^*/}
      </div>
    )
  }
}
function mapStateToProps(state){
  return{
    projects: state.projects.projects,
    selectedProject: state.projects.selectedProject
    
    
  }
}

export default  connect(mapStateToProps,{ getProjects, addProject, deleteProject, editProject, selectedProject, getElements })(Projects);
