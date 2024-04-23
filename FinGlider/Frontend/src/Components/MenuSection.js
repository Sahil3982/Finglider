import React, {Suspense,lazy,useEffect,useRef, useState}from 'react';
import { RestaurantInfo } from './menu';
import { useSearch } from '../SearchContext';
import axios from 'axios';
import RecomItems from './RecomItems';

import useTranslation from "./customHooks/translations";

const MenuItem = lazy(() => import('./MenuItem'));


function MenuSection({ handleClick,cart}) {

    const restaurantInfo = RestaurantInfo;
    const {searchData, filter} = useSearch();
    let filteredItemsFound = 0;
    const [recommendedItem, setRecommendedItem] = useState([]);
    const [ MenuList,setMenuList] = useState([]);
    const [observer, setObserver] = useState(null);
    const elementRef = useRef(null);
    const translation = useTranslation();

   useEffect(() => {
       const options = {
           root: null,
           rootMargin: '0px',
           threshold: 0.1 
       };
       const handleIntersection = (entries) => {
           entries.forEach(entry => {
               if (entry.isIntersecting) {
                   loadMenuItem();
                   observer.unobserve(entry.target);
               }
           });
       };
       const observer = new IntersectionObserver(handleIntersection, options);
       if (elementRef.current) {
           observer.observe(elementRef.current);
       }
       setObserver(observer);
       return () => {
           if (observer) {
               observer.disconnect();
           }
       };
   }, []);
  const loadMenuItem = () => {
      import('./MenuItem').then(mod => {
        
      });
  }   
   useEffect(()=>{
          axios.get('http://localhost:3000/api/menu')
          .then((response)=>{
            console.log(response.data);
            const menus = response.data.menus || [];
            const allMenuLists = menus.flatMap(menu => menu.MenuList || []);
            setMenuList(allMenuLists);
            const recommendedItems = allMenuLists.flatMap(section => section.MenuItem.filter(item => item.isRecommendedItem === true));
            setRecommendedItem(recommendedItems);
            console.log('recc item',recommendedItems)
            console.log('recc',recommendedItem)
            
          })
          .catch((error)=>{
            console.log(error);
          })
        },[])

    return (
        <div className="container position-relative">
             {!searchData && filter === "0" && (
                <div className="container">
                    <p className="font-weight-bold pt-4 m-0">{translation.featuredItem}</p>
                    <RecomItems recommendedItemLists={recommendedItem} handleClick={handleClick} cart={cart}/>
                </div>
                
            )}
            
            {MenuList.map((section, index) => {
                
                const filteredSectionItems = section.MenuItem.filter(item => {
                    return ((filter === "0" ||
                            (filter === "1" && item.Type === "Veg") ||
                            (filter === "2" && item.Type === "Non Veg")) &&
                            ((!searchData) || item.Item.toLowerCase().includes(searchData.toLowerCase()))
                    );
                   
                });
              

                if (filteredSectionItems.length !== 0)
                {
                   filteredItemsFound = 1;
                  
                   
                      return (
                    <div key={index}>
                        <div className="w-100" id={`SectionName${section.SectionOrder}d`} style={{ paddingTop: '5px',zIndex:'999' }}
                            onClick={() => handleClick(section)}>
                        </div>
                        <h6 className="p-3 m-0 bg-light w-100 sticky-top ng-binding top-heightset" name="fixedMenuHeader" style={{ zIndex:'999' }}>
                            {section.SectionName} <small className="text-black-50">  {filteredSectionItems.length} ITEMS </small>
                        </h6>
                        <div className="most_sale">
                            <div className="row mb-3 mt-5">
                        <Suspense fallback={<div><p><i>Loading...</i></p> </div>}>

                                {filteredSectionItems.map((detail, detailIndex) => (
                                    
                                    <MenuItem
                                        key={detailIndex}
                                        MenuItem={detail}
                                        handleClick={handleClick}  
                                        cart={cart}
                                    />
                                   
                                ))}
                                </Suspense>
                            </div>
                        </div>
                        
                       
                    </div>
                    );
                }
                else
                {
                    return null;
                }
            })}
            {filteredItemsFound !== 1 && (
                <div>
                    <h6 className="p-3 m-0 bg-white text-danger w-100">{translation.filterditem}</h6>
                </div>
            )}
            <div className="dropdown dropup " style={{ position: 'fixed', bottom: '50px', right: '30px', zIndex: '1000' }}>
                <button id="menucategories" className="btn btn-dark dropstart btn-sm rounded-pill px-2 py-1 dropdown-toggle text-dark small font-weight-bold d-flex align-items-center"
                    type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <p className="h6 text-center mt-0 text-white">
                        <i className="feather-list"></i> Menu
                    </p>
                </button>
               <div className='container'>
            <ul className=" dropdown-menu  custom-dropdown-menu dropdown-menu.show dropdown-menu border pb-2 text-dark shadow " style={{position: 'absolute', zIndex: '1022' }}>
                
                    <li className="dropdown-header h5 fw-bold text-dark bg-secondary-subtle division">Menu List</li>
                    <hr className="dropdown-divider" />
                    {MenuList.map((section, index) => (
                        <li key={index}>
                        <a className="dropdown-item d-flex justify-content-between rounded-2" href={`#SectionName${section.SectionOrder}d`}>
                                 <span>{section.SectionName}</span>
                                 <span className='fw-bold' style={{ fontWeight: 'bold' }}>{section.MenuItem.length}</span>

                        </a>
                        
                        </li>
                    ))}
                </ul>
                </div>
                {/* <div className='arrow' style={{position:'absolute'}}></div> */}
            </div>            
        </div>
           
    );}
    
    export default MenuSection;
    
