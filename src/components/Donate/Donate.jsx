import { useState } from "react";

// Pay-button imitation and form data function
function setCurrency(element) {
    let currencySymbol = element.dataset.value;
    document.getElementById('form_currency').value = currencySymbol;
  }
  
  function form__submit() {
    document.getElementById('submit_btn').click();
  }

export const Donate = () => {

    return (
        <section className="donate" id="donate">
            <div className="donate__section-body">
                <div className="container donate-container">
                    <div className="donate-wrapper">
                        <div className="donate__first-part">
                            <div className="donate__text-wrapper">
                                <div className="donate__title">Пожертвувати:</div>
                                <div className="donate__description">Якщо у вас є бажання і можливість
                                    благословити церкву фінансово і тим самим підтримати нас у
                                    служінні, Ви можете здійснити добровільне пожертвування наступними
                                    способами:
                                </div>
                            </div>
                            <div className="donate__buttons">
                                <div className="donate__paypal"
                                    data-title="PayPal Details:"
                                    data-name="First Baptist Church"
                                    data-email="firstodessabaptist@gmail.com">
                                    <a className="donate__paypal-link" href="#donate__pay-button">
                                        <img className="donate__paypal-img"
                                            src="./src/styles/images/paypal-logo.svg"
                                            alt="paypal" />
                                    </a>
                                    <div className="donate__button-text
                  donate__button-text-paypal">PayPal</div>
                                </div>

                                <div className="donate__moneygram"
                                    data-title="Money Gram Details:"
                                    data-title2="Перекази прохання надсилати на iм'я:"
                                    data-name="Myrmyr Ivan (Довірена особа)"
                                    data-email="Пiсля вiдправки, повiдомте, будь ласка, код переказу, суму та країну переводу на телефон:"
                                    data-number="+380675573489">
                                    <a className="donate__moneygram-link" href="#donate__pay-button">
                                        <img className="donate__moneygram-img"
                                            src="./src/styles/images/moneygram-logo.svg"
                                            alt="moneygram" />
                                    </a>
                                    <div className="donate__button-text
                  donate__button-text-moneygram">Moneygram</div>
                                </div>

                                <div className="donate__western-union"
                                    data-title="Westert Union Details:"
                                    data-title3="Перекази прохання надсилати на iм'я:"
                                    data-name="Myrmyr Ivan (Довірена особа)"
                                    data-email="Пiсля вiдправки, повiдомте, будь ласка, код переказу, суму та країну переводу на телефон:"
                                    data-number="+380675573489">
                                    <a className="donate__western-union-link" href="#donate__pay-button">
                                        <img className="donate__western-union-img"
                                            src="./src/styles/images/westernunion-logo.svg"
                                            alt="western-union" />
                                    </a>
                                    <div className="donate__button-text
                  donate__button-text-western">Western Union</div>
                                </div>
                            </div>

                            <div className="donate__requisites">
                                <a className="donate__requisite
                donate__requisites-uah"
                                    href="#donate__pay-button"
                                    data-title2="Реквізити в UAH:"
                                    data-organization="Релігійна організація: 'РГ ПЕРША ОДЕСЬКА ЦЕРКВА ЄХБ'"
                                    data-edrpu="ЄДРПОУ: 13891816"
                                    data-bank="Назва Банку: 'ПЕРШИЙ ІНВЕСТИЦІЙНИЙ БАНК' (м.Київ)"
                                    data-iban="IBAN: UA 55 300506 0000026002901047182"
                                    data-disclaimer="Увага!!! Призначення платежа: ДОБРОВIЛЬНI ПОЖЕРТВУВАННЯ!">UAH</a>

                                <a className="donate__requisite
                donate__requisites-usd"
                                    href="#donate__pay-button"
                                    data-title2="Реквізити в USD:"
                                    data-organization="Релігійна організація: 'РГ ПЕРША ОДЕСЬКА ЦЕРКВА ЄХБ'"
                                    data-edrpu="ЄДРПОУ: 13891816"
                                    data-bank="Назва Банку: 'ПЕРШИЙ ІНВЕСТИЦІЙНИЙ БАНК' (м.Київ)"
                                    data-iban="IBAN: UA 23 300506 0000026009001047182"
                                    data-disclaimer="Увага!!! Призначення платежа: ДОБРОВIЛЬНI ПОЖЕРТВУВАННЯ!">USD</a>

                                <a className="donate__requisite
                donate__requisites-eur"
                                    href="#donate__pay-button"
                                    data-title2="Реквізити в EUR:"
                                    data-organization="Релігійна організація: 'РГ ПЕРША ОДЕСЬКА ЦЕРКВА ЄХБ'"
                                    data-edrpu="ЄДРПОУ: 13891816"
                                    data-bank="Назва Банку: 'ПЕРШИЙ ІНВЕСТИЦІЙНИЙ БАНК' (м.Київ)"
                                    data-iban="IBAN: UA 23 300506 0000026009001047182"
                                    data-disclaimer="Увага!!! Призначення платежа: ДОБРОВIЛЬНI ПОЖЕРТВУВАННЯ!">EUR</a>
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
                                                <li className="donate__currency-item" data-value="₴" onClick={setCurrency(this)}>₴</li>
                                                <li className="donate__currency-item" data-value="$" onClick={setCurrency(this)}>$</li>
                                                <li className="donate__currency-item" data-value="€" onClick={setCurrency(this)}>€</li>
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
