import type { ReactNode } from "react"
import AppNavigation, { NavItem } from "./AppNavigation"

type AppLayoutProps = {
    children?: ReactNode
    sidebar?: ReactNode
}

const navItems: NavItem[] = [
    { href: '/', name: 'Dashboard' },
    { href: '/presets', name: 'My Sensors', }
]

function AppLayout({ children, sidebar }: AppLayoutProps) {
    return (
        <>
            <AppNavigation key='app-nav' navItems={navItems} />
            <div key='app-content' className="container mx-auto">
                <div className="h-screen flex">
                    <aside className="w-64">
                        {sidebar}
                    </aside>
                    <div className='flex-1 flex overflow-hidden'>
                        <main className="flex-1 overflow-y-scroll">
                            {children}
                        </main>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AppLayout