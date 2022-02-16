import "./BookCard.css";
import { Buffer } from "buffer";

function BookCard(props){
//convert blob from json to img
    const imageBlob = props.image;          
// convert the string to bytes
    const bytes = new Uint8Array(imageBlob.length / 2);
    for (let i = 0; i < imageBlob.length; i += 2) {
        bytes[i / 2] = parseInt(imageBlob.substring(i, i + 2), /* base = */ 16);
    }
//create new buffer specifying its encoding
    const buffer = Buffer.from(imageBlob, "base64");
//make a Blob from the bytes
    var blob = new Blob([buffer], {type: 'image/bmp'});
    console.log(blob)          
    let imgUrl = URL.createObjectURL(blob);

return(
    <div>
        <div className="card">
            <div className="row">
                <div className="column">
                    <img className="card-img" src={ imgUrl } alt="book cover" />
                </div>
                <div className="column">
                    <h1>{ props.title }</h1>
                    <p className="author">{props.author}</p>
                    <p>{props.description}</p>
                    <p>{props.category}</p>
                    <p><button>Add to Favourites</button></p>
                </div>
             </div>
        </div>
            
    </div>
  
    

);



}

export default BookCard;