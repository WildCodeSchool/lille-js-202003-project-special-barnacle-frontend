import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledForm = styled.section`
  h1 {
    color: #2a96af;
  }

  p {
    color: #fff;
    font-weight: 700;
  }

  .form {
    background-color: #edf1f5;
  }

  .formCard {
    border-radius: 10px;
    -webkit-box-shadow: 0px 0px 70px -26px rgba(0, 0, 0, 0.54);
    -moz-box-shadow: 0px 0px 70px -26px rgba(0, 0, 0, 0.54);
    box-shadow: 0px 0px 70px -26px rgba(0, 0, 0, 0.54);
    transition: all 300ms;
    background-color: #173753;
  }

  .formCard:hover {
    transform: translate(0%, -1%);
  }

  input {
    border-radius: 10px 10px 0 0;
  }

  input:focus {
    border: 2px solid #173753;
    background-color: #173753;
  }
`;

function Question44({ handleChange, nextStep }) {
  return (
    <StyledForm>
      <form>
        <div className="form container-fluid pb-5">
          <div className="row-cols-12 p-5 text-center">
            <h1>Vous êtes :</h1>
          </div>
          <div className="row text-center">
            <div className="col-10 col-sm-5 col-lg-2 px-0 formCard mb-5 text-center mx-auto">
              <input
                id="image"
                value="Homme"
                type="image"
                alt="Un homme"
                src="img/form/question44/homme.png"
                width="100%"
                onClick={(e) => {
                  handleChange(e, 'question44');
                }}
              />
              <p className="my-auto py-2">Un homme</p>
            </div>

            <div className="col-10 col-sm-5 col-lg-2 px-0 formCard mb-5 text-center mx-auto">
              <input
                id="image"
                value="Femme"
                type="image"
                alt="Une femme"
                src="img/form/question44/femme.png"
                width="100%"
                onClick={(e) => {
                  handleChange(e, 'question44');
                }}
              />
              <p className="my-auto py-2">Une femme</p>
            </div>
            <div className="col-10 col-sm-5 col-lg-2 px-0 formCard mb-5 text-center mx-auto">
              <input
                id="image"
                value="Société"
                type="image"
                alt="Une société"
                src="img/form/question44/societe.png"
                width="100%"
                onClick={(e) => {
                  handleChange(e, 'question44');
                }}
              />

              <p className="my-auto py-2">Une société</p>
            </div>
          </div>
          <div>
            <button
              type="button"
              onClick={(e) => {
                nextStep(e);
              }}
            >
              NEXT
            </button>
          </div>
        </div>
      </form>
    </StyledForm>
  );
}

Question44.propTypes = {
  handleChange: PropTypes.string.isRequired,
  nextStep: PropTypes.number.isRequired,
};

export default Question44;
