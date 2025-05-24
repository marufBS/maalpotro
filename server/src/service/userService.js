import User from "../models/User.js"
export const createUserService = async (phone, email, location, shopName, ownerName, nidNo, tradeLicenseNo) => {


    try {
        console.log('start saving')
        // const nidFrontURL = await uploadImageToB2(nidFront, 'nid_front')
        // const nidBackURL = await uploadImageToB2(nidBack, 'nid_back')
        // const tradeLicenseURL = await uploadImageToB2(tradeLicense, 'trade_license')
        const newUser = new User({
            phone,
            email,
            location,
            shopName,
            ownerName,
            nidNo,
            tradeLicenseNo
        })
        await newUser.save()

        return { error: false, message: 'User created successfully' }
    } catch (error) {
        console.error('createUserService error:', error);
        return { error: true, message: 'Database Error' }
    }



}