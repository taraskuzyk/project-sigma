import classNames from "classnames"
import Link from "next/link"
import { useRouter } from "next/router"
import Button, { buttonVariants } from "./Button"

export type NavItem = {
    href: string
    name: string
    external?: boolean
}

type AppNavigationProps = {
    navItems: NavItem[]
}

function AppNavigation({
    navItems,
}: AppNavigationProps) {
    const router = useRouter()
    const appPathname = router.pathname.replace(/\/app/, '')
    return (
        <nav className='bg-white sticky top-0'>
            <div
                className="flex flex-row container mx-auto space-x-8"
            >
                <div>Logo</div>
                <div className='flex flex-1 space-x-4'>
                    {navItems.map(navItem => {
                        const hasMatchPath = appPathname === navItem.href || appPathname === '' && navItem.href === '/'
                        const className = hasMatchPath ? 'font-bold' : undefined
                        if (navItem.external) {
                            return (
                                <a
                                    className={className}
                                    key={navItem.href}
                                    href={navItem.href}
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    {navItem.name}
                                </a>
                            )
                        }
                        return (
                            <Link
                                key={navItem.href}
                                href={navItem.href}
                            >
                                <a
                                    className={className}
                                >
                                    {navItem.name}
                                </a>
                            </Link>
                        )
                    })}
                </div>
                <div className='flex flex-row items-center space-x-4'>
                    <Link href='/presets/new'>
                        <a
                            className={classNames(
                                buttonVariants.common,
                                buttonVariants.default.blue
                            )}
                        >
                            Create Sensor
                        </a>
                    </Link>
                    <Button variant='ghost'>Jane Doe</Button>
                </div>
            </div>
        </nav>
    )
}

export default AppNavigation