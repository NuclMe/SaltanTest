import React from 'react';
import logo from '../logo.svg';
import products from '../db.json'

function Main(){
    const template = Object.keys(products.books).map(item => <span key={products.books[item].id}>{products.books[item].author} - {products.books[item].name}</span>)
    console.log(template)
    return(
        <main>
            <div className='search-field'>
                <form action="#">
                    <input type="text"/>
                </form>
            </div>
            <div className='cards-wrapper'>
                <div className='card'>
                   <a href='#'>
                       <img src={logo}/>
                    </a>
                    <div className='card-info'>
                        <div className='title'>{}</div>
                        <div className='price'>45$ </div>
                    </div>

                 
                </div>
            </div>
        </main>
           
    );
}
export default Main;