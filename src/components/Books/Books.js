// @@filename('书籍列表')
import BookItem from "./BookItem/BookItem";
import classes from "./Books.module.css";
function Books(props) {
  const { bookList, keyword, showDesc } = props;
  const renderItem = () => {
    return bookList
      .filter((v) => v.title.indexOf(keyword) !== -1)
      .map((item) => (
        <BookItem {...item} showDesc={showDesc} key={item.id}></BookItem>
      ));
  };
  return <div className={classes["books"]}>{renderItem()}</div>;
}
export default Books;
