import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    await fetch(import.meta.env.VITE_SECRET_URL, {
      method: "POST",
      body: JSON.stringify({ name, email, message }),
    });

    setLoading(false);
    setSuccess(true);
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <>
      <Navbar />
      <div className="dark:bg-[#030712] opacity-100 w-full min-h-screen p-5 pt-15 dark:text-white font-[inter]">
        <div className="w-full mx-auto">
          <div className="w-full md:w-[90%] lg:w-[70%] xl:w-[50%] mx-auto pt-20">
            <h1 className="text-5xl text-balance font-[calistoga] pb-6">
              contact me.
            </h1>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-2 text-sm"
            >
              <div className="flex gap-3">
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-[#7a7a7a52] dark:border-[#1f2937] rounded-md"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <input
                  type="email"
                  className="w-full px-3 py-2 border border-[#7a7a7a52] dark:border-[#1f2937] rounded-md"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <textarea
                className="w-full p-3 border border-[#7a7a7a52] dark:border-[#1f2937] rounded-md h-32 resize-none mb-6"
                placeholder="Leave feedback about the site, career opportunities or just to say hello."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />

              <button
                type="submit"
                className="w-full text-white dark:text-black bg-[#1f2937] dark:bg-white py-2 rounded-md hover:bg-[#1f2937e6] dark:hover:bg-[#ffffff92] transition ease-in-out duration-200"
              >
                {loading ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message <i className="ri-send-plane-2-line ml-2"></i>
                  </>
                )}
              </button>

              {success && (
                <p className="text-green-600 text-center">
                  ✔ Your message has been sent!
                </p>
              )}
            </form>
          </div>
        </div>
        <div className="w-full pt-10">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default ContactForm;