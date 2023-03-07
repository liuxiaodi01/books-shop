import { createPortal } from "react-dom";
import classes from "./BackDrop.module.css";
const backdrop = document.getElementById("backdrop-root");
console.log(backdrop);
function BackDrop(props) {
  const { className, ...other } = props;
  return createPortal(
    <div className={`${classes["back-drop"]} ${className}`} {...other}>
      {props.children}
    </div>,
    backdrop
  );
}
export default BackDrop;
