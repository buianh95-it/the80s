import React, { useEffect } from 'react'
import { Button, Checkbox, Form, Input } from 'antd'
import { MailOutlined, LockOutlined } from '@ant-design/icons'
import { Link, useNavigate, Navigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { ROUTES } from '../../constants/routes'
import { userLoginAction } from '../../redux/actions'
// import ErrorMessage from '../../globalComponents/ErrorMessage'

const LoginPage = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [loginForm] = Form.useForm()
  const userLogin = useSelector((state) => state.user.userLogin)
  const { loading, error } = userLogin

  useEffect(() => {
    if (error) {
      loginForm.setFields([
        {
          name: 'email',
          errors: [' '],
        },
        {
          name: 'password',
          errors: [error],
        },
      ])
    }
  }, [error])

  const handleLoginForm = (value) => {
    const { email, password } = value
    dispatch(
      userLoginAction({
        data: { email, password },
        callback: {
          goToDashboard: () => navigate(ROUTES.ADMIN.PRODUCT_LIST),
          goToCart: () => navigate(ROUTES.USER.CART),
        },
      })
    )
  }

  let userInfoSave = localStorage.getItem('userInfo')
  if (userInfoSave) {
    userInfoSave = JSON.parse(userInfoSave)
    if (userInfoSave.isAdmin) {
      return <Navigate to={ROUTES.ADMIN.PRODUCT_LIST} />
    } else {
      return <Navigate to={ROUTES.USER.CART} />
    }
  }

  return (
    <section className='sectionWrapper'>
      <div className='container'>
        <h4 className='product-title'>LOGIN</h4>
        {/* {error ? <ErrorMessage message={error} /> : ''} */}
        <div className='login-form'>
          <Form
            form={loginForm}
            layout='vertical'
            name='loginForm'
            initialValues={{
              remember: true,
            }}
            onFinish={(value) => {
              handleLoginForm(value)
            }}
            autoComplete='off'
          >
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

            <Form.Item name='remember' valuePropName='checked'>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Button loading={loading} style={{ width: '100%' }} type='primary' htmlType='submit'>
              LOGIN
            </Button>

            <div className='login-form-register' style={{ marginTop: '20px' }}>
              <p>
                Don't have an account ?{' '}
                <Link to={ROUTES.REGISTER}>
                  <span style={{ color: '#f8312f' }}>Register</span>
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

export default LoginPage
