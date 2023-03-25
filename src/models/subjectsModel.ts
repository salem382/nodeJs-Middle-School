import mongoose, { Document, Model, Schema } from 'mongoose';

interface Subject extends Document {
    name:string;
    teacherName:string;
    image:string;
}

const subjectSchema: Schema<Subject> = new mongoose.Schema({
   name:{
    type:String
   },
   teacherName:{
    type:String
   },
   image:{
    type:String
   }
});


const subjectModel: Model<Subject> = mongoose.model<Subject>('Subject', subjectSchema);

export default subjectModel;
