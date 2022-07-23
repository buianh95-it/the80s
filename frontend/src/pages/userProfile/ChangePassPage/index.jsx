import React from 'react'
import { Form, Button, Input, Radio } from 'antd'
import { LockOutlined } from '@ant-design/icons'
import { useDispatch, useSelector } from 'react-redux'
import ErrorMessage from '../../../globalComponents/ErrorMessage'
import { userChangePasswordAction } from '../../../redux/actions'

const ChangePassPage = () => {
  const dispatch = useDispatch()
  const userLogin = useSelector((state) => state.user.userLogin)
  const { loading, userInfo, error } = userLogin
  const handleChangeInfoForm = (values) => {
    dispatch(
      userChangePasswordAction({
        password: values.password,
        token: userInfo.token,
        userId: userInfo._id,
      })
    )
  }

  return (
    <div className='profileWrapper'>
      <h3 style={{ textAlign: 'center', marginBottom: 50 }}>CHANGE YOUR INFORMATION</h3>
      {error ? <ErrorMessage error={error.message} /> : null}
      <Form
        layout='vertical'
        name='userInfoForm'
        onFinish={(values) => {
          handleChangeInfoForm(values)
        }}
        autoComplete='off'
        initialValues={{
          name: userInfo.name,
          email: userInfo.email,
          gender: userInfo.gender,
          address: userInfo.address,
          phone: userInfo.phone,
        }}
      >
        <Form.Item
          label='Change your password:'
          name='password'
          rules={[{ required: true, message: 'Please enter your new password' }]}
        >
          <Input.Password prefix={<LockOutlined className='site-form-item-icon' />} />
        </Form.Item>

        <Form.Item
          name='confirm'
          label='Re-type your new password:'
          dependencies={['password']}
          hasFeedback
          rules={[
            {
              required: true,
              message: 'Please confirm your new password!',
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve()
                }

                return Promise.reject(new Error('The two passwords that you entered do not match!'))
              },
            }),
          ]}
        >
          <Input.Password prefix={<LockOutlined className='site-form-item-icon' />} />
        </Form.Item>

        <Button loading={loading} style={{ width: '100%' }} type='primary' htmlType='submit'>
          CHANGE YOUR PASSWORD
        </Button>
      </Form>
    </div>
  )
}

export default ChangePassPage
