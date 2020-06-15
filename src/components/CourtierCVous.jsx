import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  padding: 3vw;
  color: #fff;
  h1 {
    margin: 20px;
  }

  .card {
    padding: 6vw;
    background-color: #2b95ad;
    border-radius: 30px;
  }
  ul {
    list-style-image: url('img/star.png');
    list-style-position: inside;
    margin: 0vh 5vw;
    text-align: justify;
  }
  li {
    margin-top: 2vh;
  }

  button {
    background-color: #fff;
    margin-top: 5vh;
    margin-left: auto;
    margin-right: auto;
    width: 60vw;
    height: 6vh;
    border-radius: 7px;
    border: 2px solid #8fb925;
    color: #8fb925;
  }

  button:hover {
    background-color: #8fb925;
    color: #fff;
  }
`;

function CourtierCVous() {
  return (
    <Wrapper>
      <div className="container-fluid">
        <div className="row">
          <div className="card col-12 mx-1vw">
            <h1 className="text-center">Le courtier c’est vous !</h1>
            <ul>
              <li>
                Les meilleures conditions du marché : Un accès libre à toutes
                les banques que vous souhaitez mettre en concurrence.
              </li>
              <li>
                Un gain de temps: Une seule demande de prêt envoyée aux
                établissements sélectionnés.
              </li>
              <li>
                Un conseil sur mesure et transparent : Une expertise délivrée de
                toutes incitations liées aux commissions bancaires.
              </li>
            </ul>
            <button type="button">Nos offres</button>
            <button type="button">Commencer</button>
            <img
              src="img/courtiercestvous.png"
              alt="courtier list"
              width="250px"
              className="ml-auto mr-auto mt-4"
            />
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default CourtierCVous;
