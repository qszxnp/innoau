export default function Contact() {
  return (
    <div className="bg-gray-50 py-12 sm:py-16" id="contact">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Contact Us</h2>
          <p className="mt-3 text-base leading-7 text-gray-600">
            Get in touch with us to discuss your container home needs.
          </p>
        </div>
        <div className="mx-auto mt-8 max-w-md">
          <div className="flex flex-col items-center">
            <dl className="space-y-3 text-base leading-7 text-gray-600">
              <div className="flex gap-x-3 items-center">
                <dt className="flex-none">
                  <span className="sr-only">Email</span>
                  <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </dt>
                <dd><a className="hover:text-blue-600" href="mailto:contact@innoau.com">contact@innoau.com</a></dd>
              </div>
              <div className="flex gap-x-3 items-center">
                <dt className="flex-none">
                  <span className="sr-only">Phone</span>
                  <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </dt>
                <dd><a className="hover:text-blue-600" href="tel:+61-2-1234-5678">+61 2 1234 5678</a></dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
} 