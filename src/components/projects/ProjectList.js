import React from 'react'
import { connect } from 'react-redux';
import ProjectSummary from './ProjectSummary'

const ProjectList = (props) => {
  const { projects } = props ; 
  console.log(projects)
  return (
    <div className="project-list section">  
      { projects && projects.map(item => {
        return (<ProjectSummary proj={item} key={item.id} />)
      }) }
    </div>
  )
}

const mapStateToProps = (data) => {
  return {
    projects:data.project
  }
}

export default connect(mapStateToProps)(ProjectList);
