import router from "@/router";

export function authGuard(to) {
  let token = localStorage.getItem("token");
  // let token = JSON.parse(localStorage.getItem("token"));
  // let token = JSON.parse(user);
  console.log("TOKEN:", token);
  if (token) {
    return true;
  }

  /*****************************/
  /** si il n'y a pas de token alors redirection home */
  router.push("/login");
}
