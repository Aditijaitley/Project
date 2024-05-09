import { Link } from "react-router-dom";

function Copy() {
    return (  
        <>
        <br/>
     
        <div className="copy">
        <div className="themes-explore-main">
  <div className="themes-explore-slider">
    <ul>
      <li>
        <div className="explore-theme-icone">
          <div className="explore-area">
            <figure>
              <img
                src="https://www.tourmyindia.com/imgnew/wildlife-tour.svg"
                alt="images"
              />
            </figure>
            <Link to="/wild">            <h3>
              <a href="wildlife_sancturies/">WILDLIFE</a>
            </h3></Link>
          </div>
        </div>
      </li>
      <li>

        <div className="explore-theme-icone">
          <div className="explore-area">
            <figure>
            <Link to="/heritage"> 
              <img
                src="https://www.tourmyindia.com/imgnew/heritage-tour.svg"
                alt="images"
              /></Link>
            </figure>
            <h3>
              <Link to="/heritage">HERITAGE</Link>
            </h3>
          </div>
        </div>
      </li>
      <li>
        <div className="explore-theme-icone">
          <div className="explore-area">
            <figure>
            <Link to="/pilgrimage"> 
              <img
                src="https://www.tourmyindia.com/imgnew/pilgrimage-tour-01.svg"
                alt="images"
              /></Link>
            </figure>
            <h3>
              <a href="/pilgrimage">PILGRIMAGE</a>
            </h3>
          </div>
        </div>
      </li>
      <li>
        <div className="explore-theme-icone">
          <div className="explore-area">
            <figure>
            <Link to="/hill">
              <img
                src="https://www.tourmyindia.com/imgnew/hill-station-tour.svg"
                alt="images"
              />
              </Link>
            </figure>
            <h3>
              <a href="hill_stations/">HILL STATION</a>
            </h3>
          </div>
        </div>
      </li>
      <li>
        <div className="explore-theme-icone">
          <div className="explore-area">
            <figure>
            <Link to="/adven">
              <img
                src="https://www.tourmyindia.com/imgnew/adventure-tour.svg"
                alt="images"
              /></Link>
            </figure>
            <h3>
              <a href="adventure_tours/">ADVENTURE</a>
            </h3>
          </div>
        </div>
      </li>
      <li>
        <div className="explore-theme-icone">
          <div className="explore-area">
            <figure>
            <Link to="/beach">
              <img
                src="https://www.tourmyindia.com/imgnew/beach-tour.svg"
                alt="images"
              /></Link>
            </figure>
            <h3>
              <a href="beaches/">BEACH</a>
            </h3>
          </div>
        </div>
      </li>
    </ul>
  </div>
</div>

            </div></>
    );
}

export default Copy;