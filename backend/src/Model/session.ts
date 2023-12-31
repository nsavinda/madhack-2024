import {Document, Schema , model} from 'mongoose'


const sessionSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    fullName: {
        type: String,
        required: true
    },
    mobile:{
        type: String,
        required: true
    },
    university:{
        type: String,
        required: true
    }
    });

interface ISession extends Document {
    email: string;
    fullName: string;
    mobile: string;
    university: string;
}

export default model<ISession>('Session', sessionSchema);