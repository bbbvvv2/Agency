import { useState } from 'react'
import TalentCard from '../components/TalentCard'
import { talentList } from '../data/talentList'

export default function TalentGrid() {
  const [filter, setFilter] = useState('All')

  const filtered = filter === 'All' ? talentList : talentList.filter(t => t.category === filter)

  return (
    <section className="max-w-5xl mx-auto p-4">
      <h2 className="text-3xl font-serif text-teal-dark mb-4 text-center">Our Talent</h2>
      <div className="flex justify-center mb-4 space-x-4">
        {['All','Actor','Model','Voice'].map(cat => (
          <button key={cat} onClick={() => setFilter(cat)} className={`px-3 py-1 rounded ${filter===cat ? 'bg-brass text-teal-dark' : 'border'}`}>{cat}</button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filtered.map(t => <TalentCard key={t.id} talent={t} />)}
      </div>
    </section>
  )
}
