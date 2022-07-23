import React from 'react'
import { Spin, Space } from 'antd'

const SpinnerLoading = () => {
  return (
    <Space
      style={{
        width: '100%',
        height: '50vh',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {' '}
      <Spin size='large' />
    </Space>
  )
}

export default SpinnerLoading
