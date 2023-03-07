import React from "react";
function useEscapeKey (escapeFunction){
  React.useEffect(() => {
    function handleKeyDown(event) {
      if (event.code === 'Escape') {
        escapeFunction();
      }
    }

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  } ,[])
}
export default useEscapeKey