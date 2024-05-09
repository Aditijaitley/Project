import Nav from "../nav";
import Adding from "./addimage";
import { useState,useEffect } from "react";
import axios from "axios";
function Image() {
  const[img, setimg]=useState([]);

  useEffect(()=>
  {
    axios.get("http://localhost:5050/getimg").then((response)=>
    {
      setimg(response.data)
    });
  },[]);
    return ( 
        <>
        <Nav/>
        <br/>
        <br/>
        <br/>
        <br/>
        <h1 style={{marginLeft:540}}>Image Gallery</h1>
        <div className="add">
        {/* <Adding/> */}

 
  <main className="gallery gallery__content--flow">
  {img.map((ty)=>
  <figure>

    <img
      src={ty.pic}
      alt="A light brown, long-haired chihuahua sitting next to three rubber duckies. "
      title="Photo by Giacomo Lucarini for Unsplash"
    />
    <figcaption className="header__caption" role="presentation">
      <h1 className="title title--primary">{ty.name}</h1>
      <h2 className="title title--secondary">{ty.date}</h2>
    </figcaption>
   
  </figure>
  )}
</main>
</div>
  {/* <div className="gallery">
    <div className="gallery__column">
      <a
        href="https://unsplash.com/@jeka_fe"
        target="_blank"
        className="gallery__link"
      >
        <figure className="gallery__thumb">
          <img
            src="https://source.unsplash.com/_cvwXhGqG-o/300x300"
            alt="Portrait by Jessica Felicio"
            className="gallery__image"
          />
          <figcaption className="gallery__caption">
            Portrait by Jessica Felicio
          </figcaption>
        </figure>
      </a>
      <a
        href="https://unsplash.com/@oladimeg"
        target="_blank"
        className="gallery__link"
      >
        <figure className="gallery__thumb">
          <img
            src="https://source.unsplash.com/AHBvAIVqk64/300x500"
            alt="Portrait by Oladimeji Odunsi"
            className="gallery__image"
          />
          <figcaption className="gallery__caption">
            Portrait by Oladimeji Odunsi
          </figcaption>
        </figure>
      </a>
      <a
        href="https://unsplash.com/@a2eorigins"
        target="_blank"
        className="gallery__link"
      >
        <figure className="gallery__thumb">
          <img
            src="https://source.unsplash.com/VLPLo-GtrIE/300x300"
            alt="Portrait by Alex Perez"
            className="gallery__image"
          />
          <figcaption className="gallery__caption">
            Portrait by Alex Perez
          </figcaption>
        </figure>
      </a>
    </div>
    <div className="gallery__column">
      <a
        href="https://unsplash.com/@noahbuscher"
        target="_blank"
        className="gallery__link"
      >
        <figure className="gallery__thumb">
          <img
            src="https://source.unsplash.com/AR7aumwKr2s/300x300"
            alt="Portrait by Noah Buscher"
            className="gallery__image"
          />
          <figcaption className="gallery__caption">
            Portrait by Noah Buscher
          </figcaption>
        </figure>
      </a>
      <a
        href="https://unsplash.com/@von_co"
        target="_blank"
        className="gallery__link"
      >
        <figure className="gallery__thumb">
          <img
            src="https://source.unsplash.com/dnL6ZIpht2s/300x300"
            alt="Portrait by Ivana Cajina"
            className="gallery__image"
          />
          <figcaption className="gallery__caption">
            Portrait by Ivana Cajina
          </figcaption>
        </figure>
      </a>
      <a
        href="https://unsplash.com/@samburriss"
        target="_blank"
        className="gallery__link"
      >
        <figure className="gallery__thumb">
          <img
            src="https://source.unsplash.com/tV_1sC603zA/300x500"
            alt="Portrait by Sam Burriss"
            className="gallery__image"
          />
          <figcaption className="gallery__caption">
            Portrait by Sam Burriss
          </figcaption>
        </figure>
      </a>
    </div>
    <div className="gallery__column">
      <a
        href="https://unsplash.com/@marilezhava"
        target="_blank"
        className="gallery__link"
      >
        <figure className="gallery__thumb">
          <img
            src="https://source.unsplash.com/Xm9-vA_bhm0/300x500"
            alt="Portrait by Mari Lezhava"
            className="gallery__image"
          />
          <figcaption className="gallery__caption">
            Portrait by Mari Lezhava
          </figcaption>
        </figure>
      </a>
      <a
        href="https://unsplash.com/@ethanhaddox"
        target="_blank"
        className="gallery__link"
      >
        <figure className="gallery__thumb">
          <img
            src="https://source.unsplash.com/NTjSR3zYpsY/300x300"
            alt="Portrait by Ethan Haddox"
            className="gallery__image"
          />
          <figcaption className="gallery__caption">
            Portrait by Ethan Haddox
          </figcaption>
        </figure>
      </a>
      <a
        href="https://unsplash.com/@mr_geshani"
        target="_blank"
        className="gallery__link"
      >
        <figure className="gallery__thumb">
          <img
            src="https://source.unsplash.com/2JH8d3ChNec/300x300"
            alt="Portrait by Amir Geshani"
            className="gallery__image"
          />
          <figcaption className="gallery__caption">
            Portrait by Amir Geshani
          </figcaption>
        </figure>
      </a>
    </div>
    <div className="gallery__column">
      <a
        href="https://unsplash.com/@frxgui"
        target="_blank"
        className="gallery__link"
      >
        <figure className="gallery__thumb">
          <img
            src="https://source.unsplash.com/FQhLLehm4dk/300x300"
            alt="Portrait by Guilian Fremaux"
            className="gallery__image"
          />
          <figcaption className="gallery__caption">
            Portrait by Guilian Fremaux
          </figcaption>
        </figure>
      </a>
      <a
        href="https://unsplash.com/@majestical_jasmin"
        target="_blank"
        className="gallery__link"
      >
        <figure className="gallery__thumb">
          <img
            src="https://source.unsplash.com/OQd9zONSx7s/300x300"
            alt="Portrait by Jasmin Chew"
            className="gallery__image"
          />
          <figcaption className="gallery__caption">
            Portrait by Jasmin Chew
          </figcaption>
        </figure>
      </a>
      <a
        href="https://unsplash.com/@dimadallacqua"
        target="_blank"
        className="gallery__link"
      >
        <figure className="gallery__thumb">
          <img
            src="https://source.unsplash.com/XZkEhowjx8k/300x500"
            alt="Portrait by Dima DallAcqua"
            className="gallery__image"
          />
          <figcaption className="gallery__caption">
            Portrait by Dima DallAcqua
          </figcaption>
        </figure>
      </a>
    </div>
  </div> */}
</>

     );
}

export default Image;