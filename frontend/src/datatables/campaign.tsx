import { useState } from "react";
import type { ColumnDef } from "@tanstack/react-table";
import DataTable from "../../components/tables";
import { CampaignData } from "../../stores/campaigndata";
import type { Campaign } from "../../types/campaign-table";

export default function CampaignTable() {
  const [data, setData] = useState<Campaign[]>(CampaignData);
  
  const handleStatusChange = (id: string, value: string) => {
    setData(prev =>
      prev.map(campaign => (campaign.CampaignId === id ? { ...campaign, Status: value } : campaign))
    );
  };

  const handleAutoDialChange = (id: string, value: number) => {
    setData(prev =>
      prev.map(campaign => (campaign.CampaignId === id ? { ...campaign, AutoDialLevel: value } : campaign))
    );
  };

  const handleListsChange = (id: string, value: string) => {
    setData(prev =>
      prev.map(campaign => (campaign.CampaignId === id ? { ...campaign, Lists: value } : campaign))
    );
  };

  const handlePaginationText = (to: string, from: string, total: number) => {
    console.log(`Showing ${from} to ${to} of ${total} entries`);
  };

  const allLists = [
    "List_A","List_B","List_C","List_D","List_E",
    "List_F","List_G","List_H","List_I","List_J",
  ];

  const campaignColumns: ColumnDef<Campaign>[] = [
    { header: "Campaign ID", accessorKey: "CampaignId" },
    { header: "Campaign Name", accessorKey: "CampaignName" },
    { header: "Dial Method", accessorKey: "DialMethod" },
    {
      header: "Auto Dial Level",
      cell: ({ row }) => (
        <select
          value={row.original.AutoDialLevel}
          onChange={event => handleAutoDialChange(row.original.CampaignId, Number(event.target.value))}
          className="border rounded px-1 py-0.5"
        >
          {[1, 2, 3, 4, 5].map(lvl => (
            <option key={lvl} value={lvl}>{lvl}</option>
          ))}
        </select>
      ),
    },
    {
      header: "Status",
      cell: ({ row }) => (
        <select
          value={row.original.Status}
          onChange={event => handleStatusChange(row.original.CampaignId, event.target.value)}
          className="border rounded px-1 py-0.5"
        >
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
      ),
    },
    {
      header: "Lists",
      cell: ({ row }) => (
        <select
          value={row.original.Lists}
          onChange={event => handleListsChange(row.original.CampaignId, event.target.value)}
          className="border rounded px-1 py-0.5"
        >
          {allLists.map(list => (
            <option key={list} value={list}>{list}</option>
          ))}
        </select>
      ),
    },
    { header: "Lead Order", accessorKey: "LeadOrder" },
    { header: "User Group", accessorKey: "UserGroup" },
    { header: "Hopper Count", accessorKey: "HopperCount" },
    { header: "Caller ID", accessorKey: "CallerID" },
    { header: "Prefix", accessorKey: "Prefix" },
  ];

  const refetch = () => {
    console.log("Refetch triggered");
  };

  return (
    <div className="space-y-3">
      <DataTable
        columns={campaignColumns}
        data={data}
        sorting={{ enable: true }}
        pagination={{
          recordsToShow: [2, 5, 10, 25, 50],
          enable: true,
          textToShow: handlePaginationText
        }}
        refetch={refetch}
      />
    </div>
  );
}
