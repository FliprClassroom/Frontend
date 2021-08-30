import React from 'react';
import * as animationData from '../../asset/loader.json';
import Lottie from 'react-lottie';

const Loader = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData.default,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    }

    return (
        <div>
            <Lottie
                options={defaultOptions}
                width={300}
                height={300}
            />
        </div>
    )
}

export default Loader;