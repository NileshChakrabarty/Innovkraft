import Image from 'next/image';
import Navbar from './navbar';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-teal-50 to-green-50 text-gray-900">
      <Navbar />
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/abhyanjana.png"
          alt="Natural hair care products"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
            Abhyanjana
          </h1>
          <p className="mt-4 text-lg md:text-2xl font-light">
            Where nature meets a mother&#39;s care
          </p>
          <button className="mt-8 px-8 py-3 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition-shadow shadow-lg">
            Discover Our Products
          </button>
        </div>
      </section>

      <section className="py-16 px-6 md:px-12 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center text-teal-800">
          Our Story
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Abhyanjana is a tradition of care passed through generations. It
          originated from a grandmother who crafted her hair care rituals and
          later passed on these treasured recipes to her daughter, who
          wholeheartedly devoted herself to perfecting them when her son faced
          problems with self-care.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          This dedication eventually led to the creation of Abhyanjana, a
          testament to the profound care and compassion that only a mother&#39;s
          touch can bestow.
        </p>
      </section>

      {/* Our Mission Section */}
      <section className="py-16 px-6 md:px-12 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center text-teal-800">
            Our Mission
          </h2>
          <p className="text-center text-gray-700 leading-relaxed mb-8">
            At Abhyanjana, we craft remedies that nurture the heart, weaving a
            legacy of love and well-being for generations to embrace.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: '🌿',
                title: 'Natural Ingredients',
                description:
                  'Thoughtfully picked, organically sourced ingredients for your well-being.',
              },
              {
                icon: '❤️',
                title: 'Made with Love',
                description:
                  'Homemade products crafted with a mother&#39;s care and compassion.',
              },
              {
                icon: '✨',
                title: 'Quality Assured',
                description:
                  'We ensure the highest quality standards in all our products.',
              },
            ].map((mission, index) => (
              <div
                key={index}
                className="p-6 rounded-lg shadow-md bg-gradient-to-br from-green-50 to-teal-100 hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4 text-teal-600">{mission.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{mission.title}</h3>
                <p className="text-gray-600">{mission.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 md:px-12 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center text-teal-800">
          Our Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              src: '/image-1.jpg',
              title: 'Samasti Hair Oil ‐ Natural hair oil for hair growth (100ML)',
            },
            {
              src: '/image-2.jpg',
              title: 'Abhyanjana Haircare Kit – Best hair care kit for Hair Growth',
            },
            {
              src: '/image-3.jpg',
              title: 'Ukti – Natural Hair Scrub (100 g)',
            },
          ].map((product, index) => (
            <div
              key={index}
              className="rounded-lg shadow-md bg-white hover:shadow-lg transition-shadow"
            >
              <Image
                src={product.src}
                alt={product.title}
                width={400}
                height={300}
                className="rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
                <p className="text-gray-600 mb-4">Natural, nourishing, and made with love.</p>
                <button className="w-full px-4 py-2 text-teal-700 border border-teal-600 rounded-lg hover:bg-teal-50 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-6 md:px-12 bg-gradient-to-r from-teal-600 to-teal-700 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Experience the Abhyanjana Difference</h2>
        <p className="text-lg leading-relaxed mb-8">
          Discover our range of natural hair care products, crafted with love
          and tradition.
        </p>
        <button className="px-8 py-3 bg-white text-teal-700 font-semibold rounded-lg hover:bg-gray-100 transition-shadow shadow-md">
          Shop Now
        </button>
      </section>
    </div>
  );
}
