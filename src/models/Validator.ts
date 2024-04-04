type validatorResponse = string | boolean

//get error with calling class property inside class function, so declare regex variables outside of class
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
const lettersRegex = /^[A-Za-z]+$/
const fullnameRegex = /(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/


class Validator {
    static readonly emailRegex: RegExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    static readonly phoneRegex: RegExp = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
    static readonly lettersRegex: RegExp = /^[A-Za-z]+$/
    static readonly fullnameRegex: RegExp = /(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/

    public static email(value: string): validatorResponse {
        if (!emailRegex.test(value)) {
            return "Invalid email"
        }
        return true
    }

    public static phone(value: string): validatorResponse {
        if (!phoneRegex.test(value)) {
            return "Invalid format of phone number"
        }
        return true
    }

    public static letters(value: string): validatorResponse {
        if (!lettersRegex.test(value)) {
            return "Use only letters"
        }
        return true
    }

    public static fullname(value: string): validatorResponse {
        if (!fullnameRegex.test(value)) {
            return 'Invalid fullname'
        }
        return true
    }
}

export default Validator