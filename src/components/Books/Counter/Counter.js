// @@filename('计算器')
import Icon from "../../UI/Icon/Icon";
import classes from "./Counter.module.css";
function Counter(props) {
  return (
    <div className={classes["counter"]}>
      {props.price > 0 && (
        <>
          <Icon
            type="icon-jianshao"
            className={classes["sub"]}
            onClick={props.subHandler}
          ></Icon>
          <span>{props.price}</span>
        </>
      )}
      <Icon
        type="icon-jia"
        className={classes["add"]}
        onClick={props.addHandler}
      ></Icon>
    </div>
  );
}
export default Counter;
