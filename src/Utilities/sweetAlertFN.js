import Swal from "sweetalert2";

export const sweetSuccessMessage = (message) => {
  return Swal.fire({
    title: `${message}`,
    icon: "success",
    draggable: true,
    showConfirmButton: false,
    timer: 1500,
  });
};

export const sweetErrorMessage = (errorMessage) => {
  return Swal.fire({
    icon: "error",
    title: "Oops...",
    text: `${errorMessage}`,
  });
};
