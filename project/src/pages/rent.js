function Rent () {
    return ( 
        <>
 
  <div id="survey-container">
    <h1 id="title">Rent A Vehical</h1>
    <p id="description"></p>
    <form id="survey-form">
      {/* name */}
      <label id="name-label" className="row-label" htmlFor="name">
        Name:
      </label>
      <input
        id="name"
        className="row-input"
        type="text"
        placeholder="Enter your name"
        required=""
      />
      {/* email */}
      <label id="email-label" className="row-label" htmlFor="email">
        Email:
      </label>
      <input
        id="email"
        className="row-input"
        type="email"
        placeholder="Enter your email"
        required=""
      />
      <label id="address-label" className="address-label" htmlFor="address">
        Email:
      </label>
      <input
        id="text"
        className="row-input"
        type="text"
        placeholder="Enter your address"
        required=""
      />
      {/* education dropdown */}
      <label className="row-label" htmlFor="dropdown">
       Type of Vehical:
      </label>
      <select id="dropdown" className="row-input" required="">
        <option disabled="" selected="">
          Select an option
        </option>
        <option value="primary"> Car</option>
        <option value="secondary">Bike</option>
        <option value="higher">Mini Bus</option>
        <option value="na">Bus</option>
      </select>
      {/* years of experience */}
      {/* <label id="number-label" className="row-label" htmlFor="number">
        Years of experience (optional):
      </label>
      <input
        id="number"
        className="row-input"
        type="number"
        placeholder="Enter number of years of experience"
        min={0}
        max={50}
      /> */}
      {/* programs checkbox */}
      <label>
      <h4 style={{FontFace:"Merriweather,serif"}}> From</h4>
        <input type="date" name="date" required="" />
      </label>
      <label>
      <h4 style={{FontFace:"Merriweather,serif"}}> To</h4>
        <input type="date" name="date" required="" />
      </label>
      {/* <p className="row-label">Choose job field:</p>
      <label className="row-input small" htmlFor="box-windows">
        <input
          type="checkbox"
          id="box-windows"
          name="checkbox"
          defaultValue="windows"
        />
        <span className="inline-label">Management</span>
      </label>
      <label className="row-input small" htmlFor="box-word">
        <input
          type="checkbox"
          id="box-word"
          name="checkbox"
          defaultValue="word"
        />
        <span className="inline-label">Social Media  </span>
      </label>
      <label className="row-input small" htmlFor="box-excel">
        <input
          type="checkbox"
          id="box-excel"
          name="checkbox"
          defaultValue="excel"
        />
        <span className="inline-label">Guide</span>
      </label>
      <label className="row-input small" htmlFor="box-powerpoint">
        <input
          type="checkbox"
          id="box-powerpoint"
          name="checkbox"
          defaultValue="powerpoint"
        />
        <span className="inline-label">Volunteering</span>
      </label>
      <label className="row-input small" htmlFor="box-outlook">
        <input
          type="checkbox"
          id="box-outlook"
          name="checkbox"
          defaultValue="outlook"
        />
        <span className="inline-label">Assistant manager</span>
      </label>
      {/* salary radio */}
      {/* <p className="row-label">Expected salary:</p>
      <label className="row-input small" htmlFor="below-3k">
        <input
          type="radio"
          id="below-3k"
          name="radio"
          defaultValue="below-3k"
        />
        <span className="inline-label">Below $3K</span>
      </label>
      <label className="row-input small" htmlFor="3k-4k">
        <input type="radio" id="3k-4k" name="radio" defaultValue="3k-4k" />
        <span className="inline-label">$3K - $4K</span>
      </label>
      <label className="row-input small" htmlFor="4k-5k">
        <input type="radio" id="4k-5k" name="radio" defaultValue="4k-5k" />
        <span className="inline-label">$4K - $5K</span>
      </label>
      <label className="row-input small" htmlFor="above-5k">
        <input
          type="radio"
          id="above-5k"
          name="radio"
          defaultValue="above-5k"
        />
        <span className="inline-label">Above $5K</span>
      </label>
      <label className="row-input small" htmlFor="dont-know">
        <input
          type="radio"
          id="dont-know"
          name="radio"
          defaultValue="dont know"
        />
        <span className="inline-label">Don't know</span>
      </label>

      <label id="cv-label" className="row-label" htmlFor="cv">
        Upload CV:
      </label>
      <input
        id="cv"
        className="row-input"
        type="file"
        placeholder="Add CV"
        required=""
      />
    
      <label className="row-label" htmlFor="comments">
        Additional informations:
      </label>
      <textarea
        id="comments"
        placeholder="Enter other informations here..."
        defaultValue={""}
      /> */}
      
      <button id="submit" type="submit">
        Submit
      </button>
    </form>
  </div>
</>

     );
}

export default Rent;