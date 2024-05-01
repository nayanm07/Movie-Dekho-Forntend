import React from "react";
import Header from "./Header/header";


const Web = () => {
    return (
        <>
            
            <div style={{
            content: "",
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: -1,
           
            backgroundSize: "cover",
            backgroundColor: "black",
            mixBlendMode: "multiply",
            width: "100%",
            height: "100%",
            

            
        }}>
            <div className="content" classNameName=" m-0 p-0 w-full h-full flex flex-col overflow-y-auto"  >
                <Header/>
                
            </div>
            </div>
            
        </>
    );
}

export default Web;
