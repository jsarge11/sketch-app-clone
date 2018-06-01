import React, { Component } from 'react';
import { connect } from 'react-redux';
import './elementDisplay.css';

class ElementDisplay extends Component{



    render(){
        console.log(this.props.selectedProject, 'selected')
        return(
            <div>
            elements
            </div> 
        )
    }
}
function mapStateToProps(state){
    return {
        selectedProject: state.projects.selectedProject
    }
}
export default connect(mapStateToProps,{})(ElementDisplay);