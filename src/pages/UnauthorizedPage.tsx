import React, { useEffect } from 'react';
import './styles/UnauthorizedPage.css';

const UnauthorizedPage: React.FC = () => {
  useEffect(() => {
    const contPrincipal = document.querySelector('.cont_principal');
    if (contPrincipal) {
      contPrincipal.classList.add('cont_error_active');
    }
  }, []);

  return (
    <div className="Unauthorized-Page">
      <div className="UnauthorizedPage-body">
        <section className="UnauthorizedPage-section">
          <div className="cont_principal">
            <div className="cont_error">
              <h1>Oops</h1>
              <p>The Page you're looking for isn't here.</p>
              <span className="buttonReturn">Return</span>
            </div>
            <div className="cont_aura_1"></div>
            <div className="cont_aura_2"></div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default UnauthorizedPage;
