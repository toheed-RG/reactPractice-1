import React from 'react'
import { Loader } from '@aws-amplify/ui-react';

const Loading = () => {
    return (
        <Loader style={{
            width: "5rem", height: "5rem"
        }} size="large" />
    );
}



export default Loading;