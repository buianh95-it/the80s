import React, { useEffect } from 'react'
import { Form, Button, Input } from 'antd'
import { ROUTES } from '../../constants/routes'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { MailOutlined, LockOutlined, UserOutlined } from '@ant-design/icons'
import { userRegisterAction } from '../../redux/actions'
import { useDispatch, useSelector } from 'react-redux'

const RegisterPage = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [registerForm] = Form.useForm()
  const userRegister = useSelector((state) => state.user.userRegister)
  const { loading, error } = userRegister

  useEffect(() => {
    if (error) {
      registerForm.setFields([
        {
          name: 'email',
          errors: [error.message],
        },
      ])
    }
  }, [error])

  const handleRegisterForm = (value) => {
    const { name, email, password } = value
    dispatch(
      userRegisterAction({
        data: { name, email, password },
        callback: {
          goToCart: () => navigate(ROUTES.USER.CART),
        },
      })
    )
  }

  const userInfoSave = localStorage.getItem('userInfo')
  if (userInfoSave) return <Navigate to={ROUTES.USER.CART} />
  return (
    <section className='sectionWrapper'>
      <div className='container'>
        <h4 className='product-title'>REGISTER</h4>
        <div className='login-form'>
          <Form
            form={registerForm}
            layout='vertical'
            name='loginForm'
            onFinish={(value) => {
              handleRegisterForm(value)
            }}
            autoComplete='off'
          >
            <Form.Item
              label='Your name:'
              name='name'
              rules={[{ required: true, message: 'Please enter your name' }]}
            >
              <Input prefix={<UserOutlined className='site-form-item-icon' />} />
            </Form.Item>

            <Form.Item
              label='Your email:'
              name='email'
              rules={[{ required: true, message: 'Please enter your email' }]}
            >
              <Input prefix={<MailOutlined className='site-form-item-icon' />} />
            </Form.Item>

            <Form.Item
              label='Your password:'
              name='password'
              rules={[{ required: true, message: 'Please enter your password' }]}
            >
              <Input.Password prefix={<LockOutlined className='site-form-item-icon' />} />
            </Form.Item>

            <Form.Item
              name='confirm'
              label='Re-type your password:'
              dependencies={['password']}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: 'Please confirm your password!',
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve()
                    }

                    return Promise.reject(
                      new Error('The two passwords that you entered do not match!')
                    )
                  },
                }),
              ]}
            >
              <Input.Password prefix={<LockOutlined className='site-form-item-icon' />} />
            </Form.Item>

            <Button loading={loading} style={{ width: '100%' }} type='primary' htmlType='submit'>
              REGISTER
            </Button>

            <div className='login-form-register' style={{ marginTop: '20px' }}>
              <p>
                Already have an account ?{' '}
                <Link to={ROUTES.LOGIN}>
                  <span style={{ color: '#f8312f' }}>Login</span>
                </Link>{' '}
                now{' '}
              </p>
            </div>
          </Form>
        </div>
      </div>
    </section>
  )
}

export default RegisterPage
