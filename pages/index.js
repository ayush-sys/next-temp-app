
import MeetupList from "../components/meetups/MeetupList";

const dummy_meetups = [
    {
        id:'m1',
        title:'1st meet up',
        image:'https://images.unsplash.com/photo-1642425524720-dbf49e7a16ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
        address:'1st street, New york, 000991',
        description:'This is a dummy meetup!'
    },
    {
        id:'m2',
        title:'2nd meet up',
        image:'https://images.unsplash.com/photo-1641041375081-1511939556fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
        address:'random forest street, Californua, 000890',
        description:'This is a my startup idea & location!'
    }
]


function HomePage(){
    return (
        <MeetupList meetups={dummy_meetups}/>
    )
}

export default HomePage;
