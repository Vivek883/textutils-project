import React from 'react'

export default function About(props) {

    
    //   const [myStyle, setmyStyle] = useState({
    //      color: 'black',
    //      backgroundColor: 'white'
    // })

    let myStyle = {
        color: props.mode === 'dark'?'white':'#042743',
        backgroundColor: props.mode === 'dark'?'rgb( 36,74,104)':'white'
    }

    
    
    

  return (
    <>      
      <div className ="container" style = {{color: props.mode === 'dark'?'white':'#042743'}}> 
      <h1 className = "my-3 mx-3" >About Us</h1> 
          <div className ="accordion mb-3" id="accordionExample" aria-expanded="true" >
              <div className ="accordion-item" type="button" >
                  <h2 className ="accordion-header" id="headingOne" >
                      <button className ="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style = {myStyle}>
                          <strong>Founder & Team</strong>
                      </button>
                  </h2>
                  <div id="collapseOne" className ="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                      <div className ="accordion-body" style = {myStyle}>
                          <strong>T Surya Vivek is the Founder.</strong> All the components added are performed by Vivek himself.</div>
                      </div>
              </div>
              <div className ="accordion-item">
                  <h2 className ="accordion-header" id="headingTwo">
                      <button className ="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style = {myStyle}>
                          <strong>Education</strong>
                      </button>
                  </h2>
                  <div id="collapseTwo" className ="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                      <div className ="accordion-body" style = {myStyle}>
                          <strong>I'm currently pursuing 3rd year B.Tech</strong> from JNTU GV.
                      </div>
                  </div>
              </div>
              <div className ="accordion-item">
                  <h2 className ="accordion-header" id="headingThree">
                      <button className ="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style = {myStyle}>
                          <strong>Hobbies</strong>
                      </button>
                  </h2>
                  <div id="collapseThree" className ="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                      <div className ="accordion-body" style = {myStyle}>
                          <strong>Learning new Technologies</strong> Running, playing outdoor games and getting updated on World Geopolitics.
                      </div>
                  </div>      
              </div>
          </div>   
      </div>
      </>
      
  )
}
