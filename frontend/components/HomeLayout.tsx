import type { ReactNode } from "react"

type HomeLayoutProps = {
    children?: ReactNode
}

function HomeLayout({ children }: HomeLayoutProps) {
    return (
        <div>
            {children}
        </div>
    )
}

export default HomeLayout