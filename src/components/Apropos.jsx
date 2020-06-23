import React from 'react';
import styled from 'styled-components';
import ClearIcon from '@material-ui/icons/Clear';
import CheckIcon from '@material-ui/icons/Check';
import red from '@material-ui/core/colors/red';
import green from '@material-ui/core/colors/green';

const StyledApropos = styled.section`
  h1 {
    color: #2b95ad;
    text-transform: uppercase;
  }

  h2 {
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

  table {
  }

  table,
  td,
  th {
    border: 1px solid #808083;
    width: 80vw;
    padding: 2vw;
    text-align: center;
    font-size: 16px;
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

function Apropos() {
  return (
    <StyledApropos>
      <div className="container-fluid p-lg-5 p-2">
        <div className="apropos">
          <h1 className="text-center my-5">A propos de NEGODI</h1>
          <p>
            Negodi pour «Négociation directe» se veut être une alternative
            économique, éthique aux solutions de courtage classiques. L’objectif
            est de permettre à toute personne qui souhaite réaliser un crédit
            immobilier d’être acteur de ses démarches en toute autonomie et en
            totale transparence. Gagner du temps en centralisant votre demande
            de prêt, être libre de sélectionner les fournisseurs de votre choix
            et obtenir les meilleures conditions en mettant les banques en
            concurrence via notre plateforme sont la clé de la réussite de votre
            projet.
          </p>

          <h2>Comment ?</h2>
          <p>
            Afin de trouver une alternative au marché actuel en adéquation avec
            le droit en vigueur et soucieuse de l’intérêt du consommateur, nous
            vous offrons une troisième solution: Negodi. Nous avons choisi de
            scinder le métier de courtier en deux parties:
            <ol>
              <li>Le choix des banques</li>
              <li>
                Le conseil apporté par le courtier Le but est de répondre à vos
                objectifs, sans biais d’intervention, tout en vous donnant la
                possibilité de faire appel aux conseils d’un courtier ou d’agir
                en totale indépendance. La stratégie de Negodi est pour cela
                révolutionnaire dans le secteur du courtage en opérations de
                banque!
              </li>
            </ol>
          </p>
          <h2>En quelques clics…</h2>
          <p>
            Remplissez un questionnaire où les réponses vont permettre
            d’établir:
            <ol>
              <li>
                Une demande de financement détaillée et centralisée à
                destination des fournisseurs
              </li>
              <li>
                Une synthèse que vous pouvez consulter dans votre espace client
              </li>
              <li>
                Vous sélectionnez les fournisseurs de votre choix et nous leurs
                envoyons directement votre demande de prêt
              </li>
              <li>
                Les fournisseurs, avertis de leur mise en concurrence, vous
                offrirons donc les meilleures conditions!
              </li>
            </ol>
          </p>

          <h2>Une alternative innovante</h2>
          <p>
            Aujourd’hui, deux moyens s’offrent à vous pour obtenir un crédit
            immobilier:
            <ul>
              <li>
                Vous allez directement faire le tour des banques pour obtenir un
                prêt. Point fort: la négociation directe qui permet de n’avoir
                aucun biais d’intermédiation. Pas de frais de courtage et pas
                d’incitation à souscrire dans une banque spécifique. Point
                faible: le temps passé à présenter votre dossier auprès de
                chaque établissement sélectionné.
              </li>
              <li>
                Vous faîtes appel à un courtier. Point fort: gagner du temps en
                ne présentant son dossier qu’une seule fois et bénéficier d’une
                expertise pour la prise de décision. L’intermédiaire se chargera
                de mettre en concurrence les banques et de vous apporter une
                solution. Point faible: vous payez souvent des frais de courtage
                et êtes limité aux partenaires bancaires du courtier auquel vous
                faîtes appel. Le conseil apporté par le courtier peut être
                biaisé par la rémunération qu’il va recevoir de la banque. La
                commission que va percevoir le courtier va dépendre du
                fournisseur auquel il fait appel. Par exemple, pour un crédit
                immobilier de 500 0000 euros, le courtier percevra de la banque
                une commission qui variera fortement d’un établissement bancaire
                à l’autre:
              </li>
            </ul>
          </p>

          <table className="my-5 mx-auto">
            <thead>
              <tr>
                <th>Fournisseurs</th>
                <th>Taux de commissionnement par la banque</th>
                <th>Commission du courtier perçues de la banque</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Banque A</td>
                <td>
                  0% si client de la banque. 1% si c&apos;est un prospect.
                </td>
                <td>
                  <span className="redPrice">0 euros</span>
                </td>
              </tr>
              <tr>
                <td>
                  Banque B (Commission plafonnées à 200 euros par dossier)
                </td>
                <td>
                  0.5% si client de la banque. 1% si c&apos;est un prospect.
                </td>
                <td>
                  <span className="redPrice">1000 euros</span>
                </td>
              </tr>
              <tr>
                <td>Banque C (Commission plafonnée ) 4000 euros</td>
                <td>1% client ou prospect</td>
                <td>
                  <span className="redPrice">4000 euros</span>
                </td>
              </tr>
            </tbody>
          </table>
          <p>
            La commission perçue par le courtier varie significativement en
            fonction des établissements bancaires et illustre parfaitement le
            biais qu’il existe entre le courtier, la banque et vous. Le risque?
            Se voir proposer un taux pour votre crédit, qui bien qu’intéressant,
            ne sera pas le plus bas du marché.
          </p>
          <h2>Y a-t-il d’autres biais à l’intervention d’un courtier?</h2>
          <p>
            La réponse est oui! Certaines banques exercent une pression sur les
            courtiers afin d’obtenir un nombre minimum de dossiers par an. Si le
            courtier ne s’exécute pas, sa convention peut être résiliée.
            D’autres établissements financiers vérifieront le nombre
            d’assurances emprunteurs en délégation* sur les dossiers apportés
            par le courtier. S’il y a trop de délégations d’assurance, la
            convention pourrait être résiliée.
          </p>
          <p>
            *L’assurance en délégation est une assurance souscrite chez un
            assureur extérieur à la banque.
          </p>
          <h2>Negodi face à la concurrence</h2>
          <table className="my-5 mx-auto">
            <thead>
              <tr>
                <th>.</th>
                <th>Nombre de partenaires bancaires illimité</th>
                <th>Conseils indépendants des commissions bancaires</th>
                <th>Transparence</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Courtier avec frais de courtage</td>
                <td>
                  <ClearIcon fontSize="large" style={{ color: red[500] }} />
                </td>
                <td>
                  <ClearIcon fontSize="large" style={{ color: red[500] }} />
                </td>
                <td>
                  <ClearIcon fontSize="large" style={{ color: red[500] }} />
                </td>
              </tr>
              <tr>
                <td>Courtier sans frais de courtage / Courtier en ligne</td>
                <td>
                  <ClearIcon fontSize="large" style={{ color: red[500] }} />
                </td>
                <td>
                  <ClearIcon fontSize="large" style={{ color: red[500] }} />
                </td>
                <td>
                  <ClearIcon fontSize="large" style={{ color: red[500] }} />
                </td>
              </tr>
              <tr>
                <td>Negodi</td>
                <td>
                  <CheckIcon fontSize="large" style={{ color: green[500] }} />
                </td>
                <td>
                  <CheckIcon fontSize="large" style={{ color: green[500] }} />
                </td>
                <td>
                  <CheckIcon fontSize="large" style={{ color: green[500] }} />
                </td>
              </tr>
            </tbody>
          </table>
          <p>
            <ol>
              <li>
                Le nombre de partenaire n’est pas illimité car toutes les
                banques ne travaillent pas avec les courtiers!
              </li>
              <li>
                Les courtiers ne donnent pas un conseil indépendant des
                commissions bancaires puisqu’ils sélectionnent eux-mêmes les
                banques qui les rémunèrent.
              </li>
              <li>
                Negodi permet la segmentation entre le conseil et la sélection
                des banques, et vous offre ainsi un conseil transparent.
              </li>
            </ol>
          </p>
          <h2>En résumé:</h2>
          <p>
            <ul>
              <li>
                Les nouvelles politiques commerciales des banques posent des
                questions fortes sur le modèle économique des courtiers en
                crédit immobilier: avec un nombre de partenaires de plus en plus
                restreint, la promesse de l’obtention du taux d’intérêt le plus
                bas par les courtiers est compromise.
              </li>
              <li>
                Les courtiers peuvent être influencés par les commissions qu’ils
                perçoivent des banques partenaires et donc orienter leurs
                clients vers les banques qui les rémunèrent le plus et non
                celles qui proposent les conditions les plus intéressantes.
                Certaines banques exercent des conditions sur les courtiers afin
                de finaliser des dossiers de financement. Vous souhaitez être
                contacté? (Renvoi page «Contact»)
              </li>
            </ul>
          </p>
        </div>
      </div>
    </StyledApropos>
  );
}

export default Apropos;
