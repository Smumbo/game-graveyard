interface Game {
  onlineOnly: boolean;
  title: string;
  status: string;
  release: Date;
  shutdown: Date | null;
  resurrection: Date | null;
  publisher: string;
  platforms: string[];
  urls: string[];
}

export default function GameListItem(props: Game) {
  function getDomain(url: string) {
    try {
      const urlObject = new URL(url)
      const hostname = urlObject.hostname;
      return hostname
    } catch (e) {
      console.log(url)
    }
  }

  var onlineOnlyText = ""
  if (!props.onlineOnly) {
    onlineOnlyText = " (online services)"
  }

  return (
    <div className="min-w-full">
      <p>
        {props.title + onlineOnlyText}
      </p>
      <p>{props.publisher}</p>
      <p>{props.status}</p>
      <p>
        <span>{props.release.getFullYear()}</span>—
        {props.shutdown ? props.shutdown.getFullYear() : ""}
        {props.resurrection ? " (Safe since " + props.resurrection.getFullYear() + ")" : ""}
      </p>
      <ul>
        {props.platforms.map((platform) => (
          <li key={platform}>{platform}</li>
        ))}
      </ul>
      <ul>
        {props.urls.map((url) => (
          <li key={url}>
            <a href={url}>{getDomain(url)}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}