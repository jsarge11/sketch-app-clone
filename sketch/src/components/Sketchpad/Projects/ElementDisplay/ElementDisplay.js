import React, { Component } from 'react';
import { connect } from 'react-redux';
import { renameElement, deleteElement, addSelected, resetChanged, saveChanged } from '../../../../ducks/shapesReducer';
import './elementDisplay.css';
import trashCan from  '../projects-assets/trash-can.png';

class ElementDisplay extends Component{
    constructor(){
        super();
        this.state = {
            editName: null
        }
        this.editName = this.editName.bind(this);
        this.renameElement = this.renameElement.bind(this);
        this.deleteElement = this.deleteElement.bind(this);
    }

    editName(val){
        this.setState({
            editName: val
        })
    };
    deleteElement(id, pad){
        let { selectedProject, changed, elements } = this.props
            if( changed.length > 0){
                    elements.map((e,i) => {
                        this.props.saveChanged(e.id, selectedProject, e.body);
                    });
                    this.props.resetChanged(id);
                    this.props.deleteElement(id, pad);
                    
                }else{
                    this.props.deleteElement(id, pad);
                    this.props.resetChanged(id);
                }
             
    }

    renameElement(e, val, id, pad){
        
        let { selectedProject, changed, elements } = this.props
            if(e.key === 'Enter'){
                if( changed.length > 0){
                    elements.map((e,i) => {
                        
                        this.props.saveChanged(e.id, selectedProject, e.body);
                    });
                    this.props.renameElement(id, val, pad);
                this.setState({
                  editName: null,
                  
                })
                this.props.resetChanged(id);
                }else{
                    this.props.renameElement(id, val, pad);
                this.setState({
                  editName: null,
                  
                })
                this.props.resetChanged(id);
                }
        }     
    }


    render(){
        
        console.log("changed", this.props.changed)
        let elements = this.props.elements;
        let editName = this.state.editName;
        let selectedProject = this.props.selectedProject;
        let displayElements = elements.length > 0 && elements.map((e,i) => {
           if(this.props.selected.id === e.id && selectedProject !== null){
            return (
            <div id="ele-elements-display-blue" key ={i} onDoubleClick={() => this.editName(i)}>
            {   i === editName && selectedProject !== null
                ?
                    <input type='' className='' placeholder={elements[editName].e_name} onKeyPress={ (e) => this.renameElement(e, e.target.value, elements[editName].id, elements[editName].pad_id)}/> 
                : 
                    
                    <div onClick={()=> this.props.addSelected(this.props.elements[i])}>
                        
                    
                    { e.e_name !== null 
                    ? 
                        <div>{e.e_name}   {e.e_type}</div>
                    : 
                        <div>{e.e_type}</div>  
                        }
                    </div>
                }
             <div>
                <img id="ske-projects-rename" src={trashCan} alt="" onClick={()=> this.deleteElement(e.id, e.pad_id)}/>
             </div>
            </div> )}else if(this.props.elements && selectedProject !== null){
                return(
                    <div id="ele-elements-display" key ={i} onDoubleClick={() => this.editName(i)}>
                    {   i === editName 
                        ?
                            <input type='' className='' placeholder={elements[editName].e_name} onKeyPress={ (e) => this.renameElement(e, e.target.value, elements[editName].id, elements[editName].pad_id)}/> 
                        : 
                            
                            <div style={{cursor: 'pointer'}} onClick={()=> this.props.addSelected(this.props.elements[i])}>
                                
                            
                            { e.e_name !== null 
                            ? 
                                <div>{e.e_name}   {e.e_type}</div>
                            : 
                                <div>{e.e_type}</div>  
                                }
                            </div>
                        }
                     <div>
                        <img id="ske-projects-rename" src={trashCan} alt="" onClick={()=> this.deleteElement(e.id, e.pad_id)}/>
                     </div>
                    </div>   
                )
            }
        })
        return(
            <div>
            {displayElements}
            </div> 
        )
    }
}
function mapStateToProps(state){
    return {
        elements: state.shapes.shapes,
        selected: state.shapes.selected,
        selectedProject: state.projects.selectedProject,
        changed: state.shapes.changed
        
    }
}
export default connect(mapStateToProps,{ renameElement, deleteElement, addSelected, resetChanged, saveChanged })(ElementDisplay);