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
        className="text-sm border border-solid rounded-sm text-blue-400 border-blue-400 bg-blue-950 hover:text-blue-300 hover:border-blue-300 hover:bg-blue-900 duration-50 mr-1 py-0.5 px-1 inline-block"
        href={link}
      >
        <img
          className="inline-flex mr-1 mb-0.5"
          width={16}
          height={16}
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