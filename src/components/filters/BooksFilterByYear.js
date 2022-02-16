import "./BooksFilterStyles.css"

function BooksFilterByYear(props){
    const dropdownChangeHandler = (event) => {
        props.onChangeFilter(event.target.value);
    }
    return(
    <div className='expenses-filter expenses-filter-year'>
    <div className='expenses-filter__control'>
      <label>Filter by Year Book was Added</label>
      <select value={props.selected} onChange={ dropdownChangeHandler }>
        <option value='2022'>2022</option>
        <option value='2021'>2021</option>
        <option value='2020'>2020</option>
        <option value='2019'>2019</option>
        <option value='2018'>2018</option>
      </select>
    </div>
    </div>
    )
    }

export default BooksFilterByYear;