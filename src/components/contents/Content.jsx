import React from 'react'
import "./content.css";
import walk from "../../images/walk.avif";
const sign=">";
const content = ({logo,title,title1,locate,price,exp}) => {
  return (
    <div>
      <div className="box1">
            <div className="web">
            <img className="webimg" src= {logo} alt="image1" />
              <pre><h4>{title}</h4>
              <p id="pid">{title1}</p>
                </pre>
              <button className='btn'>{sign}</button>
            </div>
            <div className="flex">
                <i className="fa-solid fa-location-dot"></i>
                <p>{locate}</p>
            </div>
            <div className="flex2">
                <i className="fa-regular fa-money-bill-1"></i>
                <p>{price}</p>
            </div>
            <div className="main2">
                <div className="div1">
                <img src="https://cdn.apna.co/mumbai_apnatime_prod/job_ui_tags/Work%20from%20office_xxhdpi.webp" alt="image2"/>
                <p>Work from Office</p>
                </div>
                <div className="div1">
                    <img src="https://cdn.apna.co/mumbai_apnatime_prod/job_ui_tags/Full%20time_xxhdpi.webp" alt="image3" />
                    <p>Full Time</p>
                </div>
                <div className="div1">
                    <img src="https://cdn.apna.co/mumbai_apnatime_prod/job_ui_tags/Experience_xxhdpi.webp" alt="image4" />
                    <p>{exp}</p>
                </div>
                <div className="div1">
                    <img src="https://cdn.apna.co/mumbai_apnatime_prod/job_ui_tags/Advanced%20English_xxhdpi.webp" alt="image5"/>
                    <p>Basic English</p>
                </div>
            </div>
            <div class="walk">
                    <img src={walk} alt="image6" />
                    <p>
                        Walk-in interview</p>
            </div>     
      </div>
    </div>
  )
}

export default content