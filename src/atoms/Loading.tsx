import React from 'react'
import { Loader } from '@aws-amplify/ui-react';

interface Props {
    text: string;
}

const Loading = (props: Props) => {
    return (
        <>
            <div>
                <Loader style={{
                    width: "5rem", height: "5rem"
                }} size="large" />
            </div>
            <div>
                <span>{props.text}</span>
            </div>
        </>
    );
}

export default Loading;