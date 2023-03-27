import EditVoteCell from 'src/components/Vote/EditVoteCell'

type VotePageProps = {
  id: string
}

const EditVotePage = ({ id }: VotePageProps) => {
  return <EditVoteCell id={id} />
}

export default EditVotePage
