export default function About() {
  return (
    <div
      className="min-h-screen items-center justify-center bg-cover bg-center flex flex-col"
      style={{ backgroundImage: "url('/macbook.png')" }}
    >
      <h1 className="text-6xl mt-36 font-bold text-white bg-black bg-opacity-60 p-6 rounded mb-10">
        About Us
      </h1>

      <p className="text-white text-2xl bg-black bg-opacity-60 p-6 rounded max-w-3xl text-center">
        We are a passionate team building modern web experiences. This site
        showcases our work, skills, and vision. Thank you for visiting!
      </p>

      <div className="mt-10 px-4 sm:px-6 md:px-8">
        <a
          href="/"
          className="text-lg text-2xl sm:text-3xl font-bold px-6 py-3 rounded bg-black text-white hover:text-blue-900 transition block max-w-fit"
        >
          ⬅ Back to Home
        </a>
      </div>
    </div>
  );
}
