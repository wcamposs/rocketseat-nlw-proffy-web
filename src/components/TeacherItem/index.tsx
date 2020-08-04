import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem () {
    return (
        <article className="teacher-item">
                    <header>
                        <img src="https://pbs.twimg.com/profile_images/1281394127180111872/3_Js4Xf3_400x400.jpg" alt="Willian Campos"/>
                        <div>
                            <strong>Willian Campos</strong>
                            <span>Química</span>
                        </div>
                    </header>

                    <p>
                        Entusiasta das melhores tecnologias de química avançada.
                        <br /><br />
                        Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.
                    </p>

                    <footer>
                        <p>
                            Preço/hora
                            <strong>R$ 100,00</strong>
                        </p>
                        <button type="button">
                            <img src={whatsappIcon} alt="Whatsapp" />
                            Entrar em contato
                        </button>
                    </footer>
                </article>
    )
}

export default TeacherItem;