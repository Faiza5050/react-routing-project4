export default function Contact() {
  return (
    <div
      className="min-h-screen items-center justify-center bg-cover bg-center flex flex-col"
      style={{ backgroundImage: "url('/contact.jpg')" }}
    >
      <p className="text-white text-2xl bg-black bg-opacity-60 p-4 mt-72 rounded max-w-3xl text-center">
        We'd love to hear from you! Reach out for collaborations, questions, or
        just to say hello.
      </p>

      <div className="mt-6 px-4 sm:px-6 md:px-8">
        <a
          href="/"
          className="text-lg text-2xl sm:text-3xl font-bold px-6 py-5 rounded bg-black text-white hover:text-blue-900 transition block max-w-fit"
        >
          ⬅ Back to Home
        </a>
      </div>
    </div>
  );
}
