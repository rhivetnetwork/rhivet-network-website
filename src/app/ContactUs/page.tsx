"use client";

import React from "react";
import { Formik, Field, Form, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";
import Layout from "@/components/Layout";
import CustomCursor from "@/components/CustomCursor/CustomCursor";
import Breadcrumb from "@/components/Breadcrumb";

// Define the shape of the form values
interface FormValues {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const ContactUs: React.FC = () => {
  // Initial values of the form
  const initialValues: FormValues = {
    name: "",
    email: "",
    phone: "",
    message: "",
  };

  // Yup validation schema
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    phone: Yup.string().required("Phone number is required"),
    message: Yup.string().required("Message is required"),
  });

  // Handle form submission with proper types
  const handleSubmit = async (
    values: FormValues,
    { setSubmitting, resetForm }: FormikHelpers<FormValues>
  ) => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        alert("Message sent successfully!");
        resetForm();
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      alert("An error occurred. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <CustomCursor />
      <Layout>
        <section className="bg-black pt-20">
          <div className="px-16 flex justify-end z-10 bg-black">
            <Breadcrumb />
          </div>
          <div className="mx-auto max-w-screen-xl h-[100vh] px-4 py-16 sm:px-6 lg:px-8 ">
            <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
              <div className="lg:col-span-2 lg:py-12 w-full">
                <p className="text-2xl text-white text-center lg:text-left">
                  {`Contact Us`}
                </p>
                <p className=" mt-5 text-lg text-white text-center lg:text-left">
                  {`Feel free to get in touch with us. We'll get back to you as soon as possible.`}
                </p>
                <div className="mt-8 hidden lg:flex flex-col justify-center">
                  <a
                    href="tel:+2348123456789"
                    className="text-2xl font-bold text-red-600"
                  >
                    {`+234 812 345 6789`}
                  </a>
                  <a
                    href="email:info@rhivetnetwork.com"
                    className="text-lg mt-2 text-white"
                  >
                    {`info@rhivetnet.com`}
                  </a>

                  <address className="mt-2 not-italic text-white">
                    Plot 23, Ndume Avenue, Ikoyi, Lagos
                  </address>
                </div>
              </div>

              <div className="rounded-lg bg-zinc-900 p-8 shadow-lg lg:col-span-3 lg:mt-7 lg:p-12">
                <Formik
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                  onSubmit={handleSubmit}
                >
                  {({ isSubmitting }) => (
                    <Form className="space-y-4">
                      <div>
                        <Field
                          className="w-full rounded-lg border-gray-200 p-3 text-sm bg-black text-white"
                          name="name"
                          type="text"
                          placeholder="Name"
                        />
                        <ErrorMessage
                          name="name"
                          component="div"
                          className="text-red-500 text-sm"
                        />
                      </div>

                      <div>
                        <Field
                          className="w-full rounded-lg border-gray-200 p-3 text-sm bg-black text-white"
                          name="email"
                          type="email"
                          placeholder="Email Address"
                        />
                        <ErrorMessage
                          name="email"
                          component="div"
                          className="text-red-500 text-sm"
                        />
                      </div>

                      <div>
                        <Field
                          className="w-full rounded-lg border-gray-200 p-3 text-sm bg-black text-white"
                          name="phone"
                          type="tel"
                          placeholder="Phone Number"
                        />
                        <ErrorMessage
                          name="phone"
                          component="div"
                          className="text-red-500 text-sm"
                        />
                      </div>

                      <div>
                        <Field
                          as="textarea"
                          className="w-full rounded-lg border-gray-200 p-3 text-sm bg-black text-white"
                          name="message"
                          rows={8}
                          placeholder="Your Message"
                        />
                        <ErrorMessage
                          name="message"
                          component="div"
                          className="text-red-500 text-sm"
                        />
                      </div>

                      <div className="mt-4">
                        <button
                          type="submit"
                          className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? "Sending..." : "Send Message"}
                        </button>
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default ContactUs;
