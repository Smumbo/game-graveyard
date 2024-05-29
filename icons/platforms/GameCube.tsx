import * as React from "react"

export default function GameCube(props: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 759.1 866.1"
      xmlSpace="preserve"
      {...props}
    >
      <path fill={props.currentColor} d="M192.4 546L362.2 644 362.3 447.9 192.4 349.9 192.4 546" />
      <path fill={props.currentColor} d="M119.5 588.1L362.3 728.3 362.3 866.1 0 657 0 238.8 119.5 307.8 119.5 588.1" />
      <path fill={props.currentColor} d="M379.6 221.9L209.9 319.9 379.6 417.9 549.4 319.9 379.6 221.9" />
      <path fill={props.currentColor} d="M379.6 137.6L583.9 255.8 703.4 186.9 379.6 0 17.8 208.9 137 277.8 379.6 137.6" />
      <path fill={props.currentColor} d="M639.7 588.1L639.7 445.6 566.7 487.7 566.7 546 396.9 644.1 396.9 644.3 396.9 447.9 759.1 238.8 759.1 657 396.9 866.1 396.9 728.4 639.7 588.1" />
    </svg>
  )
}