import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';

import * as React from "react";

export function Likesprop() {
    const [likes, LikeClick] = React.useState<number>(0)
    const [deslikes, DeslikeClick] = React.useState<number>(0)

    return (
        <div className='divlikesprop'>
            <h2 className='likeh2'>Curta nossa página</h2>
            <div className='likesprop'>
                <span className='spanclick' onClick={() => LikeClick(likes + 1)} ><FontAwesomeIcon icon={faThumbsUp} /></span><p>({likes})</p>
                <span className='spanclick' onClick={() => DeslikeClick(deslikes + 1)}> <FontAwesomeIcon icon={faThumbsDown} /></span><p>({deslikes})</p>
            </div>
        </div>
    );
}