import React, { useState } from 'react'
import './Accordion.css'
import data_for_accordion from './data'

const Accordion = () => {
  const[selected, setSelected] = useState(null);

  function handleSingleSelection(getCurrentId){
    // console.log(getCurrentId);
    setSelected(getCurrentId === selected ? null : getCurrentId);

  }
  return (
    <div className='accordion-wrapper'>
        <div className="accordion">
          {
            data_for_accordion && data_for_accordion.length > 0 ?
            data_for_accordion.map(dataItem=>
              <div className="item">
                <div onClick={()=>handleSingleSelection(dataItem.id)} className="title">
                  <h3 className="item-heading">{dataItem.question}</h3>
                  <span>+</span>
                </div>
                {
                  selected === dataItem.id ?
                  <div className="content">
                    <p className="content-text">{dataItem.answer}</p>
                  </div> 
                  :null
                }
              </div>
              ) 
            : <div className="nodata">
              <p className="no-data-text">no data found</p>
            </div>
          }
        </div>
    </div>
  )
}

export default Accordion