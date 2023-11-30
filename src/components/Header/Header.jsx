import './Header.css'
import Logo from '../../assets/images/logo.svg'
import LogoBlack from '../../assets/images/logo-black.svg'
import Video from '../../assets/video/video.mp4'
// import './header_logic';

export const Header = () => (
    <header className="header">
        <nav className="nav">
            <div className="container header__container">
                <ul className="nav__list">
                    <li className="nav__item">
                        <a href="#schedule" className="nav__link">Розклад</a>
                    </li>

                    <li className="nav__item">
                        <a href="#stream" className="nav__link">Трансляція</a>
                    </li>

                    <li className="nav__item">
                        <a href="#about-us" className="nav__link nav__link--about">Про нас</a>
                    </li>

                </ul>
                <div className="logotype">
                    <a href="#" className="logo__link">
                        <img src={Logo} alt="logo"
                            className="logo__image"/>
                    </a>

                    <a href="#" className="logo__link-black">
                        <img src={LogoBlack} alt="logo"
                            className="logo__image-black"/>
                    </a>

                    <div className="logo-title">Перша Одеська
                        <br/> Баптистська Церква
                    </div>
                </div>

                <ul className="nav__list nav__list--2">
                    <li className="nav__item">
                        <a href="#services" className="nav__link">Служіння</a>
                    </li>

                    <li className="nav__item">
                        <a href="#donate" className="nav__link">Пожертвувати</a>
                    </li>

                    <li className="nav__item">
                        <a href="#contacts" className="nav__link">Контакти</a>
                    </li>
                </ul>

                <div className="header__burger">
                    <span className="header__burger-icon"></span>
                </div>

                <aside className="header__burger-menu">
                    <div className="logo-burger-wrapper">
                        <div className="header__logotype-burger">
                            <a href="#" className="logo__link-black-burger">
                                <img src={LogoBlack} alt="logo"
                                    className="logo__image-black-burger"/>
                            </a>
                            <div className="logo-title-burger">Перша Одеська
                                <br/> Баптистська Церква
                            </div>
                        </div>
                    </div>

                    <ul className="nav__list-burger">
                        <li className="nav__item-burger">
                            <a href="#services" className="nav__link-burger">Служіння</a>
                        </li>
                        <div className="nav__item-border"></div>

                        <li className="nav__item-burger">
                            <a href="#donate" className="nav__link-burger">Пожертвувати</a>
                        </li>
                        <div className="nav__item-border"></div>

                        <li className="nav__item-burger">
                            <a href="#contacts" className="nav__link-burger">Контакти</a>
                        </li>
                        <div className="nav__item-border"></div>

                        <li className="nav__item-burger">
                            <a href="#schedule" className="nav__link-burger">Розклад</a>
                        </li>
                        <div className="nav__item-border"></div>

                        <li className="nav__item-burger">
                            <a href="#stream" className="nav__link-burger">Трансляція</a>
                        </li>
                        <div className="nav__item-border"></div>

                        <li className="nav__item-burger">
                            <a href="#about-us" className="nav__link-burger nav__link--about">Про нас</a>
                        </li>
                        <div className="nav__item-border"></div>
                    </ul>

                    <ul className="languages-list-burger">
                        <li className="language-item">
                            <a href="#" className="language-link-burger">EN</a>
                        </li>
                        <li className="language-item language-item--ua">
                            <a href="#" className="language-link-burger">UA</a>
                        </li>
                        <li className="language-item language-item--ru">
                            <a href="#" className="language-link-burger">RU</a>
                        </li>
                    </ul>
                </aside>

            </div>
        </nav>

        <ul className="languages-list">
            <li className="language-item">
                <a href="#" className="language-link">EN</a>
            </li>
            <li className="language-item language-item--ua">
                <a href="#" className="language-link">UA</a>
            </li>
            <li className="language-item language-item--ru">
                <a href="#" className="language-link">RU</a>
            </li>
        </ul>

        <div className="intro">
            <video src={Video}
                className="intro__video" autoPlay muted loop>
            </video>
        </div>
    </header>
)