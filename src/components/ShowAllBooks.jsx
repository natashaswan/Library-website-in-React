import BookCard from "./BookCard";
import data from "../data.json";
import { Buffer } from "buffer";

function ShowAllBooks(){
    function bookCard(data){
    
          let imageBlob = data[0].Pic1;
          console.log(imageBlob);
          // Convert the string to bytes
          var bytes = new Uint8Array(imageBlob.length / 2);
          for (let j = 0; j < imageBlob.length; j += 2) {
              bytes[j / 2] = parseInt(imageBlob.substring(j, j + 2), /* base = */ 16);
          }
          const buffer = Buffer.from(imageBlob, "base64");
          // Make a Blob from the bytes
          var blob = new Blob([buffer], {type: 'image/bmp'});
          console.log(blob)
          
          let imgUrl = URL.createObjectURL(blob);


        return (
          <BookCard 
            key={data.ID}
            title={data.Book} 
            author={data.Author} 
            category={data.Category}
            description={data.Annotation}
            image={ imgUrl }
          />
        )
      }
    return(
        <div>
              <dl> { data.map(bookCard) }</dl>  
        </div>
    )
}
export default ShowAllBooks




  