import React, { Component } from 'react';
import './App.css';

class App extends Component {
    render() {
        return (
            <div>
                <header className="header">
                    <div className="main-nav">
                        <div className="container">
                            <div className="row item-center">
                                <nav className="navbar navbar-expand-lg navbar-light bg-light wrap-header-nav">
                                    <a className="navbar-brand logo" href="#">
                                        <img src="images/logo.png" alt="Logo" />
                                    </a>
                                    <button id="box-shaw" className="navbar-toggler border-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="navbar-toggler-icon" />
                                    </button>
                                    <nav className="navbar navbar-light bg-light bg-search nav-form-search">
                                        <div className="input-group flex-nowrap form-search">
                                            <input type="text" id="box-shaw" className="form-control input-search" placeholder="Nhập tên điểm đến hoặc thành phố bạn muốn đến" aria-label="Username" aria-describedby="addon-wrapping" />
                                            <span className="input-group-text icon-search" id="addon-wrapping"><i className="fas fa-search" /></span>
                                        </div>
                                    </nav>
                                    <div className="collapse navbar-collapse account-like" id="navbarSupportedContent ">
                                        <div className="col-account">
                                            <a className="icon-text icon-account" type="submit" href="#">
                                                <i class="fa-solid fa-user" />Tài khoản
                                            </a>
                                            <ul>
                                                <li>
                                                    <a href="#" title="Đăng nhập">Đăng nhập</a>
                                                </li>
                                                <li>
                                                    <a href="#" title="Đăng ký">Đăng ký</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-like">
                                            <a className="icon-text icon-like" type="submit" href="#">
                                                <i className="far fa-heart" /> Yêu thích
                                            </a>
                                        </div>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <div className="main-menu">
                        <div className="container">
                            <nav className="navbar navbar-expand-lg navbar-light bg-light wrap-header justify-content-evenly">
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <div className="mobile-login-logout">
                                        <div className="first-mobile">
                                            <a href="1" title="Đăng nhập">Đăng nhập</a>
                                        </div>
                                        <div className="first-mobile">
                                            <a href="1" title="Đăng ký">Đăng ký</a>
                                        </div>
                                    </div>
                                    <div className="menu-wrapper">
                                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 menu-content menu-content-display">
                                            <li className="nav-item">
                                                <a className="nav-link nav-link-menu active-home" aria-current="page" href="1" title="Trang chủ">Trang chủ</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link nav-link-menu" href="1" title="Giới thiệu">Giới thiệu</a>
                                            </li>
                                            <li className="nav-item dropdown dropdown-mega-content">
                                                <a className="nav-link nav-link-menu dropdown-toggle" href="1" title="Tour du lịch">
                                                    Tour du lịch<i className="fas fa-chevron-down" />
                                                </a>
                                                <div className="sub-menu">
                                                    <div className="col-lg-3 no-padding">
                                                        <ul className="sub-menu-left" id="menu-tour-type">
                                                            <li className="sub-menu-left-content " section-name="menu-start">
                                                                <a className="mega-content-left " href="1" title="Tour trong nước">
                                                                    <span>Tour trong nước</span>
                                                                </a>
                                                                <div className="mega-content-right" id="sub-menu-start">
                                                                    <div className="row fix-padding">
                                                                        <div className="col-lg-9">
                                                                            <ul className=" sub-menu-right row ">
                                                                                <li className="right-lv-01 col-lg-4">
                                                                                    <a href="1" title="Miền Bắc">Miền Bắc</a>
                                                                                    <ul className="lv-02">
                                                                                        <li>
                                                                                            <a href="1" title="Sapa">Sapa</a>
                                                                                        </li>
                                                                                        <li>
                                                                                            <a href="1" title="Hà Giang">Hà Giang</a>
                                                                                        </li>
                                                                                        <li>
                                                                                            <a href="1" title="Cao Bằng - Bắc Kạn">Cao Bằng - Bắc Kạn</a>
                                                                                        </li>
                                                                                        <li>
                                                                                            <a href="1" title="Mai Châu - Mộc Châu">Mai Châu - Mộc Châu</a>
                                                                                        </li>
                                                                                        <li>
                                                                                            <a href="1" title="Yên Bái">Yên Bái</a>
                                                                                        </li>
                                                                                        <li>
                                                                                            <a href="1" title="Ninh Bình">Ninh Bình</a>
                                                                                        </li>
                                                                                        <li>
                                                                                            <a href="1" title="Hạ Long">Hạ Long</a>
                                                                                        </li>
                                                                                        <li>
                                                                                            <a href="1" title="Cát Bà">Cát Bà</a>
                                                                                        </li>
                                                                                    </ul>
                                                                                </li>
                                                                                <li className="right-lv-01 col-lg-4">
                                                                                    <a href="1" title="Miền Trung">Miền Trung</a>
                                                                                    <ul className="lv-02">
                                                                                        <li>
                                                                                            <a href="1" title="Cửa Lò">Cửa Lò</a>
                                                                                        </li>
                                                                                        <li>
                                                                                            <a href="1" title="Sầm Sơn">Sầm Sơn</a>
                                                                                        </li>
                                                                                        <li>
                                                                                            <a href="1" title="Nghệ An">Nghệ An</a>
                                                                                        </li>
                                                                                        <li>
                                                                                            <a href="1" title="Thiên Cầm">Thiên Cầm</a>
                                                                                        </li>
                                                                                        <li>
                                                                                            <a href="1" title="Quảng Bình">Quảng Bình</a>
                                                                                        </li>
                                                                                        <li>
                                                                                            <a href="1" title="Huế">Huế</a>
                                                                                        </li>
                                                                                        <li>
                                                                                            <a href="1" title="Đà Nẵng">Đà Nẵng</a>
                                                                                        </li>
                                                                                        <li>
                                                                                            <a href="1" title="Hội An">Hội An</a>
                                                                                        </li>
                                                                                        <li>
                                                                                            <a href="1" title="Nha Trang">Nha Trang</a>
                                                                                        </li>
                                                                                        <li>
                                                                                            <a href="1" title="Phú Yên">Phú Yên</a>
                                                                                        </li>
                                                                                        <li>
                                                                                            <a href="1" title="Quy Nhơn">Quy Nhơn</a>
                                                                                        </li>
                                                                                        <li>
                                                                                            <a href="1" title="Đà Lạt">Đà Lạt</a>
                                                                                        </li>
                                                                                        <li>
                                                                                            <a href="1" title="Tây Nguyên">Tây Nguyên</a>
                                                                                        </li>
                                                                                        <li>
                                                                                            <a href="1" title="Phan Thiết - Mũi Né">Phan Thiết - Mũi Né</a>
                                                                                        </li>
                                                                                    </ul>
                                                                                </li>
                                                                                <li className="right-lv-01 col-lg-4">
                                                                                    <a href="1" title="Miền Nam">Miền Nam</a>
                                                                                    <ul className="lv-02">
                                                                                        <li>
                                                                                            <a href="1" title="Phú Quốc">Phú Quốc</a>
                                                                                        </li>
                                                                                        <li>
                                                                                            <a href="1" title="Côn Đảo">Côn Đảo</a>
                                                                                        </li>
                                                                                        <li>
                                                                                            <a href="1" title="Bến Tre">Bến Tre</a>
                                                                                        </li>
                                                                                        <li>
                                                                                            <a href="1" title="Cần Thơ">Cần Thơ</a>
                                                                                        </li>
                                                                                        <li>
                                                                                            <a href="1" title="Cà Mau">Cà Mau</a>
                                                                                        </li>
                                                                                        <li>
                                                                                            <a href="1" title="Hà Tiên">Hà Tiên</a>
                                                                                        </li>
                                                                                        <li>
                                                                                            <a href="1" title="Kiên Giang">Kiên Giang</a>
                                                                                        </li>
                                                                                        <li>
                                                                                            <a href="1" title="Nam Du">Nam Du</a>
                                                                                        </li>
                                                                                    </ul>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                        <div className="img-mega col-lg-3">
                                                                            <a href="1" title="Tour du lịch">
                                                                                <img src="images/mega-1-image.jpg" alt="Picture" />
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li className="sub-menu-left-content" section-name="menu-continue">
                                                                <a className="mega-content-left " href="1" title="Tour Quốc tế">
                                                                    <span>Tour Quốc tế</span>
                                                                </a>
                                                                <div className="mega-content-right" id="sub-menu-continue">
                                                                    <div className="row fix-padding">
                                                                        <div className="col-lg-9">
                                                                            <ul className=" sub-menu-right row">
                                                                                <li className="right-lv-01 col-lg-4">
                                                                                    <a href="1" title="Đông Nam Á">Đông Nam Á</a>
                                                                                    <ul className="lv-02">
                                                                                        <li>
                                                                                            <a href="1" title="Singapore">Singapore</a>
                                                                                        </li>
                                                                                        <li>
                                                                                            <a href="1" title="Malaysia">Malaysia</a>
                                                                                        </li>
                                                                                        <li>
                                                                                            <a href="1" title="Thái Lan">Thái Lan</a>
                                                                                        </li>
                                                                                        <li>
                                                                                            <a href="1" title="Campuchia">Campuchia</a>
                                                                                        </li>
                                                                                        <li>
                                                                                            <a href="1" title="Lào">Lào</a>
                                                                                        </li>
                                                                                        <li>
                                                                                            <a href="1" title="Indonesia">Indonesia</a>
                                                                                        </li>
                                                                                        <li>
                                                                                            <a href="1" title="Philipines">Philipines</a>
                                                                                        </li>
                                                                                    </ul>
                                                                                </li>
                                                                                <li className="right-lv-01 col-lg-4">
                                                                                    <a href="1" title="Đông Bắc Á">Đông Bắc Á</a>
                                                                                    <ul className="lv-02">
                                                                                        <li>
                                                                                            <a href="1" title="Hàn Quốc">Hàn Quốc</a>
                                                                                        </li>
                                                                                        <li>
                                                                                            <a href="1" title="Đài Loan">Đài Loan</a>
                                                                                        </li>
                                                                                        <li>
                                                                                            <a href="1" title="Hồng Kông">Hồng Kông</a>
                                                                                        </li>
                                                                                        <li>
                                                                                            <a href="1" title="Nhật Bản">Nhật Bản</a>
                                                                                        </li>
                                                                                        <li>
                                                                                            <a href="1" title="Trung Quốc">Trung Quốc</a>
                                                                                        </li>
                                                                                    </ul>
                                                                                </li>
                                                                                <li className="right-lv-01 col-lg-4">
                                                                                    <a href="1" title="Ấn Độ - Nam Á">Ấn Độ - Nam Á</a>
                                                                                    <ul className="lv-02">
                                                                                        <li>
                                                                                            <a href="1" title="Ấn Độ">Ấn Độ</a>
                                                                                        </li>
                                                                                        <li>
                                                                                            <a href="1" title="Maldives">Maldives</a>
                                                                                        </li>
                                                                                        <li>
                                                                                            <a href="1" title="Tây Tạng">Tây Tạng</a>
                                                                                        </li>
                                                                                    </ul>
                                                                                </li>
                                                                                <li className="right-lv-01 col-lg-4">
                                                                                    <a href="1" title="Châu Âu">Châu Âu</a>
                                                                                </li>
                                                                                <li className="right-lv-01 col-lg-4">
                                                                                    <a href="1" title="Châu Úc">Châu Úc</a>
                                                                                </li>
                                                                                <li className="right-lv-01 col-lg-4">
                                                                                    <a href="1" title="Châu Phi">Châu Phi</a>
                                                                                </li>
                                                                                <li className="right-lv-01 col-lg-4">
                                                                                    <a href="1" title="Châu Mỹ">Châu Mỹ</a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                        <div className="img-mega col-lg-3">
                                                                            <a href="1" title="Tour Quốc tế">
                                                                                <img src="images/mega-2-image.jpg" alt="Picture" />
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link nav-link-menu" href="1" title="Tour khuyến mãi">Tour khuyến mãi</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link nav-link-menu" href="1" title="Tin tức">Tin tức</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link nav-link-menu" href="1" title="Kinh nghiệm du lịch">Kinh nghiệm du lịch</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link nav-link-menu" href="1" title="FAQ">FAQ</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link nav-link-menu" href="1" title="Liên hệ">Liên hệ</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="hotline">
                                        <i className="fas fa-phone-volume" />Hotline: <a href="1" >0987382383</a>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </header>
                <section className="section-01">
                    <div className="home-slider slick-initialized slick-slider">
                        <a href="#" className="clearfix" title="Evo Tour" tabIndex={0}>
                            <picture>
                                <source media="(min-width: 1200px)" srcSet="images/slider_2.jpg" />
                                <source media="(min-width: 992px)" srcSet="images/slider_2.jpg" />
                                <source media="(min-width: 569px)" srcSet="images/slider_2.jpg" />
                                <source media="(min-width: 480px)" srcSet="images/slider_2.jpg" />
                                <img src="images/slider_2.jpg" alt="Picture" className="bg-img lazy img-responsive mx-auto d-block loaded" data-was-processed="true" />
                            </picture>
                        </a>
                    </div>
                    <div className="search-tour-index">
                        <div className="container">
                            <div className="row">
                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 tour-title">
                                    <h2 className="title">Đặt Tour du lịch!</h2>
                                    <p>Hơn 300 tours du lịch ở Việt Nam và Quốc tế</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="search-tour-item">
                                        <div className="row">
                                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                                <div className="input-group group-search-01">
                                                    <img className="font-icon" src="images/place-localizer.svg" alt="Địa điểm" />
                                                    <input type="tel" name id="box-shaw" className="form-control" required="required" title placeholder="Bạn muốn đi đâu?" />
                                                </div>
                                            </div>
                                            <div className="col-12 col-sm-5 col-md-5 col-lg-5 fix-res-ipd01">
                                                <div className="group-select">
                                                    <div className="group-select-icon">
                                                        <img className="font-icon" src="images/date.svg" alt="Date" />
                                                    </div>
                                                    <div className="group-select-content">
                                                        <p>Ngày khởi hành</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12 col-sm-5 col-md-5 col-lg-5 fix-res-ipd02">
                                                <div className="group-select">
                                                    <div className="group-select-icon">
                                                        <img className="font-icon" src="images/paper-plane.svg" alt="Date" />
                                                    </div>
                                                    <div className="group-select-content">
                                                        <p>Khởi hành từ</p>
                                                        <select id="box-shaw" name="garden" className="form-control from-select" required="required">
                                                            <option value>Tất cả</option>
                                                            <option value>Hồ Chí Minh</option>
                                                            <option value>TP. Nha Trang</option>
                                                            <option value>TP. Huế</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12 col-sm-2 col-md-2 col-lg-2 fix-res-ipd03">
                                                <button type="button" id="box-shaw" className="btn btn-default select-btn">Tìm</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-02">
                    <div className="tour-warrant">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 col-md-4 col-lg-4">
                                    <div className="warrant-item">
                                        <a href="#" title="Đảm bảo giá tốt nhất">
                                            <div className="icon-warrant">
                                                <img src="images/icon-warrant-01.png" alt="Picture" />
                                            </div>
                                            <div className="content-warrant">
                                                <h3 className="title-warrant">Đảm bảo giá tốt nhất</h3>
                                                <div className="caption-warrant">
                                                    "Chúng tôi đảm bảo khách hàng sẽ đặt được dịch vụ với giá tốt nhất, những chương trình khuyến mãi hấp dẫn nhất"
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-12 col-md-4 col-lg-4 col-border-left">
                                    <div className="warrant-item">
                                        <a href="#" title="Dịch vụ tin cậy - Giá trị đích thực">
                                            <div className="icon-warrant">
                                                <img src="images/icon-warrant-02.png" alt="Picture" />
                                            </div>
                                            <div className="content-warrant">
                                                <h3 className="title-warrant">Dịch vụ tin cậy - Giá trị đích thực</h3>
                                                <div className="caption-warrant">
                                                    "Đặt lợi ích khách hàng lên trên hết, chúng tôi hỗ trợ khách hàng nhanh và chính xác nhất với dịch vụ tin cậy, giá trị đích thực."
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-12 col-md-4 col-lg-4 col-border-left">
                                    <div className="warrant-item">
                                        <a href="#" title="Đảm bảo chất lượng">
                                            <div className="icon-warrant">
                                                <img src="images/icon-warrant-03.png" alt="Picture" />
                                            </div>
                                            <div className="content-warrant">
                                                <h3 className="title-warrant">Đảm bảo chất lượng</h3>
                                                <div className="caption-warrant">
                                                    "Chúng tôi liên kết chặt chẽ với các đối tác, khảo sát định kỳ để đảm bảo chất lượng tốt nhất của dịch vụ"
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-03">
                    <div className="sect-tour-hour index-tour">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="tour-hour-title">
                                        <h2>
                                            <a href="#" title=" Tour giờ chót Giá tốt">
                                                <span>Tour giờ chót</span> Giá tốt
                                            </a>
                                        </h2>
                                        <p>Cùng Evo Tour điểm qua một vài địa điểm du lịch trong nước thu hút du khách nhất nhé!</p>
                                    </div>
                                    <div className="row tour-products">
                                        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                                            <div className="product-item">
                                                <div className="product-item-img">
                                                    <a href="#" title="Du lịch Ý [Rome - Pisa - Florence - Venice - Milan]">
                                                        <img className="lazyload" src="images/product-item-01.jpg" alt="Du lịch Ý [Rome - Pisa - Florence - Venice - Milan]" />
                                                    </a>
                                                </div>
                                                <div className="info-product-item">
                                                    <h3>
                                                        <a href="#" title="Du lịch Ý [Rome - Pisa - Florence - Venice - Milan]">Du lịch Ý [Rome - Pisa - Florence - Venice - Milan]</a>
                                                    </h3>
                                                    <div className="vehicle-item">
                                                        <div className="icon-vehicle">
                                                            <ul className="list-icon">
                                                                <li className="list-icon-item" title="Di chuyển bằng Ô tô">
                                                                    <img src="images/icon.svg" alt="Di chuyển bằng Ô tô" />
                                                                </li>
                                                                <li className="list-icon-item" title="Di chuyển bằng máy bay">
                                                                    <img src="images/icon-02-plan.svg" alt="Di chuyển bằng máy bay" />
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="date-go-tour">
                                                        <ul className="list-icon">
                                                            <li className="icon-fix">
                                                                <img src="images/icon_03.svg" alt="Thứ 2 hằng tuần" /> Lịch khởi hành:
                                                                <span>Thứ 2 hằng tuần</span>
                                                            </li>
                                                            <li className="icon-fix">
                                                                <img src="images/icon_03.svg" alt="Thứ 2 hằng tuần" /> Thời gian:
                                                                <span>6 ngày 5 đêm</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="price-booking-box">
                                                        <div className="price"> 46.900.000₫ </div>
                                                        <div className="booking">
                                                            <a href="#" title="Đặt Tour" className="btn btn-booking">ĐẶT TOUR</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                                            <div className="product-item">
                                                <div className="product-item-img">
                                                    <a href="#" title="Du lịch Nam Phi [Johannesburg - Pretoria - Soweto - Cape Town]">
                                                        <img className="lazyload" src="images/product-item-02.jpg" alt="Du lịch Nam Phi [Johannesburg - Pretoria - Soweto - Cape Town]" />
                                                    </a>
                                                </div>
                                                <div className="info-product-item">
                                                    <h3>
                                                        <a href="#" title="Du lịch Nam Phi [Johannesburg - Pretoria - Soweto - Cape Town]">Du lịch Nam Phi [Johannesburg - Pretoria - Soweto - Cape Town]</a>
                                                    </h3>
                                                    <div className="vehicle-item">
                                                        <div className="icon-vehicle">
                                                            <ul className="list-icon">
                                                                <li className="list-icon-item" title="Di chuyển bằng Ô tô">
                                                                    <img src="images/icon.svg" alt="Di chuyển bằng Ô tô" />
                                                                </li>
                                                                <li className="list-icon-item" title="Di chuyển bằng máy bay">
                                                                    <img src="images/icon-02-plan.svg" alt="Di chuyển bằng máy bay" />
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="saleoff">75.000.000₫</div>
                                                    </div>
                                                    <div className="date-go-tour">
                                                        <ul className="list-icon">
                                                            <li className="icon-fix">
                                                                <img src="images/icon_03.svg" alt="Thứ 2 hằng tuần" /> Lịch khởi hành:
                                                                <span>Thứ 2 hằng tuần</span>
                                                            </li>
                                                            <li className="icon-fix">
                                                                <img src="images/icon_03.svg" alt="Thứ 2 hằng tuần" /> Thời gian:
                                                                <span>6 ngày 5 đêm</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="price-booking-box">
                                                        <div className="price"> 46.900.000₫ </div>
                                                        <div className="booking">
                                                            <a href="#" title="Đặt Tour" className="btn btn-booking">ĐẶT TOUR</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                                            <div className="product-item">
                                                <div className="product-item-img">
                                                    <a href="#" title="Du lịch Huế - Hồ Truồi - Đà Nẵng - Suối Khoáng Nóng Núi Thần Tài - KDL Bà Nà">
                                                        <img className="lazyload" src="images/product-item-03.jpg" alt="Du lịch Huế - Hồ Truồi - Đà Nẵng - Suối Khoáng Nóng Núi Thần Tài - KDL Bà Nà" />
                                                    </a>
                                                </div>
                                                <div className="info-product-item">
                                                    <h3>
                                                        <a href="#" title="Du lịch Huế - Hồ Truồi - Đà Nẵng - Suối Khoáng Nóng Núi Thần Tài - KDL Bà Nà">Du lịch Huế - Hồ Truồi - Đà Nẵng - Suối Khoáng Nóng Núi Thần Tài - KDL Bà Nà</a>
                                                    </h3>
                                                    <div className="vehicle-item">
                                                        <div className="icon-vehicle">
                                                            <ul className="list-icon">
                                                                <li className="list-icon-item" title="Di chuyển bằng Ô tô">
                                                                    <img src="images/icon.svg" alt="Di chuyển bằng Ô tô" />
                                                                </li>
                                                                <li className="list-icon-item" title="Di chuyển bằng máy bay">
                                                                    <img src="images/icon-02-plan.svg" alt="Di chuyển bằng máy bay" />
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="date-go-tour">
                                                        <ul className="list-icon">
                                                            <li className="icon-fix">
                                                                <img src="images/icon_03.svg" alt="Thứ 2 hằng tuần" /> Lịch khởi hành:
                                                                <span>Thứ 2 hằng tuần</span>
                                                            </li>
                                                            <li className="icon-fix">
                                                                <img src="images/icon_03.svg" alt="Thứ 2 hằng tuần" /> Thời gian:
                                                                <span>6 ngày 5 đêm</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="price-booking-box">
                                                        <div className="price"> 46.900.000₫ </div>
                                                        <div className="booking">
                                                            <a href="#" title="Đặt Tour" className="btn btn-booking">ĐẶT TOUR</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                                            <div className="product-item">
                                                <div className="product-item-img">
                                                    <a href="#" title="Du lịch Đà Nẵng - KDL Bà Nà - Hội An - Cố Đô Huế">
                                                        <img className="lazyload" src="images/product-item-04.jpg" alt="Du lịch Đà Nẵng - KDL Bà Nà - Hội An - Cố Đô Huế" />
                                                    </a>
                                                </div>
                                                <div className="info-product-item">
                                                    <h3>
                                                        <a href="#" title="Du lịch Đà Nẵng - KDL Bà Nà - Hội An - Cố Đô Huế">Du lịch Đà Nẵng - KDL Bà Nà - Hội An - Cố Đô Huế</a>
                                                    </h3>
                                                    <div className="vehicle-item">
                                                        <div className="icon-vehicle">
                                                            <ul className="list-icon">
                                                                <li className="list-icon-item" title="Di chuyển bằng Ô tô">
                                                                    <img src="images/icon.svg" alt="Di chuyển bằng Ô tô" />
                                                                </li>
                                                                <li className="list-icon-item" title="Di chuyển bằng máy bay">
                                                                    <img src="images/icon-02-plan.svg" alt="Di chuyển bằng máy bay" />
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="date-go-tour">
                                                        <ul className="list-icon">
                                                            <li className="icon-fix">
                                                                <img src="images/icon_03.svg" alt="Thứ 2 hằng tuần" /> Lịch khởi hành:
                                                                <span>Thứ 7 hằng tuần</span>
                                                            </li>
                                                            <li className="icon-fix">
                                                                <img src="images/icon_03.svg" alt="Thứ 2 hằng tuần" /> Thời gian:
                                                                <span>5 ngày 4 đêm</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="price-booking-box">
                                                        <div className="price"> 31.900.000₫ </div>
                                                        <div className="booking">
                                                            <a href="#" title="Đặt Tour" className="btn btn-booking">ĐẶT TOUR</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-04">
                    <div className="section-banner">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 col-sm-6 col-md-6 col-lg-6 banner-top">
                                    <a href="#" target="_blank" title="Evo Tour">
                                        <img src="images/banner-top-01.jpg" alt="Evo Tour" />
                                    </a>
                                </div>
                                <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                    <a href="#" target="_blank" title="Evo Tour">
                                        <img src="images/banner-top-02.jpg" alt="Evo Tour" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-05">
                    <div className="sect-tour-domestic index-tour">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="tour-hour-title">
                                        <h2>
                                            <a href="#" title=" Tour trong nước">
                                                Tour trong nước
                                            </a>
                                        </h2>
                                        <p>Tour du lịch Trong nước tại Evo Tour. Hành hương đầu xuân - Tận hưởng bản sắc Việt.</p>
                                    </div>
                                    <div className="row tour-products">
                                        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                                            <div className="product-item">
                                                <div className="product-item-img">
                                                    <a href="#" title="Du lịch Hà Nội - Ninh Bình - Cát Bà - Hạ Long - Hải Dương">
                                                        <img className="lazyload" src="images/product-item-05.jpg" alt="Du lịch Hà Nội - Ninh Bình - Cát Bà - Hạ Long - Hải Dương" />
                                                    </a>
                                                </div>
                                                <div className="info-product-item">
                                                    <h3>
                                                        <a href="#" title="Du lịch Hà Nội - Ninh Bình - Cát Bà - Hạ Long - Hải Dương">Du lịch Hà Nội - Ninh Bình - Cát Bà - Hạ Long - Hải Dương</a>
                                                    </h3>
                                                    <div className="vehicle-item">
                                                        <div className="icon-vehicle">
                                                            <ul className="list-icon">
                                                                <li className="list-icon-item" title="Di chuyển bằng Ô tô">
                                                                    <img src="images/icon.svg" alt="Di chuyển bằng Ô tô" />
                                                                </li>
                                                                <li className="list-icon-item" title="Di chuyển bằng máy bay">
                                                                    <img src="images/icon-02-plan.svg" alt="Di chuyển bằng máy bay" />
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="date-go-tour">
                                                        <ul className="list-icon">
                                                            <li className="icon-fix">
                                                                <img src="images/icon_03.svg" alt="Thứ 2 hằng tuần" /> Lịch khởi hành:
                                                                <span>Thứ 2 hằng tuần</span>
                                                            </li>
                                                            <li className="icon-fix">
                                                                <img src="images/icon_03.svg" alt="Thứ 2 hằng tuần" /> Thời gian:
                                                                <span>6 ngày 5 đêm</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="price-booking-box">
                                                        <div className="price"> 46.900.000₫ </div>
                                                        <div className="booking">
                                                            <a href="#" title="Đặt Tour" className="btn btn-booking">ĐẶT TOUR</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                                            <div className="product-item">
                                                <div className="product-item-img">
                                                    <a href="#" title="Tour Phan Thiết Mũi Né Resort 3,4* - 3 ngày 2 đêm">
                                                        <img className="lazyload" src="images/product-item-06.jpg" alt="Tour Phan Thiết Mũi Né Resort 3,4* - 3 ngày 2 đêm" />
                                                    </a>
                                                </div>
                                                <div className="info-product-item">
                                                    <h3>
                                                        <a href="#" title="Tour Phan Thiết Mũi Né Resort 3,4* - 3 ngày 2 đêm">Tour Phan Thiết Mũi Né Resort 3,4* - 3 ngày 2 đêm</a>
                                                    </h3>
                                                    <div className="vehicle-item">
                                                        <div className="icon-vehicle">
                                                            <ul className="list-icon">
                                                                <li className="list-icon-item" title="Di chuyển bằng Ô tô">
                                                                    <img src="images/icon.svg" alt="Di chuyển bằng Ô tô" />
                                                                </li>
                                                                <li className="list-icon-item" title="Di chuyển bằng máy bay">
                                                                    <img src="images/icon-02-plan.svg" alt="Di chuyển bằng máy bay" />
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="saleoff">75.000.000₫</div>
                                                    </div>
                                                    <div className="date-go-tour">
                                                        <ul className="list-icon">
                                                            <li className="icon-fix">
                                                                <img src="images/icon_03.svg" alt="Thứ 2 hằng tuần" /> Lịch khởi hành:
                                                                <span>Thứ 2 hằng tuần</span>
                                                            </li>
                                                            <li className="icon-fix">
                                                                <img src="images/icon_03.svg" alt="Thứ 2 hằng tuần" /> Thời gian:
                                                                <span>6 ngày 5 đêm</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="price-booking-box">
                                                        <div className="price"> 46.900.000₫ </div>
                                                        <div className="booking">
                                                            <a href="#" title="Đặt Tour" className="btn btn-booking">ĐẶT TOUR</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                                            <div className="product-item">
                                                <div className="product-item-img">
                                                    <a href="#" title="Du lịch Nha Trang - Hòn Tằm - KDL Vinpearl">
                                                        <img className="lazyload" src="images/product-item-07.jpg" alt="Du lịch Nha Trang - Hòn Tằm - KDL Vinpearl" />
                                                    </a>
                                                </div>
                                                <div className="info-product-item">
                                                    <h3>
                                                        <a href="#" title="Du lịch Nha Trang - Hòn Tằm - KDL Vinpearl">Du lịch Nha Trang - Hòn Tằm - KDL Vinpearl</a>
                                                    </h3>
                                                    <div className="vehicle-item">
                                                        <div className="icon-vehicle">
                                                            <ul className="list-icon">
                                                                <li className="list-icon-item" title="Di chuyển bằng Ô tô">
                                                                    <img src="images/icon.svg" alt="Di chuyển bằng Ô tô" />
                                                                </li>
                                                                <li className="list-icon-item" title="Di chuyển bằng tàu thủy">
                                                                    <img src="images/icon-04-plan.svg" alt="Di chuyển bằng tàu thủy" />
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="date-go-tour">
                                                        <ul className="list-icon">
                                                            <li className="icon-fix">
                                                                <img src="images/icon_03.svg" alt="Thứ 2 hằng tuần" /> Lịch khởi hành:
                                                                <span>Thứ 2 hằng tuần</span>
                                                            </li>
                                                            <li className="icon-fix">
                                                                <img src="images/icon_03.svg" alt="Thứ 2 hằng tuần" /> Thời gian:
                                                                <span>6 ngày 5 đêm</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="price-booking-box">
                                                        <div className="price"> 46.900.000₫ </div>
                                                        <div className="booking">
                                                            <a href="#" title="Đặt Tour" className="btn btn-booking">ĐẶT TOUR</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                                            <div className="product-item">
                                                <div className="product-item-img">
                                                    <a href="#" title="Du lịch Đà Lạt - Kdl Trang Trại Rau & Hoa - Đường Hầm Đất Sét">
                                                        <img className="lazyload" src="images/product-item-08.jpg" alt="Du lịch Đà Lạt - Kdl Trang Trại Rau & Hoa - Đường Hầm Đất Sét" />
                                                    </a>
                                                </div>
                                                <div className="info-product-item">
                                                    <h3>
                                                        <a href="#" title="Du lịch Đà Lạt - Kdl Trang Trại Rau & Hoa - Đường Hầm Đất Sét">Du lịch Đà Lạt - Kdl Trang Trại Rau &amp; Hoa - Đường Hầm Đất Sét</a>
                                                    </h3>
                                                    <div className="vehicle-item">
                                                        <div className="icon-vehicle">
                                                            <ul className="list-icon">
                                                                <li className="list-icon-item" title="Di chuyển bằng Ô tô">
                                                                    <img src="images/icon.svg" alt="Di chuyển bằng Ô tô" />
                                                                </li>
                                                                <li className="list-icon-item" title="Di chuyển bằng máy bay">
                                                                    <img src="images/icon-02-plan.svg" alt="Di chuyển bằng máy bay" />
                                                                </li>
                                                                <li className="list-icon-item" title="Di chuyển bằng máy bay">
                                                                    <img src="images/icon-04-plan.svg" alt="Di chuyển bằng tàu thủy" />
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="date-go-tour">
                                                        <ul className="list-icon">
                                                            <li className="icon-fix">
                                                                <img src="images/icon_03.svg" alt="Thứ 2 hằng tuần" /> Lịch khởi hành:
                                                                <span>Thứ 7 hằng tuần</span>
                                                            </li>
                                                            <li className="icon-fix">
                                                                <img src="images/icon_03.svg" alt="Thứ 2 hằng tuần" /> Thời gian:
                                                                <span>5 ngày 4 đêm</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="price-booking-box">
                                                        <div className="price"> 31.900.000₫ </div>
                                                        <div className="booking">
                                                            <a href="#" title="Đặt Tour" className="btn btn-booking">ĐẶT TOUR</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tour-more">
                                        <a href="#" title="Xem tất cả Tour">Xem tất cả Tour</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-06">
                    <div className="sect-tour-international index-tour">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="tour-hour-title">
                                        <h2>
                                            <a href="#" title="Tour nước ngoài">
                                                Tour nước ngoài
                                            </a>
                                        </h2>
                                        <p>Tour du lịch Nước ngoài tại Evo Tour. Du lịch 5 châu - Trải nghiệm sắc xuân thế giới</p>
                                    </div>
                                    <div className="row tour-products">
                                        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                                            <div className="product-item">
                                                <div className="product-item-img">
                                                    <a href="#" title="Tour Campuchia 4N3Đ: Bokor - Shihanouk Ville - Kohrong - Phnôm Pênh">
                                                        <img className="lazyload" src="images/product-item-11.jpg" alt="Tour Campuchia 4N3Đ: Bokor - Shihanouk Ville - Kohrong - Phnôm Pênh" />
                                                    </a>
                                                </div>
                                                <div className="info-product-item">
                                                    <h3>
                                                        <a href="#" title="Tour Campuchia 4N3Đ: Bokor - Shihanouk Ville - Kohrong - Phnôm Pênh">Tour Campuchia 4N3Đ: Bokor - Shihanouk Ville - Kohrong - Phnôm Pênh</a>
                                                    </h3>
                                                    <div className="vehicle-item">
                                                        <div className="icon-vehicle">
                                                            <ul className="list-icon">
                                                                <li className="list-icon-item" title="Di chuyển bằng Ô tô">
                                                                    <img src="images/icon.svg" alt="Di chuyển bằng Ô tô" />
                                                                </li>
                                                                <li className="list-icon-item" title="Di chuyển bằng máy bay">
                                                                    <img src="images/icon-02-plan.svg" alt="Di chuyển bằng máy bay" />
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="date-go-tour">
                                                        <ul className="list-icon">
                                                            <li className="icon-fix">
                                                                <img src="images/icon_03.svg" alt="Thứ 2 hằng tuần" /> Lịch khởi hành:
                                                                <span>Thứ 2 hằng tuần</span>
                                                            </li>
                                                            <li className="icon-fix">
                                                                <img src="images/icon_03.svg" alt="Thứ 2 hằng tuần" /> Thời gian:
                                                                <span>6 ngày 5 đêm</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="price-booking-box">
                                                        <div className="price"> 46.900.000₫ </div>
                                                        <div className="booking">
                                                            <a href="#" title="Đặt Tour" className="btn btn-booking">ĐẶT TOUR</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                                            <div className="product-item">
                                                <div className="product-item-img">
                                                    <a href="#" title="Du thuyền 5 Sao Voyager Of The Seas">
                                                        <img className="lazyload" src="images/product-item-12.jpg" alt="Du thuyền 5 Sao Voyager Of The Seas" />
                                                    </a>
                                                </div>
                                                <div className="info-product-item">
                                                    <h3>
                                                        <a href="#" title="Du thuyền 5 Sao Voyager Of The Seas">Du thuyền 5 Sao Voyager Of The Seas</a>
                                                    </h3>
                                                    <div className="vehicle-item">
                                                        <div className="icon-vehicle">
                                                            <ul className="list-icon">
                                                                <li className="list-icon-item" title="Di chuyển bằng Ô tô">
                                                                    <img src="images/icon.svg" alt="Di chuyển bằng Ô tô" />
                                                                </li>
                                                                <li className="list-icon-item" title="Di chuyển bằng máy bay">
                                                                    <img src="images/icon-02-plan.svg" alt="Di chuyển bằng máy bay" />
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="saleoff">75.000.000₫</div>
                                                    </div>
                                                    <div className="date-go-tour">
                                                        <ul className="list-icon">
                                                            <li className="icon-fix">
                                                                <img src="images/icon_03.svg" alt="Thứ 2 hằng tuần" /> Lịch khởi hành:
                                                                <span>Thứ 2 hằng tuần</span>
                                                            </li>
                                                            <li className="icon-fix">
                                                                <img src="images/icon_03.svg" alt="Thứ 2 hằng tuần" /> Thời gian:
                                                                <span>6 ngày 5 đêm</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="price-booking-box">
                                                        <div className="price"> 46.900.000₫ </div>
                                                        <div className="booking">
                                                            <a href="#" title="Đặt Tour" className="btn btn-booking">ĐẶT TOUR</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                                            <div className="product-item">
                                                <div className="product-item-img">
                                                    <a href="#" title="Du lịch Malaysia - Singapore [Thủy cung S.E.A AQUARIUM]">
                                                        <img className="lazyload" src="images/product-item-13.jpg" alt="Du lịch Malaysia - Singapore [Thủy cung S.E.A AQUARIUM]" />
                                                    </a>
                                                </div>
                                                <div className="info-product-item">
                                                    <h3>
                                                        <a href="#" title="Du lịch Malaysia - Singapore [Thủy cung S.E.A AQUARIUM]">Du lịch Malaysia - Singapore [Thủy cung S.E.A AQUARIUM]</a>
                                                    </h3>
                                                    <div className="vehicle-item">
                                                        <div className="icon-vehicle">
                                                            <ul className="list-icon">
                                                                <li className="list-icon-item" title="Di chuyển bằng Ô tô">
                                                                    <img src="images/icon.svg" alt="Di chuyển bằng Ô tô" />
                                                                </li>
                                                                <li className="list-icon-item" title="Di chuyển bằng tàu thủy">
                                                                    <img src="images/icon-04-plan.svg" alt="Di chuyển bằng tàu thủy" />
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="date-go-tour">
                                                        <ul className="list-icon">
                                                            <li className="icon-fix">
                                                                <img src="images/icon_03.svg" alt="Thứ 2 hằng tuần" /> Lịch khởi hành:
                                                                <span>Thứ 2 hằng tuần</span>
                                                            </li>
                                                            <li className="icon-fix">
                                                                <img src="images/icon_03.svg" alt="Thứ 2 hằng tuần" /> Thời gian:
                                                                <span>6 ngày 5 đêm</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="price-booking-box">
                                                        <div className="price"> 46.900.000₫ </div>
                                                        <div className="booking">
                                                            <a href="#" title="Đặt Tour" className="btn btn-booking">ĐẶT TOUR</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                                            <div className="product-item">
                                                <div className="product-item-img">
                                                    <a href="#" title="Du lịch Anh - Scotland [Lễ hội hoa Chelsea]">
                                                        <img className="lazyload" src="images/product-item-14.jpg" alt="Du lịch Anh - Scotland [Lễ hội hoa Chelsea]" />
                                                    </a>
                                                </div>
                                                <div className="info-product-item">
                                                    <h3>
                                                        <a href="#" title="Du lịch Anh - Scotland [Lễ hội hoa Chelsea]">Du lịch Anh - Scotland [Lễ hội hoa Chelsea]</a>
                                                    </h3>
                                                    <div className="vehicle-item">
                                                        <div className="icon-vehicle">
                                                            <ul className="list-icon">
                                                                <li className="list-icon-item" title="Di chuyển bằng Ô tô">
                                                                    <img src="images/icon.svg" alt="Di chuyển bằng Ô tô" />
                                                                </li>
                                                                <li className="list-icon-item" title="Di chuyển bằng máy bay">
                                                                    <img src="images/icon-02-plan.svg" alt="Di chuyển bằng máy bay" />
                                                                </li>
                                                                <li className="list-icon-item" title="Di chuyển bằng máy bay">
                                                                    <img src="images/icon-04-plan.svg" alt="Di chuyển bằng tàu thủy" />
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="date-go-tour">
                                                        <ul className="list-icon">
                                                            <li className="icon-fix">
                                                                <img src="images/icon_03.svg" alt="Thứ 2 hằng tuần" /> Lịch khởi hành:
                                                                <span>Thứ 7 hằng tuần</span>
                                                            </li>
                                                            <li className="icon-fix">
                                                                <img src="images/icon_03.svg" alt="Thứ 2 hằng tuần" /> Thời gian:
                                                                <span>5 ngày 4 đêm</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="price-booking-box">
                                                        <div className="price"> 31.900.000₫ </div>
                                                        <div className="booking">
                                                            <a href="#" title="Đặt Tour" className="btn btn-booking">ĐẶT TOUR</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tour-more">
                                        <a href="#" title="Xem tất cả Tour">Xem tất cả Tour</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-07">
                    <div className="sect-tour-destination">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="tour-hour-title">
                                        <h2>
                                            Điểm đến yêu thích
                                        </h2>
                                        <p>Các điểm đến du lịch trong nước và nước ngoài</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6 col-sm-6 col-md-3 col-lg-3">
                                    <div className="product-relative">
                                        <a href="#" title="Vịnh Hạ Long">
                                            <div className="destination-image">
                                                <img src="images/product-item-15.jpg" alt="Vịnh Hạ Long" />
                                            </div>
                                            <div className="destination-info">
                                                <div className="destination-name">Vịnh Hạ Long</div>
                                                <div className="destination-like">
                                                    Đã có <span>1,600 +</span> lượt khách
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-6 col-sm-6 col-md-3 col-lg-3">
                                    <div className="product-relative">
                                        <a href="#" title="SaPa">
                                            <div className="destination-image">
                                                <img src="images/product-item-16.jpg" alt="SaPa" />
                                            </div>
                                            <div className="destination-info">
                                                <div className="destination-name">SaPa</div>
                                                <div className="destination-like">
                                                    Đã có <span>1,600 +</span> lượt khách
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-6 col-sm-6 col-md-3 col-lg-3">
                                    <div className="product-relative">
                                        <a href="#" title="Đà nẵng">
                                            <div className="destination-image">
                                                <img src="images/product-item-17.jpg" alt="Đà nẵng" />
                                            </div>
                                            <div className="destination-info">
                                                <div className="destination-name">Đà nẵng</div>
                                                <div className="destination-like">
                                                    Đã có <span>1,600 +</span> lượt khách
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-6 col-sm-6 col-md-3 col-lg-3">
                                    <div className="product-relative">
                                        <a href="#" title="Nha trang">
                                            <div className="destination-image">
                                                <img src="images/product-item-18.jpg" alt="Nha trang" />
                                            </div>
                                            <div className="destination-info">
                                                <div className="destination-name">Nha trang</div>
                                                <div className="destination-like">
                                                    Đã có <span>1,600 +</span> lượt khách
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="row discover">
                                <div className="col-6 col-sm-3 col-md-15 col-lg-15">
                                    <div className="product-relative">
                                        <a href="#" title="Châu Âu">
                                            <div className="destination-image">
                                                <img src="images/product-item-19.jpg" alt="Châu Âu" />
                                            </div>
                                            <div className="destination-info">
                                                <div className="destination-name">Châu Âu</div>
                                                <div className="destination-like">
                                                    Khám phá ngay <i className="fas fa-chevron-circle-right" />
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-6 col-sm-3 col-md-15 col-lg-15">
                                    <div className="product-relative">
                                        <a href="#" title="Châu Á">
                                            <div className="destination-image">
                                                <img src="images/product-item-20.jpg" alt="Châu Á" />
                                            </div>
                                            <div className="destination-info">
                                                <div className="destination-name">Châu Á</div>
                                                <div className="destination-like">
                                                    Khám phá ngay <i className="fas fa-chevron-circle-right" />
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-6 col-sm-3 col-md-15 col-lg-15">
                                    <div className="product-relative">
                                        <a href="#" title="Châu Úc">
                                            <div className="destination-image">
                                                <img src="images/product-item-21.jpg" alt="Châu Úc" />
                                            </div>
                                            <div className="destination-info">
                                                <div className="destination-name">Châu Úc</div>
                                                <div className="destination-like">
                                                    Khám phá ngay <i className="fas fa-chevron-circle-right" />
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-6 col-sm-3 col-md-15 col-lg-15">
                                    <div className="product-relative">
                                        <a href="#" title="Châu Mỹ">
                                            <div className="destination-image">
                                                <img src="images/product-item-22.jpg" alt="Châu Mỹ" />
                                            </div>
                                            <div className="destination-info">
                                                <div className="destination-name">Châu Mỹ</div>
                                                <div className="destination-like">
                                                    Khám phá ngay <i className="fas fa-chevron-circle-right" />
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-3 col-md-15 col-lg-15">
                                    <div className="product-relative">
                                        <a href="#" title="Châu Phi">
                                            <div className="destination-image">
                                                <img src="images/product-item-23.jpg" alt="Châu Phi" />
                                            </div>
                                            <div className="destination-info">
                                                <div className="destination-name">Châu Phi</div>
                                                <div className="destination-like">
                                                    Khám phá ngay <i className="fas fa-chevron-circle-right" />
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-08">
                    <div className="sect-blogs">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="tour-hour-title">
                                        <h2>
                                            <a href="#" title="Tour nước ngoài">
                                                Tour nước ngoài
                                            </a>
                                        </h2>
                                        <p>Tour du lịch Nước ngoài tại Evo Tour. Du lịch 5 châu - Trải nghiệm sắc xuân thế giới</p>
                                    </div>
                                    <div className="row product-blog">
                                        <div className="item-blog col-12 col-sm-6 col-md-4 col-lg-4">
                                            <div className="img-blog">
                                                <a href title="Cẩm nang du lịch Đà Nẵng một ngày cho hội bạn vui chơi “sập” Đà thành">
                                                    <img src="images/blog-img-01.jpg" alt="Cẩm nang du lịch Đà Nẵng một ngày cho hội bạn vui chơi “sập” Đà thành" />
                                                </a>
                                            </div>
                                            <h3>
                                                <a className="title-blog" href title="Cẩm nang du lịch Đà Nẵng một ngày cho hội bạn vui chơi “sập” Đà thành">Cẩm nang du lịch Đà Nẵng một ngày cho hội bạn vui chơi “sập” Đà thành</a>
                                            </h3>
                                            <p> Đà Nẵng có cả núi, đồng bằng và biển, chỉ nằm cách Hội An 30 km. Bao quanh bởi hàng loạt điểm tham quan ...</p>
                                        </div>
                                        <div className="item-blog col-12 col-sm-6 col-md-4 col-lg-4">
                                            <div className="img-blog">
                                                <a href title="Vui chơi thả ga cùng bạn bè tại Phan Thiết với cẩm nang du lịch chi tiết này">
                                                    <img src="images/blog-img-02.jpg" alt="Vui chơi thả ga cùng bạn bè tại Phan Thiết với cẩm nang du lịch chi tiết này" />
                                                </a>
                                            </div>
                                            <h3>
                                                <a className="title-blog" href title="Vui chơi thả ga cùng bạn bè tại Phan Thiết với cẩm nang du lịch chi tiết này">Vui chơi thả ga cùng bạn bè tại Phan Thiết với cẩm nang du lịch chi tiết này</a>
                                            </h3>
                                            <p> 1. Thời tiết, khí hậu mát mẻ Đa phần các thành phố du lịch khác đều có các mùa nóng – lạnh đặc biệt và...</p>
                                        </div>
                                        <div className="item-blog col-12 col-sm-6 col-md-4 col-lg-4">
                                            <div className="img-blog">
                                                <a href title="Bí quyết du lịch Đà Lạt tự túc giá rẻ để xách túi và đi ngay không cần suy nghĩ">
                                                    <img src="images/blog-img-03.jpg" alt="Bí quyết du lịch Đà Lạt tự túc giá rẻ để xách túi và đi ngay không cần suy nghĩ" />
                                                </a>
                                            </div>
                                            <h3>
                                                <a className="title-blog" href title="Cẩm nang du lịch Đà Nẵng một ngày cho hội bạn vui chơi “sập” Đà thành">Cẩm nang du lịch Đà Nẵng một ngày cho hội bạn vui chơi “sập” Đà thành</a>
                                            </h3>
                                            <p> Phan Thiết là một thành phố thuộc tỉnh Bình Thuận, nằm trên quốc lộ 1A cách TP Hồ Chí Minh 183 km về hướ...</p>
                                        </div>
                                        <div className="item-blog col-12 col-sm-6 col-md-4 col-lg-4">
                                            <div className="img-blog">
                                                <a href title="Bỏ túi ngay 8 ứng dụng du lịch không thể thiếu này nếu bạn là kẻ hay “xê dịch”">
                                                    <img src="images/blog-img-04.png" alt="Bỏ túi ngay 8 ứng dụng du lịch không thể thiếu này nếu bạn là kẻ hay “xê dịch”" />
                                                </a>
                                            </div>
                                            <h3>
                                                <a className="title-blog" href title="Bỏ túi ngay 8 ứng dụng du lịch không thể thiếu này nếu bạn là kẻ hay “xê dịch”">Bỏ túi ngay 8 ứng dụng du lịch không thể thiếu này nếu bạn là kẻ hay “xê dịch”</a>
                                            </h3>
                                            <p>Trong thời đại 4.0 thì tất nhiên chúng ta cũng phải “upgrade” danh sách hành trang du lịch của mình đúng...</p>
                                        </div>
                                        <div className="item-blog col-12 col-sm-6 col-md-4 col-lg-4">
                                            <div className="img-blog">
                                                <a href title="Vạn vật phía Bắc sắp bừng tỉnh trong xuân mới, đi đâu để “mở hàng” năm mới thật may mắn đây?">
                                                    <img src="images/blog-img-05.jpg" alt="Vạn vật phía Bắc sắp bừng tỉnh trong xuân mới, đi đâu để “mở hàng” năm mới thật may mắn đây?" />
                                                </a>
                                            </div>
                                            <h3>
                                                <a className="title-blog" href title="Vạn vật phía Bắc sắp bừng tỉnh trong xuân mới, đi đâu để “mở hàng” năm mới thật may mắn đây?">Vạn vật phía Bắc sắp bừng tỉnh trong xuân mới, đi đâu để “mở hàng” năm mới thật may mắn đây?</a>
                                            </h3>
                                            <p>Tiết trời đông giá chuyển dần sang sắc xuân bừng tỉnh, tươi non trong nắng ấm báo hiệu một năm mới lại san...</p>
                                        </div>
                                        <div className="item-blog col-12 col-sm-6 col-md-4 col-lg-4">
                                            <div className="img-blog">
                                                <a href title="Nắm trong tay cách di chuyển từ sân bay Narita và trung tâm thủ đô Tokyo như người bản xứ">
                                                    <img src="images/blog-img-06.png" alt="Nắm trong tay cách di chuyển từ sân bay Narita và trung tâm thủ đô Tokyo như người bản xứ" />
                                                </a>
                                            </div>
                                            <h3>
                                                <a className="title-blog" href title="Nắm trong tay cách di chuyển từ sân bay Narita và trung tâm thủ đô Tokyo như người bản xứ">Nắm trong tay cách di chuyển từ sân bay Narita và trung tâm thủ đô Tokyo như người bản xứ</a>
                                            </h3>
                                            <p> Hệ thống giao thông tại Nhật Bản phát triển rất đa dạng và khá phức tạp. Với những người lần đầu đến xứ ...</p>
                                        </div>
                                    </div>
                                    <div className="tour-more">
                                        <a href="#" title="Xem tất cả Tour">Xem tất cả Tour</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <footer className="footer">
                    <div className="infomation-area">
                        <div className="container">
                            <div className="row item-info-top">
                                <div className="col-md-12 col-lg-3">
                                    <ul className="social-media">
                                        <li className="face">
                                            <a href="#" target="_blank" title="Facebook"><i className="fab fa-facebook-f" /></a>
                                        </li>
                                        <li className="youtube">
                                            <a href="#" target="_blank" title="Youtube"><i className="fab fa-youtube" /></a>
                                        </li>
                                        <li className="twitter">
                                            <a href="#" target="_blank" title="Twitter"><i className="fab fa-twitter" /></a>
                                        </li>
                                        <li className="ints">
                                            <a href="#" target="_blank" title="Instagram"><i className="fab fa-instagram" /></a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-md-12 col-lg-4">
                                    <div className="subscribe-content">
                                        <h2>Đăng ký nhận tin</h2>
                                        <p>Các deal du lịch giảm giá đến 60% sẽ được gửi đến bạn</p>
                                    </div>
                                </div>
                                <div className="col-md-12 col-lg-5">
                                    <div className="subscribe-form-email">
                                        <form className="subscribe-form">
                                            <div className="form-group">
                                                <input type="email" className="form-control" name="NAME" id="box-shaw" aria-describedby="Địa chỉ Email" placeholder="Địa chỉ Email" />
                                                <span className="input-group-append">
                                                    <button type="submit" id="box-shaw" className="btn btn-default" name="subscribe">Đăng ký</button>
                                                </span>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="info-footer">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12 col-lg-3 info-left-footer">
                                    <a href="#" className="logo-footer" title="Evo Tour">
                                        <img src="images/footer_logo.png" alt="Evo Tour" className="lazy img-responsive mx-auto d-block loaded" />
                                    </a>
                                    <ul className="info-contact">
                                        <li>
                                            <span>Địa chỉ:</span> 30 Đường 2/9, Phường Bình Hiên, Quận Hải Châu, Đà Nẵng
                                        </li>
                                        <li>
                                            <span>Email:</span>
                                            <a href="#" title="phandinhthac8798@gmail.com">phandinhthac8798@gmail.com</a>
                                        </li>
                                        <li>
                                            <span>Điện thoại:</span>
                                            <a href="#" title="0983623722">0983623722</a>
                                        </li>
                                        <li>Giấy phép kinh doanh số 0000000000 do sở KH&amp;ĐT TP cấp ngày 00/00/0000</li>
                                    </ul>
                                    <div className="payment-method">
                                        <img className="payment-img" src="images/visa.svg" alt="Tour Quốc tế" />
                                        <img className="payment-img" src="images/payment_4.svg" alt="Tour Quốc tế" />
                                        <img className="payment-img" src="images/payment_3.svg" alt="Tour Quốc tế" />
                                        <img className="payment-img" src="images/payment_5.svg" alt="Tour Quốc tế" />
                                    </div>
                                </div>
                                <div className="col-md-12 col-lg-9 info-right-footer">
                                    <div className="row">
                                        <div className="col-6 col-sm-6 col-md-3 col-lg-3">
                                            <div className="menu-footer">
                                                <h3>Evo Tour</h3>
                                                <ul className="content-menu-footer">
                                                    <li>
                                                        <a href="#" title="Trang chủ">Trang chủ</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" title="Giới thiệu">Giới thiệu</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" title="Tour du lịch">Tour du lịch</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" title="Tour khuyến mãi">Tour khuyến mãi</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" title="Tin tức">Tin tức</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" title="Kinh nghiệm du lịch">Kinh nghiệm du lịch</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" title="FAQ">FAQ</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" title="Liên hệ">Liên hệ</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-6 col-sm-6 col-md-3 col-lg-3">
                                            <div className="menu-footer">
                                                <h3>Evo Tour</h3>
                                                <ul className="content-menu-footer">
                                                    <li>
                                                        <a href="#" title="Trang chủ">Trang chủ</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" title="Giới thiệu">Giới thiệu</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" title="Tour du lịch">Tour du lịch</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" title="Tour khuyến mãi">Tour khuyến mãi</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" title="Tin tức">Tin tức</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" title="Kinh nghiệm du lịch">Kinh nghiệm du lịch</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" title="FAQ">FAQ</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" title="Liên hệ">Liên hệ</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-6 col-sm-6 col-md-3 col-lg-3">
                                            <div className="menu-footer">
                                                <h3>Evo Tour</h3>
                                                <ul className="content-menu-footer">
                                                    <li>
                                                        <a href="#" title="Trang chủ">Trang chủ</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" title="Giới thiệu">Giới thiệu</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" title="Tour du lịch">Tour du lịch</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" title="Tour khuyến mãi">Tour khuyến mãi</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" title="Tin tức">Tin tức</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" title="Kinh nghiệm du lịch">Kinh nghiệm du lịch</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" title="FAQ">FAQ</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" title="Liên hệ">Liên hệ</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-6 col-sm-6 col-md-3 col-lg-3">
                                            <div className="menu-footer">
                                                <h3>Evo Tour</h3>
                                                <ul className="content-menu-footer">
                                                    <li>
                                                        <a href="#" title="Trang chủ">Trang chủ</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" title="Giới thiệu">Giới thiệu</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" title="Tour du lịch">Tour du lịch</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" title="Tour khuyến mãi">Tour khuyến mãi</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" title="Tin tức">Tin tức</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" title="Kinh nghiệm du lịch">Kinh nghiệm du lịch</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" title="FAQ">FAQ</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" title="Liên hệ">Liên hệ</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                                            <div className="copy-right">
                                                <span>
                                                    © Bản quyền thuộc về
                                                    <b>Evo Themes</b>
                                                    <span>|</span> Cung cấp bởi
                                                    <a href="#" title="Sapo" target="_blank">Sapo</a>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
                <div class="background-drop"></div>
                <div class="main-menu-sub"></div>
            </div>
        )
    }
}

export default App;
