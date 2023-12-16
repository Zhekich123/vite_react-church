import { useState } from "react";
import './Donate.css';
import banks from './bank-requisites.json';
import requisites from './requisites.json';

// Pay-button imitation and form data function
function setCurrency(element) {
    let currencySymbol = element.dataset.value;
    document.getElementById('form_currency').value = currencySymbol;
}

function form__submit() {
    document.getElementById('submit_btn').click();
}

export const Donate = () => {
    const [bank, setBank] = useState({
        title: '',
        organization: '',
        edrpu: '',
        bank: '',
        iban: '',
        disclaimer: '',
        currency: '',
        id: ''
    });

    const [requisite, setRequisites] = useState({

    })

    return (
        <section className="donate" id="donate">
            <div className="donate__section-body">
                <div className="container donate-container">
                    <div className="donate__text-wrapper">
                        <div className="donate__title">Пожертвувати:</div>
                        <div className="donate__description">Якщо у вас є бажання і можливість
                            благословити церкву фінансово і тим самим підтримати нас у
                            служінні, Ви можете здійснити добровільне пожертвування наступними
                            способами:
                        </div>
                    </div>
                    <div className="payment-methods">
                        <div className="payment_online" tabIndex={0}>Онлайн-платіж</div>
                        <div className="payment_onffline" tabIndex={0}>Інші способи</div>
                    </div>
                    <div className="donate-wrapper">
                        <div className="donate__first-part">
                            <div className="donate__buttons">
                                {requisites.map(requisit => (
                                    <div
                                        key={requisit.id}
                                        className={requisit.class}
                                        data-title={requisit.data_title}
                                        data-title2={requisit.data_title2 ? requisit.data_title2 : ''}
                                        data-name={requisit.data_name}
                                        data-email={requisit.data_email}
                                        data-number={requisit.data_number ? requisit.data_number : ''}
                                    >
                                        <a className={requisit.link_class} href={requisit.href}>
                                            <img
                                                className={requisit.img_class}
                                                src={requisit.image}
                                                alt={requisit.alt}
                                            />
                                        </a>
                                        <div className={requisit.text_class}>{requisit.name}</div>
                                    </div>
                                ))}
                            </div>

                            <div className="donate__requisites">
                                {banks.map(reqBank => (
                                    <a 
                                        key={reqBank.id}
                                        className={reqBank.class}
                                        href={reqBank.href}
                                        data-title2={reqBank.title}
                                        data-organization={reqBank.organization}
                                        data-edrpu={reqBank.edrpu}
                                        data-bank={reqBank.bank}
                                        data-iban={reqBank.iban}
                                        data-disclaimer={reqBank.disclaimer}>
                                        {reqBank.currency}
                                    </a>
                                ))}
                            </div>
                        </div>
                        <div className="donate__border"></div>
                        <div className="donate__second-part">
                            <div className="donate__field-body">

                                <form id="checkout" action="https://baptist.od.ua/asset.api.php" method="post" name="assetpayments" acceptCharset="utf-8">
                                    <div className="donate__currency-choose">
                                        <input name="form_currency" id="form_currency" value="₴" hidden />
                                        <div className="donate__currency-dropdown">
                                            <span className="donate__currency-choosed">₴</span>
                                            <ul className="donate__currency-list">
                                                <li className="donate__currency-item" data-value="₴" onClick={(e) => setCurrency(e.target)}>₴</li>
                                                <li className="donate__currency-item" data-value="$" onClick={(e) => setCurrency(e.target)}>$</li>
                                                <li className="donate__currency-item" data-value="€" onClick={(e) => setCurrency(e.target)}>€</li>
                                            </ul>
                                            <div className="donate__currency-arrow">
                                                <img src="./src/styles/images/currency-arrow.svg" alt="choose-currency" className="donate__currency-arrow-img" />
                                            </div>
                                        </div>
                                    </div>
                                    <input
                                        className="donate__field"
                                        id="form_sum"
                                        type="text"
                                        name="form_sum"
                                        placeholder="100"
                                        required
                                    />
                                    <div className="donate__field-border"></div>
                                    <input id="form_email" name="Email" type="hidden" value="email@baptist.od.ua" />
                                    <input id="submit_btn" name="pay" type="submit" hidden value="Сплатити" />
                                    <div className="donate__fix-buttons">
                                        <div className="donate__fix-button">100</div>
                                        <div className="donate__fix-button donate__fix-button-500">500</div>
                                        <div className="donate__fix-button donate__fix-button-1000">1000</div>
                                    </div>
                                    <div className="donate__pay-button" id="donate__pay-button" alt="pay-button" onClick={form__submit}>
                                        <span className="donate__pay-link">Сплатити</span>
                                    </div>
                                    <div className="mobile__payment">
                                        <div className="apple-pay">
                                            <img src="./src/styles/images/a-pay.svg"
                                                alt="apple-pay"
                                                id="donate__pay-button"
                                                onClick={form__submit} />
                                        </div>
                                        <div className="google-pay">
                                            <img src="./src/styles/images/g-pay.svg"
                                                alt="google-pay"
                                                id="donate__pay-button"
                                                onClick={form__submit} />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div id="modal__requisites-data" className="requisites-modal">
                        <div className="modal__requisites-border"></div>
                        <div id="dynamicTitle" className="modal__requisites-title"></div>
                        <div id="dynamicTitle3" className="modal__requisites-title3"></div>
                        <div id="dynamicName" className="modal__requisites-name"></div>
                        <div id="dynamicText" className="modal__requisites modal__requisites-text"></div>
                        <div id="dynamicEmail" className="modal__requisites modal__requisites-email"></div>
                        <div id="dynamicNumber" className="modal__requisites modal__requisites-number"></div>
                        <div id="requisitesTitle" className="modal__requisites-title2"></div>
                        <div id="dynamicOrg" className="modal__requisites-organization"></div>
                        <div id="dynamicEdrpu" className="modal__requisites-edrpu"></div>
                        <div id="dynamicBank" className="modal__requisites-bank"></div>
                        <div id="dynamicIban" className="modal__requisites-iban"></div>
                        <div id="dynamicDisc" className="modal__requisites-disclaimer"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};
