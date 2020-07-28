import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.section`
  color: #fff;
  h1 {
    margin: 20px;
    color: #fff;
  }

  .card {
    padding-bottom: 6vw;
    background-color: #2b95ad;
    border-radius: 30px;
    width: 95vw;
    padding: 2vw;
  }

  ul {
    list-style-image: url('img/star.png');
    list-style-position: inside;
    margin-top: 2vh;
  }

  li {
    margin-top: 2vh;
    text-align: justify;
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

  .buttons {
    text-align: center;
  }

  .cameleonHp {
    display: block;
  }

  @media screen and (min-width: 1171px) {
    .card {
      background-color: #fff;
      border: 0;
      background-image: url(img/rectangle.png);
      background-repeat: no-repeat;
      background-position-x: center;
      background-position-y: center;
      padding-top: 6vh;
      padding-bottom: 6vh;
      border: 1px yellow magenta;
    }

    h1 {
      margin: 0;
    }

    button {
      width: 15vw;
      margin: 40px 20px;
    }

    .cameleonHp {
      display: none;
    }

    li {
      margin-left: 16vw;
      width: 50vw;
    }
  }
`;

function CourtierCVous() {
  return (
    <Wrapper>
      <div className="container-fluid">
        <div className="row">
          <div className="card mx-auto">
            <h1 className="text-center mx-auto mt-5">
              Le courtier c’est vous !
            </h1>

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

            <div className="buttons">
              <Link to="/offer">
                <button type="button">Nos offres</button>
              </Link>
              <Link to="/project">
                <button type="button">Commencer</button>
              </Link>
            </div>

            <img
              src="img/courtiercestvous.png"
              alt="courtier list"
              width="250px"
              className="cameleonHp ml-auto mr-auto mt-4"
            />
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default CourtierCVous;
