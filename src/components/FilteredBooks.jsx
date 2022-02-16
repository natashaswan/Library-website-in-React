import NoBooksFound from "./NoBooksFound";
import BookCard from "./BookCard";
import data from "../data.json";
import { Buffer } from "buffer";

 {/* logic for filtering conditional and filtered content */}
function FilteredBooks(props){
 
    if (props.filteredBookList.length === 0){
        return <NoBooksFound />
    } else {

    return (
        <div>
            { props.filteredBookList.length > 0 && props.filteredBookList.map(element => <BookCard 
            key={element.ID}
            title={element.Book} 
            author={element.Author} 
            category={element.Category}
            description={element.Annotation}
            image = {element.Pic1}
        />)}
        </div>
    )}
    
}

export default FilteredBooks;