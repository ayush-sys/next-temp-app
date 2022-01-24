// URL of this file :: /api/new-meetup

import {MongoClient} from 'mongodb';

async function handler(req, res){
    if(req.method == 'POST') {
        const data = req.body;

        // const { title, image, address, desc} = data;

        const client = await MongoClient.connect('mongodb+srv://test-account:testaccount123@cluster0.ggvac.mongodb.net/meetups?retryWrites=true&w=majority');
        const db = client.db();

        const meetupsCollections = db.collection('meetups');

        const result = await meetupsCollections.insertOne(data);
        console.log(result);
        client.close();

        res.status(201).json({message:'Meetup inserted!'});
    }
}

export default handler;
