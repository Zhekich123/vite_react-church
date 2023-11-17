import './Schedule.css';

export const Schedule = () => (
    <section className="schedule" id="schedule">
        <div className="container schedule-container">
            <div className="schedule-body">
                <div className="schedule__title">
                    Розклад <br/>
                        церковних <br/
                        >
                            богослужінь
                        </div>

                        <div className="schedule__backspase"></div>

                        <ul className="schedule__list">
                            <div className="schedule__list--wrapper schedule__list--sunday">
                                <li className="schedule__item schedule__item--name">Неділя:</li>
                                <li className="schedule__item schedule__item--time">10:00</li>
                            </div>

                            <div className="schedule__list--wrapper">
                                <div className="schedule__item--wrapper">
                                    <li className="schedule__item schedule__item--name">Вівторок:</li>
                                    <div className="schedule__small-text">Вечірнє зібрання</div>
                                </div>
                                <li className="schedule__item schedule__item--time">18:00</li>
                            </div>

                            <div className="schedule__list--wrapper">
                                <div className="schedule__item--wrapper">
                                    <li className="schedule__item schedule__item--name">Четвер:</li>
                                    <div className="schedule__small-text">Розбір Слова Божого</div>
                                </div>
                                <li className="schedule__item schedule__item--time">10:00</li>
                            </div>

                            <div className="schedule__list--wrapper schedule__list--wrapper-friday">
                                <div className="schedule__item--wrapper">
                                    <li className="schedule__item schedule__item--name">Пʼятниця</li>
                                    <div className="schedule__small-text">Цілодобова молитва по гуртах</div>
                                </div>
                            </div>
                        </ul>
                </div>
            </div>
    </section>
)