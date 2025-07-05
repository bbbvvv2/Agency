export default function TalentCard({ talent }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border border-brass p-4 text-teal-dark">
      <img src={talent.headshot} alt={talent.name} className="w-full h-48 object-cover mb-4" />
      <h3 className="text-xl font-serif mb-2">{talent.name}</h3>
      <p className="text-sm mb-4">{talent.bio}</p>
      <a href={`/talent/${talent.id}`} className="text-brass hover:underline">View Profile</a>
    </div>
  );
}
