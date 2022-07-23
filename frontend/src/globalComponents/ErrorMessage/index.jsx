import React from 'react'
import { Alert, Space } from 'antd'
const ErrorMessage = ({ message }) => {
  return (
    <Space
      style={{
        width: '100%',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Alert message={message} type='error' />
    </Space>
  )
}

export default ErrorMessage
