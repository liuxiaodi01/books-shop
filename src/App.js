import { useState } from "react";
import classes from "./App.module.css";
import BookBar from "./components/Books/BookBar/BookBar";
import Books from "./components/Books/Books";
import BookSearch from "./components/Books/BookSearch/BookSearch";
import CartBalance from "./components/Cart/CartBalance/CartBalance";
import BooksContext from "./store/books-context";
document.documentElement.style.fontSize = 100 / 375 + "vw";
function App() {
  const [list] = useState(
    new Array(14).fill(true).map((v, i) => ({
      id: i,
      title: "达尔文进化论" + (i + 1),
      desc: "达尔文的进化论― 前提达尔文的进化论是人们普遍持有的观念，认为一切生命相互关联，来自一个共同的祖先：鸟类和香蕉，鱼类和花卉― 都彼此相关",
      price: Math.floor(Math.random() * 10 + i),
      img: `https://cdn.jsdelivr.net/gh/liuxiaodi01/blog-img/lr-${i + 1}.jpg`,
    }))
  );

  const [mealsList, setMealsList] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [showBalance, setShowBalance] = useState(false);
  // 统计个数和价格
  const sumPrice = mealsList.reduce((x, y) => x + y.price * y.num, 0);
  const sumNum = mealsList.reduce((x, y) => x + y.num, 0);
  // 添加或者删除商品
  const addOrSubHandler = (item) => {
    if (item.num === 0) {
      const depMeals = mealsList.filter((v) => v.id !== item.id);
      return setMealsList((preMealsList) => (preMealsList = [...depMeals]));
    }
    const findex = mealsList.findIndex((v) => v.id === item.id);
    if (findex > -1) {
      const depMeals = mealsList.map((v, i) => {
        if (i === findex) {
          v = item;
        }
        return v;
      });
      setMealsList((preMealsList) => (preMealsList = depMeals));
    } else {
      setMealsList((preMealsList) => (preMealsList = [...preMealsList, item]));
    }
  };
  const clearMeals = () => {
    setMealsList((preMealsList) => (preMealsList = []));
  };
  const searchkeyword = (word) => {
    setKeyword((preKeyword) => (preKeyword = word));
  };
  return (
    <BooksContext.Provider value={{ mealsList, addOrSubHandler, clearMeals }}>
      <div className={classes["app"]}>
        {showBalance && (
          <CartBalance
            goBack={() => setShowBalance((pre) => (pre = false))}
            sumPrice={sumPrice}
            mealsList={mealsList}
          ></CartBalance>
        )}
        <div className={classes["app-wrapper"]}>
          <BookSearch searchkeyword={searchkeyword}></BookSearch>
          <Books bookList={list} keyword={keyword}></Books>
        </div>
        <BookBar
          sumPrice={sumPrice}
          sumNum={sumNum}
          toSettle={() => sumNum > 0 && setShowBalance((pre) => (pre = true))}
          settle="去结算"
        ></BookBar>
      </div>
    </BooksContext.Provider>
  );
}

export default App;
