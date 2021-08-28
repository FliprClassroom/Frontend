import React from 'react';
import Lottie from 'react-lottie';

const LoadingContainer = ({animation,width,height}) => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animation.default,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    }

    return (
        <div>
            <Lottie
                options={defaultOptions}
                width={width}
                height={height}
            />
        </div>
    )
}

export default LoadingContainer;