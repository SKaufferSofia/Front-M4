import Image from "next/image";

const ContactComponent = () => {
  return (
    <section className="py-[100px]">
      <div className="container mx-auto px-4">
        <Image
          src="/background-contact.avif"
          alt="contact"
          className="img-background"
          width={2000}
          height={1000}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl font-semibold mb-4">Contact Us</h2>
            <p className="text-gray-400 mb-4">
              Have questions or need assistance? Reach out to us and we will get
              back to you as soon as possible.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2 text-gray-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 1a7 7 0 100 14 7 7 0 000-14zm0 5a1 1 0 011 1v5a1 1 0 01-2 0v-5a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>123 Outdoors St, Adventure City, ABC 12345</span>
              </li>
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2 text-gray-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 4a1 1 0 011-1h12a1 1 0 011 1v12a1 1 0 01-1 1h-5.586a1 1 0 00-.707.293L7.707 18H4a1 1 0 01-1-1V4zm2 2v10h10V6H5z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>info@outdoorsstore.com</span>
              </li>
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2 text-gray-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 1a7 7 0 100 14 7 7 0 000-14zm3.707 11.707a1 1 0 01-1.414 1.414l-1.586-1.586a1 1 0 010-1.414l1.586-1.586a1 1 0 011.414 1.414l-1.293 1.293 1.293 1.293z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>+1 234 567 890</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactComponent;
