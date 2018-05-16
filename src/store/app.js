const TYPES = {
  TEST: Symbol('TEST')
};

const initialState = {
  test: 'nemo'
};

exports.actions = {
  updateCur : curTab => {
    return {
      type : TYPES.TEST,
      payload: curTab
    };
  },
};


export default (state = initialState, { type }) => {
  if (type === TYPES.TEST) {
    return {...state};
  }
  return state;
};
