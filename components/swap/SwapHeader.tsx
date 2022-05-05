import { ReactDOM } from "react";

interface Props {
  buttons: React.ReactNode
}

export default function SwapHeader(props: Props) {
  return (
    <>
      <div className="container">
        <div className="logo-wrapper">
          <a>Heys</a>
        </div>
        <div className="controls-wrapper">
          Implement
        </div>
      </div>
    </>
  )
}