import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react'


export function Likesprop() {
    const [likes, setLike] = useState<number>(0)
    const [deslikes, setDeslike] = useState<number>(0)

    return (
        <div className='divlikesprop'>
            <h2 className='likeh2'>Curta nossa página</h2>
            <div className='likesprop'>
                <span className='spanclick' onClick={() => setLike(likes + 1)} ><FontAwesomeIcon icon={faThumbsUp} /></span><p>({likes})</p>
                <span className='spanclick' onClick={() => setDeslike(deslikes + 1)}> <FontAwesomeIcon icon={faThumbsDown} /></span><p>({deslikes})</p>
            </div>
        </div>
    );
}