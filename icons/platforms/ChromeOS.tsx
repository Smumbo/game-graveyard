import * as React from "react"

export default function ChromeOS(props: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 32 32"
      xmlSpace="preserve"
      {...props}
    >
      <path
        d="M22 16c0 3.3-2.7 6-6 6s-6-2.7-6-6 2.7-6 6-6 6 2.7 6 6zm-6-7.1h14.4C27.7 3.6 22.3 0 16 0 10.9 0 6.4 2.4 3.4 6.1l5.5 9.4c.3-3.7 3.3-6.6 7.1-6.6zm0 14.2c-3.1 0-5.7-1.9-6.7-4.7L2.7 7.1C1 9.6 0 12.7 0 16c0 8.1 6 14.7 13.7 15.8l5.5-9.5c-1 .5-2 .8-3.2.8zM30.9 10h-11c1.9 1.3 3.2 3.5 3.2 6 0 1.2-.3 2.4-.9 3.4L14.9 32H16c8.8 0 16-7.2 16-16 0-2.1-.4-4.1-1.1-6z"
        fill={props.currentColor}
      />
    </svg>
  )
}