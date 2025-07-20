const CleatErrorContext = (dispatch: any, state: object) => {
  setTimeout(() => {
    dispatch({ ...state });
  }, 100);
};

export default CleatErrorContext;
