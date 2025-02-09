"use client";
import { useSendMessageMutation } from "@/redux/apis/Message/messageManagement";
import "./Contact.css";
import contactLottie from "@/assets/lottie/contact.json";
import { sonarId } from "@/utils/sonarId";
import Lottie from "lottie-react";
import React, { FormEvent } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [addMessage] = useSendMessageMutation();
  const sendEmail = async (event: FormEvent<HTMLFormElement>) => {
    console.log("Form submitted!");
    event.preventDefault();

    const Form = event.target as HTMLFormElement;
    const name = Form.user_name.value;
    const email = Form.user_email.value;
    const message = Form.message.value;
    console.log(message);
    if (!name) {
      toast.error("Please Provide your name", { id: sonarId });
      return;
    }
    if (!email) {
      toast.error("Please Provide your gmail", { id: sonarId });
      return;
    }

    if (!(email.includes("@gmail.com") || email.includes("@yahoo.com"))) {
      toast.error("Please provide a valid email (Gmail or Yahoo)", {
        id: sonarId,
      });
      return;
    }
    if (!message) {
      toast.error("Please Write Your message", { id: sonarId });
      return;
    }
    const messageData = { name, email, message };
    toast.loading("Sending Messgae", { id: sonarId });
    const res = await addMessage(messageData).unwrap();
    if (res?.success) {
      toast.success("Email sent successfully", { id: sonarId });
      Form.reset();
    }
  };

  return (
    <div>
      <div>
        <section className="mb-20">
          <div className="flex flex-col md:flex-row bg-[#192655] p-4 md:p-10 rounded-lg">
            <div className="w-full  md:w-1/2 relative">
              <h1 className="text-white md:text-4xl font-bold md:absolute top-0 left-0">
                Contact with Me
              </h1>
              <div className="h-full w-full flex flex-col  items-center justify-center">
                <Lottie animationData={contactLottie} loop={true} />
              </div>
            </div>

            <div className="w-full md:w-1/2">
              <div className="bg-[#333333] p-4 md:p-10 rounded-lg contactForm">
                <form onSubmit={sendEmail}>
                  <input
                    type="text"
                    name="user_name"
                    id=""
                    className="w-full bg-transparent p-5 myBorder shadow-md hover:shadow-xl pText "
                    placeholder="Name"
                  />

                  <input
                    type="text"
                    name="user_email"
                    id=""
                    className="w-full bg-transparent p-5 myBorder mt-10 shadow-md hover:shadow-xl pText"
                    placeholder="Email"
                  />
                  {/* <label>Message</label>
          <textarea name="message" /> */}
                  <textarea
                    name="message"
                    id=""
                    className="w-full bg-transparent  p-5 h-60 textBorder mt-10 pText"
                    placeholder="Message"
                  />
                  <input
                    type="submit"
                    value="Send"
                    className="btn text-white w-full md:w-[250px] mt-10 bg-[#192655] hover:bg-[#192655] border-0 shadow-md hover:shadow-xl"
                  />
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
