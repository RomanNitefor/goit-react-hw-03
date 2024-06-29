import css from "./Searchbox.module.css";

export default function SearchBox({ value, onFilter }) {
  return (
    <form>
      <p>Find contacts by name</p>
      <input
        className={css.input}
        type="text"
        value={value}
        onChange={(e) => onFilter(e.target.value)}
      />
    </form>
  );
}
