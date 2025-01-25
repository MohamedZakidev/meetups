import { MongoClient, ObjectId } from "mongodb"
import Head from "next/head"
import classes from "./MeetupDetails.module.css"

function MeetupDetails(props) {
    return (
        <>
            <Head>
                <title>{props.meetupData.title}</title>
                <meta name="description" content={props.meetupData.description} />s
            </Head>
            <section className={classes.detail}>
                <img
                    src={props.meetupData.image}
                    alt={props.meetupData.title}
                />
                <h1>{props.meetupData.title}</h1>
                <address>{props.meetupData.address}</address>
                <p>{props.meetupData.description}</p>
            </section>
        </>
    )
}

export async function getStaticPaths() {
    const client = await MongoClient.connect(
        "mongodb+srv://mohamedzzaki2000s:m9sW5KNytwJfYdw7@cluster0.pgwoj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    )
    const db = client.db()

    const meetupsCollections = db.collection('meetups')
    const result = await meetupsCollections.find({}, { projection: { _id: 1 } }).toArray();

    client.close()

    return {
        fallback: "blocking",
        paths: result.map(item => ({
            params: {
                meetupId: item._id.toString()
            }
        }))
    }
}

export async function getStaticProps(context) {
    const client = await MongoClient.connect(
        "mongodb+srv://mohamedzzaki2000s:m9sW5KNytwJfYdw7@cluster0.pgwoj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    )
    const db = client.db()
    const meetupsCollections = db.collection('meetups')

    const meetupId = context.params.meetupId
    const result = await meetupsCollections.findOne({ _id: new ObjectId(meetupId) })

    client.close()

    return {
        props: {
            meetupData: {
                id: result._id.toString(),
                image: result.image,
                title: result.title,
                address: result.address,
                description: result.description
            }
        }
    }
}
export default MeetupDetails
