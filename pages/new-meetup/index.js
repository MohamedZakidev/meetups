import Head from "next/head"
import { useRouter } from "next/router"
import NewMeetupForm from "../../components/meetups/NewMeetupForm"

function newMeetupPage() {
    const router = useRouter()
    async function addMeetupHandler(meetupdata) {
        const response = await fetch("/api/new-meetup", {
            method: "POST",
            body: JSON.stringify(meetupdata),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await response.json()
        console.log(data)
        router.push("/")
    }

    return (
        <>
            <Head>
                <title>Add a new meetup</title>
                <meta name="description" content="Add your own meetups and create amazing networking" />
            </Head>
            <NewMeetupForm onAddMeetup={addMeetupHandler} />
        </>
    )
}

export default newMeetupPage
