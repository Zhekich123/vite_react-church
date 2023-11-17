import './Services.css';
import CloseButton from '../../assets/images/close-button-dark.svg';

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
                    <div className="services-list services-list--1">
                        <div className="service-item service-item--1">
                            <div className="service-item__info">
                                <div className="service-item__top">
                                    <div className="service-item__title service-item__title--1">Дитяче</div>
                                </div>

                                <div className="service-item__description service-item__description--1">Ми любимо дітей і хочемо
                                    служити дітям у нашій церкві та місті.
                                </div>

                                <a href="" className="service-item__link"
                                    data-modal-title="Недільна школа – це місце:  "
                                    data-modal-text="✓ де вивчають Біблію в доступній для дітей формі;"
                                    data-modal-text2="✓ де розповідають основи християнської віри та біблійні сюжети.  
              Основним і єдиним підручником в недільній школі є БІБЛІЯ.  Під час уроків діти слухають 
              біблійні історії,співають пісні, вивчають вірші з Біблії, займаються рукоділлям."
                                    data-modal-text3="Мета недільної школи:"
                                    data-modal-text4="✓ запалити Божий вогонь в дитячих серцях;"
                                    data-modal-text5="✓ навчити дітей любити Бога і один одного;"
                                    data-modal-text6="✓ виховати майбутнє покоління на основі християнських цінностей!
              Проходить кожної неділі о 10:00."

                                    data-modal-image="./src/styles/images/services/1-kids-min.jpg">Дізнатися більше </a>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
    )
}