import NewMeetupForm from "../../components/meetups/NewMeetupForm";


function NewMeetupPage(){

    function addMeetupHandler(enetredMeetupData){
        console.log(enetredMeetupData);
    }

    return (
        <NewMeetupForm onAddMeetup={addMeetupHandler}/>
    )
}

export default NewMeetupPage;