const rules = {
  required: (value, error) => {
    if (value && value.trim()) {
      return '';
    }
    return error || 'required';
  },
  max: (value) => {
    if (value && value.trim()) {
      return '';
    }
    return 'required';
  },

};

export default rules;
