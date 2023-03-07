import classes from "./Button.module.css";
function Button(props) {
  const { className, ...other } = props;
  return (
    <button className={`${className} ${classes["u-btn"]}`} {...other}>
      {props.children}
    </button>
  );
}
export default Button;
