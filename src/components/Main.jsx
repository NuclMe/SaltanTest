import React, { useEffect, useState } from 'react';
import './Main.scss'
import img from './img/img.jpg'

function Main() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [products, setProducts] = useState([]);

  
  useEffect(() => {
    fetch("http://localhost:8080/products")
      .then(res => res.json())  
      .then(
        (result) => {
          setIsLoaded(true);
          setProducts(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  if (error) {
    return <div>Ошибка: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Загрузка...</div>;
  } else {
    return (

      
      <div className=''>
          <div className='search-field'>
                <form action="#">
                    <input type="text" />
                </form>
            </div>
            <section>            
              <div className='container'>
                    <div className='cards-wrapper'>                                                         
                            {products.map(item => (
                            <div className='card'>     
                            <img src={img} alt=""/>
                                <div className='card-info' key={item.id}>
                                    <span className='title'> {item.title} </span>
                                    <span className='price'> {item.price}</span>                   
                                    <span className='description'> {item.description}</span>   
                                      <div className='card-info'>
                                        qqqq
                                      </div>  
                                </div>   
                              </div>
                              ))}                                                                            
                    </div>
              </div>
           </section>
        
      </div>
    );
  }
}

export default Main;