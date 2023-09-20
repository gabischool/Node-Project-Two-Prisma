import bcrypt from 'bcryptjs';

export const hasspassword = async(password) => {
    try {

        const hassed_password = await bcrypt.hash(password, 10)
        return hassed_password;

    } catch (error) {
        console.log(error);

    }
}

export async function compare_password(password, c_password) {
    try {

        const compared_password = await bcrypt.compare(password, c_password);
        return compared_password

    } catch (error) {
        console.log(`Error Is Compare hassing Password : ${error}`);
    }
}