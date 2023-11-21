/* eslint-disable react/prop-types */
export const Services_item = ({ item }) => {
    return (
        <div>
            <div className={`service-item ${item.item}`}>
                <div className="service-item__info">
                    <div className="service-item__top">
                        <div className={`service-item__title ${item.item_title}`}>
                            {item.title}
                        </div>
                    </div>
                    <div className={`service-item__description ${item.item_description}`}>
                        {item.description_title}
                    </div>
                    <a
                        href=""
                        className="service-item__link"
                        data-modal-description={item.description_modal}
                        data-modal-title={item.modal_title}
                        data-modal-text={item.modal_text}
                        data-modal-text2={item.modal_text2}
                        data-modal-text3={item.modal_text3}
                        data-modal-text4={item.modal_text4}
                        data-modal-text5={item.modal_text5}
                        data-modal-text6={item.modal_text6}
                        data-modal-image={item.image}
                    >
                        Дізнатися більше
                    </a>
                </div>
            </div>
        </div>
    );
};
