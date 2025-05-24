import mongoose from 'mongoose';
import { formatInTimeZone } from 'date-fns-tz'

const BD_TIMEZONE = 'Asia/Dhaka';
const userSchema = new mongoose.Schema({
  phone: { type: String, required: true },
  // nidFront: { type: String, required: true },
  // nidBack: { type: String, required: true },
  email: { type: String },
  // tradeLicense: { type: String, required: true },
  location: { type: String, required: true },
  nidNo: { type: String },
  tradeLicenseNo: { type: String },
  shopName: { type: String, required: true },
  ownerName: { type: String, required: true },
  createdAtFormatted: { type: String }
}, { timestamps: true });


userSchema.pre('save', function (next) {
  const formatted = formatInTimeZone(new Date(), BD_TIMEZONE, 'dd-MM-yyyy HH:mm');
  this.createdAtFormatted = formatted;
  this.updatedAtFormatted = formatted;
  next();
});

export default mongoose.model('User', userSchema);
