import css from './SearchBox.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setNameFilter } from '../../redux/filtersSlice';

// export default function SearchBox({ onFilter }) {
//   return (
//     <div className={css.container}>
//       <label className={css.label} htmlFor="name">
//         Find contacts by name
//       </label>
//       <input
//         className={css.field}
//         type="text"
//         name="name"
//         onChange={e => onFilter(e.target.value)}
//       />
//     </div>
//   );
// }
export default function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filters.name);

  return (
    <div className={css.container}>
      <label className={css.label} htmlFor="name">
        Find contacts by name
      </label>
      <input
        className={css.input}
        type="text"
        placeholder="Enter name"
        value={filter}
        onChange={e => dispatch(setNameFilter(e.target.value))}
      />
    </div>
  );
}
