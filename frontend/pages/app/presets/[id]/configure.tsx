import Button from "~/components/Button"
import AppLayout from "~/components/AppLayout"
import { GetServerSideProps, InferGetServerSidePropsType } from "next"
import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query"
import { SensorPreset } from "~/mocks/types"
import phin from "phin"

export const getServerSideProps: GetServerSideProps<{ presetId: string }, { id: string }> = async ctx => {
    const presetId = ctx.params?.id

    if (typeof presetId === 'undefined') {
        return {
            notFound: true,
        }
    }

    const queryClient = new QueryClient()

    const getSensorPreset = async () => {
        const res = await phin({
            url: `http://my.backend/presets/${presetId}`,
            parse: 'json'
        })
        return res.body
    }

    await queryClient.prefetchQuery([`presets/${presetId}`], getSensorPreset)

    return {
        props: {
            presetId,
            dehydratedState: dehydrate(queryClient),
        }
    }
}

function AppPresetConfigure({ presetId }: InferGetServerSidePropsType<typeof getServerSideProps>) {
    const { data } = useQuery<SensorPreset>([`presets/${presetId}`])
    return (
        <AppLayout
            sidebar={'Hello World!'}
        >
            <header className="space-y-4">
                <div className='space-y-2'>
                    <h1 className='text-3xl font-bold'>{data?.modelName}</h1>
                    <h2 className='text-xl font-medium text-stone-500'>{data?.manufacturer}</h2>
                </div>
            </header>
            <main>
                
            </main>
        </AppLayout>
    )
}

export default AppPresetConfigure