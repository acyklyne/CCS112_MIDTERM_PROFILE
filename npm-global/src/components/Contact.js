import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setError(''); // Clear error on change
    };

    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateEmail(formData.email)) {
            setError('Please enter a valid email address.');
            return;
        }
        setSubmitted(true);
    };

    if (submitted) {
        return <SubmissionSuccess data={formData} />;
    }

    return (
        <div className="container my-5">
            <h1 className="display-4">Contact Me</h1>
            {error && <div className="alert alert-danger">{error}</div>}
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        name="name"
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        name="email"
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea
                        className="form-control"
                        name="message"
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

const SubmissionSuccess = ({ data }) => {
    return (
        <div className="container my-5">
            <h1 className="display-4">Thank You, {data.name}!</h1>
            <p>Your message has been sent successfully.</p>
            <p><strong>Email:</strong> {data.email}</p>
            <p><strong>Message:</strong> {data.message}</p>
        </div>
    );
};

export default Contact;
