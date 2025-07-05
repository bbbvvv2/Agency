export default function ProfilePage({ talent }) {
  return (
    <div className="max-w-3xl mx-auto p-4 text-teal-dark">
      <img src={talent.headshot} alt={talent.name} className="w-full h-80 object-cover rounded mb-4" />
      <h2 className="text-3xl font-serif mb-2">{talent.name}</h2>
      <p className="mb-4">{talent.bio}</p>
      <div className="mb-4">
        <video src={talent.demo} controls className="w-full" />
      </div>
      <a href={talent.resume} className="text-brass hover:underline mb-4 block">Download Resume</a>
      <button className="bg-brass text-teal-dark px-4 py-2 rounded">Contact Agent</button>
    </div>
  );
}
