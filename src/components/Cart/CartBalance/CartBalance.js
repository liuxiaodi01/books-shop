// @@filename("支付页面")
import BookBar from "../../Books/BookBar/BookBar";
import Books from "../../Books/Books";
import Card from "../../UI/Card/Card";
import Icon from "../../UI/Icon/Icon";
import classes from "./CartBalance.module.css";
import CartBalanceItem from "./CartBalanceItem/CartBalanceItem";
function CartBalance(props) {
  const renderCartBalanceChildren = (mealsList) => {
    return mealsList.map((item) => (
      <CartBalanceItem {...item} key={item.id}></CartBalanceItem>
    ));
  };
  return (
    <div className={classes["cart-balance"]}>
      <div className={classes["cart-balance-head"]}>
        <Icon type="icon-fanhui" onClick={props.goBack}></Icon>
      </div>
      <Card className={classes["cart-balance-body"]}>
        <div className={classes["cart-balance-body-head"]}>书籍详情</div>
        <div className={classes["cart-balance-body-main"]}>
          {renderCartBalanceChildren(props.mealsList)}
        </div>
        <div className={classes["cart-balance-body-sum"]}>
          合计:￥{props.sumPrice}
        </div>
      </Card>
      <BookBar
        sumNum={0}
        sumPrice={props.sumPrice}
        settle="去支付"
        iconTitle="合计"
      ></BookBar>
    </div>
  );
}
export default CartBalance;
