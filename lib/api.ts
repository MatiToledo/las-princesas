export async function sendEmailApi(body: any) {
  return await fetch("/api/contact", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(body),
  });
}
