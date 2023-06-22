import { createPortal } from "react-dom";

const TopOverlay = ({ children }: { children: React.ReactNode }) => {

  return createPortal(<div className="bg-transparent h-full w-full z-30 relative top-0 left-0">{children}</div>, document.body)

}

export default TopOverlay;