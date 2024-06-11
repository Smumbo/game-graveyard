import Dates from "./Dates";
import LinkList from "./LinkList";
import PlatformList from "./PlatformList";

interface Game {
  onlineOnly: boolean;
  title: string;
  status: string;
  release: Date;
  shutdown: Date | null;
  resurrection: Date | null;
  publisher: string;
  platforms: string[];
  links: string[];
}

export default function GameListItem(props: Game) {
  return (
    <div className="min-w-full">
      <p className="text-xl">
        {props.onlineOnly ? props.title : props.title + " (online services)"}
      </p>
      <p>{props.publisher}</p>
      <p>{props.status}</p>
      <Dates
        release={props.release}
        shutdown={props.shutdown}
        resurrection={props.resurrection}
      />
      <PlatformList
        platforms={props.platforms}
      />
      <LinkList
        links={props.links}
      />
    </div>
  )
}