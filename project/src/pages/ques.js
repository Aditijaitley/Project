function Ques() {
    return ( 

<>
  {/* <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    
    <meta name="viewport" content="width=device-width, initial-scale=1.0"> 
    
    <title>Pure CSS Responsive Accordion Example</title>

    <meta name="author" content="ARC">
    
    
    <link rel="stylesheet" href="css-accordion.css">
    
    
    <link rel="stylesheet" href="Font-A-5.15.4/css/all.css">
	
</head>

<body> */}
<div className="q">
<div className="container">
  <div
    style={{
      margin: "0 auto",
      textAlign: "center",
      width: 250,
      fontFamily: "Arial",
      fontWeight: "bold",
      color: "#4169E1",
      marginTop: 15,
      marginBottom: 15
    }}
  >
    <h1 style={{marginLeft:-300 , marginRight:-300}}>Frequently Asked Questions</h1>
    {/* <marquee>
      RESPONSIVE CSS ONLY FAQ ACCORDION! &nbsp; ON CODEPEN, THE CLOSE (X) BELOW
      THE ANSWERS SOMETIMES CAUSES AN ERROR. &nbsp; HOWEVER, I TESTED THIS ON MY
      SERVER USING VARIOUS PHONE BROWSERS, AND COMPUTER BROWSERS WITH SUCCESS!
    </marquee> */}
  </div>
  {/* START ACCORDION */}
  <div className="accordion-tabs">
    <div className="accordion-tab">
      <input type="radio" id="q-a-01" name="q-a" />
      <label className="tab-label" htmlFor="q-a-01">
      What is the best time to travel to India?
      </label>
      <div className="tab-content">
      The diverse topography of India comprises mountains, beaches, and deserts. The large size of the country also blesses it with different climatic conditions, which means that, while some places in India may have the mercury rising in the summers, there are some, where the weather is cool and pleasant. Therefore, the best time to travel to India depends on the places a tourist would like to visit in the country. However, it is also safe to say that the winter season (October - March) is mostly preferred by the tourists while visiting India.

For wildlife sightings, both summer (March-mid June) and winter seasons are favourable. While the winter season is best for sighting animals basking in the sun during the day time, summer is the time when they can be seen frequently paying a visit to the water holes
        <br />
        <a href="">
        <input type="radio" id="q-a-shut" name="q-a" />
      <label htmlFor="q-a-shut" className="tab-shut">
        <span style={{marginRight:500}}>(X)</span>
      </label>
        </a>
      </div>
    </div>
    <div className="accordion-tab">
      <input type="radio" id="q-a-02" name="q-a" />
      <label className="tab-label" htmlFor="q-a-02">
      What kind of clothes do I need to carry while traveling in India ?
      </label>
      <div className="tab-content">
      Since India experiences hot summers (in most of the parts) and chilly winters, travellers should pack according to the month they are planning a visit in. If the trip is planned in the months between March and September, carrying light woolens (in the hills) and cotton clothes (in other areas) will be enough. On the other hand, if the trip is scheduled between October and February, carrying heavy woollens for North India and light woollens for South India is advisable.
        <br />
        <a href="">
        <input type="radio" id="q-a-shut" name="q-a" />
      <label htmlFor="q-a-shut" className="tab-shut">
        <span style={{marginRight:500}}>(X)</span>
      </label>
        </a>
      </div>
    </div>
    <div className="accordion-tab">
      <input type="radio" id="q-a-03" name="q-a" />
      <label className="tab-label" htmlFor="q-a-03">
      Is India a safe place to travel with kids?
      </label>
      <div className="tab-content">
      Yes, it is safe to travel to India with kids. While you can travel with kids almost anywhere in the country, there are some places that make for better family travel destinations, with their good hotels, plenty of activities for kids, clean air and safer environs.
        <br />
        <a href="">
        <input type="radio" id="q-a-shut" name="q-a" />
      <label htmlFor="q-a-shut" className="tab-shut">
        <span style={{marginRight:500}}>(X)</span>
      </label>
        </a>
      </div>
    </div>
    <div className="accordion-tab">
      <input type="radio" id="q-a-04" name="q-a" />
      <label className="tab-label" htmlFor="q-a-04">
      Is payment through credit card accepted in India widely?
      </label>
      <div className="tab-content">
      Yes, in all major cities and towns in India, credit card payments are accepted in hotels, restaurants, and shops. Visa and Master Cards are widely accepted around the country, while some places also accept American Express, besides other types of cards.
        <br />
        <a href="">
        <input type="radio" id="q-a-shut" name="q-a" />
      <label htmlFor="q-a-shut" className="tab-shut">
        <span style={{marginRight:500}}>(X)</span>
      </label>
        </a>
      </div>
    </div>
    <div className="accordion-tab">
      <input type="radio" id="q-a-05" name="q-a" />
      <label className="tab-label" htmlFor="q-a-05">
      What currency should I carry while traveling in India?
      </label>
      <div className="tab-content">
      India's currency is Indian Rupees; it is advisable to exchange your currency at the airport or any foreign currency exchange before travelling to India.
        <br />
        <a href="">
        <input type="radio" id="q-a-shut" name="q-a" />
      <label htmlFor="q-a-shut" className="tab-shut">
        <span style={{marginRight:500}}>(X)</span>
      </label>
        </a>
      </div>
    </div>
    <div className="accordion-tab">
      <input type="radio" id="q-a-06" name="q-a" />
      <label className="tab-label" htmlFor="q-a-06">
      I don't know English, how to deal with it while traveling to India?
      </label>
      <div className="tab-content">
      While English is spoken and understood by a large number of people in India, it isn’t an absolute necessity. Instead, focus on learning some Hindi words that come in use in daily lives. You can also book a tour with Tour My India that offers tour guides who are proficient in different languages and can be mediators between you and other people you encounter in the country.
        <br />
        <a href="">
          {/* <i className="fas fa-times-circle" /> */}
          <input type="radio" id="q-a-shut" name="q-a" />
      <label htmlFor="q-a-shut" className="tab-shut">
        <span style={{marginRight:500}}>(X)</span>
      </label>
        </a>
      </div>
    </div>
    <div className="accordion-tab">
      {/* <input type="radio" id="q-a-shut" name="q-a" />
      <label htmlFor="q-a-shut" className="tab-shut">
        <span>(X)</span>
      </label> */}
    </div>
  </div>
  </div>
  </div>
  {/* END ACCORDION */}
  {/* </body>
</html> */}
</>


     );
}

export default Ques;