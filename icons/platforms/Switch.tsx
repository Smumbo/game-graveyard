import * as React from "react"

export default function Switch(props: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 900 900"
      xmlSpace="preserve"
      {...props}
    >
      <path
        fill={props.currentcolor}
        d="M192.7 3C103.1 19 31 85.3 8.3 172.6.1 204-.5 222.5.4 466.8c.6 224.3.8 229.6 4.5 246.9 20.7 93.4 87 159.9 181.3 181.9 12.3 2.8 28 3.4 128.8 3.9 104.4.7 115.2.6 118-2.2 2.8-2.8 3-38.8 3-446.5 0-302.2-.6-444.6-1.9-447.2-1.9-3.4-5-3.5-114.2-3.4C231.1.4 204.5.9 192.7 3zm168.7 447.2v377.5l-75.8-.9c-69.9-.7-77.3-1.1-91.3-4.7-60-15.5-104.5-61.7-117-121.9-4.1-18.8-4.1-482.4-.2-500.9C88.2 147 124.5 103.6 173.5 84c24.6-9.9 36-11 115.7-11.2l72.1-.2v377.6zM208.8 186.5c-11.7 2.2-29.6 11.2-39.1 19.6-19.6 17-29.3 41-27.8 69.3.7 14.7 1.7 18.6 7.6 30.6 8.8 18.1 22 31.3 40.1 40.3 12.5 6.1 15.7 6.9 31.9 7.5 14.7.6 19.9 0 29.8-3.4 40.4-13.6 64.8-52.9 58-93.2-8.1-47.9-53.6-80-100.5-70.7zM526.7 1.3c-.7.6-1.3 202.6-1.3 448.9 0 406.4.2 447.6 3 448.7 5 1.9 149.6 1.1 167.5-.7 75.7-8.6 142.4-54.6 178.7-123 4.7-8.8 10.8-23.5 14-32.6 11.7-35 11.4-25.7 11.4-293.5 0-213.7-.4-245.6-3-259.2C878.5 92.8 804.5 19.6 707.2 2.8 694.2.6 674 0 609.2 0c-44.7 0-82 .6-82.5 1.3zm199 405.9c29.1 7.6 52.9 29.8 62.6 58.1 6.1 17.5 6 43.2-.2 59.3-11.4 29.4-33.7 50.1-62.4 57.8-46.6 12.1-96.2-16-109.8-62.2-4.1-14.2-3.9-38 .7-52.5 14-45.8 62.5-72.7 109.1-60.5z"
      />
    </svg>
  )
}