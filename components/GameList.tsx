import { promises as fs } from 'fs';
import GameListItem from './GameListItem';

export default async function GameList() {
  const file = await fs.readFile(process.cwd() + '/public/data.json', 'utf8');
  const data = JSON.parse(file);

  return (
    <main className="flex flex-col items-center justify-between p-24">
      {data.map((item: any) =>
        <GameListItem
          title = {item.title}
          status = {item.status}
          release = {new Date(item.release)}
          shutdown = {new Date(item.shutdown)}
          resurrection = {new Date(item.resurrection)}
          publisher = {item.publisher}
          platforms = {item.platforms}
          url = {item.url}
        />
      )}
    </main>
  )

}