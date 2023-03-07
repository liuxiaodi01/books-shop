import { useContext } from "react";
import Card from "../../UI/Card/Card";
import Counter from "../Counter/Counter";
import classes from "./BookItem.module.css";
import BooksContext from "../../../store/books-context";
function BookItem(props) {
  const ctx = useContext(BooksContext);
  const item = ctx.mealsList.find((v) => v.id === props.id);
  const addHandler = () => {
    ctx.addOrSubHandler({ ...props, num: item ? item.num + 1 : 1 });
  };
  const subHandler = () => {
    ctx.addOrSubHandler({ ...props, num: item ? item.num - 1 : 0 });
  };
  return (
    <Card className={classes["book-item"]}>
      <div className={classes["book-img"]}>
        <img src={props.img} alt={"图片显示出现问题"}></img>
      </div>
      <div className={classes["book-content"]}>
        <h2>{props.title}</h2>
        {props.showDesc ? null : <p>{props.desc}</p>}
        <div className={classes["operation"]}>
          <div className={classes["price"]}>{props.price}</div>
          <Counter
            addHandler={addHandler}
            subHandler={subHandler}
            price={item ? item.num : 0}
          ></Counter>
        </div>
      </div>
    </Card>
  );
}
export default BookItem;
