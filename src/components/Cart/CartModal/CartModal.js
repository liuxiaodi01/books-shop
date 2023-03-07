// @@filename('弹出框')
import BackDrop from "../../UI/BackDrop/BackDrop";
import Button from "../../UI/Button/Button";
import classes from "./CartModal.module.css";
function CartModal(props) {
  return (
    <BackDrop onClick={props.cancel} style={{ zIndex: 113 }}>
      <div className={classes["cart-modal"]}>
        <h2>请确认删除所有已选中商品吗?</h2>
        <div className={classes["cart-footer"]}>
          <Button className={classes["confirm"]} onClick={props.confirm}>
            确认
          </Button>
          <Button onClick={props.cancel}>取消</Button>
        </div>
      </div>
    </BackDrop>
  );
}
export default CartModal;
