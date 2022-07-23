import React, { useEffect } from 'react'
import { Button } from 'antd'
import { useNavigate } from 'react-router-dom'
import { removeCartDoneAction } from '../../redux/actions'
import { useDispatch } from 'react-redux'

const SuccessPage = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(removeCartDoneAction())
  }, [])

  return (
    <>
      <section className='sectionWrapper successPage'>
        <div style={{ textAlign: 'center' }} className='container'>
          <h4>Đặt hàng thành công, shop sẽ liên lạc với quý khách ngay</h4>
          <Button type='primary' onClick={() => navigate('/shop')}>
            <i className='fa-solid fa-angles-right faa-horizontal animated faa-slow'></i> &nbsp;
            Tiếp tục mua sắm
          </Button>
          <Button style={{ marginLeft: 10 }} ghost onClick={() => navigate('/order-history')}>
            <i className='fa-solid fa-angles-right faa-horizontal animated faa-slow'></i> &nbsp;
            Tình trạng đơn hàng
          </Button>
        </div>
      </section>
    </>
  )
}

export default SuccessPage
