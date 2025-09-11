import React from "react";
import { Link } from "react-router-dom";
import Button from "../ui/Button";
import Input from "../ui/Input";

const ForgotPassword: React.FC = () => {
	return (
		<div className="min-h-screen w-full flex flex-col items-center justify-start bg-white pb-12">
			<div className="pt-14 pb-6 flex flex-col items-center">
				<div className="w-10 h-10 rounded-lg border-none border-sky-500 flex items-center justify-center">
					<img src="/logo.svg" alt="Logo" className="w-8 h-8" />
				</div>
				<h1 className="mt-3 text-2xl font-semibold tracking-tight">
					<span className="text-sky-500">Top</span>
					<span className="text-black">Board</span>
				</h1>
				<p className="mt-1 text-xs text-gray-400">
					Welcome back! Please enter your email to continue
				</p>
			</div>

			<div className="w-full max-w-xl px-6">
				<div className="mx-auto w-full max-w-md rounded-2xl shadow-xl bg-white p-8">
					<div className="w-full text-center">
						<h2 className="text-gray-700 font-semibold">Forgot Your Password?</h2>
						<p className="mt-1 text-xs text-gray-400">
							Enter your email and we'll send you a link to reset
							<br />
							your password.
						</p>
					</div>

					<div className="mt-6 p-0 ">
						<Input labelName="Email Address" inputType="email" placeholder="Enter your email" />
					</div>

					<div className="mt-6 pb-3">
						<Button style="bg-gray-900 text-white rounded-full">
							Send reset link
						</Button>
					</div>

					<div className="mt-3">
						<Link to="/" className="block w-full">
							<div className="w-full rounded-full border border-gray-200 text-gray-700 py-3 flex items-center justify-center gap-2 hover:bg-gray-50">
								<svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
									<path d="M15 18L9 12L15 6" stroke="#6B7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
								</svg>
								<span className="text-sm">Back to login</span>
							</div>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ForgotPassword; 