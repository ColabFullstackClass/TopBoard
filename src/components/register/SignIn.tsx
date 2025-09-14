import { useState } from "react";
import Button from "../ui/Button";
import Input from "../ui/Input";

const SignIn = () => {
    // This is to handle the useState for all the form fields
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        userType: "",
    });

    // This is to handle the useState for all the error messages
    const [errors, setErrors] = useState({
        email: "",
        password: "",
        userType: "",
    });

    const validate = () => {
        let newErrors = { email: "", password: "", userType: "" };
        let isValid = true;

        // email validation
        if (!formData.email) {
            newErrors.email = "Email is required.";
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Please enter a valid email.";
            isValid = false;
        }

        // password validation
        if (!formData.password) {
            newErrors.password = "Password is required.";
            isValid = false;
        } else if (formData.password.length < 6) {
            newErrors.password = "Password must be at least 6 characters.";
            isValid = false;
        }

        // userType validation
        if (!formData.userType) {
            newErrors.userType = "Please select Tutor or Student.";
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!validate()) return;

        console.log(`Signed in as ${formData.email} (${formData.userType})`);
        // Redirect based on user type
        if (formData.userType === "Tutor") {
            window.location.href = "/dashboard/t/home";
        } else {
            window.location.href = "/dashboard/s/home";
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-4">
            {/* Logo */}
            <div className="text-center text-4xl text-blue-600">
                <img src="../public/img/image12.png" alt="TopBoard Logo" />
            </div>

            <h1 className="font-bold text-3xl text-center pt-2 pb-2 text-blue-600">
                Top<p className="inline text-black">Board</p>
            </h1>
            <p className="text-center pb-4 text-gray-500">
                Welcome back! Please Sign In to continue
            </p>

            <form
                className="border-2 border-white shadow-2xl rounded-xl w-full max-w-sm md:max-w-md p-6 md:p-10 bg-white space-y-4"
                onSubmit={handleSubmit}
            >
                {/* Email */}
                <div>
                    <Input
                        labelName="Email Address"
                        inputType="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                        }
                    />
                    {errors.email && (
                        <p className="text-red-500 text-xs mt-1">
                            {errors.email}
                        </p>
                    )}
                </div>

                {/* Password */}
                <div>
                    <Input
                        labelName="Password"
                        inputType="password"
                        placeholder="Enter your password"
                        value={formData.password}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                password: e.target.value,
                            })
                        }
                    />
                    {errors.password && (
                        <p className="text-red-500 text-xs mt-1">
                            {errors.password}
                        </p>
                    )}
                </div>

                {/* User Type */}
                <div>
                    <p>I am a :</p>
                    <div className="flex space-x-3 w-full">
                        <label className="flex items-center justify-between flex-1 px-3 py-2 bg-gray-200 rounded-full cursor-pointer">
                            Tutor
                            <input
                                type="radio"
                                name="userType"
                                checked={formData.userType === "Tutor"}
                                onChange={() =>
                                    setFormData({
                                        ...formData,
                                        userType: "Tutor",
                                    })
                                }
                            />
                        </label>
                        <label className="flex items-center justify-between flex-1 px-3 py-2 bg-gray-200 rounded-full cursor-pointer">
                            Student
                            <input
                                type="radio"
                                name="userType"
                                checked={formData.userType === "Student"}
                                onChange={() =>
                                    setFormData({
                                        ...formData,
                                        userType: "Student",
                                    })
                                }
                            />
                        </label>
                    </div>
                    {errors.userType && (
                        <p className="text-red-500 text-xs mt-1">
                            {errors.userType}
                        </p>
                    )}
                </div>

                {/* Button */}
                <Button
                    style="text-white bg-black w-full py-2"
                    onClick={handleSubmit}
                >
                    <span>Sign In</span>
                </Button>

                <p className="text-sm text-gray-500 text-center">
                    Don't have an account?{" "}
                    <a href="" className="text-blue-400 underline">
                        Sign up here
                    </a>
                </p>
            </form>
        </div>
    );
};

export default SignIn;
