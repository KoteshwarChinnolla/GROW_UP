import { useForm } from "react-hook-form";
import { useState } from "react";
import axios from 'axios';
import './Form.css';

export default function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [isChecked, setIsChecked] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const onSubmit = async (data) => {
    setSubmitError("");
    setIsSubmitting(true);
    try {
      const response = await axios.post("https://api.yourdomain.com/register", data);
      console.log("Form Submitted:", response.data);
      alert("Registration Successful!");
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitError(error.response?.data?.message || "Registration failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const password = watch("password");

  return (
    <div className="form-main-container">
      <div className="form-container">
        <h2 className="text-2xl font-bold text-center text-blue-800 mb-4 animate-fade-in">
          Job Portal Registration
        </h2>

        {submitError && (
          <div className="error-message animate-error-slide mb-4">
            {submitError}
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="form-space">
          {/* Personal Details */}
          <div className="grid grid-col-2 gap-4">
            <div className="input-group">
              <label className="label">Full Name</label>
              <input
                {...register("name", { required: "Name is required" })}
                className={`input-field ${errors.name ? "invalid" : ""}`}
              />
              {errors.name && <p className="error animate-error">{errors.name.message}</p>}
            </div>

            <div className="input-group">
              <label className="label">Email</label>
              <input
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+\.\S+$/,
                    message: "Invalid email address",
                  },
                })}
                className={`input-field ${errors.email ? "invalid" : ""}`}
              />
              {errors.email && <p className="error animate-error">{errors.email.message}</p>}
            </div>
          </div>

          <div className="grid grid-col-2 gap-4">
            <div className="input-group">
              <label className="label">Password</label>
              <input
                type="password"
                {...register("password", { 
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters"
                  }
                })}
                className={`input-field ${errors.password ? "invalid" : ""}`}
              />
              {errors.password && <p className="error animate-error">{errors.password.message}</p>}
            </div>

            <div className="input-group">
              <label className="label">Confirm Password</label>
              <input
                type="password"
                {...register("confirmPassword", {
                  validate: value => 
                    value === password || "Passwords do not match"
                })}
                className={`input-field ${errors.confirmPassword ? "invalid" : ""}`}
              />
              {errors.confirmPassword && <p className="error animate-error">{errors.confirmPassword.message}</p>}
            </div>
          </div>

          <div className="grid grid-col-2 gap-4">
            <div className="input-group">
              <label className="label">Phone Number</label>
              <input
                {...register("phone", {
                  required: "Phone number is required",
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: "Invalid phone number"
                  }
                })}
                className={`input-field ${errors.phone ? "invalid" : ""}`}
              />
              {errors.phone && <p className="error animate-error">{errors.phone.message}</p>}
            </div>
          </div>

          <div className="input-group">
            <label className="label">Address</label>
            <textarea
              {...register("address", { required: "Address is required" })}
              className={`input-field ${errors.address ? "invalid" : ""}`}
              rows="4"
            ></textarea>
            {errors.address && <p className="error animate-error">{errors.address.message}</p>}
          </div>

          {/* B.Tech Details */}
          <h3 className="section-heading">B.Tech Details</h3>
          <div className="input-group">
            <label className="label">College Name</label>
            <input
              {...register("btech_college", { required: "College name is required" })}
              className={`input-field ${errors.btech_college ? "invalid" : ""}`}
            />
            {errors.btech_college && <p className="error animate-error">{errors.btech_college.message}</p>}
          </div>

          <div className="input-group">
            <label className="label">College Address</label>
            <input
              {...register("btech_college_address", { required: "College address is required" })}
              className={`input-field ${errors.btech_college_address ? "invalid" : ""}`}
            />
            {errors.btech_college_address && <p className="error animate-error">{errors.btech_college_address.message}</p>}
          </div>

          <div className="grid grid-col-2 gap-4">
            <div className="input-group">
              <label className="label">Branch</label>
              <input
                {...register("btech_branch", { required: "Branch is required" })}
                className={`input-field ${errors.btech_branch ? "invalid" : ""}`}
              />
              {errors.btech_branch && <p className="error animate-error">{errors.btech_branch.message}</p>}
            </div>

            <div className="input-group">
              <label className="label">CGPA</label>
              <input
                type="number"
                step="0.01"
                {...register("btech_cgpa", { 
                  required: "CGPA is required",
                  min: { value: 0, message: "Invalid CGPA" },
                  max: { value: 10, message: "CGPA cannot exceed 10" }
                })}
                className={`input-field ${errors.btech_cgpa ? "invalid" : ""}`}
              />
              {errors.btech_cgpa && <p className="error animate-error">{errors.btech_cgpa.message}</p>}
            </div>
          </div>

          <div className="input-group">
            <label className="label">Passing Year</label>
            <input
              type="number"
              {...register("btech_year", { 
                required: "Passing year is required",
                min: { value: 1900, message: "Invalid year" },
                max: { value: new Date().getFullYear()+5, message: "Year cannot be in future" }
              })}
              className={`input-field ${errors.btech_year ? "invalid" : ""}`}
            />
            {errors.btech_year && <p className="error animate-error">{errors.btech_year.message}</p>}
          </div>

          {/* 12th Details */}
          <h3 className="section-heading">12th Details</h3>
          <div className="input-group">
            <label className="label">College Name</label>
            <input
              {...register("inter_college", { required: "College name is required" })}
              className={`input-field ${errors.inter_college ? "invalid" : ""}`}
            />
            {errors.inter_college && <p className="error animate-error">{errors.inter_college.message}</p>}
          </div>

          <div className="grid grid-col-2 gap-4">
            <div className="input-group">
              <label className="label">Percentage</label>
              <input
                type="number"
                step="0.01"
                {...register("inter_percentage", { 
                  required: "Percentage is required",
                  min: { value: 0, message: "Invalid percentage" },
                  max: { value: 100, message: "Percentage cannot exceed 100" }
                })}
                className={`input-field ${errors.inter_percentage ? "invalid" : ""}`}
              />
              {errors.inter_percentage && <p className="error animate-error">{errors.inter_percentage.message}</p>}
            </div>

            <div className="input-group">
              <label className="label">Passing Year</label>
              <input
                type="number"
                {...register("inter_year", { 
                  required: "Passing year is required",
                  min: { value: 1900, message: "Invalid year" },
                  max: { value: new Date().getFullYear(), message: "Year cannot be in future" }
                })}
                className={`input-field ${errors.inter_year ? "invalid" : ""}`}
              />
              {errors.inter_year && <p className="error animate-error">{errors.inter_year.message}</p>}
            </div>
          </div>

          {/* 10th Details */}
          <h3 className="section-heading">10th Details</h3>
          <div className="input-group">
            <label className="label">School Name</label>
            <input
              {...register("school_name", { required: "School name is required" })}
              className={`input-field ${errors.school_name ? "invalid" : ""}`}
            />
            {errors.school_name && <p className="error animate-error">{errors.school_name.message}</p>}
          </div>

          <div className="grid grid-col-2 gap-4">
            <div className="input-group">
              <label className="label">Percentage</label>
              <input
                type="number"
                step="0.01"
                {...register("school_percentage", { 
                  required: "Percentage is required",
                  min: { value: 0, message: "Invalid percentage" },
                  max: { value: 100, message: "Percentage cannot exceed 100" }
                })}
                className={`input-field ${errors.school_percentage ? "invalid" : ""}`}
              />
              {errors.school_percentage && <p className="error animate-error">{errors.school_percentage.message}</p>}
            </div>

            <div className="input-group">
              <label className="label">Passing Year</label>
              <input
                type="number"
                {...register("school_year", { 
                  required: "Passing year is required",
                  min: { value: 1900, message: "Invalid year" },
                  max: { value: new Date().getFullYear(), message: "Year cannot be in future" }
                })}
                className={`input-field ${errors.school_year ? "invalid" : ""}`}
              />
              {errors.school_year && <p className="error animate-error">{errors.school_year.message}</p>}
            </div>
          </div>

          {/* Agreement */}
          <div className="checkbox-group">
            <label className="checkbox-label">
              <input
                type="checkbox"
                onChange={(e) => setIsChecked(e.target.checked)}
                className="checkbox-input"
              />
              <span>I agree to the terms and conditions</span>
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className={`submit-button ${isSubmitting ? "submitting" : ""}`}
            disabled={!isChecked || isSubmitting}
          >
            {isSubmitting ? "Registering..." : "Register"}
          </button>
        </form>
      </div>
    </div>
  );
}