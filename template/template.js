const TYPES = {
  UPDATE_PROPS: Symbol('update_props')
};

const initialState = {
  template: 'test-template'
};

exports.actions = {
  updateCur : curTab => {
    return {
      type : TYPES.UPDATE_PROPS,
      payload: curTab
    };
  },
};


export default (state = initialState, { type, payload }) => {
  if (type === TYPES.UPDATE_PROPS) {
    return {
      ...state,
      ...payload
    };
  }
  return state;
};
