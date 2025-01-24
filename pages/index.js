import { MongoClient } from "mongodb"
import Head from "next/head"
import MeetupList from "../components/meetups/MeetupList"

function HomePage(props) {
    return (
        <>
            <Head>
                <title>All Meetups</title>
                <meta name="description" content="Browse a huge list of highly active meetups" />
            </Head>
            <MeetupList meetups={props.meetups} />

        </>
    )
}

export async function getStaticProps() {
    const client = await MongoClient.connect(
        "mongodb+srv://mohamedzzaki2000s:m9sW5KNytwJfYdw7@cluster0.pgwoj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    )
    const db = client.db()

    const meetupsCollections = db.collection('meetups')
    const result = await meetupsCollections.find().toArray()
    const data = result.map(item => ({
        id: item._id.toString(),
        title: item.title,
        image: item.image,
        address: item.address
    }))

    client.close()

    return {
        props: {
            meetups: data
        },
        revalidate: 1
    }
}

export default HomePage
