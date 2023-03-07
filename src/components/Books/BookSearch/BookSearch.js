// @@filename("搜索")
import classes from "./BookSearch.module.css";
import Icon from "../../UI/Icon/Icon";
function BookSearch(props) {
  const changeHandler = (event) => {
    props.searchkeyword(event.target.value);
  };
  return (
    <div className={classes["book-search"]}>
      <div className={classes["book-search-inner"]}>
        <Icon type="icon-sousuo"></Icon>
        <input onChange={changeHandler}></input>
      </div>
    </div>
  );
}
export default BookSearch;
