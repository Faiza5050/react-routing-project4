export default function Home() {
  return (
    <div
      className="min-h-screen w-full flex flex-col justify-center items-center bg-cover bg-no-repeat px-4 py-12"
      style={{ backgroundImage: "url('/cloud.jpeg')" }}
    >
      <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white bg-black bg-opacity-60 mt-80 px-4 sm:px-6 md:px-10 py-6 sm:py-8 md:py-10 rounded text-center mb-6 sm:mb-8 md:mb-10">
        Welcome To My Website
      </h1>

      <div className="flex flex-col lg:flex-row justify-center items-center gap-4 sm:gap-10 md:gap-12">
        <button>
          <a
            href="/about"
            className="text-base sm:text-xl md:text-3xl font-bold px-4 sm:px-5 md:px-6 py-2 sm:py-3 md:py-4 rounded bg-black text-white hover:bg-yellow-400 hover:text-blue-900 transition"
          >
            GO TO ABOUT
          </a>
        </button>

        <button>
          <a
            href="/contact"
            className="text-base sm:text-xl md:text-3xl font-bold px-4 sm:px-5 md:px-6 py-2 sm:py-3 md:py-4 rounded bg-black text-white hover:bg-yellow-400 hover:text-blue-900 transition"
          >
            GO TO CONTACT
          </a>
        </button>
      </div>
    </div>
  );
}
