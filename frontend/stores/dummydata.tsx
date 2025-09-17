import { type User } from "../types/user-table";

export const DummyData: User[] = [
  {
    UserId: 101,
    FullName: "smit desai",
    Status:{currentStatus:"active"},
    UserLevel: {role: "admin"} ,
    PhoneLogin: 1088,
    LiveStatus: "available",
    Group: "PRESALES",
  },

  {
    UserId: 102,
    FullName: "vivek gangani",
    Status:{currentStatus:"Inactive"},
    UserLevel: {role: "agent"} ,
    PhoneLogin: 1099,
    LiveStatus: "not available",
    Group: "PRESALES",
  },

  {
    UserId: 103,
    FullName: "sumit prajapati",
    Status:{currentStatus:"Inactive"},
    UserLevel: {role: "admin"} ,
    PhoneLogin: 1088,
    LiveStatus: "not available",
    Group: "PRESALES",
  },

  {
    UserId: 104,
    FullName: "harshal bopaliya",
    Status:{currentStatus:"active"},
    UserLevel: {role: "admin"} ,
    PhoneLogin: 1088,
    LiveStatus: "available",
    Group: "PRESALES",
  },

  {
    UserId: 105,
    FullName: "kirtan vyas",
    Status:{currentStatus:"Inactive"},
    UserLevel: {role: "agent"} ,
    PhoneLogin: 1088,
    LiveStatus: "available",
    Group: "PRESALES",
  },

  {
    UserId: 106,
    FullName: "abhishek tiwari",
    Status:{currentStatus:"active"},
    UserLevel: {role: "agent"} ,
    PhoneLogin: 1088,
    LiveStatus: "available",
    Group: "PRESALES",
  },

];
