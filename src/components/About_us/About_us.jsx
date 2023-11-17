import './About_us.css';
import Image1 from '../../assets/images/image--1.jpg';
import Image2 from '../../assets/images/image--2.jpg';
import Image3 from '../../assets/images/image--3.jpg';

const images = document.querySelectorAll('.slider__image');
const dots = document.querySelectorAll('.slider__dott');
let currentIndex = 0;

function updateSlider() {
  images.forEach((image, index) => {
    if (index === currentIndex) {
      image.classList.add('active');
    } else {
      image.classList.remove('active');
    }
  });

  dots.forEach((dot, index) => {
    if (index === currentIndex) {
      dot.classList.add('active');
    } else {
      dot.classList.remove('active');
    }
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % images.length;
  updateSlider();
}

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentIndex = index;
    updateSlider();
  });
});

updateSlider();
setInterval(nextSlide, 5000);


export const About_us = () => (
    <section className="about-us" id="about-us">
        <div className="container about-us-container">
            <div className="slider">
                <img className="slider__image active" src={Image1} alt="image-1"/>
                    <img className="slider__image" src={Image2} alt="image-2"/>
                        <img className="slider__image" src={Image3} alt="image-3"/>

                            <div className="slider__dotts">
                                <div className="slider__dott active"></div>
                                <div className="slider__dott"></div>
                                <div className="slider__dott"></div>
                            </div>
                        </div>

                        <div className="about-us__info">
                            <div className="about-us__title">Про нас:</div>
                            <div className="about-us__description">
                                <p className="about-us__text">Перша Одеська Церква євангельських
                                    християн-баптистів існує 150
                                    років для того, щоб якнайбільше людей
                                    повірили в Ісуса Христа,
                                    зростали в Ньому та виконували Його місію.
                                </p>

                                <p className="about-us__text">Ми християнська церква, яка сповідує
                                    Ісуса Христа нашим Господом
                                    і Спасителем нашої душі.
                                </p>

                                <p className="about-us__text">Ми віримо, що кожна людина має гріх
                                    перед Богом і може бути спасена від
                                    смерті тільки по вірі в Ісуса Христа через
                                    Його жертву на хресті.
                                </p>

                                <p className="about-us__text">Ми проповідуємо цю істину і всю
                                    нашу діяльність здійснюємо з метою розповсюдити цю
                                    благу звістку в нашому районі, нашому місті, в нашій
                                    країні та по всій земній кулі.
                                </p>

                                <p className="about-us__text">«… і пізнаєте істину, а істина
                                    вас вільними зробить!» Івана 8:32
                                </p>
                            </div>
                        </div>

                    </div>
                </section>
                )