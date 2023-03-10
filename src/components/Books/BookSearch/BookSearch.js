// @@filename("搜索")
import classes from "./BookSearch.module.css";
import Icon from "../../UI/Icon/Icon";
import { useState, useEffect } from "react";
function BookSearch(props) {
  const [keyword, setKeyword] = useState("");
  useEffect(() => {
    // 防抖
    const time = setTimeout(() => {
      console.log("我先触发了setTimeout");
      props.searchkeyword(keyword);
    }, 1000);
    return () => {
      console.log("我先触发clearTimeout", time);
      clearTimeout(time);
    };
  }, [keyword]);
  const changeHandler = (event) => {
    setKeyword(event.target.value.trim());
  };
  return (
    <div className={classes["book-search"]}>
      <div className={classes["book-search-inner"]}>
        <Icon type="icon-sousuo"></Icon>
        <input value={keyword} onChange={changeHandler}></input>
      </div>
    </div>
  );
}
export default BookSearch;
