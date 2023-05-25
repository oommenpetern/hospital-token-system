const initialState = {
    tokens: [],
    nextToken: 1,
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'GENERATE_TOKEN':
        return {
          ...state,
          tokens: [
            ...state.tokens,
            {
              id: state.nextToken,
              name: action.payload.name,
            },
          ],
          nextToken: state.nextToken + 1,
        };
      case 'CALL_NEXT_TOKEN':
        return {
          ...state,
          tokens: state.tokens.slice(1),
        };
      default:
        return state;
    }
  };
  
  export default rootReducer;
  