import { useState, useEffect } from 'react';
import cn from 'classnames';
import CloseButton from '../../assets/images/close-button-dark.svg';
import services from './Services_list.json';
import services2 from './Services_list_2.json';
import services3 from './Services_list_3.json';
import './Services.css';

export const Services = () => {
    const [isModalActive, setIsModalActive] = useState(false);
    const [modalData, setModalData] = useState({
        title: '',
        descriptionTitle: '',
        descriptionModal: '',
        modalTitle: '',
        text: '',
        text2: '',
        text3: '',
        text4: '',
        text5: '',
        text6: '',
        text7: '',
        image: '',
        showModal: false,
    });

    const openModal = (item, e) => {
        e.preventDefault();
        console.log("Modal opened", item);

        const {
            title,
            description_title,
            description_modal,
            modal_title,
            modal_text,
            modal_text2,
            modal_text3,
            modal_text4,
            modal_text5,
            modal_text6,
            modal_text7,
            image,
        } = item;

        setModalData({
            title: title,
            descriptionTitle: description_title,
            descriptionModal: description_modal,
            modalTitle: modal_title,
            text: modal_text,
            text2: modal_text2,
            text3: modal_text3,
            text4: modal_text4,
            text5: modal_text5,
            text6: modal_text6,
            text7: modal_text7,
            modalImage: image,
            showModal: true,
        });

        setIsModalActive(true);
    };

    const closeModal = () => {
        setModalData({
            ...modalData,
            showModal: false,
        });

        setIsModalActive(false);
    };

    useEffect(() => {
        if (isModalActive) {
            document.body.classList.add('body-modal-open');
        } else {
            document.body.classList.remove('body-modal-open');
        }

        return () => {
            document.body.classList.remove('body-modal-open');
        };
    }, [isModalActive]);

    return (
        <section className={cn('services', { 'active': isModalActive })} id="services">
            <div className="container services-container">
                <div className="services-title">Служи Богу разом з нами:</div>

                <div id="modal" className={cn('service-modal', { 'active': isModalActive })}>
                    <div className="modal-content">
                        {services.map(image => (
                            <img
                                key={image.id}
                                src={image.image}
                                alt="modal-image"
                                id="modalImage"
                            />
                        ))}
                        <img src={CloseButton}
                            className="modal-close-btn"
                            alt="close"
                            onClick={closeModal}
                        />
                        <div className="modalText">
                            <div id="modalMainTitle">{modalData.title}</div>
                            <div id="modalMainText">{modalData.descriptionModal}</div>
                            <div id="modalTitle">{modalData.modalTitle}</div>
                            <div id="modalText">{modalData.text}</div>
                            <div id="modalText2">{modalData.text2}</div>
                            <div id="modalText3">{modalData.text3}</div>
                            <div id="modalText4">{modalData.text4}</div>
                            <div id="modalText5">{modalData.text5}</div>
                            <div id="modalText6">{modalData.text6}</div>
                            <div id="modalText7">{modalData.text7}</div>
                        </div>
                    </div>
                </div>
                <div className="services-list services-list--1">
                    {services.map(service => (
                        <div key={service.id} className={`service-item ${service.item}`}>
                            <div className="service-item__info">
                                <div className="service-item__top">
                                    <div className={`service-item__title ${service.item_title}`}>{service.title}</div>
                                </div>

                                <div className={`service-item__description ${service.item_description}`}>{service.description_title}
                                </div>

                                <a href=""
                                    onClick={(e) => openModal(service, e)}
                                    className="service-item__link"
                                    data-modal-title={service.modal_title}
                                    data-modal-text={service.modal_text}
                                    data-modal-text2={service.modal_text2}
                                    data-modal-text3={service.modal_text3}
                                    data-modal-text4={service.modal_text4}
                                    data-modal-text5={service.modal_text5}
                                    data-modal-text6={service.modal_text6}
                                    data-modal-image={service.image}>Дізнатися більше </a>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="services-list services-list--2">
                    {services2.map(service2 => (
                        <div key={service2.id} className={`service-item ${service2.item}`}>
                            <div className="service-item__info">
                                <div className="service-item__top">
                                    <div className={`service-item__title ${service2.item_title}`}>{service2.title}</div>
                                </div>

                                <div className={`service-item__description ${service2.item_description}`}>{service2.description_title}
                                </div>

                                <a href=""
                                    onClick={(e) => openModal(service2, e)}
                                    className="service-item__link"
                                    data-modal-title={service2.modal_title}
                                    data-modal-text={service2.modal_text}
                                    data-modal-text2={service2.modal_text2}
                                    data-modal-text3={service2.modal_text3}
                                    data-modal-text4={service2.modal_text4}
                                    data-modal-text5={service2.modal_text5}
                                    data-modal-text6={service2.modal_text6}

                                    data-modal-image={service2.image}>Дізнатися більше </a>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="services-list services-list--3">
                    {services3.map(service3 => (
                        <div key={service3.id} className={`service-item ${service3.item}`}>
                            <div className="service-item__info">
                                <div className="service-item__top">
                                    <div className={`service-item__title ${service3.item_title}`}>{service3.title}</div>
                                </div>

                                <div className={`service-item__description ${service3.item_description}`}>{service3.description_title}
                                </div>

                                <a href=""
                                    onClick={(e) => openModal(service3, e)}
                                    className="service-item__link"
                                    data-modal-title={service3.modal_title}
                                    data-modal-text={service3.modal_text}
                                    data-modal-text2={service3.modal_text2}
                                    data-modal-text3={service3.modal_text3}
                                    data-modal-text4={service3.modal_text4}
                                    data-modal-text5={service3.modal_text5}
                                    data-modal-text6={service3.modal_text6}

                                    data-modal-image={service3.image}>Дізнатися більше </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section >
    );
};
