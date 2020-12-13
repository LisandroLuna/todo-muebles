import React from 'react';

function ContactDetail() {
    return (
        <div className={"row"}>
            <div className={"row p-5"}>
                <div className={"col-lg-12 p-3"}>
                    <h2>Contactenos</h2>
                </div>
                <div className={"col-lg-6"}>
                    <iframe title={"Google maps"}
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d210147.39707532423!2d-58.573384947565984!3d-34.615461116377574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca3b4ef90cbd%3A0xa0b3812e88e88e87!2sBuenos%20Aires%2C%20CABA!5e0!3m2!1ses-419!2sar!4v1607884662191!5m2!1ses-419!2sar"
                        width="100%" height="100%" frameBorder="0" style={{border:0}} allowFullScreen=""
                        aria-hidden="false" tabIndex="0"></iframe>
                </div>
                <div className={"col-lg-6"}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu accumsan nisl. Nulla non orci eros. Mauris magna ipsum, fringilla non molestie eu, dapibus commodo massa. Vivamus dapibus cursus maximus. Nam dapibus sem vel bibendum consequat. Etiam porttitor hendrerit ex, at auctor nisi dictum non. Donec fringilla pulvinar eros, vitae rutrum est lobortis id. Vivamus fermentum, leo ac condimentum ullamcorper, lectus nisl accumsan metus, in hendrerit tellus magna sit amet quam.</p>
                    <p>Nuestras vías de contacto son:</p>
                   <ul>
                       <li>Teléfono: 1112 2233</li>
                       <li>Email: <a href={"mailto:contacto@todo-muebles.com"}>contacto@todo-muebles.com</a></li>
                   </ul>
                </div>
            </div>
        </div>
    );
}

export default ContactDetail;
