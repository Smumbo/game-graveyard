import { promises as fs } from 'fs';
import GameListItem from './GameListItem';

export default async function GameList() {
  const file = await fs.readFile(process.cwd() + '/public/data.json', 'utf8');
  const data = JSON.parse(file);

  return (
    <main className="flex flex-col items-center justify-between p-24">
      {data.map((item: any) =>
        <>
          <GameListItem
            onlineOnly = {item.onlineOnly}
            title = {item.title}
            status = {item.status}
            release = {new Date(item.releaseDate)}
            shutdown = {item.shutdownDate ? new Date(item.shutdownDate) : null}
            resurrection = {item.resurrectionDate ? new Date(item.resurrectionDate) : null}
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