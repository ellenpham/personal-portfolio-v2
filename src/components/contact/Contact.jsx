import { useState } from 'react';
import { FaRegAddressBook, FaRegEnvelope, FaRegUser, FaRegMap } from 'react-icons/fa';
import './contact.css';
import axios from 'axios';
import { toast } from 'react-toastify';

const Contact = () => {

    const notify = () => toast("Enquiry sent successfully!");

    const [form, setForm] = useState({
        name: '', 
        email: '', 
        subject: '', 
        message: '',
    });

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setForm({...form, [name]: value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
            'https://sheet.best/api/sheets/d00da353-89db-4cd2-bed3-b49e6200c7bf', form)
            console.log(response);
            // clearing form fields
            setForm({name:'', email: '', subject: '', message: ''});
            notify()
        } catch (error) {
            console.error(error);
            toast.error("Error submittin form. Please try again.")
        }
    };

    return (
        <section className="contact section" id="contact">
            <h2 className="section__title text-cs">Contact me</h2>
            <p className="section__subtitle">
                Let's <span>Connect</span>
            </p>

            <div className="contact__container container grid">
                <div className="contact__content">
                    <div className="contact__card">
                        <span className="contact__card-icon">
                            <FaRegMap />
                        </span>

                        <h3 className="contact__card-title">Location</h3>
                        <p className="contact__card-data">Melbourne, Australia</p>
                    </div>

                    <div className="contact__card">
                        <span className="contact__card-icon">
                            <FaRegUser />
                        </span>

                        <h3 className="contact__card-title">Open to Work</h3>
                        <p className="contact__card-data">Available Right Now</p>
                    </div>

                    <div className="contact__card">
                        <span className="contact__card-icon">
                            <FaRegEnvelope />
                        </span>

                        <h3 className="contact__card-title">Email</h3>
                        <p className="contact__card-data">ellenpham15101@gmail.com</p>
                    </div>

                    <div className="contact__card">
                        <span className="contact__card-icon">
                            <FaRegAddressBook />
                        </span>

                        <h3 className="contact__card-title">Mobile</h3>
                        <p className="contact__card-data">(+61)411-380-893</p>
                    </div>
                </div>

                <form className="contact__form" onSubmit={handleSubmit}>
                    <div className="contact__form-group grid">
                        <div className="contact__form-div">
                            <label className="contact__form-tag text-cs">
                                Your Full Name <b>*</b>
                            </label>
                            <input 
                                type='text' 
                                name = 'name'
                                onChange={handleChange}
                                value={form.name}
                                className='contact__form-input'
                            />
                        </div>

                        <div className="contact__form-div">
                            <label className="contact__form-tag text-cs">
                                Your Email Address <b>*</b>
                            </label>
                            <input 
                                type="email"
                                name = 'email'
                                onChange={handleChange}
                                value={form.email}
                                className="contact__form-input" 
                            />
                        </div>
                    </div>

                    <div className="contact__form-div">
                        <label className="contact__form-tag text-cs">
                            Your Subject <b>*</b>
                        </label>
                        <input 
                            type="text"
                            name = 'subject'
                            onChange={handleChange}
                            value={form.subject}
                            className="contact__form-input" 
                        />
                    </div>

                    <div className="contact__form-div contact__form-area" >
                        <label className="contact__form-tag text-cs">
                            Your Message <b>*</b>
                        </label>
                        <textarea
                            name = 'message'
                            onChange={handleChange}
                            value={form.message}
                            className="contact__form-input"
                        ></textarea>
                    </div>

                    <div className="contact__submit">
                        <p>* Accept the terms and conditions.</p>
                        <button type='submit' className='btn text-cs'>Send Message</button>
                    </div>
                </form>
            </div>

            <div className="section__bg-wrapper">
                <span className="bg__title">Contact Me</span>
            </div>
        </section>
    )
}

export default Contact;