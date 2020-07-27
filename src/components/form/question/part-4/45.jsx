import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

function Question45() {
  const [name, setName] = useState('');
  const dispatch = useDispatch();
  const handleNameChange = (e) => setName(e.target.value);
  dispatch({ type: 'ADDTEXT', text: name });
  return (
    <div className="form container-fluid pb-5">
      <h1 className="py-4 my-3 text-center">Identité</h1>
      <div className="col-8 col-lg-8 mx-auto">
        <div className="multipleForms row py-3">
          <p className="col-12 col-lg-4 my-lg-auto"> Nom :</p>
          <input
            className=" col-12 col-lg-8"
            type="text"
            placeholder="Nom"
            label="question45"
            onChange={handleNameChange}
            value={name}
          />
        </div>

        <div className="multipleForms row py-3">
          <p className="col-12 col-lg-4 my-lg-auto">Nom de jeune fille :</p>
          <input
            className="col-12 col-lg-8"
            type="text"
            placeholder="Nom de jeune fille"
            label="question45"
            onChange={handleNameChange}
            value={name}
          />
        </div>

        <div className="multipleForms row py-3">
          <p className="col-12 col-lg-4 my-lg-auto">Prénom</p>
          <input
            className="col-12 col-lg-8"
            type="text"
            placeholder="Prénom"
            label="question45"
            onChange={handleNameChange}
            value={name}
          />
        </div>

        <div className="multipleForms row py-3">
          <p className="col-12 col-lg-4 my-lg-auto">Date de naissance :</p>
          <input
            className="col-12 col-lg-8"
            type="date"
            placeholder="Date de naissance"
            label="question45"
            onChange={handleNameChange}
            value={name}
          />
        </div>

        <div className="multipleForms row py-3">
          <p className="col-12 col-lg-4 my-lg-auto">Nationalité</p>
          <input
            className="col-12 col-lg-8"
            type="text"
            placeholder="Nationalité"
            label="question45"
            onChange={handleNameChange}
            value={name}
          />
        </div>
      </div>
    </div>
  );
}

export default Question45;
