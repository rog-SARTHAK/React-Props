
import seriesData from "../api/seriesData.json";


const NetflixSeries = () => {



  
  
  return(
        <ul> {/*The <ul> tag defines an unordered (bulleted) list.*/}
            {seriesData.map((curElem) => {
            return(
                <li key = {curElem.id}> {/*The <li> tag is used inside ordered lists(<ol>), unordered lists (<ul>), and in menu lists (<menu>).*/}
                    <div>
                        <img 
                        src={curElem.img_url}
                        alt="curElem.name"
                        width="40%"
                        height="40%"
                        />
                    </div>
                
                    {/* {} to use dynamic javascript values in React jsx*/}
                    <h1>Name: {curElem.name} </h1> 
                    <h3>Rating: {curElem.rating}</h3>
                    <p>Summary: {curElem.description}</p>
                    <p>Genre: {curElem.genre} </p>
                    <p>Cast: {curElem.cast} </p>
                    <a href={curElem.imdb_url} target="_blank">
                        <button> IMDB </button>
                    </a>
                </li>
            );
            })}
        
        </ul>
  );
  };

export default NetflixSeries; //default export


//named export
export const Header = () => {
    return <p>Learning React</p>
};

export const Footer = () => {
    return <p>contact sarthakhaldar.com</p>
};