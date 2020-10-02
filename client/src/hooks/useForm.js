import { useLocalStorage } from "./useLocalStorage";

export const useForm = (key, initialValues, cb) => {
  const [values, setValues] = useLocalStorage(key, initialValues);

  const handleChanges = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    if (e) e.preventDefault();
    cb();
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setShowSuccessMessage(true);
  // };

  return [values, handleChanges, handleSubmit];
};
