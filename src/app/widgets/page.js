import CounterWidget from "./CounterWidget";
import { db } from '../utils/db.server';
import Link from 'next/link';

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
                {
                    widgetData && widgetData.map(widget => {
                        return (
                            <CounterWidget key={widgets.id} widgetData={widget} />
                        )
                    })
                }
            </div>
            <Link href="/widgets/create">Create a new widget</Link>
        </main>
    )
}

export default WidgetCollectionPage;