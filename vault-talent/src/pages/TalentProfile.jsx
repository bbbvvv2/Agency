import { useParams } from 'react-router-dom'
import { talentList } from '../data/talentList'
import ProfilePage from '../components/ProfilePage'

export default function TalentProfile() {
  const { id } = useParams()
  const talent = talentList.find(t => t.id.toString() === id)
  if (!talent) return <p className="p-4 text-center">Talent not found.</p>
  return <ProfilePage talent={talent} />
}
