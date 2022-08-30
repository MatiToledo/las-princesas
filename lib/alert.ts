import Swal, { SweetAlertIcon } from "sweetalert2";

export function sweetAlert(title: string, icon: SweetAlertIcon) {
  Swal.fire({
    title,
    icon,
    background: "#2e2e2e",
    color: "#f1f1f1",
    timer: 3000,
    showConfirmButton: false,
    timerProgressBar: true,
  });
}
