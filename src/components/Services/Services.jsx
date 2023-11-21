import './Services.css';
import CloseButton from '../../assets/images/close-button-dark.svg';
import { Services_list } from './Services_list/Services_list';

export const Services = () => {

    return (
        <section className="services" id="services">
            <div className="container services-container">
                <div className="services-title">Служи Богу разом з нами:</div>

                <div id="modal" className="service-modal">
                    <div className="modal-content">
                        <img
                            src=""
                            alt="modal-image"
                            id="modalImage"
                        />
                            <img src={CloseButton}
                                className="modal-close-btn"
                                alt="close"
                            />
                                <div className="modalText">
                                    <div id="modalMainTitle"></div>
                                    <div id="modalMainText"></div>
                                    <div id="modalTitle"></div>
                                    <div id="modalText"></div>
                                    <div id="modalText2"></div>
                                    <div id="modalText3"></div>
                                    <div id="modalText4"></div>
                                    <div id="modalText5"></div>
                                    <div id="modalText6"></div>
                                    <div id="modalText7"></div>
                                </div>
                            </div>
                    </div>
                    <Services_list />
                </div>
        </section>
    )
}