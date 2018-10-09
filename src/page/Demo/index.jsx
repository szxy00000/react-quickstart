import React from 'react';
import { connect } from 'react-redux';
import './index.less';
import { actions } from 'store/demo';

class Demo extends React.Component {
  constructor (props){
    super(props);

  }
  render (){
    return <div className='demo' onClick={() => {
      this.props.updateCur('demo');
    }}>
       demo
    </div>;
  }
}

export default connect(state => {
  return {
    ...state.demo
  };
}, actions)(Demo);
