import React from 'react'
import './main.css'
import Header from '../header/header'

export default props =>
       <React.Fragment>
           <Header {...props}/>
           <main className="content container-fluid">
               <div className="mt-3 p-3">
                  {props.children}
               </div>
           </main>
       </React.Fragment>