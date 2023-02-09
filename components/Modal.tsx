import React from "react";
import Alert from "./Alert";

export default function Modal(props: any) {
  return (
    <>
      <input type="checkbox" id={props.modalname} className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative w-80">
          <Alert texto={props.modaltext} />
          <label
            htmlFor={props.modalname}
            className="mt-3 h-10 transition ease-in-out active:scale-90 cursor-pointer flex items-center justify-center
                      border border-transparent text-base font-medium rounded-2xl text-white bg-blue-900 hover:bg-blue-800
                      active:bg-blue-700"
          >
            Cerrar
          </label>
        </div>
      </div>
    </>
  );
}
