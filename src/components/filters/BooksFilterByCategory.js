import "./BooksFilterStyles.css"

function BooksFilterByCategory(props){

    function onChangeCategoryHandler(event){
        props.onchangeFilterCategory(event.target.value)
    }

    return (    
    <div className='expenses-filter'>
        <div className='expenses-filter__control'>
        <label>Filter by Category</label>
        <select value={props.selected} onChange={ onChangeCategoryHandler }>
            <option value={'Для детей'} >Для детей</option>
            <option value='Рассказ' >художественные книги</option>
            <option value='Для детей, Стихи' >Для детей, Стихи</option>
            <option value='Классика' >Классика</option>
            <option value='Стихи' >Стихи</option>
            {/* <option value='Для детей, Стихи' onChange={onChangeCategoryHandler}>Для детей, Стихи</option> */}
        
        </select>
        </div>
    </div>
    )
}
export default BooksFilterByCategory;