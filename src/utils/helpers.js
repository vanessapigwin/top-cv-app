export default function extractFormData(form) {
  const formData = new FormData(form);
  const rawData = Object.fromEntries(formData);
  return rawData;
}
