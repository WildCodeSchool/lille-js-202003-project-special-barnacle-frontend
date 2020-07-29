import React from 'react';
import styled from 'styled-components';

const StyledNosOffres = styled.section`
  h1 {
    color: #2b95ad;
    text-transform: uppercase;
  }

  h2 {
    color: #2b95ad;
    margin-top: 1.2em;
    margin-bottom: 0.7em;
  }
  h3 {
    color: #2b95ad;
    margin-top: 1.2em;
    margin-bottom: 0.7em;
  }

  .title {
    color: #2b95ad;
    text-align: center;
  }

  p {
    color: grey;
    font-size: 1rem;
    text-align: justify;
    line-height: 2em;
    padding: 0 2vw;
  }

  li {
    list-style: inside;
  }

  thead {
    color: #8cc542;
    height: 200px;
    border: 1px solid #808083;
  }

  tbody {
    height: 200px;
  }

  .redPrice {
    color: #dc143c;
  }

  ol li {
    list-style-type: decimal;
  }

  @media screen and (max-width: 640px) {
    th,
    td {
      font-size: 12px;
    }

    h2 {
      text-align: center;
    }
  }
`;

function NosOffres() {
  return (
    <StyledNosOffres>
      <div className="container-fluid p-lg-5 p-2">
        <div className="apropos">
          <h1 className="text-center">Une stratégie tarifaire inédite!</h1>
          <p>
            Actuellement, le courtier en prêt immobilier touche en moyenne 1% de
            la banque et 1% de frais de courtage qu’il vous facture sur le
            montant de l’emprunt immobilier.
          </p>
          <p>
            Afin de trouver une alternative au marché actuel et de proposer une
            solution commerciale éthique, en adéquation avec le droit en vigueur
            et soucieuse de l’intérêt du consommateur, nous vous offrons une
            troisième solution: Negodi.
          </p>
          <p>
            Nous avons choisi de scinder le métier de courtier en deux parties:
          </p>
          <p>
            <ol>
              <li>Le choix des banques</li>
              <li>Le conseil apporté par le courtier</li>
            </ol>
          </p>
          <p>
            Le but est de répondre à vos objectifs, sans biais d’intervention,
            tout en vous donnant la possibilité de faire appel aux conseils d’un
            courtier ou d’agir en totale indépendance.
          </p>

          <h2 className="text-center my-5">Les offres Negodi</h2>

          <h3>Les packages Crédit immobilier</h3>

          <p>
            <ul>
              <li>La formule «Liberté»</li>
              <p>
                Elle vous permet de sélectionner de 1 à 10 banques pour l’envoi
                de votre demande de prêt. Les banques mises en concurrence
                envoient les propositions de financement dans votre espace
                client que vous pourrez consulter librement.
              </p>
              <p>Tarif: 50 euros par banque sélectionnée</p>
              <li>La formule «Conseil»</li>
              <p>
                Elle vous donne la possibilité de solliciter notre expertise à
                tout moment pour vous accompagner tout au long de votre projet.
                Nous vous aidons dans le montage de votre dossier et la
                comparaison des propositions bancaires.
              </p>
              <p>Tarif: 300 euros pour un conseil global et personnalisé</p>
              <li>La formule «Privilège»</li>
              <p>
                Elle combine les formules «Liberté» et «Conseil». Vous
                bénéficiez ainsi d’une expertise complète avec une réduction
                tarifaire de 50 euros.
              </p>
              <p>
                Exemple: sélection de 5 banques + le conseil Negodi = 500 euros
              </p>
            </ul>
          </p>
        </div>
      </div>
    </StyledNosOffres>
  );
}

export default NosOffres;
