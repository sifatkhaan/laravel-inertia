import React, {useState} from 'react'
import { router } from "@inertiajs/react";


function Login() {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
};

const handleSubmit = (e) => {
  console.log(e, 'e')
  e.preventDefault();
  router.post("/login", form);
};
  return (
    <div className="flex items-center justify-center h-screen">
            <form onSubmit={handleSubmit} className="p-6 bg-white shadow-md rounded-md">
                <h2 className="text-xl font-bold mb-4">Login</h2>
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full border p-2 mb-3"
                    required
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={form.password}
                    onChange={handleChange}
                    className="w-full border p-2 mb-3"
                    required
                />
                <button type="submit" className="bg-blue-500 text-white p-2 w-full rounded">
                    Login
                </button>
            </form>
        </div>
  )
}

export default Login