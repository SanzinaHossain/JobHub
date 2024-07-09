import React from "react"
import LoginHooks from "./hooks"
import { FormStyles } from "./FormStyles"

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
      {type != "login" ? (
        <div class="form-control w-full ">
          <input
            {...register("name", {
              required: {
                value: true,
                message: "Name is required",
              },
            })}
            type="text"
            placeholder="Enter Your name"
            className={FormStyles.inputContainer}
          />
          <label class="label">
            {errors.name?.type === "required" && (
              <span className={FormStyles.inputErrorText}>
                {errors.name.message}
              </span>
            )}
          </label>
        </div>
      ) : null}
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
          className={FormStyles.inputContainer}
        />
        <label className="label">
          {errors.email?.type === "required" && (
            <span className={FormStyles.inputErrorText}>
              {errors.email.message}
            </span>
          )}
          {errors.email?.type === "pattern" && (
            <span className={FormStyles.inputErrorText}>
              {errors.email.message}
            </span>
          )}
        </label>
      </div>

      <div className="form-control w-full ">
        <input
          type="password"
          placeholder="Enter Your Password"
          className={FormStyles.inputContainer}
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
            <span className={FormStyles.inputErrorText}>
              {errors.password.message}
            </span>
          )}
          {errors.password?.type === "minLength" && (
            <span className={FormStyles.inputErrorText}>
              {errors.password.message}
            </span>
          )}
        </label>
      </div>

      <input
        value={type === "login" ? "Login" : "Register"}
        className={FormStyles.buttonContainer}
        type="submit"
      />
    </form>
  )
}
