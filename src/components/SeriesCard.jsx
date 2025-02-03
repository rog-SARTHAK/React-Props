export const SeriesCard = (props) => {

    return(
        <li > {/*The <li> tag is used inside ordered lists(<ol>), unordered lists (<ul>), and in menu lists (<menu>).*/}
            <div>
                <img 
                src={props.curElem.img_url}
                alt="props.curElem.name"
                width="40%"
                height="40%"
                />
            </div>
        
            {/* {} to use dynamic javascript values in React jsx*/}
            <h1>Name: {props.curElem.name} </h1> 
            <h3>Rating: {props.curElem.rating}</h3>
            <p>Summary: {props.curElem.description}</p>
            <p>Genre: {props.curElem.genre} </p>
            <p>Cast: {props.curElem.cast} </p>
            <a href={props.curElem.imdb_url} target="_blank">
                <button> IMDB </button>
            </a>
        </li>
    );

};