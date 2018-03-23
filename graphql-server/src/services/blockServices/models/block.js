import mongoose from 'mongoose';
mongoose.Promise = Promise;

const Schema = mongoose.Schema

const blockSchema = new Schema({

  path: {
		type: String,
		required: true,
	},
  title: {
		type: String,
		required: true,
	},
	description: {
	 	type: String,
		required: true
  },
  image: {
    type: String,
    required: false
  },

}, { collection: 'block', timestamps: true } );

export default mongoose.model('block', blockSchema);