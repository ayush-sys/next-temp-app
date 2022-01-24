
import MeetupDetail from "../../components/meetups/MeetupDetail";


function MeetupDetails(props) {
    return(
        <MeetupDetail 
            image = {props.meetupData.image}
            title = {props.meetupData.title}
            address = {props.meetupData.address}
            desc = {props.meetupData.desc}
        />
    );
}


export async function getStaticPaths() {
    return {
        fallback: false,
        paths: [
            {
                params: {
                    meetupId:'m1',
                },
            },
            {
                params: {
                    meetupId:'m2',
                },
            },
        ]
    }
}


export async function getStaticProps(context){
    // fetch data for a single meetup
    const meetupId = context.params.meetupId;

    // console.log(meetupId);

    return {
        props:{
            meetupData:{
                id:meetupId,
                image:'https://images.unsplash.com/photo-1642425524720-dbf49e7a16ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
                title:'A first meeting',
                address:'Some street 5, New York',
                desc:'xrdtcfygvubhinjokdxcfgvhbj',
            }
        }
    }
}


export default MeetupDetails;