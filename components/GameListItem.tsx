interface Game {
  title: string;
  status: string;
  release: Date;
  shutdown: Date;
  resurrection: Date;
  publisher: string;
  platforms: string[];
  url: string;
}

export default function GameListItem(props: Game) {
  return (
    <div>
      <a href={props.url}>{props.title}</a>
      <p>{props.status}</p>
      <p>{props.release.getFullYear()}</p>
      <p>{props.shutdown.getFullYear()}</p>
      <p>{props.resurrection.getFullYear()}</p>
      <p>{props.publisher}</p>
      <ul>
        {props.platforms.map((platform) => (
          <li key={platform}>{platform}</li>
        ))}
      </ul>
    </div>
  )
}