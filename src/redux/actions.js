
  export const generateToken = (name) => {
    return {
      type: 'GENERATE_TOKEN',
      payload: {
        name,
      },
    };
  };
  
  
  export const callNextToken = () => {
    return {
      type: 'CALL_NEXT_TOKEN',
    };
  };