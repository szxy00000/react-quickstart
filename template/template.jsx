import React from 'react';
import { connect } from 'react-redux';
import './index.less';
// import {actions} from 'store/template';

class Template extends React.Component {
  constructor (props){
    super(props);

  }
  render (){
    return (<div className='template'>
       template
    </div>
    );
  }
}

export default connect(state => {
  return {
    ...state.template
  };
})(Template);
