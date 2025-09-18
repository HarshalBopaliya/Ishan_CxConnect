import type { Campaign } from "../../types/campaign-table";

const campaignPayload = {
  success: "true",
  data: [
    {
      CampaignId: "CMP001",
      CampaignName: "Summer Promo",
      DialMethod: "Predictive",
      AutoDialLevel: 3,
      Status: "Active",
      Lists: "List_A",
      LeadOrder: "Random",
      UserGroup: "SalesTeam",
      HopperCount: 25,
      CallerID: "+1-800-555-1001",
      Prefix: 1123,
    },
    {
      CampaignId: "CMP002",
      CampaignName: "Winter Deals",
      DialMethod: "Manual",
      AutoDialLevel: 1,
      Status: "Active",
      Lists: "List_B",
      LeadOrder: "ASC",
      UserGroup: "SupportTeam",
      HopperCount: 12,
      CallerID: "+1-800-555-1002",
      Prefix: 1123,
    },
    {
      CampaignId: "CMP003",
      CampaignName: "Flash Sale",
      DialMethod: "Preview",
      AutoDialLevel: 2,
      Status: "Inactive",
      Lists: "List_C",
      LeadOrder: "DESC",
      UserGroup: "Marketing",
      HopperCount: 8,
      CallerID: "+1-800-555-1003",
      Prefix: 1123,
    },
    {
      CampaignId: "CMP004",
      CampaignName: "New Year Blast",
      DialMethod: "Predictive",
      AutoDialLevel: 4,
      Status: "Active",
      Lists: "List_D",
      LeadOrder: "Random",
      UserGroup: "SalesTeam",
      HopperCount: 20,
      CallerID: "+1-800-555-1004",
      Prefix: 1123,
    },
    {
      CampaignId: "CMP005",
      CampaignName: "Spring Offers",
      DialMethod: "Manual",
      AutoDialLevel: 1,
      Status: "Inactive",
      Lists: "List_E",
      LeadOrder: "ASC",
      UserGroup: "SupportTeam",
      HopperCount: 15,
      CallerID: "+1-800-555-1005",
      Prefix: 1123,
    },
    {
      CampaignId: "CMP006",
      CampaignName: "Holiday Special",
      DialMethod: "Preview",
      AutoDialLevel: 2,
      Status: "Active",
      Lists: "List_F",
      LeadOrder: "DESC",
      UserGroup: "Marketing",
      HopperCount: 18,
      CallerID: "+1-800-555-1006",
      Prefix: 1123,
    },
    {
      CampaignId: "CMP007",
      CampaignName: "Black Friday",
      DialMethod: "Predictive",
      AutoDialLevel: 5,
      Status: "Inactive",
      Lists: "List_G",
      LeadOrder: "Random",
      UserGroup: "SalesTeam",
      HopperCount: 30,
      CallerID: "+1-800-555-1007",
      Prefix: 1123,
    },
    {
      CampaignId: "CMP008",
      CampaignName: "Cyber Monday",
      DialMethod: "Manual",
      AutoDialLevel: 2,
      Status: "Inactive",
      Lists: "List_H",
      LeadOrder: "ASC",
      UserGroup: "SupportTeam",
      HopperCount: 10,
      CallerID: "+1-800-555-1008",
      Prefix: 1123,
    },
    {
      CampaignId: "CMP009",
      CampaignName: "Weekend Bonanza",
      DialMethod: "Preview",
      AutoDialLevel: 3,
      Status: "Active",
      Lists: "List_I",
      LeadOrder: "DESC",
      UserGroup: "Marketing",
      HopperCount: 22,
      CallerID: "+1-800-555-1009",
      Prefix: 1123,
    },
    {
      CampaignId: "CMP010",
      CampaignName: "Festival Rush",
      DialMethod: "Predictive",
      AutoDialLevel: 4,
      Status: "Active",
      Lists: "List_J",
      LeadOrder: "Random",
      UserGroup: "SalesTeam",
      HopperCount: 28,
      CallerID: "+1-800-555-1010",
      Prefix: 1123,
    },
  ],
};

export const fetchCampaigns = async (payload: {
  pageNo: number;
  noOfRecords: number;
}): Promise<{ data: Campaign[]; pagination: any }> => {
  console.log("Campaign fetch payload =>", payload);

  const start = (payload.pageNo - 1) * payload.noOfRecords;
  const end = start + payload.noOfRecords;

  const paginatedData = campaignPayload.data.slice(start, end);

  return {
    data: paginatedData,
    pagination: {
      totalRecords: campaignPayload.data.length,
      totalPages: Math.ceil(
        campaignPayload.data.length / payload.noOfRecords
      ),
      currentPage: payload.pageNo,
      limit: payload.noOfRecords,
    },
  };
};
