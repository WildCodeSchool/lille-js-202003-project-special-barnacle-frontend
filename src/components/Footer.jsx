import React from 'react';
import './styles/footer.css';

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div>
          <img
            src="./img/logofooter.png"
            alt="logo Footer Negodi"
            width="150px"
            className="logofooter"
          />
        </div>
        <div className="footerlists">
          <div className="footerlist">
            <h3>à propos de negodi</h3>
            <ul>
              <li>Découvrez Negodi</li>
              <li>Un conseil indépendant ?</li>
              <li>Frais de courtage et rétrocession de commision</li>
              <li>Mentions légales</li>
            </ul>
          </div>
          <div className="footerlist">
            <h3>nos services</h3>
            <ul>
              <li>Crédit immobilier</li>
              <li>Assurance emprunteur</li>
              <li>Recommandez ce site</li>
              <li>Espace clients</li>
            </ul>
          </div>
          <div className="footerlist">
            <ul>
              <li>
                <img className="logoMail" src="./img/tel.png" alt="tel" />
                <span>02 41 01 23 45</span>
              </li>

              <li>
                <img className="logoMail" src="./img/mail.png" alt="mail" />
                <span id="mail">contact@negodi.fr</span>
              </li>
              <li>Consultez notre FAQ</li>
            </ul>
            <h3>Suivez-nous</h3>
            <div className="social">
              <img
                className="logoSocial"
                src="./img/iconfacebook.png"
                alt="facebook"
              />
              <img
                className="logoSocial"
                src="./img/icontwitter.png"
                alt="facebook"
              />
              <img
                className="logoSocial"
                src="./img/iconlinkedin.png"
                alt="facebook"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="footerbottom">
        <p>
          ASC Agence de Services en Courtages - RCS Angers 792 071 425 00013
        </p>
        <p>
          EURL au capital social de 10 000€ - Siège Social: 2, Quare La Fayette
          - 49000 Angers - Tél:06.64.69.08.12 - Courriel: asc.elattar@gmail.com
        </p>
        <p>
          Conseil en Investissements Financiers référencé sous le N°F000367 par
          la Compagnie des CGPI, Association agréée par l Autorité des Marchés
          Financiers
        </p>
        <p>
          Courtier en Assurance et en Opérations Bancaires et Services de
          Paiement inscrti à l ORIAS sous le N°13 004 721
        </p>
        <p>
          Carte professionnelle Immobilière n°2013 49 410 T délivrée par la
          préfecture du département 49
        </p>
        <p>
          Assurance de Responsabilité Civile Professionnelle conformes aux
          articles L 530-1 et L 530-2 du Code des Assurances souscrites auprès
          de la Société d Assurances CGPA
        </p>
        <p>
          125 Rue de la Faisanderie - 75773 Paris Cedex 16 - Police n RCPGP3215
        </p>
        <div />
        <div className="negodimention">&#169; 2020 - Negodi / ASC</div>
      </div>
    </div>
  );
};
export default Footer;
