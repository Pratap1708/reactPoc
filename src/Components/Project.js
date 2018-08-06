import React, { Component } from 'react';


class Project extends Component {
	
  render() {
  	var i = 1;
    return (
      <div className="Project">
        My Project
		<h5>{i === 1 ? 'True!' : 'False'}</h5>
      </div>
    );
  }
}

export default Project;