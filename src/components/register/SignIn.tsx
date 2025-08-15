import { useState } from "react";
import Button from "../ui/Button";
import Input from "../ui/Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboardCheck } from "@fortawesome/free-solid-svg-icons";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password || !userType) {
      setError("Please fill in all fields.");
      return;
    }
    setError("");
    alert(`Signed in as ${email} (${userType})`);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <div className="text-center text-4xl text-blue-600">
        <FontAwesomeIcon icon={faClipboardCheck} />
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
        {error && <p className="text-red-500 text-sm text-center">{error}</p>}

        <Input
          labelName="Email Address"
          inputType="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          labelName="Password"
          inputType="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div>
          <p>I am a :</p>
          <div className="flex space-x-3 w-full">
            <label className="flex items-center justify-between flex-1 px-3 py-2 bg-gray-200 rounded-full cursor-pointer">
              Tutor
              <input
                type="radio"
                name="userType"
                checked={userType === "Tutor"}
                onChange={() => setUserType("Tutor")}
              />
            </label>
            <label className="flex items-center justify-between flex-1 px-3 py-2 bg-gray-200 rounded-full cursor-pointer">
              Student
              <input
                type="radio"
                name="userType"
                checked={userType === "Student"}
                onChange={() => setUserType("Student")}
              />
            </label>
          </div>
        </div>

        <Button style="text-white bg-black w-full py-2" onClick={handleSubmit}>
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
