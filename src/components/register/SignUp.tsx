
import React, { useState } from "react";
import Button from "../ui/Button";
import Input from "../ui/Input";

interface FormData {
  email: string;
  password: string;
  userType: string;
}

interface FormErrors {
  email?: string;
  password?: string;
  userType?: string;
}

const SignUp: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: '',
    userType: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setFormData(prev => ({
      ...prev,
      userType: e.target.value
    }));
    if (errors.userType) {
      setErrors(prev => ({
        ...prev,
        userType: ''
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (!formData.userType) {
      newErrors.userType = 'Please select whether you are a tutor or student';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (): Promise<void> => {
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Here you would typically make an API call to create the account
      console.log('Account created:', formData);
      // alert('Account created successfully!');
      
      // Reset form
      setFormData({
        email: '',
        password: '',
        userType: ''
      });
    } catch (error) {
      console.error('Error creating account:', error);
      alert('Error creating account. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSignInClick = (e: React.MouseEvent<HTMLAnchorElement>): void => {
    e.preventDefault();
    // alert('Redirecting to sign in page...');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
  <div className="w-full max-w-xl">
        {/* Logo and Header */}
        <div className="text-center mb-4">
          <div className="inline-flex items-center justify-center w-16 h-12 rounded-lg mb-4">
            <img src="../public/logo.png" alt="Logo" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900">
            Top<span className="text-blue-500">Board</span>
          </h1>
          <p className="text-gray-400 text-sm mt-1">Create your own account.</p>
        </div>

        {/* Form Container */}
  <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 max-w-xl w-full">
          <div className="flex flex-col space-y-4 mt-4 pl-12 pr-12">
            
            <div>
              <Input
                labelName="Email Address"
                inputType="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleInputChange}
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <Input
                labelName="Password"
                inputType="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleInputChange}
              />
              {errors.password && (
                <p className="text-red-500 text-xs mt-1">{errors.password}</p>
              )}
            </div>

        <div>
          <p className="text-gray-500">I am a :</p>
          <div className="flex space-x-3 w-full">
            <label className="flex items-center justify-between flex-1 px-4
             py-4 bg-gray-100 rounded-full cursor-pointer text-gray-500">
              Tutor
              <input
                type="radio"
                name="userType"
                checked={formData.userType === "Tutor"}
                onChange={() => setFormData({ ...formData, userType: "Tutor" })}
              />
            </label>
            <label className="flex items-center justify-between flex-1 px-4 py-4 bg-gray-100 rounded-full cursor-pointer text-gray-500">
              Student
              <input
                type="radio"
                name="userType"
                checked={formData.userType === "Student"}
                onChange={() =>
                  setFormData({ ...formData, userType: "Student" })
                }
              />
            </label>
          </div>
          {errors.userType && (
            <p className="text-red-500 text-xs mt-1">{errors.userType}</p>
          )}
        </div>

         <div>
              <Button 
                style="px-10 py-3 border-2 border-gray-300 rounded-full bg-white text-gray-700 font-medium hover:bg-black hover:text-white transition"
                onClick={handleSubmit}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Creating Account...
                  </div>
                ) : (
                  <span>Create Account</span>
                )}
              </Button>
            </div>

            <div>
              <p className="text-sm text-gray-500 text-center">
                Already have an account?{" "}
                <a 
                  href="#" 
                  onClick={handleSignInClick}
                  className="text-blue-400 underline hover:text-blue-600 transition-colors"
                >
                  Sign in
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;


