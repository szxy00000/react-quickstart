import pure from 'pure/demo';
const TYPES = {
  UPDATE_PROPS: Symbol('update_props')
};

const initialState = {
  demo: 'test-demo'
};

let actions = {
  updateCur : curTab => {
    return {
      type : TYPES.UPDATE_PROPS,
      payload: pure.parseData(curTab)
    };
  },
  updateXXX : curTab => {
    return {
      type : TYPES.UPDATE_PROPS,
      payload: curTab
    };
  },
};

exports.actions = actions;
export default (state = initialState, { type, payload }) => {
  if (type === TYPES.UPDATE_PROPS) {
    return {
      ...state,
      ...payload
    };
  }
  return state;
};
