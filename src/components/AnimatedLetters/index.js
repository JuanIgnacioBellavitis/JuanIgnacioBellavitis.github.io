import './index.scss'

// Receive 3 arguments:
//letterClass: The class that you want to apply to your letter
//strArray: Array of the characters 
//idx: index, starting point, set de delay

const AnimatedLetters = ({letterClass, strArray, idx}) =>{
    return(
        <span>
            {
                strArray.map((char, i) =>(
                    <span key={char + i} className={`${letterClass} _${i + idx}`}>
                        {char}
                    </span>
                ))
            }
        </span>
    );
}

export default AnimatedLetters;