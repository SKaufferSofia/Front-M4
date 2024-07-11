import Swal, { SweetAlertIcon } from "sweetalert2";

export const formatOrderDateTime = (dateStr: string) => {
  const date = new Date(dateStr);

  const optionsDate: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  const formattedDate = date.toLocaleDateString("en-US", optionsDate);

  return `${formattedDate}`;
};

export const alertForm = (
  icon: SweetAlertIcon,
  title: string,
  text: string,
  iconColor: string
) => {
  Swal.fire({
    icon,
    title,
    text,
    width: "auto",
    heightAuto: true,
    timer: 2200,
    timerProgressBar: true,
    showConfirmButton: false,
    iconColor,
    backdrop: "rgba(0, 0, 0, 0.8)",
  });
};

export const alertAcept = (
  icon: SweetAlertIcon,
  text: string,
  iconColor: string
) => {
  return Swal.fire({
    icon,
    text,
    width: "auto",
    heightAuto: true,
    confirmButtonText: "Accept",
    confirmButtonColor: "#E91E63",
    iconColor,
    backdrop: "rgba(0, 0, 0, 0.8)",
  });
};

export const alertTime = (
  icon: SweetAlertIcon,
  title: string,
  iconColor: string
) => {
  Swal.fire({
    icon,
    title,
    width: "auto",
    heightAuto: true,
    timer: 1600,
    timerProgressBar: true,
    showConfirmButton: false,
    iconColor,
    backdrop: "rgba(0, 0, 0, 0.8)",
  });
};

export const alertQuestion = (
  icon: SweetAlertIcon,
  title: string,
  text: string,
  iconColor: string,
  confirmButtonText: string
) => {
  return Swal.fire({
    icon,
    title,
    text,
    width: "auto",
    heightAuto: true,
    showCancelButton: true,
    confirmButtonText,
    confirmButtonColor: "green",
    cancelButtonColor: "red",
    iconColor,
    backdrop: "rgba(0, 0, 0, 0.8)",
  });
};
