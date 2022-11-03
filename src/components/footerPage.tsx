import React from 'react';
import '../styles/footerPage.scss'

import InstitutoPayW from '../img/institutoPayW.png';
import PlayStoreImg from '../img/playStore.png';
import AppleStoreImg from '../img/appleStore.png';

const FooterPage = () => {
    return (
        <footer id="footer">
            <div id="footerBanner">
                <img src={InstitutoPayW} />
            </div>

            <div id="footerContact">
                <div id="footerContactLinks">
                    <ul>
                        <li><h4>Sobre nós</h4></li>
                        <li><a href="#">Lorem ipsum</a></li>
                        <li><a href="#">Lorem ipsum</a></li>
                        <li><a href="#">Lorem ipsum</a></li>
                        <li><a href="#">Lorem ipsum</a></li>
                        <li><a href="#">Lorem ipsum</a></li>
                    </ul>

                    <ul>
                        <li><h4>Links</h4></li>
                        <li><a href="#">Lorem ipsum</a></li>
                        <li><a href="#">Lorem ipsum</a></li>
                        <li><a href="#">Lorem ipsum</a></li>
                        <li><a href="#">Lorem ipsum</a></li>
                        <li><a href="#">Lorem ipsum</a></li>
                    </ul>

                    <ul>
                        <li><h4>Categorias</h4></li>
                        <li><a href="#">Lorem ipsum</a></li>
                        <li><a href="#">Lorem ipsum</a></li>
                        <li><a href="#">Lorem ipsum</a></li>
                        <li><a href="#">Lorem ipsum</a></li>
                        <li><a href="#">Lorem ipsum</a></li>
                    </ul>
                </div>

                <div id="footerNewsLetter">
                    <h4>Newsletter</h4>
                    <p className="footernewsLetterEmail">E-mail</p>
                    <form id="footerNewsLetterForm">
                        <input placeholder="Digite aqui seu e-mail" type="text" />
                        <button>
                            enviar
                        </button>
                    </form>

                    <h4 id="footerDownloadApp">Baixe o app</h4>
                    <a href="#">
                        <img src={PlayStoreImg} />
                    </a>
                    <a href="#">
                        <img src={AppleStoreImg} />
                    </a>
                </div>
            </div>

            <div id="footerCopy">
                <div id="footerCopyRow">
                    <p>Todos os direitos reservados - 2021</p>
                    <p>Instituto Pay</p>
                </div>
            </div>
        </footer>
    )
}

export default FooterPage;