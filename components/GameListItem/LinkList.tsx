export default function LinkList(props: {links: string[]}) {
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

  const listItems = props.links.map(link => 
    <li key={link}>
      <a
        className="text-blue-400 text-sm border border-solid rounded-sm border-blue-400 bg-blue-950 mr-1 py-0.5 px-1 duration-50 hover:text-blue-300 hover:border-blue-300"
        href={link}
      >
        <img
          className="inline mr-1 align-middle"
          src={'http://www.google.com/s2/favicons?domain=' + link}
        />
        {getDomain(link)}
      </a>
    </li>
  )

  return (
    <ul className="flex flex-wrap items-center">
      {listItems}
    </ul>
  )
}