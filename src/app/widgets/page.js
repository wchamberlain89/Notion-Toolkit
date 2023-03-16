import CounterWidget from "./CounterWidget";
import { db } from '../utils/db.server';
import Link from 'next/link';

export const revalidate = 10;

export async function getData() {
    const widgets = await db.counterWidget.findMany();

    return widgets || []
}

const WidgetCollectionPage = async ({ widgets = [] }) => {
    const widgetData = await getData();

    console.log(widgetData)

    return (
        <main>
            <div>
                <h1>Widget Page</h1>
                <ul className='flex flex-col'>
                    {   
                        widgetData && widgetData.map(widget => {
                            return (
                                <li>
                                    <Link href={`/widgets/${widget.id}`}>Widget {widget.id}</Link>
                                </li>
                                // <CounterWidget key={widgets.id} widgetData={widget} />
                            )
                        })
                    }
                </ul>
            </div>
            <Link href="/widgets/create">Create a new widget</Link>
        </main>
    )
}

export default WidgetCollectionPage;