interface Game {
  title: string;
  status: string;
  release: Date;
  shutdown: Date | null;
  resurrection: Date | null;
  publisher: string;
  platforms: string[];
  url: string;
}

export default function GameListItem(props: Game) {
  return (
    <div>
      <a href={props.url}>{props.title}</a>
      <p>{props.publisher}</p>
      <p>{props.status}</p>
      <p>
        {props.release.getFullYear()}—
        {props.shutdown ? props.shutdown.getFullYear() : ""}
        {props.resurrection ? " (Resurrected " + props.resurrection.getFullYear() + ")" : ""}
      </p>
      <p></p>
      <ul className="list-disc">
        {props.platforms.map((platform) => (
          <li key={platform}>{platform}</li>
        ))}
      </ul>
    </div>
  )
}