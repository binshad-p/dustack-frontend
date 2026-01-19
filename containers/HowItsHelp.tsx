import Image from 'next/image';

const features = [
  {
    title: 'Operational Visibility',
    image: '/operational_visibility.png',
    description: 'Gain real-time insights into your operations for better decision making.'
  },
  {
    title: 'Reduce Waste',
    image: '/reduce_waste.png',
    description: 'Identify inefficiencies and minimize waste across your processes.'
  },
  {
    title: 'Improve Cost',
    image: '/improve_cost.png',
    description: 'Optimize resources and reduce operational costs effectively.'
  }
];

export default function HowItsHelp() {
  return (
    <section className="py-16 bg-white padding-x">
      <div className=" ">
        <h2 className="text-5xl font-bold text-center mb-10">How It Helps?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="flex flex-col items-center text-center p-10 rounded-lg shadow hover:shadow-lg transition">
              <div className="w-64 h-64 mb-4 relative">
                <Image src={feature.image} alt={feature.title} fill style={{objectFit:'contain'}} />
              </div>
              <h3 className="text-2xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
