import VoteCell from 'src/components/Vote/VoteCell'

type VotePageProps = {
  id: string
}

const VotePage = ({ id }: VotePageProps) => {
  return <VoteCell id={id} />
}

export default VotePage
