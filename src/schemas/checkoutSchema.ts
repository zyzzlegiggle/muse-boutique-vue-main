import * as yup from 'yup';

export const checkoutSchema = yup.object({
  email: yup
    .string()
    .trim()
    .required('Email is required')
    .email('Enter a valid email address'),
  fullName: yup
    .string()
    .trim()
    .required('Full name is required')
    .min(3, 'Name must be at least 3 characters'),
  address: yup.string().trim().required('Shipping address is required'),
  city: yup.string().trim().required('City is required'),
  postalCode: yup
    .string()
    .trim()
    .required('Postal code is required')
    .matches(/^\d{5}(-\d{4})?$/, 'Must be a valid zip code (5 digits)'),
  cardNumber: yup
    .string()
    .trim()
    .required('Card number is required')
    .matches(/^\d{16}$/, 'Card number must be 16 digits'),
  expiry: yup
    .string()
    .trim()
    .required('Expiration date is required')
    .matches(/^(0[1-9]|1[0-2])\/?([0-9]{2})$/, 'Use MM/YY format'),
  cvv: yup
    .string()
    .trim()
    .required('CVV is required')
    .matches(/^\d{3,4}$/, 'Must be 3 or 4 digits'),
});

export type CheckoutFormValues = yup.InferType<typeof checkoutSchema>;

