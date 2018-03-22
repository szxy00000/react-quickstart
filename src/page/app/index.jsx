import React from 'react';
import { connect } from 'react-redux';

import './index.less';
// import {actions} from '../../redux/app';

class App extends React.Component {
  constructor (props){
    super(props);

  }
  render (){
    return (<div className='app'>
      {this.props.children}
    </div>
    );
  }
}

export default connect(state => {
  return {
    ...state.app
  };
})(App);
