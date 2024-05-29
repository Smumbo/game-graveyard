import Dates from "./Dates";
import Platforms from "./Platforms";

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
      throw(e)
    }
  }

  return (
    <div className="min-w-full">
      <p>
        {props.onlineOnly ? props.title: props.title + " (online services)"}
      </p>
      <p>{props.publisher}</p>
      <p>{props.status}</p>
      <Dates
        release={props.release}
        shutdown={props.shutdown}
        resurrection={props.resurrection}
      />
      <Platforms
        platforms={props.platforms}
      />
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