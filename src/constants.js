export const quizeRules = {
  title: {
    required: { value: true, message: 'Quize name is empty  ' },
    minLength: { value: 3, message: 'Length must be more than 3 symbols ' },
    maxLength: { value: 15, message: 'Length must be less than 15 symbols ' },
  },
  description: {
    required: { value: true, message: 'Description is empty  ' },
    minLength: { value: 10, message: 'Length must be more than 10 symbols ' },
    maxLength: { value: 1000, message: 'Length must be less than 100 symbols ' },
  },
  img: {
    required: { value: true, message: 'Image URL is empty  ' },
    minLength: { value: 3, message: 'Length must be more than 3 symbols ' },
    validate: (value) => {
      const pattern = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
      return pattern.test(value) || 'Invalid URL format';
    },
  },
};
