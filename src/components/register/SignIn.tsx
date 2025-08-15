import { useState } from "react";
import Button from "../ui/Button";
import Input from "../ui/Input";

// For FontAwesomeIcon icons
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

  // const

  return (
    //   <div className="border-4 rounded-2xl w-200 mt-30 ml-auto mr-auto flex flex-col text-center pl-8 pr-8">
    <div>
      <div className="text-center text-4xl text-blue-600 pt-0 pb-0">
        <FontAwesomeIcon icon={faClipboardCheck} />
      </div>

      <h1 className="font-bold text-3xl text-center pt-2 pb-2 text-blue-600">
        Top<p className="inline text-black">Board</p>
      </h1>
      <p className="text-center pb-4 text-gray-500">
        Welcome back! Please Sign In to continue
      </p>

      <form
        action=""
        className=" border-2 border-white shadow-2xl rounded-xl w-155 ml-auto mr-auto outline-white flex flex-col space-y-3 pt-14 pb-10 pl-30 pr-30 ml-10 mr-10 text-black"
        onSubmit={handleSubmit}
      >
        {error && <p className="text-red-500 text-sm text-center">{error}</p>}

        <Input
          labelName="Email Address"
          inputType="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
        />
        <Input
          labelName="Password"
          inputType="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPassword(e.target.value)
          }
        />
        <div>
          <p>I am a :</p>
          <div className="flex space-x-3">
            <p className="w-70 h-10 pt-1 pl-3 border bg-gray-200 border-gray-100 rounded-4xl">
              Tutor
              <input
                type="radio"
                name="userType"
                id="tutor"
                className="ml-25 mt-1.75"
                checked={userType === "Tutor"}
                onChange={() => setUserType("Tutor")}
              />{" "}
            </p>
            <p className="w-70 h-10 pt-1 pl-5  border bg-gray-200 border-gray-100 rounded-4xl">
              Student
              <input
                type="radio"
                name="userType"
                id="student"
                className="ml-20 mt-1.75"
                checked={userType === "Student"}
                onChange={() => setUserType("Student")}
              />{" "}
            </p>
          </div>
        </div>
        <div>
          <Button
            style="text-white bg-black"
            onClick={handleSubmit}
          >
            <span> Sign In</span>
          </Button>
        </div>
        <div>
          <p className="text-sm text-gray-500 text-center">
            Don't have an account?{" "}
            <a href="" className="text-blue-400 underline">
              Sign up here
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
