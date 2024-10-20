function SubmissionSuccess({ formData }) {
    return (
      <div className="container">
        <h1>Thank You, {formData.name}!</h1>
        <p>Your message has been sent successfully.</p>
        <p>Email: {formData.email}</p>
        <p>Message: {formData.message}</p>
      </div>
    );
  }
  
  export default SubmissionSuccess;
  