import './Services.css';
import CloseButton from '../../assets/images/close-button-dark.svg';
import services from './Services_list.json';

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
                            <div id="modalTitleDescription"></div>
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
                {services.map(service => (
                    <div key={service.id} className={`services-list ${service.list}`}>
                        <div className={`service-item ${service.item}`}>
                            <div className="service-item__info">
                                <div className="service-item__top">
                                    <div className={`service-item__title ${service.item_title}`}>{service.title}</div>
                                </div>

                                <div className={`service-item__description ${service.item_description}`}>
                                    {service.description_title}
                                </div>

                                <a
                                    href=""
                                    className="service-item__link"
                                    data-modal-description={service.description_modal}
                                    data-modal-title={service.modal_title}
                                    data-modal-text={service.modal_text}
                                    data-modal-text2={service.modal_text2}
                                    data-modal-text3={service.modal_text3}
                                    data-modal-text4={service.modal_text4}
                                    data-modal-text5={service.modal_text5}
                                    data-modal-text6={service.modal_text6}
                                    data-modal-image={service.image}
                                >
                                    Дізнатися більше
                                </a>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </section>
    )
}