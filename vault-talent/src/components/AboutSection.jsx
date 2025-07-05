import { agents } from '../data/agents'
import AgentBio from './AgentBio'

export default function AboutSection() {
  return (
    <section className="max-w-5xl mx-auto p-4">
      <h2 className="text-3xl font-serif text-teal-dark mb-4 text-center">Our Agents</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {agents.map(agent => (
          <AgentBio key={agent.id} agent={agent} />
        ))}
      </div>
    </section>
  )
}
