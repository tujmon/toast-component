import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";
import { ToastContext } from "../ToastProvider";
function ToastShelf() {
  const { toasts } = React.useContext(ToastContext);
  console.log(toasts);
  return (
    <ol
      className={styles.wrapper}
      role="region"
      ariaLive="polite"
      ariaLabel="Notification"
    >
      {toasts.map(({ variant, message, id }) => (
        <li key={id} className={styles.toastWrapper}>
          <Toast id={id} variant={variant}>
            {message}
          </Toast>
        </li>
      ))}
    </ol>
  );
}

export default React.memo(ToastShelf);
