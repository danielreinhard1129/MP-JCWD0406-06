
import { Button, Label, Select, TextInput } from 'flowbite-react';
import { useFormik } from 'formik';
import { IForm } from '../../../../types/form.type';
import { validationSchema } from './validationSchema';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';


interface RegisterFormProps {
  onSubmit: (values: IForm) => void;
}

export const RegisterForm = ({ onSubmit }: RegisterFormProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const formik = useFormik({
    initialValues: {
      fullName: "",
      password: "",
      email: "",
      contact: "",
      address: "",
      referral_number: "",
      roleId: "",
      confirmPassword: "",
    },
    validationSchema,
    onSubmit,
  });

  return (
    <form
      className="flex max-w-md flex-col gap-4 p-5"
      onSubmit={formik.handleSubmit}
    >
      <div className="flex justify-center items-center">
        <h1 className="text-slate-700 font-bold text-2xl ">Register Here</h1>
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="fullName" value="Full Name" />
        </div>
        <TextInput
          value={formik.values.fullName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          id="fullName"
          type="text"
          required
          shadow
        />
        {formik.errors.fullName && formik.touched.fullName && (
          <p className="text-red-500 text-sm mt-1">{formik.errors.fullName}</p>
        )}
      </div>
     

      <div className="md:flex gap-2 flex-col md:flex-row">

          <label htmlFor="email" className="mb-2 block">
            Email
          </label>
          <TextInput
            type="email"
            id="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}

          />
          {formik.errors.email && formik.touched.email && (
            <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>
          )}
        </div>


        <div className="w-full md:w-1/2">
          <div className="mb-2 block">
            <Label htmlFor="contact" value="Contact" />
          </div>
          <PhoneInput
            international
            defaultCountry="ID"
            value={formik.values.contact}
            onChange={(value) => formik.setFieldValue("contact", value)}
            onBlur={formik.handleBlur}
            id="contact"
            name="contact"
            className="rounded-sm"
          />
          {formik.errors.contact && formik.touched.contact && (
            <p className="text-red-500 text-sm mt-1">{formik.errors.contact}</p>
          )}
        </div>
      </div>
      <div className="md:flex gap-2 flex-col md:flex-row">
        <div className="w-full md:w-1/2">
          <div className="mb-2 block">
            <Label htmlFor="password" value="Your password" />
          </div>
          <div className="relative">
            <TextInput
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              id="password"
              type={showPassword ? 'text' : 'password'}
              required
              shadow
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 pr-3 flex items-center"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEye /> : <FaEyeSlash />}
            </button>
          </div>
          {formik.errors.password && formik.touched.password && (
            <p className="text-red-500 text-sm mt-1">
              {formik.errors.password}
            </p>
          )}
        </div>
        <div className="w-full md:w-1/2">
          <div className="mb-2 block">
            <Label htmlFor="confirmPassword" value="Confirm Password" />
          </div>
          <div className="relative">
            <TextInput
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              id="confirmPassword"
              type={showConfirmPassword ? 'text' : 'password'}
              required
              shadow
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 pr-3 flex items-center"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? <FaEye /> : <FaEyeSlash />}
            </button>
          </div>
          {formik.errors.confirmPassword && formik.touched.confirmPassword && (
            <p className="text-red-500 text-sm mt-1">
              {formik.errors.confirmPassword}
            </p>
          )}
        </div>
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="address" value="Your Address" />
        </div>
        <TextInput
          value={formik.values.address}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          id="address"
          type="text"
          required
          shadow
        />
        {formik.errors.address && formik.touched.address && (
          <p className="text-red-500 text-sm mt-1">{formik.errors.address}</p>
        )}
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="referral_number" value="Referral Number (Optional)" />
        </div>
        <TextInput
          value={formik.values.referral_number}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          id="referral_number"
          type="text"
          shadow
        />
        {formik.errors.referral_number && formik.touched.referral_number && (
          <p className="text-red-500 text-sm mt-1">
            {formik.errors.referral_number}
          </p>
        )}
      </div>
      <div className="block">
        <Label htmlFor="roleId" value="Role" />
      </div>
      <Select
        id="roleId"
        required
        value={formik.values.roleId}
        onChange={formik.handleChange}
      >
        <option value="">Select your Role</option>
        <option value={"customer"}>Customer</option>
        <option value={"promotor"}>Promotor</option>
      </Select>
      <Button color="dark" type="submit">
        Submit
      </Button>
    </form>
  );
};
