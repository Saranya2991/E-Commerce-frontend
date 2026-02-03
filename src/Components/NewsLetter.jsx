function NewsLetter() {
  return (
    <section className="text-center mb-20 px-4 sm:px-6 lg:px-32">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mt-16">
        Stay Fresh with Farm-to-Door Updates
      </h1>
      <p className="mt-3 text-base sm:text-lg md:text-xl text-justify sm:text-center lg:text-justify">
        Subscribe to our newsletter and get the latest offers, seasonal recipes, 
        and tips for healthy eating delivered straight to your inbox. Never miss 
        fresh arrivals or exclusive deals!
      </p>
      <div className="mt-6 flex flex-col sm:flex-row justify-center items-center gap-4">
        <input
          type="email"
          placeholder="Enter your email"
          className="p-3 rounded border border-gray-300 w-full sm:w-80 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <button className="bg-green-500 text-white px-6 py-3 rounded font-semibold hover:bg-green-600 transition">
          Subscribe
        </button>
      </div>
    </section>
  );
}

export default NewsLetter;
