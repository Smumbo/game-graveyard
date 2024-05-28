import { promises as fs } from 'fs';
import GameListItem from './GameListItem/GameListItem';

export default async function GameList() {
  const file = await fs.readFile(process.cwd() + '/public/data.json', 'utf8');
  const data = JSON.parse(file);

  function makeDate(date: string) {
    if (date.length == 4) {
      return new Date(Number(date), 0);
    }
    return new Date(date)
  }

  return (
    <main className="flex flex-col items-center justify-between p-24">
      {data.map((item: any) =>
        <>
          <GameListItem
            onlineOnly = {item.onlineOnly}
            title = {item.title}
            status = {item.status}
            release = {makeDate(item.releaseDate)}
            shutdown = {item.shutdownDate ? makeDate(item.shutdownDate) : null}
            resurrection = {item.resurrectionDate ? makeDate(item.resurrectionDate) : null}
            publisher = {item.publisher}
            platforms = {item.platforms}
            urls = {item.urls}
          />
          <br/>
        </>
      )}
    </main>
  )

}