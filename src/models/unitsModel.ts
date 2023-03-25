import mongoose, { Document, Model, Mongoose, Schema } from 'mongoose';

interface Unit extends Document {
    name:string;
    subject_id:Schema.Types.ObjectId;
    lessons:Array<Schema.Types.ObjectId>
}

const UnitSchema: Schema<Unit> = new mongoose.Schema({
    name:{
        type:String
    },
    subject_id:{
        type:Schema.Types.ObjectId,
        ref:'Subject'
    },
    lessons:[{type:Schema.Types.ObjectId, ref:'Lesson'}]
});


const unitModel: Model<Unit> = mongoose.model<Unit>('Unit', UnitSchema);

export default unitModel;
