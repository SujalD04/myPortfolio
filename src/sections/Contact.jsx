import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const formRef = useRef();
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);

        try {
            await emailjs.send(
                'service_4n1n44e', // Replace with your service ID
                'template_r6jgt29', // Replace with your template ID
                {
                    from_name: form.name,
                    to_name: 'Sujal',
                    from_email: form.email,
                    to_email: 'sujalrdixit@gmail.com',
                    message: form.message,
                },
                'iXFTj6XhKdRBUBkst' // Replace with your public key
            );

            setLoading(false);
            alert('Your message has been sent successfully!');
            setForm({ name: '', email: '', message: '' }); // Reset form
        } catch (error) {
            setLoading(false);
            console.error('EmailJS Error:', error.text || error);
            alert('Oops, something went wrong. Please try again.');
        }
    };

    return (
        <section className="c-space my-20" id="contact">
            <div className="relative min-h-screen flex items-center justify-center flex-col">
                <img src="/assets/form.jpg" alt="terminal background" className="absolute inset-0 min-h-screen xl:mt-[10px] 2xl-mt-[10px] rounded-lg filter blur-sm" />
                <div className="contact-container">
                    <h3 className="head-text mt-[-45px]">Connect with Me</h3>
                    <p className="text-lg text-white-600 mt-1">
                        Feel free to reach out to me as I'm always looking to work with projects
                        or improvise your existing platforms. I will be much more than happy to help!
                        Looking forward to connect with you.
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit} className="mt-2 flex flex-col space-y-7">
                        <label className="space-y-3">
                            <span className="field-label">Full Name</span>
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                required
                                className="field-input"
                                placeholder="Jane Doe"
                            />
                        </label>
                        <label className="space-y-3">
                            <span className="field-label">Email</span>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                required
                                className="field-input"
                                placeholder="janedoe@gmail.com"
                            />
                        </label>
                        <label className="space-y-3">
                            <span className="field-label">Message</span>
                            <textarea
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                required
                                className="field-input"
                                placeholder="Hello, I would like to..."
                            />
                        </label>
                        <button className="field-btn" type="submit" disabled={loading}>
                            {loading ? 'Sending...' : 'Send Message'}
                            <img src="/assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow" />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
