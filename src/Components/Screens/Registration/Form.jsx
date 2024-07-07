import React from "react"
import LoginHooks from "./hooks"

export default function Form({ type }) {
  const { handleSubmit, loginOnSubmit, registerOnSubmit, errors, register } =
    LoginHooks()

  return (
    <form
      onSubmit={
        type === "login"
          ? handleSubmit(loginOnSubmit)
          : handleSubmit(registerOnSubmit)
      }
    >
      <div class="form-control w-full ">
        <input
          {...register("email", {
            required: {
              value: true,
              message: "Email is required",
            },
            pattern: {
              value: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
              message: "Provide a Valid email",
            },
          })}
          type="email"
          placeholder="Enter Your Email"
          className="border-2 border-gray-200 p-3 w-full text-black bg-white rounded-lg "
        />
        <label class="label">
          {errors.email?.type === "required" && (
            <span className="label-text-alt text-red-700">
              {errors.email.message}
            </span>
          )}
          {errors.email?.type === "pattern" && (
            <span className="label-text-alt text-red-700">
              {errors.email.message}
            </span>
          )}
        </label>
      </div>

      <div className="form-control w-full ">
        <input
          type="password"
          placeholder="Enter Your Password"
          className="border-2 border-gray-200 p-3 w-full text-black bg-white rounded-lg "
          {...register("password", {
            required: {
              value: true,
              message: "Password is Required",
            },
            minLength: {
              value: 6,
              message: "Must be 6 characters or longer",
            },
          })}
        />
        <label className="label">
          {errors.password?.type === "required" && (
            <span className="label-text-alt text-red-700 bold">
              {errors.password.message}
            </span>
          )}
          {errors.password?.type === "minLength" && (
            <span className="label-text-alt text-red-700 bold">
              {errors.password.message}
            </span>
          )}
        </label>
      </div>

      <input
        value={type === "login" ? "Login" : "Register"}
        className="border-2 border-purple-700 py-1 w-full rounded-lg hover:bg-purple-700 text-black mt-3 justify-center gap-x-3 items-center flex text-2xl hover:text-white"
        type="submit"
      />
    </form>
  )
}
