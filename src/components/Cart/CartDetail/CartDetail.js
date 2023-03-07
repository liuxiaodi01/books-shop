// @@filename('详情页')
import { useContext, useState } from "react";
import BackDrop from "../../UI/BackDrop/BackDrop";
import Icon from "../../UI/Icon/Icon";
import classes from "./CartDetail.module.css";
import BooksContext from "../../../store/books-context";
import Books from "../../Books/Books";
import CartModal from "../CartModal/CartModal";
function CartDetail() {
  const ctx = useContext(BooksContext);
  const [showModal, setShowModal] = useState(false);
  const confirm = () => {
    ctx.clearMeals();
    setShowModal((preShowModal) => (preShowModal = false));
  };
  const cancel = () => {
    setShowModal((preShowModal) => (preShowModal = false));
  };
  return (
    <BackDrop>
      <div
        className={classes["cart-detail"]}
        onClick={(e) => e.stopPropagation()}
      >
        {ctx.mealsList.length > 0 && showModal && (
          <CartModal confirm={confirm} cancel={cancel}></CartModal>
        )}

        <div className={classes["cart-head"]}>
          <h2>书籍详情</h2>
          <p
            onClick={() =>
              setShowModal((preShowModal) => (preShowModal = true))
            }
          >
            <Icon type="icon-shanchu"></Icon>
            清空购物车
          </p>
        </div>
        <div className={classes["book-list"]}>
          <Books showDesc bookList={ctx.mealsList} keyword=""></Books>
        </div>
      </div>
    </BackDrop>
  );
}
export default CartDetail;
