import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './styleForm.css';

const Question1 = () => {
  const [choice, setChoice] = useState('');

  const dispatch = useDispatch();

  const handleAchat = () => {
    dispatch({ type: 'INITIAL_CHOICE', payload: choice });
    dispatch({ type: 'ADD1' });

    setChoice('achat');
  };

  const handleConstruire = () => {
    setChoice('construire');
    dispatch({ type: 'INITIAL_CHOICE', choice });
  };

  const handleTravaux = () => {
    setChoice('travaux');
    dispatch({ type: 'INITIAL_CHOICE', choice });
  };

  const handleRenegocier = () => {
    setChoice('renegocier');
    dispatch({ type: 'INITIAL_CHOICE', choice });
  };

  const handleAutreProjet = () => {
    setChoice('autreProjet');
    dispatch({ type: 'INITIAL_CHOICE', choice });
  };

  useEffect(() => {
    dispatch({ type: 'INITIAL_CHOICE', choice });
  }, [choice]);

  return (
    <div className="questionImg">
      <div
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className="form container-fluid pb-5">
          <div className="row-cols-12 p-5 text-center">
            <h1>Quel est votre projet ?</h1>
          </div>
          <div className="row text-center">
            <div className="col-10 col-sm-5 col-lg-2 px-0 formCard mb-5 text-center mx-auto">
              <input
                id="image"
                value="Acheter un bien"
                type="image"
                alt="faire construire"
                src="img/form/question1/acheterunbien.png"
                width="100%"
                onClick={handleAchat}
              />
              <p className="my-auto py-2">Acheter un bien</p>
            </div>

            <div className="col-10 col-sm-5 col-lg-2 px-0 formCard mb-5 text-center mx-auto">
              <input
                id="image"
                value="Faire construire"
                type="image"
                alt="faire construire"
                src="img/form/question1/faireconstruire.png"
                width="100%"
                onClick={handleConstruire}
              />
              <p className="my-auto py-2">Faire construire</p>
            </div>
            <div className="col-10 col-sm-5 col-lg-2 px-0 formCard mb-5 text-center mx-auto">
              <input
                id="image"
                value="Faire des travaux"
                type="image"
                alt="Faire des travaux"
                src="img/form/question1/fairedestravaux.png"
                width="100%"
                onClick={handleTravaux}
              />

              <p className="my-auto py-2">Faire des travaux</p>
            </div>
            <div className="col-10 col-sm-5 col-lg-2 px-0 formCard mb-5 text-center mx-auto">
              <input
                id="image"
                value="Renégocier"
                type="image"
                alt="Renégocier"
                src="img/form/question1/renegocier.png"
                width="100%"
                onClick={handleRenegocier}
              />

              <p className="my-auto py-2">Renégocier</p>
            </div>
            <div className="col-10 col-sm-5 col-lg-2 px-0 formCard mb-5 text-center mx-auto">
              <input
                id="image"
                value="Autres projets"
                type="image"
                alt="Autres projets"
                src="img/form/question1/autresprojets.jpg"
                width="100%"
                onClick={handleAutreProjet}
              />
              <p className="my-auto py-2">Autres projets</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question1;
