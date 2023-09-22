import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState } from "react";
import { BiHide, BiShow } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useLoginUserMutation } from "../../redux/userSlice";
import { toast } from "react-toastify";
import axios from 'axios'
const Login = () => {
  const [showPassword, setShowPassword] = useState("password");
  const [loginUser] = useLoginUserMutation();

  const navigate = useNavigate();
  const initialValues = {
    email: "",
    password: "",
  };
  const validationSchemas = Yup.object({
    email: Yup.string().required("email is required"),
    password: Yup.string().required("password is required"),
  });

  const handleSubmit = async (values, { resetForm }) => {
    try {
      const { email, password } = values;
      // const {data} = await axios.post('http://localhost:9000/api/user/login',{email,password})
      // console.log('data',data);
      // localStorage.setItem('authToken',data.token);
      loginUser({
        email,
        password,
      }).unwrap()
        .then((res) => {
          toast.success(res.message);
          console.log("res", res);
          navigate('/')
        })
        .catch((err) => {
          console.log("err", err);
        });
    } catch (error) {
      console.log(`error submitting ${error}`);
    }
    resetForm();
  };
  return (
    <div className="w-full">
      <div className="mt-32 flex flex-col justify-center items-center">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchemas}
          onSubmit={handleSubmit}
        >
          <Form className=" w-[90%] border-[1px] border-[#00ABA8] p-5 rounded shadow md:w-[36%] lg:w-[30%] xl:w-[28%]  flex flex-col justify-start items-start gap-2 space-y-10">
            <h1 className=" text-3xl tracking-widest w-full text-center">
              Log in
            </h1>
            <div className="w-full space-y-2">
              <Field
                type="text"
                name="email"
                className="p-3 outline-[#00ABA8] shadow w-full rounded"
                placeholder="Enter Your Email"
              />
              <ErrorMessage
                component="div"
                name="email"
                className="text-red-500"
              />
            </div>
            <div className="w-full space-y-2 relative">
              <Field
                type={showPassword}
                name="password"
                className="p-3 outline-[#00ABA8] shadow w-full rounded"
                placeholder="Enter Your Password"
              />
              {showPassword == "text" ? (
                <BiShow
                  onClick={() => setShowPassword("password")}
                  className="  cursor-pointer absolute right-5 top-1"
                  size={25}
                />
              ) : (
                <BiHide
                  onClick={() => setShowPassword("text")}
                  className=" cursor-pointer absolute right-5 top-1"
                  size={25}
                />
              )}
              <ErrorMessage
                component="div"
                name="password"
                className="text-red-500"
              />
            </div>
            <button
              className=" w-full text-lg shadow rounded p-3 bg-[#00ABA8] hover:bg-white text-white hover:text-[#00ABA8]"
              type="submit"
            >
              Login
            </button>
            <p className="text-lg tracking-widest">
              I don`t have an account{" "}
              <Link to="/Register" className=" text-[#00ABA8]">
                Sign Up
              </Link>
            </p>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default Login;
