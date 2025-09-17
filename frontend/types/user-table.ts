export type User = {
    UserId: number;          // remove the ?
    FullName: string;
    Status: { currentStatus: string };
    UserLevel: { role: string };
    PhoneLogin: number;
    LiveStatus: string;
    Group: string;
  };
  