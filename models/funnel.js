const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Funnel = new Schema({
    name : { type:String, default:'' },
    description : { type:String, default:'' },
    leadMagnet: {
      name: { type:String, default:'' },
      price: { type:Number, default:0 },
      max: { type:Number, default:0 },
    },
    tripWire: {
      name: { type:String, default:'' },
      price: { type:Number, default:0 },
      max:{ type:Number, default:10 }
    },
    coreOffer: {
      name: { type:String, default:'' },
      price: { type:Number, default:0 },
    },
    profitMaximizer: {
      name: { type:String, default:'' },
      price: { type:Number, default:0 },
    },
    user : { type: Schema.Types.ObjectId, ref: 'User' }      
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Funnel', Funnel);
