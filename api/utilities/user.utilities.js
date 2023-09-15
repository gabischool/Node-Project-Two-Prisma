import bcrypt from 'bcryptjs';

export const hasspassword = async(password) => {
    try {

        const hassed_password = await bcrypt.hash(password, 10)
        return hassed_password;

    } catch (error) {
        console.log(error);

    }
}

export const comparePassword = async(password, comparePassword) => {
    try {

        const comparedPassword = await bcrypt.compare(password, comparePassword);
        return comparedPassword

    } catch (error) {
        console.log(`Error Is Compare hassing Password : ${error}`);
    }
}