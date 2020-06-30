import React from 'react';
import styled from 'styled-components';

const Strategie = styled.h4`
  h4 {
    color: #2b95ad;
  }

  .title {
    color: #2b95ad;
    text-align: center;
  }

  p {
    color: grey;
    font-size: 1rem;
    text-align: justify;
  }
`;

function StratRevolution() {
  return (
    <Strategie>
      <div className="container-fluid">
        <div className="row mx-4 mb-5">
          <h4 className="col-12 text-center my-5">
            Une stratégie révolutionaire !
          </h4>
          <p className="px-1">
            Actuellement, le courtier en prêt immobilier touche en moyenne 1% de
            la banque et 1% de frais de courtage qu’il vous facture sur le
            montant de l’emprunt immobilier. Afin de trouver une alternative au
            marché actuel en adéquation avec le droit en vigueur et soucieuse de
            l’intérêt du consommateur, nous vous offrons une troisième solution
            : Negodi. Pour cela, nous avons choisi de dissocier le choix des
            banques et le conseil apporté par le courtier. Le but est de
            répondre à vos seuls objectifs, sans biais d’intervention, tout en
            vous offrant la possibilité d’agir en totale indépendance ou de
            faire appel aux conseils d’un courtier.
          </p>
        </div>

        <div className="row">
          <div className="col-lg col-12">
            <h5 className="title my-4">Formule « Conseil »</h5>
            <p className="mx-3 px-2">
              Sollicitez à tout moment notre expertise pour vous accompagner
              tout au long de votre projet ! Tarif : 300€ pour un conseil global
              et personnalisé
            </p>
          </div>
          <div className="col-lg col-12">
            <h5 className="title my-4">Formule « Privilège »</h5>
            <p className="mx-3 px-2">
              Profitez des avantages combinés des formules « Liberté » et «
              Conseil » Vous profitez d’emblée d’une réduction de 50€ sur les
              tarifs précédents.
            </p>
          </div>
          <div className="col-lg col-12 mb-5">
            <h5 className="title my-4">Formule « Liberté »</h5>
            <p className="mx-3 px-2">
              Sélectionnez autant de banques que vous le souhaitez ! Tarif : 50€
              par banque sélectionnée
            </p>
          </div>
        </div>
      </div>
    </Strategie>
  );
}
export default StratRevolution;
