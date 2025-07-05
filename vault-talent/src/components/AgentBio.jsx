export default function AgentBio({ agent }) {
  return (
    <div className="text-center p-4 text-teal-dark">
      <img src={agent.photo} alt={agent.name} className="w-32 h-32 rounded-full object-cover mx-auto mb-2" />
      <h3 className="text-xl font-serif mb-1">{agent.name}</h3>
      <p className="text-sm">{agent.bio}</p>
    </div>
  );
}
