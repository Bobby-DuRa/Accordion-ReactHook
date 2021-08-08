import React,{useState} from 'react'
import './Accordion.css'
import {questions} from './Api'
import MyAccordion from './MyAccordion'

 const Accordion = () => {
     const [data,setData] = useState(questions)
    return (
        <>
        <section className="main-div">
            <h1> 😜 Interesting Questions </h1>
        {
            data.map((curElem)=>{
                const {id} = curElem;
                return <MyAccordion key={id} {...curElem}/>
            })
        }
        </section>
            
        </>
    )
}

export default Accordion
