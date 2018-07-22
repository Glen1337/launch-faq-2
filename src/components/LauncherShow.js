import React from 'react';

class LauncherShow extends React.Component {
  constructor(props){
    super(props);
    this.state={launcherToShow: {}};
  }

  componentDidMount(){
    fetch(`/api/v1/launcher/${this.props.params.id}`)
    .then(response => {
      let parsed = response.json()
      return parsed
    }).then(launcher => {
      this.setState({launcherToShow: launcher});
    })
  }

  render(){
    return(
      <div>
        <h4>&nbsp;Info for {this.state.launcherToShow.name}  </h4>
        <h5>&nbsp;ID: {this.props.params.id}</h5>
        <h5>&nbsp;Bio: {this.state.launcherToShow.bio}</h5>
        </div>
    )
  }
}

export default LauncherShow;
