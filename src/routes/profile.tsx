import { auth } from "../firebase"

export default function Profile() {

  const user = auth.currentUser;
  return (
    <h1>
      {user ? user.displayName || user.email : "profile"}
    </h1>
  )
}