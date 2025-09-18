const payloadData = {
    "success": true,
    "data": [
      {
        "id": 1,
        "name": "John Doe",
        "email": "john@example.com",
        "role": "Admin",
        "createdAt": "2025-09-17T10:00:00Z"
      },
      {
        "id": 2,
        "name": "Jane Smith",
        "email": "jane@example.com",
        "role": "User",
        "createdAt": "2025-09-16T15:30:00Z"
      }
    ],
    "pagination": {
      "totalRecords": 52,
      "totalPages": 6,
      "currentPage": 1,
      "limit": 10
    }
  }
  

export const fetchUsers = (payload: {pageNo: number, noOfRecords: number, searchKeyword: string,sortField:string,sortOrder:string}): {data: any[], pagination: any} => {
   console.log("Payload =====>",payload)
    return { data: payloadData.data, pagination: payloadData.pagination}
}