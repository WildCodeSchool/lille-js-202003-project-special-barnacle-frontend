import React from 'react';
import styled from 'styled-components';

const StyledMentionsNegodi = styled.footer`
  .footerbottom {
    background-color: #2f6c7f;
    color: #ffffff;
    line-height: 1em;
  }
`;

const MentionsNegodi = () => {
  return (
    <StyledMentionsNegodi>
      <div className="footerbottom p-4 text-center">
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
        <div className="text-center font-weight-bold">
          &#169; 2020 - Negodi / ASC
        </div>
      </div>
    </StyledMentionsNegodi>
  );
};
export default MentionsNegodi;
