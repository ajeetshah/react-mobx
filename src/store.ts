import { decorate, observable, action, computed } from "mobx";

class Store {
  reviewList = [
    { review: "This is a nice article", stars: 2 },
    { review: "A lovely review", stars: 4 },
  ];
  foo = "bar";

  addFoo(e) {
    this.foo = e;
  }

  addReview(e) {
    this.reviewList.push(e);
  }

  get reviewCount() {
    return this.reviewList.length;
  }

  get averageScore() {
    let avr = 0;
    this.reviewList.map((e) => (avr += e.stars));
    return Math.round((avr / this.reviewList.length) * 100) / 100;
  }
}

class AuthStore {
  @observable authenticating = false;

  @observable authenticated = false;

  @observable user = { user: "defaukt_user", role: "default_role" };

  @observable reviewList = [
    { review: "This is a nice article", stars: 2 },
    { review: "A lovely review", stars: 4 },
  ];

  @action.bound
  addReview(e) {
    console.debug(e);
    this.reviewList.push(e);
  }

  @action.bound
  authenticate = async (token) => {
    console.debug(token);
    sessionStorage.setItem("STORAGE_AUTH_TOKEN_KEY", token);
    this.authenticating = true;
    try {
      const data = { user: "new user", role: "new role" };
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
