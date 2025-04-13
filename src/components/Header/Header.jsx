import "./Header.css";

const Header = ({titulo,subtitulo}) =>{

    return(
        <>
        <div className="h-container">
            <h1>{titulo}</h1>
            <p>{subtitulo}</p>
            <p className="h-line"></p>
        </div>
        </>
    )
}

export default Header;