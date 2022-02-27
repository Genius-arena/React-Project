function Profile ({id, avatar_url, login, score}){
return <div>
 <section key={profile.id}>

<img
  src={`${profile.avatar_url}`}
  alt=''
  className='profilePic' />
<p className='username'>{profile.login}</p>
<div className='tentative'>
  <span className='score'>Score: {profile.score}</span>
  <a href={`github.com/${profile.login}`} className='link'>
    <GoMarkGithub />
    github.com/{profile.login}
  </a>
</div>
</section>
</div>
}
export default Profile