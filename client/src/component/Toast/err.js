import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const ErrorToast = (msg) => {
  return toast.error(msg, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });
};

export default ErrorToast;
