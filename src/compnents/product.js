import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faChevronDown,faChevronUp,faHeart,faStar,faIndianRupeeSign} from '@fortawesome/free-solid-svg-icons'
import "./product.css";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import phone1 from ".././image/phone1.webp";
import flipkart from ".././image/./fashion/flipkart.png";
const Product=(props)=>{
    const [o1,seto1]=useState(false);
    const [o2,seto2]=useState(false);
    const [o3,seto3]=useState(false);
    const [o4,seto4]=useState(false);
    const [o5,seto5]=useState(false);
    const [o6,seto6]=useState(false);
    const electenter=()=>{
        seto1(!o1);
    }
    const electleave=()=>{
        seto1(!o1);
    }
    const enter2=()=>{
        seto2(!o2);
    }
    const leave2=()=>{
        seto2(!o2);
    }
    const enter3=()=>{
        seto3(!o3);
    }
    const leave3=()=>{
        seto3(!o3);
    }
    const enter4=()=>{
        seto4(!o4);
    }
    const leave4=()=>{
        seto4(!o4);
    }
    const enter5=()=>{
        seto5(!o5);
    }
    const leave5=()=>{
        seto5(!o5);
    }
    const enter6=()=>{
        seto6(!o6);
    }
    const leave6=()=>{
        seto6(!o6);
    }
    return(
        <>
        <div className="container">
            
                <div className="menu">
                  <li onMouseEnter={electenter} onMouseLeave={electleave}>
                   <a className="menu-iteam" href="#"><p>Elecronics</p>  {
                        o1==true?<FontAwesomeIcon icon={faChevronUp} className='sign'/>:<FontAwesomeIcon icon={faChevronDown} className='sign' />}</a>
                        {
                            o1==true? <div className="elect" >
                            <li><Link to="/laptop"><p>Laptop</p></Link></li>
                            <li><Link to="/laptop"><p>Mobile</p></Link></li>
                            <li><Link to="/laptop"><p>HeadPhones</p></Link></li>
                            <li><Link to="/laptop"><p>Vedio Games</p></Link></li>
                            <li><Link to="/laptop"><p>Camras & Accessories</p></Link></li>
                            <li><Link to="/laptop"><p>KeyBord & Mouse</p></Link></li>
                         
                         
                         </div>:<></>
                         
                         }
                     </li>
                     <li onMouseEnter={enter2} onMouseLeave={leave2}> <a className="menu-iteam"><p>TV&Appliances</p>{
                         o2==true?<FontAwesomeIcon icon={faChevronUp} className='sign'/>:<FontAwesomeIcon icon={faChevronDown} className='sign' />}</a>
                         {
                             o2==true? <div className="elect" >
                                 <li><Link to="/laptop"><p>Laptop</p></Link></li>
                             <li><Link to="/laptop"><p>Mobile</p></Link></li>
                             <li><Link to="/laptop"><p>HeadPhones</p></Link></li>
                             <li><Link to="/laptop"><p>Vedio Games</p></Link></li>
                             <li><Link to="/laptop"><p>Camras & Accessories</p></Link></li>
                             <li><Link to="/laptop"><p>KeyBord & Mouse</p></Link></li>
                           
                          
                          
                          </div>:<></>
                          
                          }
                     
                     </li> 
                  <li onMouseEnter={enter3} onMouseLeave={leave3}> <a className="menu-iteam"><p>Women</p>{
                  o3==true?<FontAwesomeIcon icon={faChevronUp} className='sign'/>:<FontAwesomeIcon icon={faChevronDown} className='sign' />}</a>
                         {
                             o3==true? <div className="elect" >
                            
                            <li><Link to="/laptop"><p>Dresses</p></Link></li>
                             <li><Link to="/laptop"><p>Top&T-shirt</p></Link></li>
                             <li><Link to="/laptop"><p>Jeans</p></Link></li>
                             <li><Link to="/laptop"><p>Indian Wear</p></Link></li>
                             <li><Link to="/laptop"><p>Womens-Footware</p></Link></li>
                             <li><Link to="/laptop"><p>Lingerie</p></Link></li>
                          
                          </div>:<></>
                          
                          }

                  </li>
                  <li onMouseEnter={enter4} onMouseLeave={leave4}> <a className="menu-iteam"><p>Men</p>{
                        o4==true?<FontAwesomeIcon icon={faChevronUp} className='sign'/>:<FontAwesomeIcon icon={faChevronDown} className='sign' />}</a>
                        {
                            o4==true? <div className="elect" >
                            <li><Link to="/laptop"><p>Mens-Tshirt</p></Link></li>
                            <li><Link to="/laptop"><p>Mens-Shirt</p></Link></li>
                            <li><Link to="/laptop"><p>Jeans</p></Link></li>
                            <li><Link to="/laptop"><p>Tousers</p></Link></li>
                            <li><Link to="/laptop"><p>Men's Ethnic Wear</p></Link></li>
                            <li><Link to="/laptop"><p>Men's Footware</p></Link></li>
                         
                         
                         </div>:<></>
                         
                         }
                  </li>
                  <li onMouseEnter={enter5} onMouseLeave={leave5}> <a className="menu-iteam"><p>Baby&Kids</p>{
                  o5==true?<FontAwesomeIcon icon={faChevronUp} className='sign'/>:<FontAwesomeIcon icon={faChevronDown} className='sign' />}</a>
                         {
                             o5==true? <div className="elect" >
                             <li><Link to="/laptop"><p>Girls Wear</p></Link></li>
                             <li><Link to="/laptop"><p>Boys Wear</p></Link></li>
                             <li><Link to="/laptop"><p> kid Footware</p></Link></li>
                             <li><Link to="/laptop"><p>Bady Products</p></Link></li>
                             <li><Link to="/laptop"><p>Toys</p></Link></li>
                             {/* <li><Link to="/laptop"><p>KeyBord & Mouse</p></Link></li> */}
                          
                          
                          </div>:<></>
                          
                          }
                  </li>
                  <li onMouseEnter={enter6} onMouseLeave={leave6}> <a className="menu-iteam"><p>Home&Furnitur</p>{
                  o6==true?<FontAwesomeIcon icon={faChevronUp} className='sign'/>:<FontAwesomeIcon icon={faChevronDown} className='sign' />}</a>
                         {
                             o6==true? <div className="elect" >
                             <li><Link to="/laptop"><p>Table</p></Link></li>
                             <li><Link to="/laptop"><p>Chair</p></Link></li>
                             <li><Link to="/laptop"><p>Bed</p></Link></li>
                             <li><Link to="/laptop"><p>BedSheet</p></Link></li>
                             <li><Link to="/laptop"><p>Blanket</p></Link></li>
                             <li><Link to="/laptop"><p>Household Product</p></Link></li>
                          
                          
                          </div>:<></>
                          
                          }
                  </li>
                  <li> <a className="menu-iteam"><p>Sports,books&More</p></a></li>
                  <li> <a className="menu-iteam"><p>Flights</p></a></li>
                  <li> <a className="menu-iteam"><p>offer Zone</p></a></li>
                </div>
        </div>
        <div className='container2'>
        <div className="filter">
                    <div className='filter-heading'><p>Filters</p></div>
                    <div className='filter-category'><p>CATEGORIES</p>
                       <p className='p-mobile'>{props.title}</p>
                    </div>
                    <div className='filter-price'><p>Price</p>
                    <p><select name="hall" id="hall" value="Min">
                        {/* <option>Min</option> */}
                       <option>15000</option>
                       <option>30000</option>
                       <option>40000</option>
                        <option>50000</option>
                       </select>to
                       
                       <select name="hall" id="hall" value="Max">
                       <option>Max</option>
                       <option>15000</option>
                       <option>30000</option>
                       <option>40000</option>
                        <option>50000</option>
                        <option>60000</option>
                       </select>
                    </p>
                    </div>
                    <div className='filter-brand'>
                        <li  className= 'brandname' onClick={enter6} style={{cursor:'pointer'}}>Brand</li>
                        <li className='brand'>{props.brand1}</li>
                        <li className='brand'>{props.brand2}</li>
                        <li className='brand'>{props.brand3}</li>
                        <li className='brand'>{props.brand4}</li>
                        <li className='brand'>{props.brand5}</li>
                    </div>
                    <div className='filter-image'>
                        <img src={flipkart}></img>
                    </div>
                    <div className='filter-rating'>
                        <div>CUSTOMER RATINGS</div>
                        <div className='fl-rat'><p>4<FontAwesomeIcon  className=" star-rat" icon={faStar} />& above</p>
                        <p>3<FontAwesomeIcon  className=" star-rat" icon={faStar} />& above</p>
                        </div>
                    </div>
                </div>
                <div className="products">
                  <div className='product-heading'>Mobile</div>
                    <div className='product-container'>
                          <div className='product-image'><img src={props.imagem1}></img><FontAwesomeIcon icon={faHeart}  className='heart' /></div>
                          <div className='product-details'>
                            <div className='product-details-heading'>{props.title1}</div>
                            <div className='product-details-rat'><div><p className='rating'>{props.rating1} <FontAwesomeIcon  className=" star-rat" icon={faStar} /></p><p className='ra'>1,58,789 Ratings & 9,119 Reviews</p></div></div>
                            <div className='product-details-des'>
                                <ul>
                                <li> {props.li11}</li>
                                <li>{props.li12}</li>
                                <li>{props.li13}</li>
                                <li>{props.li14}</li>
                                <li>{props.li15}</li>
                                </ul>
                            </div>
                          </div>
                          <div className='product-price'><p className='main-price'> <FontAwesomeIcon icon={faIndianRupeeSign} />{props.price1}  <img src={flipkart}></img></p>
                          <div> <p className='cut'><FontAwesomeIcon icon={faIndianRupeeSign} className='ru' /> {props.pricecut1} </p><p className='dis'>{props.dis1}%off</p></div>
                          
                          </div>
                    </div>
                    <div className='product-container'>
                          <div className='product-image'><img src={props.imagem2}></img><FontAwesomeIcon icon={faHeart}  className='heart' /></div>
                          <div className='product-details'>
                            <div className='product-details-heading'>{props.title2}</div>
                            <div className='product-details-rat'><div><p className='rating'>{props.rating2} <FontAwesomeIcon  className=" star-rat" icon={faStar} /></p><p className='ra'>1,58,789 Ratings & 9,119 Reviews</p></div></div>
                            <div className='product-details-des'>
                                <ul>
                                <li>{props.li21} </li>
                                <li>{props.li22}</li>
                                <li>{props.li23}</li>
                                <li>{props.li24}</li>
                                <li>{props.li25}</li>
                                </ul>
                            </div>
                          </div>
                          <div className='product-price'><p className='main-price'> <FontAwesomeIcon icon={faIndianRupeeSign} />{props.price2}   <img src={flipkart}></img></p>
                          <div> <p className='cut'><FontAwesomeIcon icon={faIndianRupeeSign} className='ru' /> {props.pricecut2} </p><p className='dis'>{props.dis2}%off</p></div>
                          
                          </div>
                    </div>
                    <div className='product-container'>
                          <div className='product-image'><img src={props.imagem3}></img><FontAwesomeIcon icon={faHeart}  className='heart' /></div>
                          <div className='product-details'>
                            <div className='product-details-heading'>{props.title3}</div>
                            <div className='product-details-rat'><div><p className='rating'>{props.rating3} <FontAwesomeIcon  className=" star-rat" icon={faStar} /></p><p className='ra'>1,58,789 Ratings & 9,119 Reviews</p></div></div>
                            <div className='product-details-des'>
                                <ul>
                                <li>{props.li31}</li>
                                <li>{props.li32}</li>
                                <li>{props.li33}</li>
                                <li>{props.li34}</li>
                                <li>{props.li35}</li>
                                </ul>
                            </div>
                          </div>
                          <div className='product-price'><p className='main-price'> <FontAwesomeIcon icon={faIndianRupeeSign} />{props.price3}  <img src={flipkart}></img></p>
                          <div> <p className='cut'><FontAwesomeIcon icon={faIndianRupeeSign} className='ru' /> {props.pricecut3} </p><p className='dis'>{props.dis3
                          
                          }%off</p></div>
                          
                          </div>
                    </div>
                    <div className='product-container'>
                          <div className='product-image'><img src={props.imagem4}></img><FontAwesomeIcon icon={faHeart}  className='heart' /></div>
                          <div className='product-details'>
                            <div className='product-details-heading'>{props.title4}</div>
                            <div className='product-details-rat'><div><p className='rating'>{props.dis4} <FontAwesomeIcon  className=" star-rat" icon={faStar} /></p><p className='ra'>1,58,789 Ratings & 9,119 Reviews</p></div></div>
                            <div className='product-details-des'>
                                <ul>
                                <li> {props.li41}</li>
                                <li>{props.li42}</li>
                                <li> {props.li43}</li>
                                <li>{props.li44}</li>
                                <li>{props.li45}</li>
                                </ul>
                            </div>
                          </div>
                          <div className='product-price'><p className='main-price'> <FontAwesomeIcon icon={faIndianRupeeSign} />{props.price4}  <img src={flipkart}></img></p>
                          <div> <p className='cut'><FontAwesomeIcon icon={faIndianRupeeSign} className='ru' /> {props.pricecut4} </p><p className='dis'>{props.dis4}%off</p></div>
                          
                          </div>
                    </div>
                    <div className='product-container'>
                          <div className='product-image'><img src={props.imagem5}></img><FontAwesomeIcon icon={faHeart}  className='heart' /></div>
                          <div className='product-details'>
                            <div className='product-details-heading'>{props.title5}</div>
                            <div className='product-details-rat'><div><p className='rating'>{props.rating5}<FontAwesomeIcon  className=" star-rat" icon={faStar} /></p><p className='ra'>1,58,789 Ratings & 9,119 Reviews</p></div></div>
                            <div className='product-details-des'>
                                <ul>
                                <li> {props.li51}</li>
                                <li>{props.li52}</li>
                                <li>{props.li53}</li>
                                <li>{props.li54}</li>
                                <li>{props.li55}</li>
                                </ul>
                            </div>
                          </div>
                          <div className='product-price'><p className='main-price'> <FontAwesomeIcon icon={faIndianRupeeSign} />{props.price5}  <img src={flipkart}></img></p>
                          <div> <p className='cut'><FontAwesomeIcon icon={faIndianRupeeSign} className='ru' /> {props.pricecut5}  </p><p className='dis'>{props.dis5}%off</p></div>
                          
                          </div>
                    </div>
                    <div className='product-container'>
                          <div className='product-image'><img src={props.imagem6}></img><FontAwesomeIcon icon={faHeart}  className='heart' /></div>
                          <div className='product-details'>
                            <div className='product-details-heading'>{props.title6}</div>
                            <div className='product-details-rat'><div><p className='rating'>{props.rating6} <FontAwesomeIcon  className=" star-rat" icon={faStar} /></p><p className='ra'>1,58,789 Ratings & 9,119 Reviews</p></div></div>
                            <div className='product-details-des'>
                                <ul>
                                <li> {props.li61}</li>
                                <li>{props.li62}</li>
                                <li>{props.li63}</li>
                                <li>{props.li64}</li>
                                <li>{props.li65}</li>
                                </ul>
                            </div>
                          </div>
                          <div className='product-price'><p className='main-price'> <FontAwesomeIcon icon={faIndianRupeeSign} />{props.price6}  <img src={flipkart}></img></p>
                          <div> <p className='cut'><FontAwesomeIcon icon={faIndianRupeeSign} className='ru' /> {props.pricecut6} </p><p className='dis'>{props.dis6}%off</p></div>
                          
                          </div>
                    </div>
                </div>
           

        </div>
        </>
    )
}
export default Product;