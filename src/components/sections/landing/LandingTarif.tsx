const LandingTarif = (): JSX.Element => {
  return ( 
    <section className="landing__tarif">
      <h2>Des tarifs adaptés à vos <span>besoins</span></h2> 
      <div className="tarif_content row row-cols-1 row-cols-md-3">
        <article className="col col-md-3">
          <div className="tarif_title">
            <div className="tarif_description">
              <h4>Essentiel</h4>
              <ul>
                <li>Accès à 5 Ange gardien par mois</li>
                <li>Disponibilité de 8h00 - 18h00</li>
                <li>Assistance 24/7</li>
              </ul>
            </div>
            <hr />
            <div className="tarif_price">
              <p><span>Ar 20K</span>/mois</p>
              <ul>
                <li>Sans engagement</li>
                <li>Satisfait ou remboursé</li>
                <li>Annulable à tout moment</li>
              </ul>
            </div>
          </div>
          <button>
            Acheter maintenant
          </button>
        </article>
      </div> 
    </section>
  );
};

export default LandingTarif;