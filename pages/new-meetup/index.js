import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import { useRouter } from 'next/router';


function NewMeetupPage(){
    const router = useRouter();

    // sending form data to api route
    async function addMeetupHandler(enetredMeetupData){
        const res = await fetch('/api/new-meetup', {
            method:'POST',
            body:JSON.stringify(enetredMeetupData),
            headers:{
                'Content-Type': 'application/json'
            }
        });
        
        const data = await res.json();
        console.log("Data received from DB successfully " + data);

        router.push('/');
    }

    return (
        <NewMeetupForm onAddMeetup={addMeetupHandler}/>
    )
}

export default NewMeetupPage;