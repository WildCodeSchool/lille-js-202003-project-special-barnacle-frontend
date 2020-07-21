import React from 'react';
import '../styleForm.css';

function Question3() {
  return (
    <div className="questionImg">
      <form>
        <div className="form container-fluid pb-5">
          <div className="row-cols-12 p-5 text-center">
            <h1>Quel est l&apos;état du bien ?</h1>
          </div>
          <div className="row text-center">
            <div className="col-10 col-sm-5 col-lg-2 px-0 formCard mb-5 text-center mx-auto">
              <input
                id="image"
                value="Ancien"
                type="image"
                alt="Ancien"
                src="img/form/question3/Ancien.jpg"
                width="100%"
              />
              <p className="my-auto py-2">Ancien</p>
            </div>

            <div className="col-10 col-sm-5 col-lg-2 px-0 formCard mb-5 text-center mx-auto">
              <input
                id="image"
                value="Neuf"
                type="image"
                alt="Neuf"
                src="img/form/question3/Neuf.jpg"
                width="100%"
              />
              <p className="my-auto py-2">Neuf</p>
            </div>

            <div className="col-10 col-sm-5 col-lg-2 px-0 formCard mb-5 text-center mx-auto">
              <input
                id="image"
                value="En état futur d'achèvement"
                type="image"
                alt="En état futur d'achèvement"
                src="img/form/question3/VEFA.jpg"
                width="100%"
              />

              <p className="my-auto py-2">En état futur d&apos;achèvement</p>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Question3;
