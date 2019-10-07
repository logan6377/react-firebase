import React, {useContext} from 'react'
import { connect } from 'react-redux';
import ProjectSummary from './ProjectSummary'
import { ThemeContext } from '../context/ThemeContext';

const ProjectList = (props) => {
  const { projects } = props ; 
  const { bgcolor, toggleChange } = useContext(ThemeContext);
  //console.log(projects)
  return (
    <div className="project-list section" style={{background:bgcolor}} > 
    <button onClick={toggleChange}>Toggle</button> 
      { projects && projects.map(item => {
        return (<ProjectSummary proj={item} key={item.id} />)
      }) }
    </div>
  )
}

const mapStateToProps = (data) => {
  console.log(data)
  return {
    projects:data.project,
    
  }
}

export default connect(mapStateToProps)(ProjectList);
