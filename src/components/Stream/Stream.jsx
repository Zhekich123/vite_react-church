import './Stream.css';
import './youtube';

export const Stream = () => (
    <section className="stream" id="stream">
        <div className="container stream-container">
            <div className="stream-body">

                <div className="stream__title--wrapper">
                    <div className="strim__title">Онлайн <br/>
                        трансляція:
                    </div>
                    <div className="stream__email">Про технічні проблеми з трансляцією,
                        будь <br/>
                            ласка напишіть нам в телеграм: @firstodchurchmedia
                    </div>

                    <a href="https://www.youtube.com/@OdesaBaptistChurch"
                        target="_blank"
                        className="stream__button"
                        rel="noreferrer">
                        <div className="stream__link">YouTube</div>
                    </a>
                </div>

                <div className="stream__player" id="player"></div>
            </div>
        </div>
    </section>
)