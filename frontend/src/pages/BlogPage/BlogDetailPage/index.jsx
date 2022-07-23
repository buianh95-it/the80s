import React from 'react'
import { Row, Col, Pagination, Card } from 'antd'
import { Link } from 'react-router-dom'
import './style.css'
const { Meta } = Card

const BlogDetailPage = () => {
  return (
    <>
      <section className='sectionWrapper'>
        <div className='container'>
          <Row gutter={[48, 48]}>
            <Col xs={24} sm={24} md={24} lg={16} xl={16}>
              <h2>
                <span>
                  &nbsp;Nếu bạn đang cần tìm một chiếc áo khoác local brand mang màu sắc hoàn toàn
                  mới,
                </span>
                <span>Wool Boxy Work Jacket – Hot item năm 2022.</span>
              </h2>
              <p>
                &nbsp;Sự thay đổi trong thiết kế của các sản phẩm may mặc qua từng năm được xem là
                hiển nhiên và cần thiết để tạo sự đa dạng và sáng tạo trong giới thời trang nói
                chung.
              </p>
              <p>
                &nbsp;Nhu cầu lựa chọn, mua sắm quần áo của nhiều bạn trẻ cũng thường xuyên thay đổi
                bởi các lý do khách quan. Điều này buộc bên phía cung – những hãng thời trang nói
                riêng cần phải luôn làm ra những sản phẩm có thể thỏa mãn được nhu cầu của khách
                hàng.
              </p>
              <p>
                <img
                  className='blogpost'
                  alt='none'
                  src='https://cdn.shopify.com/s/files/1/0551/7839/5845/files/photo_2022-01-22_20-58-30_2048x2048.jpg?v=1642862812'
                />
              </p>
              <p>
                &nbsp;Các dòng sản phẩm mới cũng từ đó được xuất hiên trên thị trường, mang đến
                nhiều màu sắc lạ mắt cho tổng thể bức tranh thời trang vốn đã muôn màu khi trải qua
                hàng chục thế kỷ.
              </p>
              <p>
                &nbsp;Và trong số những gam màu sắc mới mẻ ấy thì chiếc wool boxy work jacket có lẽ
                là một sản phẩm mà chắc chắn bạn không nên bỏ lỡ. Mình sẽ cùng với các bạn tìm hiểu
                kỹ hơn về chiếc jacket “mới cứng” vừa đổ bộ vào thị trường local brand Việt Nam nhé.
              </p>
              <h3>
                <span>Chất liệu wool.</span>
              </h3>
              <p>
                Theo như mình tìm hiểu, wool là một loại vải len được làm từ sợi tự nhiên tạo thành
                lông cừu của các loài động vật như cừu, dê, v.v.
              </p>
              <p>
                &nbsp;Nguyên liệu thô này chủ yếu được tạo thành từ các protein dựa trên keratin,
                làm cho len trở thành một vật liệu đàn hồi đáng kể. Sau bông và sợi tổng hợp, len là
                một trong những loại vải phổ biến nhất trên thế giới.
              </p>
              <p>
                <span>
                  <img
                    className='blogpost'
                    alt='none'
                    src='https://cdn.shopify.com/s/files/1/0551/7839/5845/files/NIK3963_2048x2048.jpg?v=1642862917'
                  />
                </span>
              </p>
              <p>
                &nbsp;Điểm hấp dẫn nhất của đồ len là chúng giữ nhiệt cực tốt. Các lợi ích khác của
                len bao gồm độ bền và tính linh hoạt của nó, vì nó có thể được dệt thành cả vải thô,
                nặng và vải nhẹ, mềm.
              </p>
              <p>
                &nbsp;Có 9 loại vải wool phổ biến nhất trên thế giới, lần lượt là: angora, camel
                hair, cashmere, apaca, melton, merino, mohair và Shetland.
              </p>
              <p>
                &nbsp;Trong suốt nhiều thế kỷ, len và bông đã tranh giành vị trí tối cao như là loại
                vải được sử dụng nhiều nhất trên thế giới. Ngày nay, mỗi loại vải này lấp đầy một
                thị trường ngách cụ thể và len vẫn được đánh giá cao vì những thuộc tính độc đáo của
                nó.
              </p>
              <p>
                &nbsp;So với bông và các vật liệu dệt từ thực vật hoặc tổng hợp khác, len có khả
                năng chống cháy cao. Nó không phát tán ngọn lửa, thay vào đó, nó phân tách và tự dập
                tắt.
              </p>
              <p>
                <span>
                  <img
                    className='blogpost'
                    alt='none'
                    src='https://cdn.shopify.com/s/files/1/0551/7839/5845/files/NIK3977_2048x2048.jpg?v=1642862999'
                  />
                </span>
              </p>
              <p>
                &nbsp;Do đó, loại dệt này rất hữu ích trong các ứng dụng mong muốn giảm thiểu khả
                năng cháy. Đây cũng là một lý do để loại vải này ghi điểm trong mắt các nhà thiết kế
                khi đưa vào dùng trong các dòng sản phẩm “workwear”.
              </p>
              <p>
                &nbsp;Ngoài ra, nếu bạn muốn tìm hiểu thêm về chất vải tuyệt vời này thì mình có bài
                viết chi tiết hơn về chúng tại&nbsp;
                <u>ĐÂY</u>.
              </p>
              <h3>
                <span>Form boxy.</span>
              </h3>
              <p>
                &nbsp;Như phần đầu bài viết mình đã đề cập, xu hướng thời trang luôn thay đổi liên
                tục, và điều đó đã áp dụng vào cả những thiết kế của sản phẩm, cụ thể hơn ở đây là
                form áo.
              </p>
              <p>
                &nbsp;Có lẽ vài năm gần đây các bạn trẻ đã nghe quen cụm từ “form boxy” trên nhiều
                sản phẩm như hoodie, áo sơ mi, áo phông và kể cả là những chiếc jacket.
              </p>
              <p>
                <img
                  className='blogpost'
                  alt='none'
                  src='https://cdn.shopify.com/s/files/1/0551/7839/5845/files/270741399_3244036575883027_683412241034976352_n_2048x2048.jpg?v=1642863199'
                />
              </p>
              <p>
                &nbsp;Thực ra form áo này đã xuất hiện từ rất lâu trên các sản diễn thời trang của
                thế giới và được nhiều thương hiệu thời trang cao cấp đưa vào sản phẩm của mình. Tuy
                nhiên tại Việt Nam thì cụm từ này vẫn còn khá mới và chưa được làm rõ hoàn toàn, nên
                mình sẽ giải thích kỹ hơn cho các bạn về form áo “có thể giúp ích cho cơ thể của
                bạn” này.
              </p>
              <p>
                <img
                  className='blogpost'
                  alt='none'
                  src='https://cdn.shopify.com/s/files/1/0551/7839/5845/files/NIK4012_2048x2048.jpg?v=1642862871'
                />
              </p>
              <p>
                &nbsp;Form áo boxy được thiết kế phần thần áo chỉ dài đến thắt lưng, tạo một form
                "vuông dạng hộp". Điều này giúp tôn dáng cho người mặc và những mẫu thiết kế này có
                những nét riêng. Phần tay áo có thể được thiết kế dài và "oversize" mạng lại cảm
                giác thoải mái cho người mặc.
              </p>
              <p>
                &nbsp;Đối với những chiếc áo hoodie hay jacket khi được làm form boxy thì phần tay
                áo thường làm dài hơn so với với phần thân áo. Đây là một điểm cộng trong thiết kế
                để khi người mặc phối “layer” hợp lý thì form boxy sẽ giúp tôn dáng lên rất nhiều,
                cụ thể là phần chiều cao của chúng ta.
              </p>
              <h3>
                <span>Work jacket.</span>
              </h3>
              <p>
                Work jacket khá đơn giản như những gì nó nói - một chiếc áo khoác dành cho công nhân
                – thường là những người làm việc bằng tay chân, ngoài trời và là sản phẩm thuộc dòng
                “workwear”.
              </p>
              <p>
                &nbsp;Ban đầu được mặc bởi những người lao động Pháp vào cuối những năm 1800, nó bắt
                đầu ra đời như một loại quần áo chức năng dành cho công nhân làm việc dưới môi
                trường lao động khắc nghiệt.
              </p>
              <p>
                <img
                  className='blogpost'
                  alt='none'
                  src='https://cdn.shopify.com/s/files/1/0551/7839/5845/files/NIK3980_2048x2048.jpg?v=1642863370'
                />
              </p>
              <p>
                &nbsp;Vì nó là một lớp bảo vệ, nó có thể được mài và sửa chữa khi cần thiết - những
                chiếc cổ điển thường được bao phủ trong các bản vá vì nó tiết kiệm chi phí hơn so
                với việc thay thế toàn bộ áo khoác.
              </p>
              <p>
                &nbsp;Đúng với tính chất của sản phẩm, màu sắc của những chiếc work thường là những
                gam màu đơn sắc chứ không quá sặc sỡ hay cầu kỳ. Và chúng đã được giữ nguyên khi đưa
                vào thời trang.
              </p>
              <p>
                <span>
                  <img
                    className='blogpost'
                    alt='none'
                    src='https://cdn.shopify.com/s/files/1/0551/7839/5845/files/NIK3986_2048x2048.jpg?v=1642863496'
                  />
                </span>
              </p>
              <p>
                Sự phổ biến của áo khoác bảo hộ lao động ngày nay một phần không nhỏ vì tính thiết
                thực đó. Mặc dù những người mặc hiện đại không sử dụng túi để đựng dụng cụ, nhưng nó
                vẫn có thể cảm thấy giống như một tiểu tiết của đồng phục – một thứ gì đấy mang tính
                “biểu tượng”.
              </p>
              <h3>
                <span>Một “hot item” năm 2022.</span>
              </h3>
              <p>
                <span>&nbsp;</span>Quay trở lại với thị trường thời trang, cụ thể hơn là local brand
                Việt Nam. Hiện tại, dòng áo khoác wool boxy work chưa quá phổ biến, nhưng vẫn có số
                ít local brand cháy hàng với dòng sản phẩm mới lạ này.
              </p>
              <p>
                &nbsp;Để giải thích cho điều này, mình nghĩ đầu tiên là như cầu mặc của các bạn trẻ.
                Có thể nói chúng ta đang được tiếp nhận một luượng kiến thức thời trang vô lớn đêns
                từ khắp nơi trên thế giới, trong đó có các phong cách, sản phẩm thời trang từ nước
                ngoài du nhập vào, kể cả là chiếc áo này.
              </p>
              <p>
                <img
                  className='blogpost'
                  alt='none'
                  src='https://cdn.shopify.com/s/files/1/0551/7839/5845/files/NIK4028_2048x2048.jpg?v=1642863619'
                />
              </p>
              <p>
                &nbsp;Từ đó mà việc lựa chọn và mau sắm sản phẩm nói riêng luôn thay đổi khiến cho
                bên cung là các thương hiệu chưa đáp ứng kịp so với lượng cầu đang tương đối lớn và
                đa dạng.
              </p>
              <p>
                &nbsp;Ngoài ra, ta có thể nói về từ duy, tầm nhìn và hướng đi giữa các local brand
                là không giống nhau. Vì thế nên sẽ có nhiều sản phẩm được sử dụng nhiều nhưng cũng
                có sản phẩm tuy nhu cầu mua sắm nhiều nhưng ít có brand nào đáp ứng được với nhiều
                lý do chủ quan khác, wool boxy work jacket là một minh chứng cụ thể cho những điều
                mình đang nói trên đây.
              </p>
              <p>&nbsp;Vậy, BẠN CÓ THỂ MUA SANR PHẨM WOOL BOXY WORK JACKET Ở ĐÂU?</p>
              <h2>
                <span>Wool Boxy Work Jacket Tobi Streetwear.</span>
              </h2>
              <p>
                &nbsp;Sau toàn bộ những đặc điểm của wool boxy work jacket mình đã đưa ra trong bài
                viết này, hy vọng các bạn đã có một cái nhìn tổng quát về chiếc áo khoác này.
              </p>
              <p>
                &nbsp;Và để có thể sở hữu chiếc áo khoác bao gồm cả ba đặc điểm như vậy thì không
                đâu khác ngoài Tobi Streetwear sẽ đem đến cho bạn những trải nghiệm thú vị về dòng
                sản phẩm này.
              </p>

              <p>Cảm ơn các bạn đã đọc bài!</p>
            </Col>
            <Col xs={24} sm={24} md={24} lg={8} xl={8}>
              <h3>Danh Mục Bài Viết</h3>
              <h3>Bài Viết Nổi Bật</h3>
              <p>
                <a href='https://tobi.vn/blogs/magazine/wool-jacket-tobi'>
                  <img
                    src='https://cdn.shopify.com/s/files/1/0551/7839/5845/articles/wool-chat-lieu-vai-lam-mua-lam-gio-cong-dong-thoi-gian-qua-823814_340x228_crop_center.jpg?v=1647214433'
                    alt='Wool  - Chất Liệu Vải'
                  />
                </a>
              </p>
              <p>13 Thg 3, 2022</p>
              <p>
                <a href='https://tobi.vn/blogs/magazine/wool-jacket-tobi'>
                  Wool - Chất Liệu Vải "Làm Mưa Làm Gió" Cộng Đồng Thời Gian Qua
                </a>
              </p>
              <p>
                <a href='https://tobi.vn/blogs/magazine/wool-boxy-work-jacket-local-brand-streetwear'>
                  <img
                    src='https://cdn.shopify.com/s/files/1/0551/7839/5845/articles/wool-boxy-work-jacket-manh-ghep-moi-cua-thoi-trang-streetwear-238538_340x228_crop_center.jpg?v=1642887938'
                    alt='WOOL BOXY WORK JACKET – MẢNH GHÉP MỚI CỦA THỜI TRANG STREETWEAR'
                  />
                </a>
              </p>
              <p>22 Thg 1, 2022</p>
              <p>
                <a href='https://tobi.vn/blogs/magazine/wool-boxy-work-jacket-local-brand-streetwear'>
                  WOOL BOXY WORK JACKET – MẢNH GHÉP MỚI CỦA THỜI TRANG STREETWEAR
                </a>
              </p>
              <p>
                <a href='https://tobi.vn/blogs/magazine/mua-ao-khoac-local-brand-nao'>
                  <img
                    src='https://cdn.shopify.com/s/files/1/0551/7839/5845/articles/ao-khoac-local-brand-nao-ban-can-co-trong-tu-do-692432_340x228_crop_center.jpg?v=1641763309'
                    alt='ÁO KHOÁC LOCAL BRAND NÀO BẠN CẦN CÓ TRONG TỦ ĐỒ?'
                  />
                </a>
              </p>
              <p>9 Thg 1, 2022</p>
              <p>
                <a href='https://tobi.vn/blogs/magazine/mua-ao-khoac-local-brand-nao'>
                  ÁO KHOÁC LOCAL BRAND NÀO BẠN CẦN CÓ TRONG TỦ ĐỒ?
                </a>
              </p>
            </Col>
          </Row>
        </div>
      </section>
    </>
  )
}

export default BlogDetailPage
