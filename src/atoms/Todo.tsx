import React from 'react'
import { Card, Text } from '@aws-amplify/ui-react'

const Todo = ({ todo }) => {
    return (
        <>
            <Card variation="elevated" style={{ margin: '1rem 0' }}>
                <Text>
                    <strong>{todo.title}</strong> - {todo.desc}
                </Text>
            </Card>
        </>
    )
}

export default Todo