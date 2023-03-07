import classes from "./CartBalanceItem.module.css";
function CartBalanceItem(props) {
  return (
    <div className={classes["cart-balance-item"]}>
      <div className={classes["book-img"]}>
        <img src={props.img} alt={"图片显示出现问题"}></img>
      </div>
      <div className={classes["book-content"]}>
        <div>
          <h2>{props.title}</h2>
          <span className={classes["num"]}>数量:{props.num}</span>
        </div>
        <div className={classes["price"]}>
          价格:<span>{props.price}</span>
        </div>
      </div>
    </div>
  );
}
export default CartBalanceItem;
