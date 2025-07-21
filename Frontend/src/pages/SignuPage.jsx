import axios from "axios"; // For sending HTTP requests
import { useState } from "react"; // React hook for managing component state
import { X } from "lucide-react"; // Close icon from Lucide icons
import { Link, useNavigate } from "react-router-dom"; // Routing and navigation 

const SignupPage = () => {
  const navigate = useNavigate(); // ✅Hook to programmatically navigate between routes
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(true); // Controls visibility of the signup modal

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  }); // State to store form input values

  const [loading, setLoading] = useState(false); // State to show loading status during signup request
  const [errorMsg, setErrorMsg] = useState(""); // State to show error message if signup fails

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value, // Dynamically update input field based on "name" attribute
    }));
  }; // Updates form input values on change

  const handleSubmit = async (e) => {  // Called when the form is submitted
    e.preventDefault(); // Prevents default form reload behavior
    setLoading(true); // Show loading spinner or disable button
    setErrorMsg(""); // Clear any previous error messages

    try {
      const res = await axios.post( // Send a POST request to backend to register user
        "http://localhost:5000/api/auth/user", // Backend signup endpoint
        formData
      );
      console.log("Signup successful:", res.data);
      setIsLoginModalOpen(false); // Hide modal after successful signup
      navigate("/login"); // ✅ navigate to home page
    } catch (error) {
      console.error("Signup failed:", error.response?.data || error.message);  // Log and show the error if signup fails
      setErrorMsg(error.response?.data?.message || "Signup failed. Try again.");
    } finally {
      setLoading(false); // Always stop loading, success or error
    }
  };

  return (
    <>
      {isLoginModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl w-full max-w-md">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Sign up
                </h2>
                <Link
                  to={"/"}
                  onClick={() => setIsLoginModalOpen(false)}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                >
                  <X className="text-red-400 w-6 h-6" />
                </Link>
              </div>

              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                    placeholder="Enter your fullname"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                    placeholder="Enter your email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                    placeholder="Enter your password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>

                {errorMsg && (
                  <p className="text-sm text-red-500 font-semibold">
                    {errorMsg}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition-colors font-semibold"
                >
                  {loading ? "Signing up..." : "Signup"}
                </button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Already have an account?{" "}
                  <Link
                    to={"/login"}
                    className="text-red-500 hover:text-red-600 font-semibold"
                  >
                    Login
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SignupPage;
