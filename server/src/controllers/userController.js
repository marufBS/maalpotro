
// import { createUserService } from "../service/userService";
import * as services from "../service/userService.js"
import { checkValidPhone } from "../utils/utils.js";

export const createUserController = async (req, res) => {

  const { phone, location, email, shopName, ownerName,nidNo,tradeLicenseNo } = req.body;

  console.log('request coming')

  //multer files
  // const nidFront = req.files?.nidFront?.[0]
  // const nidBack = req.files?.nidBack?.[0]
  // const tradeLicense = req.files?.tradeLicense?.[0]

  if (!phone ||  !location || !shopName || !ownerName) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  const isPhoneValid = await checkValidPhone(phone)
  if (!isPhoneValid) return res.status(400).json({ error: 'Phone number is invalid' })


  // convert buffer to base64 strings
  // const nidFrontPicture = nidFront.buffer.toString('base64')
  // const nidBackPicture = nidBack.buffer.toString('base64')
  // const tradeLicensePicture = tradeLicense.buffer.toString('base64')





  try {
    const response = await services.createUserService(phone,  email,  location, shopName, ownerName,nidNo,tradeLicenseNo)
    
    if (response.error)return res.status(500).json({ error: 'Server error 1' })
    return res.status(200).json(response);

  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Server error 2' });
  }
};
