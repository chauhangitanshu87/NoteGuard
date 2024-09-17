import React ,{ useState, useEffect } from 'react'

export const Alert = (props) => {
    
        const [showAlert, setShowAlert] = useState(true);
      
          useEffect(() => {
          const timer = setTimeout(() => {
            setShowAlert(false);
          }, 1500); 
      
          return () => clearTimeout(timer);
        }, []);

    return (
        <div>
            <div className="alert alert-primary" role="alert">
            {showAlert &&  ( <div> {props.message} </div> )}
            </div>
        </div>
    )
}
