import React, { Component } from 'react';
import { Link } from 'react-router'

class LauncherList extends Component {
  constructor(props){
    super(props)
    this.state = {
      launchers: []
    }
  }

  componentDidMount(){
    fetch('http://localhost:4567/api/v1/launchers')
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        console.log('not ok');
        let errorMessage = `${response.status} (${response.statusText})`,
            error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => {return response.json();})
    .then(body => {
      this.setState({ launchers: body });
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render(){
    let launcherList = this.state.launchers.map((launcher) => {
      return(
        <li key={launcher.id}>
          <Link to={`/launcher/${launcher.id}`}>{launcher.name} ({launcher.id})</Link>
        </li>
      )
    })

    return(
      <div className='page'>
        <ul>
          {launcherList}
        </ul>
      </div>
    )
  }
}

export default LauncherList;
