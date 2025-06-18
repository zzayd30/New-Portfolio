"use client";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../app/styles";
import { EarthCanvas } from "./canvas";
import StarsCanvas from "./canvas/Stars";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { toast } from "react-toastify";

const Contact = () => {
    const formRef = useRef();
    const [form, setForm] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { target } = e;
        const { name, value } = target;

        setForm({
            ...form,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!form.name || !form.email || !form.subject || !form.message) {
            toast.error("Please fill in all fields.");
            return;
        }
        setLoading(true);

        emailjs
            .send(
                'service_mji72wi',
                'template_itpqrmd',
                {
                    from_name: form.name,
                    to_name: "Muhammad Zaid",
                    from_email: form.email,
                    to_email: "zaidlatif30@gmail.com",
                    subject: form.subject,
                    message: form.message,
                },
                'udq9XLuX-kA06VzUz'
            )
            .then(() => {
                setLoading(false);
                toast.success("Thank you. I will get back to you as soon as possible.");
                setForm({
                    name: "",
                    email: "",
                    subject: "",
                    message: "",
                });
            })
            .catch((error) => {
                setLoading(false);
                console.error(error);
                toast.error("Something went wrong. Please try again.");
            });
    };

    return (
        <div id="Contact" className='relative z-0'>
            <StarsCanvas />
            <div className='flex xl:flex-row flex-col-reverse gap-10 overflow-hidden relative z-10'>
                <motion.div
                    variants={slideIn("left", "tween", 0.2, 1)}
                    className='flex-[0.75] bg-black-100 p-4 rounded-2xl'
                >
                    <p className={styles.sectionSubText}>Get in touch</p>
                    <h3 className={styles.sectionHeadText}>Contact.</h3>

                    <form
                        ref={formRef}
                        onSubmit={handleSubmit}
                        className='mt-12 border border-gray-400 rounded-lg p-5 flex flex-col gap-8'
                    >
                        <label className='flex flex-col'>
                            <span className='text-white font-medium mb-4'>Your Name</span>
                            <input
                                type='text'
                                name='name'
                                value={form.name}
                                onChange={handleChange}
                                placeholder="Enter Your Name..."
                                className='bg-tertiary border-gray-400 py-4 px-6 placeholder:text-secondary border text-white rounded-lg font-medium'
                            />
                        </label>
                        <label className='flex flex-col'>
                            <span className='text-white font-medium mb-4'>Your email</span>
                            <input
                                type='email'
                                name='email'
                                value={form.email}
                                onChange={handleChange}
                                placeholder="Enter Your Email..."
                                className='bg-tertiary border-gray-400 py-4 px-6 placeholder:text-secondary border text-white rounded-lg font-medium'
                            />
                        </label>
                        <label className='flex flex-col'>
                            <span className='text-white font-medium mb-4'>Email Subject</span>
                            <input
                                type='text'
                                name='subject'
                                value={form.subject}
                                onChange={handleChange}
                                placeholder="Enter Subject..."
                                className='bg-tertiary border-gray-400 py-4 px-6 placeholder:text-secondary border text-white rounded-lg font-medium'
                            />
                        </label>
                        <label className='flex flex-col'>
                            <span className='text-white font-medium mb-4'>Your Message</span>
                            <textarea
                                rows={7}
                                name='message'
                                value={form.message}
                                onChange={handleChange}
                                placeholder='Enter Your Message...'
                                className='bg-tertiary border-gray-400 py-4 px-6 placeholder:text-secondary border text-white rounded-lg font-medium'
                            />
                        </label>

                        <button
                            type='submit'
                            className='bg-tertiary border hover:scale-110 hover:font-bolder py-3 px-8 rounded-xl w-fit text-white font-bold  border-gray-400'
                        >
                            {loading ? "Sending..." : "Send"}
                        </button>
                    </form>
                </motion.div>

                <motion.div
                    variants={slideIn("right", "tween", 0.2, 1)}
                    className='xl:flex-1 xl:h-auto md:h-[500px] h-[350px]'
                >
                    <EarthCanvas />
                </motion.div>
            </div>
        </div>
    );
};

export default SectionWrapper(Contact, "contact");