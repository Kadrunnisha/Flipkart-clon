import "./slider.css";
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { queries } from "@testing-library/react"
import { useRef } from "react"

const Slider=(props)=>{
   
   const ref=useRef(null);
  
   const funs=()=>{
    let box=ref.current;
       let width=box.clientWidth;
       console.log(width);
       box.scrollLeft=box.scrollLeft-width;
       
   }
   const fu=()=>{
    let box=ref.current;
    let width=box.clientWidth;
    box.scrollLeft=box.scrollLeft+width;
   
}
    return(
        <div className="slid-container">
            <button className="greaterthan" onClick={fu}><FontAwesomeIcon icon={faChevronUp} rotation={90}  className="gre"/></button>
            <div className="namef"><p> Todays Best Deals</p><button className="view">view all</button><button className="lessthen " onClick={funs} ><FontAwesomeIcon icon={faChevronUp} rotation={270}  className="gre"/></button></div>
          <div ref={ref} className="slid"  >
          <div className="fashion-slider">
            <a href="#">
            <div>
                <img src={props.image1}></img>
                <h3>{props.neme}</h3>
                <p> Min.50% off</p>
            </div>
            </a>
          
        </div>
        <div className="fashion-slider"  >
            <a href="#">
              <div>
                <img src={props.image2}></img>
                <h3>{props.name2}</h3>
                <p> Min.{props.dis2}% off</p>
               </div>
            </a>
            
        </div>
        <div className="fashion-slider" >
            <a href="#">
            <div>
                <img src={props.image3}></img>
                <h3>{props.name3}</h3>
                <p> Min.{props.dis3}% off</p>
            </div>
            </a>
           
        </div>
        <div className="fashion-slider" >
            <a href="#">
            <div>
                <img src={props.image4}></img>
                <h3>{props.name4}</h3>
                <p> Min.{props.dis4} off</p>
            </div>
            </a>
          
        </div>
        <div className="fashion-slider" >
            <a href="#">
            <div>
                <img src={props.image5}></img>
                <h3>{props.name5}</h3>
                <p> Min.{props.dis5} off</p>
            </div>
            </a>
           
        </div>
        <div className="fashion-slider" >
            <a href="#">
            <div>
                <img src={props.image6}></img>
                <h3>{props.name6}</h3>
                <p> Min.{props.dis6}% off</p>
            </div>
            </a>
          
        </div>
        <div className="fashion-slider" >
            <a href="#">
              <div>
                <img src={props.image7}></img>
                <h3>{props.name7}</h3>
                <p> Min.{props.dis7}% off</p>
              </div>
            </a>
           
        </div>
        <div className="fashion-slider" >
            <a href="#">
              <div>
                <img src={props.image8}></img>
                <h3>{props.name8}</h3>
                <p> Min.{props.dis8}% off</p>
              </div>
            </a>
           
        </div>
        <div className="fashion-slider" >
            <a href="#">
              <div>
                <img src={props.image9}></img>
                <h3>{props.name9}</h3>
                <p> Min.{props.dis9}% off</p>
              </div>
            </a>
           
        </div>
        <div className="fashion-slider" >
            <a href="#">
              <div>
                <img src={props.image10}></img>
                <h3>{props.name10}</h3>
                <p> Min.{props.dis10}% off</p>
              </div>
            </a>
           
        </div>
    </div>
        </div>
   
    )
 }
 export default Slider;