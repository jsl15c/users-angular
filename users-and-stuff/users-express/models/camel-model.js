const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const camelSchema = new Schema(
  {
    name: {
      type:String,
      required:true
    },
    color: {
      type:String,
      required:true
    },
    humps: {
      type:Number,
      required:true,
      min:0,
      max:2,
      default:2
    },
    user: {
      type:Schema.Types.ObjectId,
      required:true,
      // "ref" is the string name of a model that the ID refers to
      ref:'user'
      // you NEED "ref" to use populate()
    }
  },
  {
    timestamps:true
  }
);

const CamelModel = mongoose.model('camel', camelSchema);

module.exports = CamelModel;
