import './../App.css'
export default function User([user]) {
  return (
    <div>
      <div class name="list">
        <h3>Name:{user.name} </h3>
        <p>Age:{user.age}</p>
        <p>Username:{user.username}</p>
      </div>
    </div>
  )
}
