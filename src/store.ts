import { decorate, observable, action, computed } from "mobx";

class Store {
  foo = "bar";

  addFoo(e) {
    this.foo = e;
  }
}

class AuthStore {
  @observable authenticating = false;
  @observable authenticated = false;
  @observable user = { user: "default_user", role: "default_role" };

  @action.bound
  authenticate = async (token) => {
    console.debug("token", token);
    sessionStorage.setItem("STORAGE_AUTH_TOKEN_KEY", token);
    this.authenticating = true;
    try {
      const data = { user: "new user", role: "new role" + token };
      this.user = data;
      this.authenticated = true;
    } catch (e) {
      this.user = null;
      this.authenticated = false;
      console.error(e);
    } finally {
      this.authenticating = false;
    }
  };
}

export default AuthStore;
