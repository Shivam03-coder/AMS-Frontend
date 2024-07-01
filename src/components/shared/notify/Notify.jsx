import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function Notify() {
  return (
    <ToastContainer
      position="top-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
  );
}

export default Notify;
