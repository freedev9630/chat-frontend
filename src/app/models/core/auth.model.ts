export namespace AuthModel {
  export interface UserTokenData {
    tokenType: 'refresh' | 'token' | '';
    iat:       number;
    exp:       number;
    user:      User;
  }

  export interface User {
    id:       number;
    firstName: string;
    lastName:  string;
    email:     string;
    password:  string;
    img?: string;
    role:      'admin' | 'user' | '';
    active:    boolean;
}

  export const userTokenData: UserTokenData = {
    tokenType: '',
    user: {
      id: 0,
      firstName: '',
      lastName:  '',
      email: '',
      password: '',
      role: '',
      active: false
    },
    iat: 0,
    exp: 0
  }
}
