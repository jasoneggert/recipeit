import UserCell from 'src/components/User/UserCell'

type UserPageProps = {
  id: string
}

const UserPage = ({ id }: UserPageProps) => {
  console.log('🚀 ~ file: UserPage.tsx:9 ~ UserPage ~ id:', id)

  return <UserCell id={id} />
}

export default UserPage
