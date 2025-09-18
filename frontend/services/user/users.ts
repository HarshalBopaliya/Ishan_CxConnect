import type { User } from "../../types/user-table";

const payloadData = {
  success: true,
  data: [
    { UserId: "101", FullName: "smit desai", Status: "active",   UserLevel: "admin", PhoneLogin: "1088", LiveStatus: "available",    Group: "PRESALES" },
    { UserId: "102", FullName: "vivek gangani", Status: "inactive", UserLevel: "agent", PhoneLogin: "1099", LiveStatus: "not available", Group: "PRESALES" },
    { UserId: "103", FullName: "sumit prajapati", Status: "inactive", UserLevel: "admin", PhoneLogin: "1088", LiveStatus: "not available", Group: "PRESALES" },
    { UserId: "105", FullName: "kirtan vyas",   Status: "active",   UserLevel: "agent", PhoneLogin: "1088", LiveStatus: "available",    Group: "PRESALES" },
    { UserId: "106", FullName: "abhishek tiwari", Status: "inactive", UserLevel: "admin", PhoneLogin: "1088", LiveStatus: "available",    Group: "PRESALES" },
  ],
  pagination: {
    totalRecords: 5,
    totalPages: 1,
    currentPage: 1,
    limit: 10,
  },
};

export const fetchUsers = async (payload: {
  pageNo: number;
  noOfRecords: number;
}): Promise<{ data: User[]; pagination: any }> => {
  console.log("payload======>",payload)
  const start = (payload.pageNo - 1) * payload.noOfRecords;
  const end = start + payload.noOfRecords;
  const paginatedData = payloadData.data.slice(start, end);

  return {
    data: paginatedData,
    pagination: {
      ...payloadData.pagination,
      currentPage: payload.pageNo,
      limit: payload.noOfRecords,
      totalRecords: payloadData.data.length,
      totalPages: Math.ceil(payloadData.data.length / payload.noOfRecords),
    },
  };
};
