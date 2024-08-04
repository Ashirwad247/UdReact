import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

function Modal({ open, children }) {
  const dialog = useRef(null);

  useEffect(() => {
    if (dialog.current) {
      if (open) {
        if (!dialog.current.open) {
          dialog.current.showModal();
        }
      } else {
        dialog.current.close();
      }
    }
  }, [open]);

  return createPortal(
    <dialog className="modal" ref={dialog}>
      {open ? children : null}
    </dialog>,
    document.getElementById("modal")
  );
}

export default Modal;
