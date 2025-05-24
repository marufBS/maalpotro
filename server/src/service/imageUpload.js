import B2 from 'backblaze-b2'
import dotenv from 'dotenv'
import { Buffer } from 'buffer'

dotenv.config()

export const uploadImageToB2 = async (imageBase64, docType) => {

    let base64Data = imageBase64
    let extension = 'png'
    const dataUrlRegex = /^data:(image\/\w+) base64,/
    const matches = imageBase64.match(dataUrlRegex)
    if (matches) {
        extension = matches[1].split('/')[1]
        base64Data = imageBase64.replace(dataUrlRegex, '')
    } else {
        base64Data = imageBase64
    }

    // Convert the Base64 string to a buffer.
    const fileBuffer = Buffer.from(base64Data, 'base64')
    // Generate a formated file name.
    const fileName = `bakite_${docType}_${Date.now()}.${extension}`

    // Initialize a new B2 instance.
    const b2 = new B2({
        applicationKeyId: process.env.B2_APPLICATION_KEY_ID,
        applicationKey: process.env.B2_APPLICATION_KEY,
    })

    // Authorize with Backblaze B2.
    await b2.authorize()

    // Get an upload URL for the bucket.
    const uploadUrlResponse = await b2.getUploadUrl({ bucketId: process.env.B2_BUCKET_ID })


    // Upload the file.
    await b2.uploadFile({
        fileName,
        data: fileBuffer,
        uploadUrl: uploadUrlResponse.data.uploadUrl,
        uploadAuthToken: uploadUrlResponse.data.authorizationToken,
    })

    // Construct the public URL. Adjust the URL pattern based on your Backblaze settings.
    const publicUrl = `${process.env.B2_BUCKET_URL || 'https://f005.backblazeb2.com'}/file/${process.env.B2_BUCKET_NAME}/${fileName}`
    return publicUrl
}
