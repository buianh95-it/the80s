import React from 'react'
import { Form, Button, Input, Radio } from 'antd'
import { UserOutlined, MailOutlined, HomeOutlined, PhoneOutlined } from '@ant-design/icons'
import { useDispatch, useSelector } from 'react-redux'
import ErrorMessage from '../../../globalComponents/ErrorMessage'
import { userModifyAction } from '../../../redux/actions'

const UserProfilePage = () => {
  const dispatch = useDispatch()
  const userLogin = useSelector((state) => state.user.userLogin)
  const { loading, userInfo, error } = userLogin
  const handleChangeInfoForm = (values) => {
    dispatch(userModifyAction({ data: values, token: userInfo.token, userId: userInfo._id }))
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
          label='Your name:'
          name='name'
          rules={[{ required: true, message: 'Please enter your name' }]}
        >
          <Input prefix={<UserOutlined className='site-form-item-icon' />} />
        </Form.Item>

        <Form.Item label='Your Address:' name='address'>
          <Input prefix={<HomeOutlined className='site-form-item-icon' />} />
        </Form.Item>

        <Form.Item
          label='Your Phone number:'
          name='phone'
          rules={[
            { required: true, message: 'Please enter your phonenumber' },
            { pattern: /^[0-9]{10}$/, message: 'Please enter 10 digits' },
          ]}
        >
          <Input prefix={<PhoneOutlined className='site-form-item-icon' />} />
        </Form.Item>

        <Form.Item label='Gender' name='gender'>
          <Radio.Group>
            <Radio value='Male'> Male </Radio>
            <Radio value='Female'> Female </Radio>
            <Radio value='notSelected'> Not selected </Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          label='Your email:'
          name='email'
          rules={[{ required: true, message: 'Please enter your new email' }]}
        >
          <Input prefix={<MailOutlined className='site-form-item-icon' />} />
        </Form.Item>

        <Button loading={loading} style={{ width: '100%' }} type='primary' htmlType='submit'>
          CHANGE YOUR INFORMATION
        </Button>
      </Form>
    </div>
  )
}

export default UserProfilePage
