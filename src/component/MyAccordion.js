import React, {useState} from 'react'


const MyAccordion = ({question,answer}) => {
    const [show,setShow] = useState(false)
    return (   
        <>
        <div className="main-heading">
            <p onClick={()=> setShow(!show)}> { show ? "➖" : "➕"  }</p>  
            { /* when we click + then show will gain its value in alternate way.*/ }
            <h3>{question}</h3>
        </div>
        {show &&  <p className="answers">{answer} </p>} {/* if show is true then show answers otherwise dont show.*/ }
        </>
    )
}

export default MyAccordion
