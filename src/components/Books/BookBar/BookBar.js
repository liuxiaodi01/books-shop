import classes from "./BookBar.module.css";
import Icon from "../../UI/Icon/Icon";
import Button from "../../UI/Button/Button";
import CartDetail from "../../Cart/CartDetail/CartDetail";
import { useEffect, useState } from "react";
function BookBar(props) {
  const [showDetail, setShowDetail] = useState(false);
  const toggerDetailHandler = () => {
    if (props.sumNum === 0) {
      return setShowDetail((preShowDetail) => (preShowDetail = false));
    }
    setShowDetail((preShowDetail) => (preShowDetail = !preShowDetail));
  };
  useEffect(() => {
    if (props.sumNum === 0) {
      setShowDetail((preShowDetail) => (preShowDetail = false));
    }
  }, [props, setShowDetail]);
  return (
    <div className={classes["book-bar"]} onClick={toggerDetailHandler}>
      {showDetail === true && <CartDetail></CartDetail>}

      <div>
        {props.iconTitle ? (
          <span
            style={{ color: "yellow", marginLeft: "15rem", fontSize: "15rem" }}
          >
            {props.iconTitle}:
          </span>
        ) : (
          <Icon type="icon-shudian" style={{ color: "yellow" }}></Icon>
        )}
        {props.sumNum ? (
          <>
            <span className={classes["book-num"]}>{props.sumNum}</span>
          </>
        ) : (
          ""
        )}
        <span className={classes["book-price"]}>
          {props.sumPrice ? "￥" + props.sumPrice : "未选择商品"}
        </span>
      </div>
      <Button
        className={props.sumNum ? classes["active"] : classes["not-active"]}
        onClick={props.toSettle}
      >
        {props.settle}
      </Button>
    </div>
  );
}
export default BookBar;
