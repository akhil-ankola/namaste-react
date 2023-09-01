import React from 'react';
import {LOAD_IMG} from '../utils/constants';


const Loading = () => {
    return(
        <div className='Load_img'>
            <img src={LOAD_IMG}/>
        </div>
    );
}
export default Loading