import React, {useState} from 'react';

export default function About() {


    const [myStyle, setStyle] = useState({
        color : "black",
        backgroundColor:'white'
    })

    const [btnText, setBtnText] = useState("Dark Mode")

    const togleColors = () =>{
        if(myStyle.color == "white"){
            setStyle({
                color : "black",
                backgroundColor:'white'
            })
            setBtnText("Dark Mode");
        }else{
            setStyle({
                color : "white",
                backgroundColor:'black'
            })
            setBtnText("Light Mode");
        }
    }
    

  return (
    <>
        <div className='container my-3' style={myStyle}>
            <h1>About Us</h1>
            <div className="accordion accordion-flush" id="accordionFlushExample">
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header" id="flush-headingOne">
                    <button style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                        Accordion Item #1
                    </button>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
                    </div>
                </div>
            </div>
        </div>
        <div className='container my-3'>
            <button onClick={togleColors} className='btn btn-primary my-3'> {btnText} </button>
        </div>
    </>
  );
}
