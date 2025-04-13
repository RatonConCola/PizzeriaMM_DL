import './Boton.css'

const Boton = ({href, icon, menuOption}) =>{

    return(
        <>
        <div className='button'>
            <a href={href}><i className={`${icon}`}></i>{menuOption}</a>
        </div>
            </>
    )
}


export default Boton;