import classes from "./Icon.module.css";
function Icon(props) {
  const { className, type, spin, ...other } = props;
  return (
    <i
      className={`${classes["icon"]} ${className} iconfont ${type} ${
        spin && classes['"spin"']
      }`}
      {...other}
    ></i>
  );
}
export default Icon;
