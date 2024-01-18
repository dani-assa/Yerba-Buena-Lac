import Swal from "sweetalert2";

export const alertConfirm = (title, text, icon, confirmButtonText, action) => {
  Swal.fire({
    title,
    text,
    icon,
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText
  }).then((result) => {
    if (result.isConfirmed) {
      if (typeof action === 'function') {
        action()
      }
      Swal.fire({
        title: "Eliminado",
        text: "Eliminado con exito.",
        icon: "success"
      });
    }
  });
};