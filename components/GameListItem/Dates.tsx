export default function Dates(props: {
  release: Date,
  shutdown: Date | null
  resurrection: Date | null
}) {
  function ReleaseDate(releaseDate: Date) {
    return (
      <span title={releaseDate.toDateString()}>
        {releaseDate.getFullYear()}
      </span>
    )
  }

  function ShutdownDate(shutdownDate: Date | null) {
    if (shutdownDate) {
      return (
        <span title={shutdownDate.toDateString()}>
          {shutdownDate.getFullYear()}
        </span>
      )
    }
    return (
      <span title={new Date().toDateString()}>
        Now
      </span>
    )
  }

  function ResurrectionDate(resurrectionDate: Date | null) {
    if (resurrectionDate) {
      return (
        <span>(Safe since <span title={resurrectionDate.toDateString()}>{resurrectionDate.getFullYear()}</span>)</span>
      )
    }
    return null
  }

  return (
    <p>{ReleaseDate(props.release)}—{ShutdownDate(props.shutdown)} {ResurrectionDate(props.resurrection)}</p>
  )
}