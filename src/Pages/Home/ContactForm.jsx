import { div } from "framer-motion/client";
import React from "react";
import { useForm } from "react-hook-form";
import img from '../../assets/images/contact/contact1.png'

const ContactForm = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log("Submitted data:", data);
    reset();
  };

  return (
      <div className="secondary_bg_color">
          <h1 className="text-xl sm:text-2xl md:text-4xl font-semibold py-10 text-center capitalize text-[#FF014F]">have anything in mind ? </h1>

           <div className="  text-white min-h-screen p-6 flex flex-col md:flex-row gap-10">
      {/* Left Profile Section */}
      <div className="contact_info w-full md:w-[40%]  p-6 rounded-xl shadow-lg"
        data-aos="fade-right"
        >
        <img
          src={img} // Replace with your image
          alt="Contact"
          className="w-full h-60 object-cover rounded-lg"
        />
        <h2 className="text-2xl font-bold mt-4">Md Shorif Uddin</h2>
        <p className="text-sm text-gray-400 mt-1">Junior Frontend Web Developer</p>
        <p className="mt-4 text-gray-300">
          I’m available for freelance work. Connect with me via and call in to
          my account.
        </p>
        <p className="mt-4 text-gray-300">Phone: +88 01972144240</p>
        <p className="mt-1 text-gray-300">Email: mdshorifuddin463@gmail.com</p>
      </div>

      {/* Right Contact Form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="contact_form w-full md:w-[60%]  p-6 rounded-xl shadow-lg space-y-4"
        data-aos="fade-left" data-aos-delay="200"  

      >
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full">
            <label className="text-sm uppercase text-gray-400">Your Name</label>
            <input
              type="text"
              {...register("name", { required: "Name is required" })}
              className="mt-1 w-full px-4 py-4 bg-[#191B1E] shadow-lg rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF014F]"
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
            )}
          </div>
          <div className="w-full">
            <label className="text-sm uppercase text-gray-400">Phone Number</label>
            <input
              type="text"
              {...register("phone")}
              className="mt-1 w-full px-4 py-4 bg-[#191B1E] shadow-lg rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF014F]"
            />
          </div>
        </div>

        <div>
          <label className="text-sm uppercase text-gray-400">Email</label>
          <input
            type="email"
            {...register("email", { required: "Email is required" })}
            className="mt-1 w-full px-4 py-4 bg-[#191B1E] shadow-lg rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF014F]"
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label className="text-sm uppercase text-gray-400">Your Message</label>
          <textarea
            {...register("message")}
            rows={5}
            className="mt-1 w-full px-4 py-4 bg-[#191B1E] shadow-lg rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF014F]"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full py-2 mt-4 bg-[#FF014F] hover:bg-red-600 uppercase text-black font-semibold rounded-lg transition duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
      </div>
  );
};

export default ContactForm;
