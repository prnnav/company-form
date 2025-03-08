import React, { useState } from 'react';
import './Form.css';

const Form = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    contactNumber: '',
    servicesOffered: '',
    contactInfo: '',
    portfolio: '',
    workSummary: '',
    websiteOverview: '',
    testimonials: '',
    achievements: '',
    clients: '',
    teamInfo: '',
    images: '',
    additionalInfo: '',
    driveLink: '',
  });

 
  const [errors, setErrors] = useState({
    companyName: false,
    contactNumber: false,
    servicesOffered: false,
    contactInfo: false,
    portfolio: false,
    workSummary: false,
    websiteOverview: false,
    testimonials: false,
    achievements: false,
    clients: false,
    teamInfo: false,
    images: false,
    additionalInfo: false,
    driveLink: false,
  });

  
  const [currentStep, setCurrentStep] = useState(1);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: false,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({
        ...formData,
        images: file.name,
      });
      setErrors({
        ...errors,
        images: false,
      });
    }
  };

  const validateStep = () => {
    let newErrors = {};
    let hasErrors = false;


    const fieldsToValidate = {
      1: ['companyName', 'contactNumber', 'servicesOffered', 'contactInfo'],
      2: ['portfolio', 'workSummary', 'websiteOverview', 'testimonials'],
      3: ['achievements', 'clients', 'teamInfo', 'images'],
      4: ['additionalInfo', 'driveLink'],
    };

    fieldsToValidate[currentStep].forEach((field) => {
      if (!formData[field]) {
        newErrors[field] = true;
        hasErrors = true;
      }
    });

    if (hasErrors) {
      setErrors(newErrors); 
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateStep()) {
      console.log('Form submitted:', formData);
    }
  };

  const nextStep = () => {
    if (validateStep()) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
       <div className="Box1">
        <h1 className="headi"><b> 
          <span>GET A</span><br></br>
          <span>QUOTE</span>
          </b></h1>
          <h3 className="fill">Fill out the form and we will get back to you.</h3>
          <h4>Phone</h4>
          <p>+91 77109 48801</p>
          <h4>Email</h4>
          <p>ritesh@cleverstudio.in</p>
      </div>
      <div className="Box2">
      {currentStep === 1 && (
        <>    
      <h5 className="headtw">Let's <i><b>level up</b></i> your brand, together!</h5>
          {}
          <div className="form-group">
            <label className="form-label">
              Company Name {errors.companyName && <span style={{ color: 'red' }}>*</span>}
            </label>
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleInputChange}
              className={`form-input ${errors.companyName ? 'error' : ''}`}
            />
          </div>

          {}
          <div className="form-group">
            <label className="form-label">
              Contact Number {errors.contactNumber && <span style={{ color: 'red' }}>*</span>}
            </label>
            <input
              type="text"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleInputChange}
              className={`form-input ${errors.contactNumber ? 'error' : ''}`}
            />
          </div>

          {}
          <div className="form-group">
            <label className="form-label">
              Services Offered {errors.servicesOffered && <span style={{ color: 'red' }}>*</span>}
            </label>
            <input
              type="text"
              name="servicesOffered"
              value={formData.servicesOffered}
              onChange={handleInputChange}
              className={`form-input ${errors.servicesOffered ? 'error' : ''}`}
            />
          </div>

          {}
          <div className="form-group">
            <label className="form-label">
              Contact Info {errors.contactInfo && <span style={{ color: 'red' }}>*</span>}
            </label>
            <input
              type="text"
              name="contactInfo"
              value={formData.contactInfo}
              onChange={handleInputChange}
              className={`form-input ${errors.contactInfo ? 'error' : ''}`}
            />
          </div>

          <div className="button-groupsa">
            <button type="button" onClick={nextStep} className="form-buttonsa">
              Next
            </button>
          </div>
        </>
      )}

      {currentStep === 2 && (
        <>

          {}
          <div className="form-group">
            <label className="form-label">
              Portfolio {errors.portfolio && <span style={{ color: 'red' }}>*</span>}
            </label>
            <input
              type="text"
              name="portfolio"
              value={formData.portfolio}
              onChange={handleInputChange}
              className={`form-input ${errors.portfolio ? 'error' : ''}`}
            />
          </div>

          {}
          <div className="form-group">
            <label className="form-label">
              Work Summary {errors.workSummary && <span style={{ color: 'red' }}>*</span>}
            </label>
            <input
              type="text"
              name="workSummary"
              value={formData.workSummary}
              onChange={handleInputChange}
              className={`form-input ${errors.workSummary ? 'error' : ''}`}
            />
          </div>

          {}
          <div className="form-group">
            <label className="form-label">
              Website Overview {errors.websiteOverview && <span style={{ color: 'red' }}>*</span>}
            </label>
            <input
              type="text"
              name="websiteOverview"
              value={formData.websiteOverview}
              onChange={handleInputChange}
              className={`form-input ${errors.websiteOverview ? 'error' : ''}`}
            />
          </div>

          {}
          <div className="form-group">
            <label className="form-label">
              Testimonials {errors.testimonials && <span style={{ color: 'red' }}>*</span>}
            </label>
            <input
              type="text"
              name="testimonials"
              value={formData.testimonials}
              onChange={handleInputChange}
              className={`form-input ${errors.testimonials ? 'error' : ''}`}
            />
          </div>

          <div className="button-group">
            <button type="button" onClick={prevStep} className="form-button">
              Back
            </button>
            <button type="button" onClick={nextStep} className="form-buttons">
              Next
            </button>
          </div>
        </>
      )}

      {currentStep === 3 && (
        <>

          {}
          <div className="form-group">
            <label className="form-label">
              Achievements {errors.achievements && <span style={{ color: 'red' }}>*</span>}
            </label>
            <input
              type="text"
              name="achievements"
              value={formData.achievements}
              onChange={handleInputChange}
              className={`form-input ${errors.achievements ? 'error' : ''}`}
            />
          </div>

          {}
          <div className="form-group">
            <label className="form-label">
              Clients {errors.clients && <span style={{ color: 'red' }}>*</span>}
            </label>
            <input
              type="text"
              name="clients"
              value={formData.clients}
              onChange={handleInputChange}
              className={`form-input ${errors.clients ? 'error' : ''}`}
            />
          </div>

          {}
          <div className="form-group">
            <label className="form-label">
              Team Info {errors.teamInfo && <span style={{ color: 'red' }}>*</span>}
            </label>
            <input
              type="text"
              name="teamInfo"
              value={formData.teamInfo}
              onChange={handleInputChange}
              className={`form-input ${errors.teamInfo ? 'error' : ''}`}
            />
          </div>

          {}
          <div className="form-group">
            <label className="form-label">
              Images {errors.images && <span style={{ color: 'red' }}>*</span>}
            </label>
            <input
              type="file"
              name="images"
              onChange={handleImageChange}
              className={`form-input ${errors.images ? 'error' : ''}`}
            />
          </div>

          <div className="button-group">
            <button type="button" onClick={prevStep} className="form-button">
              Back
            </button>
            <button type="button" onClick={nextStep} className="form-buttons">
              Next
            </button>
          </div>
        </>
      )}

      {currentStep === 4 && (
        <>
          <h2>Step 4: Additional Information</h2>

          {}
          <div className="form-group">
            <label className="form-label">
              Additional Information {errors.additionalInfo && <span style={{ color: 'red' }}>*</span>}
            </label>
            <input
              type="text"
              name="additionalInfo"
              value={formData.additionalInfo}
              onChange={handleInputChange}
              className={`form-input ${errors.additionalInfo ? 'error' : ''}`}
            />
          </div>

          {}
          <div className="form-group">
            <label className="form-label">
              Drive Link {errors.driveLink && <span style={{ color: 'red' }}>*</span>}
            </label>
            <input
              type="text"
              name="driveLink"
              value={formData.driveLink}
              onChange={handleInputChange}
              className={`form-input ${errors.driveLink ? 'error' : ''}`}
            />
          </div>

          <div className="button-group">
            <button type="button" onClick={prevStep} className="form-button">
              Back
            </button>
            <button type="submit" className="form-button">
              Submit
            </button>
          </div>
        </>
      )}
      </div>
    </form>
  );
};

export default Form;
