export const checkValidPhone = async (phone)=> {
    const phoneRegex = /^(?:\+88)?01[3-9]\d{8}$/
    if (phoneRegex.test(phone)) return true
    return false
}