import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query"
import { GetServerSideProps } from "next"
import Link from "next/link"
import phin from "phin"
import AppLayout from "~/components/AppLayout"
import { SensorPreset } from "~/mocks/types"

export const getServerSideProps: GetServerSideProps<{}> = async ctx => {
    const queryClient = new QueryClient()

    const getPresets = async () => {
        const res = await phin({ url: 'http://my.backend/presets', parse: 'json' })
        return res.body
    }

    await queryClient.prefetchQuery(['presets'], getPresets)

    return {
        props: {
            dehydratedState: dehydrate(queryClient)
        }
    }
}

function AppPresetsPage() {
    const { data } = useQuery<SensorPreset[]>(['presets'])
    return (
        <AppLayout
            sidebar={'Hello World!'}
        >
            <h1 className='text-3xl font-bold mb-3 mt-1'>Presets</h1>
            {data?.map(preset => (
                <Link
                    key={preset.id}
                    href={`/presets/${preset.id}`}
                >
                    <a
                        className='cursor-pointer'
                    >
                        <div className='flex flex-col'>
                            <strong>
                                {preset.modelName}
                            </strong>
                            <small>
                                {preset.manufacturer}
                            </small>
                        </div>
                    </a>
                </Link>
            ))}
        </AppLayout>
    )
}

export default AppPresetsPage