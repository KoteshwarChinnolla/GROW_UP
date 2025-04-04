import { useForm } from "react-hook-form";
import { useState } from "react";
import axios from 'axios';
import styles from './Form.module.css';

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
    <div className={styles.formMainContainer}>
      <div className={styles.formContainer}>
        <h2 className={`${styles.textXl} ${styles.fontBold} ${styles.textCenter} ${styles.textBlue800} ${styles.mb4} ${styles.animateFadeIn}`}>
          Job Portal Registration
        </h2>

        {submitError && (
          <div className={`${styles.errorMessage} ${styles.animateErrorSlide} ${styles.mb4}`}>
            {submitError}
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className={styles.formSpace}>
          {/* Personal Details */}
          <div className={`${styles.grid} ${styles.gridCol2} ${styles.gap4}`}>
            <div className={styles.inputGroup}>
              <label className={styles.label}>Full Name</label>
              <input
                {...register("name", { required: "Name is required" })}
                className={`${styles.inputField} ${errors.name ? styles.invalid : ""}`}
              />
              {errors.name && <p className={`${styles.error} ${styles.animateError}`}>{errors.name.message}</p>}
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.label}>Email</label>
              <input
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+\.\S+$/,
                    message: "Invalid email address",
                  },
                })}
                className={`${styles.inputField} ${errors.email ? styles.invalid : ""}`}
              />
              {errors.email && <p className={`${styles.error} ${styles.animateError}`}>{errors.email.message}</p>}
            </div>
          </div>

          <div className={`${styles.grid} ${styles.gridCol2} ${styles.gap4}`}>
            <div className={styles.inputGroup}>
              <label className={styles.label}>Password</label>
              <input
                type="password"
                {...register("password", { 
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters"
                  }
                })}
                className={`${styles.inputField} ${errors.password ? styles.invalid : ""}`}
              />
              {errors.password && <p className={`${styles.error} ${styles.animateError}`}>{errors.password.message}</p>}
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.label}>Confirm Password</label>
              <input
                type="password"
                {...register("confirmPassword", {
                  validate: value => 
                    value === password || "Passwords do not match"
                })}
                className={`${styles.inputField} ${errors.confirmPassword ? styles.invalid : ""}`}
              />
              {errors.confirmPassword && <p className={`${styles.error} ${styles.animateError}`}>{errors.confirmPassword.message}</p>}
            </div>
          </div>

          <div className={`${styles.grid} ${styles.gridCol2} ${styles.gap4}`}>
            <div className={styles.inputGroup}>
              <label className={styles.label}>Phone Number</label>
              <input
                {...register("phone", {
                  required: "Phone number is required",
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: "Invalid phone number"
                  }
                })}
                className={`${styles.inputField} ${errors.phone ? styles.invalid : ""}`}
              />
              {errors.phone && <p className={`${styles.error} ${styles.animateError}`}>{errors.phone.message}</p>}
            </div>
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>Address</label>
            <textarea
              {...register("address", { required: "Address is required" })}
              className={`${styles.inputField} ${errors.address ? styles.invalid : ""}`}
              rows="4"
            ></textarea>
            {errors.address && <p className={`${styles.error} ${styles.animateError}`}>{errors.address.message}</p>}
          </div>

          {/* B.Tech Details */}
          <h3 className={styles.sectionHeading}>B.Tech Details</h3>
          <div className={styles.inputGroup}>
            <label className={styles.label}>College Name</label>
            <input
              {...register("btech_college", { required: "College name is required" })}
              className={`${styles.inputField} ${errors.btech_college ? styles.invalid : ""}`}
            />
            {errors.btech_college && <p className={`${styles.error} ${styles.animateError}`}>{errors.btech_college.message}</p>}
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>College Address</label>
            <input
              {...register("btech_college_address", { required: "College address is required" })}
              className={`${styles.inputField} ${errors.btech_college_address ? styles.invalid : ""}`}
            />
            {errors.btech_college_address && <p className={`${styles.error} ${styles.animateError}`}>{errors.btech_college_address.message}</p>}
          </div>

          <div className={`${styles.grid} ${styles.gridCol2} ${styles.gap4}`}>
            <div className={styles.inputGroup}>
              <label className={styles.label}>Branch</label>
              <input
                {...register("btech_branch", { required: "Branch is required" })}
                className={`${styles.inputField} ${errors.btech_branch ? styles.invalid : ""}`}
              />
              {errors.btech_branch && <p className={`${styles.error} ${styles.animateError}`}>{errors.btech_branch.message}</p>}
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.label}>CGPA</label>
              <input
                type="number"
                step="0.01"
                {...register("btech_cgpa", { 
                  required: "CGPA is required",
                  min: { value: 0, message: "Invalid CGPA" },
                  max: { value: 10, message: "CGPA cannot exceed 10" }
                })}
                className={`${styles.inputField} ${errors.btech_cgpa ? styles.invalid : ""}`}
              />
              {errors.btech_cgpa && <p className={`${styles.error} ${styles.animateError}`}>{errors.btech_cgpa.message}</p>}
            </div>
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>Passing Year</label>
            <input
              type="number"
              {...register("btech_year", { 
                required: "Passing year is required",
                min: { value: 1900, message: "Invalid year" },
                max: { value: new Date().getFullYear()+5, message: "Year cannot be in future" }
              })}
              className={`${styles.inputField} ${errors.btech_year ? styles.invalid : ""}`}
            />
            {errors.btech_year && <p className={`${styles.error} ${styles.animateError}`}>{errors.btech_year.message}</p>}
          </div>

          {/* 12th Details */}
          <h3 className={styles.sectionHeading}>12th Details</h3>
          <div className={styles.inputGroup}>
            <label className={styles.label}>College Name</label>
            <input
              {...register("inter_college", { required: "College name is required" })}
              className={`${styles.inputField} ${errors.inter_college ? styles.invalid : ""}`}
            />
            {errors.inter_college && <p className={`${styles.error} ${styles.animateError}`}>{errors.inter_college.message}</p>}
          </div>

          <div className={`${styles.grid} ${styles.gridCol2} ${styles.gap4}`}>
            <div className={styles.inputGroup}>
              <label className={styles.label}>Percentage</label>
              <input
                type="number"
                step="0.01"
                {...register("inter_percentage", { 
                  required: "Percentage is required",
                  min: { value: 0, message: "Invalid percentage" },
                  max: { value: 100, message: "Percentage cannot exceed 100" }
                })}
                className={`${styles.inputField} ${errors.inter_percentage ? styles.invalid : ""}`}
              />
              {errors.inter_percentage && <p className={`${styles.error} ${styles.animateError}`}>{errors.inter_percentage.message}</p>}
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.label}>Passing Year</label>
              <input
                type="number"
                {...register("inter_year", { 
                  required: "Passing year is required",
                  min: { value: 1900, message: "Invalid year" },
                  max: { value: new Date().getFullYear(), message: "Year cannot be in future" }
                })}
                className={`${styles.inputField} ${errors.inter_year ? styles.invalid : ""}`}
              />
              {errors.inter_year && <p className={`${styles.error} ${styles.animateError}`}>{errors.inter_year.message}</p>}
            </div>
          </div>

          {/* 10th Details */}
          <h3 className={styles.sectionHeading}>10th Details</h3>
          <div className={styles.inputGroup}>
            <label className={styles.label}>School Name</label>
            <input
              {...register("school_name", { required: "School name is required" })}
              className={`${styles.inputField} ${errors.school_name ? styles.invalid : ""}`}
            />
            {errors.school_name && <p className={`${styles.error} ${styles.animateError}`}>{errors.school_name.message}</p>}
          </div>

          <div className={`${styles.grid} ${styles.gridCol2} ${styles.gap4}`}>
            <div className={styles.inputGroup}>
              <label className={styles.label}>Percentage</label>
              <input
                type="number"
                step="0.01"
                {...register("school_percentage", { 
                  required: "Percentage is required",
                  min: { value: 0, message: "Invalid percentage" },
                  max: { value: 100, message: "Percentage cannot exceed 100" }
                })}
                className={`${styles.inputField} ${errors.school_percentage ? styles.invalid : ""}`}
              />
              {errors.school_percentage && <p className={`${styles.error} ${styles.animateError}`}>{errors.school_percentage.message}</p>}
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.label}>Passing Year</label>
              <input
                type="number"
                {...register("school_year", { 
                  required: "Passing year is required",
                  min: { value: 1900, message: "Invalid year" },
                  max: { value: new Date().getFullYear(), message: "Year cannot be in future" }
                })}
                className={`${styles.inputField} ${errors.school_year ? styles.invalid : ""}`}
              />
              {errors.school_year && <p className={`${styles.error} ${styles.animateError}`}>{errors.school_year.message}</p>}
            </div>
          </div>

          {/* Agreement */}
          <div className={styles.checkboxGroup}>
            <label className={styles.checkboxLabel}>
              <input
                type="checkbox"
                onChange={(e) => setIsChecked(e.target.checked)}
                className={styles.checkboxInput}
              />
              <span>I agree to the terms and conditions</span>
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className={`${styles.submitButton} ${isSubmitting ? styles.submitting : ""}`}
            disabled={!isChecked || isSubmitting}
          >
            {isSubmitting ? "Registering..." : "Register"}
          </button>
        </form>
      </div>
    </div>
  );
}