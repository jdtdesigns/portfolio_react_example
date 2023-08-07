function Project(props) {
  return (
    <div className="project">
      <h3>{props.name}</h3>
      <a href={props.deployed_url}>Deployed URL</a>
    </div>
  )
}

export default Project;