import { createPortal } from "react-dom";

const BottomOverlay = ({ children }: { children: React.ReactNode }) => {

  return createPortal(<div className="bg-transparent overflow-y-auto h-full w-full z-30 fixed bottom-0 left-0">{children}</div>, document.body)

}

export default BottomOverlay;