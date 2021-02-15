import auth0 from "../../utils/auth0";

export default async function login(req, res) {
  try {
    await auth0.handleLogin(req, res, {
      authParams: {},
      redirectTo: "http://localhost:3000/home",
    });
  } catch (error) {
    console.error(error);
    res.status(error.status || 400).end(error.message);
  }
}
