import { Suspense } from "react";
import loadingGif from "@/assets/loading_gif.gif"

const Loading = () => {
    return (
        <div className="fixed top-0 left-0 w-full h-screen bg-black z-50">
            <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]  ">
                <img src={loadingGif} alt="" />
            </div>
        </div>
    )
}

const SuspenseContainer = ({children}) => {
    return <Suspense fallback={<Loading/>}>{children}</Suspense>
}

export default SuspenseContainer