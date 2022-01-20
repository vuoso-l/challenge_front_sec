import Swal from "sweetalert2";

const SweetAlert = {
  messageError: (text) => {
    Swal.fire({
      title: "Ooops! Ocurrió un error!",
      text,
      icon: "error",
      confirmButtonColor: "#ff0000",
      confirmButtonText: "OK",
      toast: true,
    });
  },

  messageOk: (title, text) => {
    Swal.fire({
        title,
        text,
        icon: "success",
        confirmButtonColor: "#3085d6",
        confirmButtonText: "OK",
        toast: true,
      });
  },
};

export default SweetAlert;
