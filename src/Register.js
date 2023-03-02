import logo from './img/cblogo.png';
import React, { useRef, useState} from 'react';
import { Helmet } from 'react-helmet';



function Register() {
		const formRef = useRef(null);
		const UsernameRef = useRef(null);
		const EmailRef = useRef(null);
		const PasswordRef = useRef(null);
		const Password2Ref = useRef(null);
		const PhoneRef = useRef(null);
		const CvrRef = useRef(null);
		const CompanynameRef = useRef(null);
	

		function handleSubmit(e) {
		e.preventDefault();
		checkInputs();

	}
	function checkInputs() {
		const usernameValue = UsernameRef.current.value.trim();
		const emailValue = EmailRef.current.value.trim();
		const passwordValue = PasswordRef.current.value.trim();
		const password2Value = Password2Ref.current.value.trim();
		const phonevalue = PhoneRef.current.value.trim();
		const cvrvalue = CvrRef.current.value.trim();
		const companynamevalue = CompanynameRef.current.value.trim();
	
		if (usernameValue === '') {
		  setErrorFor(UsernameRef.current, 'Username cannot be blank');
		} else {
		  setSuccessFor(UsernameRef.current);
		}

		if (phonevalue === '') {
			setErrorFor(PhoneRef.current, 'Username cannot be blank');
		  } else {
			setSuccessFor(PhoneRef.current);
		  }

		  
		if (cvrvalue === '') {
			setErrorFor(CvrRef.current, 'Username cannot be blank');
		  } else {
			setSuccessFor(CvrRef.current);
		  }

		  if (companynamevalue === '') {
			setErrorFor(CompanynameRef.current, 'Username cannot be blank');
		  } else {
			setSuccessFor(CompanynameRef.current);
		  }

	
		if (emailValue === '') {
		  setErrorFor(EmailRef.current, 'Email cannot be blank');
		} else if (!isEmail(emailValue)) {
		  setErrorFor(EmailRef.current, 'Not a valid email');
		} else {
		  setSuccessFor(EmailRef.current);
		}
	
		if (passwordValue === '') {
		  setErrorFor(PasswordRef.current, 'Password cannot be blank');
		} else {
		  setSuccessFor(PasswordRef.current);
		}
	
		if (password2Value === '') {
		  setErrorFor(Password2Ref.current, 'Cannot be blank');
		} else if (passwordValue !== password2Value) {
		  setErrorFor(Password2Ref.current, 'Passwords do not match');
		} else {
		  setSuccessFor(Password2Ref.current);
		}
	  }
	
	  function setErrorFor(input, message) {
		const formControl = input.parentElement;
		const small = formControl.querySelector('small');
		formControl.className = 'form-control error';
		small.innerText = message;
	  }
	
	  function setSuccessFor(input) {
		const formControl = input.parentElement;
		formControl.className = 'form-control success';
	  }
	
	  function isEmail(email) {
		return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
	  }

  return (
		<>
		<html lang='en'/>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<Helmet>
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		</Helmet>	
		
        <body>
          <div className="container">
            <div className="header">
              <img src={logo} alt="logo" className="logo" />
			
            </div>
            <form id="form" className="form" onSubmit={handleSubmit} ref={formRef}>
              <div className="form-control">
                <label htmlFor="Username">First and lastname</label>
                <input type="text" placeholder="" id="Username" ref={UsernameRef }/>
                <small>Error message</small>
              </div>

              <div className="form-control">
                <label htmlFor="Number">Website link</label>
                <input type="text" placeholder="" id="Number" ref={PhoneRef}/>
                <small>Error message</small>
              </div>

              <div className="form-control">
                <label htmlFor="email">Email</label>
                <input type="email" placeholder="" id="email" ref={EmailRef}/>
                <small>Error message</small>
              </div>

              <div className="form-control">
                <label htmlFor="cvr">Company Registration Number</label>
                <input type="text" placeholder="" id="cvr" ref={CvrRef}/>
                <small>Error message</small>
              </div>

              <div className="form-control">
                <label htmlFor="Vikname">Company Name</label>
                <input type="text" placeholder="" id="Vikname" ref={CompanynameRef} />
                <small>Error message</small>
              </div>
			  <hr style={{marginTop: '30px', marginBottom: '10px' , lineHeight: '0px', border: 'none', alignContent: 'center', width: '200px', borderBottom: 'dotted orange 7px' }}></hr>

              <div className="form-control">
                <label htmlFor="password">Password</label>
                <input type="password" placeholder="" id="password" ref={PasswordRef} />
                <small>Error message</small>
              </div>

              <div className="form-control">
                <label htmlFor="password2">Gentag Password</label>
                <input type="password" placeholder="" id="password2"ref={Password2Ref} />
                <small>Error message</small>
              </div>
			  <hr style={{marginTop: '30px', marginBottom: '10px' , lineHeight: '0px', border: 'none', alignContent: 'center', width: '200px', borderBottom: 'dotted orange 7px' }}></hr>

              <div className="form-control">
                <label htmlFor="løsning">Choice Solution</label>
                <input type="text" id="løsning" list="løsning1" required />
                <datalist id="løsning1">
                  <option value="Demo 0dkk" />
                  <option value="Demo 12dkk" />
                  <option value="Demo 240dkk" />
                </datalist>
				<label style={{fontSize: '15px', fontWeight: '500' , fontFamily: 'Arial, sans-serif', border: 'none', marginTop: '10px', display: 'block', margin: 'auto', width: '95%'}}>
					E-conomic acces code: <br></br>
					1.Open e-conomic and log in <br></br>
					2.Open this link: https://secure.e-conomic.com <br></br>
					3.Press connect with e-conomic <br></br>
					4.Copy the code and enter it here <br></br>
					<input className='code' style={{borderStyle: 'solid #f0f0f0 2px;'}}></input>

				</label>
			  <hr style={{marginTop: '30px', marginBottom: '10px' , lineHeight: '0px', border: 'none', alignContent: 'center', width: '200px', borderBottom: 'dotted orange 7px' }}></hr>
                <small>Error message</small>
              </div>

             
							<div class="checkbox-section">
				<div class="checkbox-item">
					<input type="checkbox" id="checkbox-1" name="checkbox-1 " required/>
					<label for="checkbox-1">I accept CostBits Non Disclosure Agreement</label>
				</div>
				<div class="checkbox-item">
					<input type="checkbox" id="checkbox-2" name="checkbox-2" required/>
					<label for="checkbox-2">I accept CostBits Data Processing Agreement</label> 
				</div>
				<div class="checkbox-item">
					<input type="checkbox" id="checkbox-3" name="checkbox-3" required />
					<label for="checkbox-3">I accept terms and condtions</label>
				</div>
				</div>

				<button id="btn" style={{marginBottom: "20px"}}>Submit</button>
		
		        </form>
	                </div>
				</body>
				
        </>
		

		
    )
  }
// Company registration number

export default Register


