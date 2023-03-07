import React from "react";
export const ToastContext = React.createContext();
function ToastProvider({children}) {
  const [toasts, setToasts] = React.useState([])
  
  const createNewToast = React.useCallback((variant, message) => {
    console.log(variant, message)
    setToasts((present) => [
      ...present,
      { variant, message, id: Math.random() },
    ]);
  }, [])

  function removeToastById(id) {
    const newList = toasts.filter((item) => item.id !== id);
    setToasts(newList);
  }

  function removeAllToasts() {
    setToasts([])
  }

  const value = React.useMemo(() => ({
    toasts,
    createNewToast,
    removeToastById,
    removeAllToasts
  }),[toasts])
  return (<ToastContext.Provider value={value}>
    {children}
  </ToastContext.Provider>);
}

export default ToastProvider;
