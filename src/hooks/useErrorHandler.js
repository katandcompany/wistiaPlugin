import { useState } from 'react';

const useErrorHandler = () => {
  const [errorMsg, setErrorMsg] = useState(false);
  return {
    errorMsg,
    setErrorMsg
  };
};

export default useErrorHandler;
