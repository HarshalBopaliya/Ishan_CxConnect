import {
  LayoutDashboard,
  FileBarChart,
  Users,
  Megaphone,
  ListChecks,
  Filter,
  PhoneIncoming,
  Radio,
  HardDrive,
  Headphones,
  MessageSquare,
  UserCircle,
  Users2,
  Box,
  Settings,
  Ticket,
  Network,
  FileText,
} from "lucide-react";
import { routes } from "../routers/routes";

export const SideBarItems = [
  {
    id: "dashboard",
    path: routes.dashboard,
    label: "Dashboard",
    icon: LayoutDashboard,
    children: [
      {
        id: "dialer",
        path: routes.dashboard_dialer,
        label: "Dialer",
      },
      {
        id: "realtime-report",
        path: routes.dashboard_real_time_report,
        label: "Real-Time",
      },
      {
        id: "omnichannel-dashboard",
        path: routes.dashboard_omni_dashboard,
        label: "Omni",
      },
      {
        id: "qc-dashboard",
        path: routes.dashboard_qc_dashboard,
        label: "QC Dashboard",
      },
    ],
  },
  {
    id: "report",
    path: routes.report,
    label: "Reports",
    icon: FileBarChart,
  },
  {
    id: "users",
    path: routes.users,
    label: "Users",
    icon: Users,
  },
  {
    id: "campaigns",
    path: routes.campaigns,
    label: "Campaigns",
    icon: Megaphone,
  },
  {
    id: "list-lead",
    path: routes.listlead,
    label: "List & Lead",
    icon: ListChecks,
    children: [
      {
        id: "list",
        path: routes.listlead_list,
        label: "List",
      },
      {
        id: "lead",
        path: routes.listlead_lead,
        label: "Lead",
      },
      {
        id: "list-lead-advancesearch",
        path: routes.listlead_serach_for_a_lead,
        label: "Search For a Lead",
      },
      {
        id: "dnc",
        path: routes.listlead_dnc_numbers,
        label: "DNC Numbers",
      },
      {
        id: "drop-list",
        path: routes.listlead_droplist,
        label: "Drop List",
      },
      {
        id: "templates",
        path: routes.listlead_template,
        label: "Template",
      },
      {
        id: "bulk-lead-movement",
        path: routes.listlead_bulk_lead_movement,
        label: "Bulk Lead Movement",
      },
      {
        id: "update-lead-tools",
        path: routes.listlead_bulk_lead_status_change,
        label: "Bulk Lead Status Change",
      },
      {
        id: "payment-utility",
        path: routes.listlead_payment_utility,
        label: "Payment Utility",
      },
    ],
  },
  {
    id: "scripts",
    path: routes.scripts,
    label: "Scripts",
    icon: FileText,
  },
  {
    id: "filters",
    path: routes.filters,
    label: "Filters",
    icon: Filter,
  },
  {
    id: "inbound",
    path: routes.inbound,
    label: "Inbound",
    icon: PhoneIncoming,
    children: [
      {
        id: "in-group",
        path: routes.inbound_in_groups,
        label: "In-Groups",
      },
      {
        id: "did",
        path: routes.inbound_dids,
        label: "DIDs",
      },
      {
        id: "call-menu",
        path: routes.inbound_call_menu,
        label: "Call Menus",
      },
      {
        id: "filter-phone-group",
        path: routes.inbound_filter_phone_group,
        label: "Filter Phone Group",
      },
      {
        id: "email-group",
        path: routes.inbound_email_group,
        label: "Email Group",
      },
      {
        id: "chat-group",
        path: routes.inbound_chat_group,
        label: "Chat Group",
      },
      {
        id: "ra-extension",
        path: routes.inbound_ra_extension,
        label: "RA Extension",
      },
    ],
  },
  {
    id: "remote-agents",
    path: routes.broadcasting_agents,
    label: "Broadcasting Agent",
    icon: Radio,
    children: [
      {
        id: "show-remote-agents",
        path: routes.broadcasting_agents_show_broadcasting_agent,
        label: "Show Broadcasting Agent",
      },
      {
        id: "show-extension-groups",
        path: routes.broadcasting_agents_show_extension_groups,
        label: "Show Extension Groups",
      },
    ],
  },
  {
    id: "recording",
    path: routes.recording,
    label: "Recording",
    icon: HardDrive,
    children: [
      {
        id: "recording-logs",
        path: routes.recording_recording_logs,
        label: "Recording Logs",
      },
    ],
  },
  {
    id: "omni-channel",
    path: routes.omnichannel,
    label: "Omnichannel",
    icon: Headphones,
    children: [
      {
        id: "email",
        path: routes.omnichannel_email,
        label: "Email",
      },
      {
        id: "messaging",
        path: routes.omnichannel_messaging,
        label: "Messaging",
      },
      {
        id: "facebook",
        path: routes.omnichannel_facebook,
        label: "Facebook",
      },
      {
        id: "twitter",
        path: routes.omnichannel_twitter,
        label: "Twitter",
      },
    ],
  },
  {
    id: "message-board",
    path: routes.message_board,
    label: "Message Board",
    icon: MessageSquare,
  },
  {
    id: "sticky-agents",
    path: routes.sticky_agent,
    label: "Sticky Agent",
    icon: UserCircle,
  },
  {
    id: "user-group",
    path: routes.user_group,
    label: "User Group",
    icon: Users2,
  },
  {
    id: "bucket",
    path: routes.bucket,
    label: "Bucket",
    icon: Box,
  },
  {
    id: "admin",
    path: routes.admin,
    label: "Admin",
    icon: Settings,
  },
  {
    id: "ticket",
    path: routes.ticket,
    label: "Ticket",
    icon: Ticket,
    children: [
      {
        id: "ticket-dashboard",
        path: routes.ticket_ticket_dashboard,
        label: "Ticket Dashboard",
      },
      {
        id: "reports",
        path: routes.ticket_report,
        label: "Report",
      },
      {
        id: "department",
        path: routes.ticket_department,
        label: "Department",
      },
      {
        id: "tag",
        path: routes.ticket_tag,
        label: "Tag",
      },
      {
        id: "canned-response",
        path: routes.ticket_canned_response,
        label: "Canned Response",
      },
      {
        id: "status",
        path: routes.ticket_status,
        label: "Status",
      },
      {
        id: "priority",
        path: routes.ticket_priority,
        label: "Priority",
      },
      {
        id: "mail",
        path: routes.ticket_channel_mail_config,
        label: "Channel Mail Config",
      },
      {
        id: "whatsapp",
        path: routes.ticket_channel_whatsapp_config,
        label: "Channel Whatsapp Config",
      },
      {
        id: "web",
        path: routes.ticket_channel_web_config,
        label: "Channel Web Config",
      },
      {
        id: "call",
        path: routes.ticket_channel_call_config,
        label: "Channel Call Config",
      },
      {
        id: "field",
        path: routes.ticket_custom_field,
        label: "Custom Field",
      },
      {
        id: "disposition",
        path: routes.ticket_disposition,
        label: "Disposition",
      },
      {
        id: "signature",
        path: routes.ticket_signture,
        label: "Signature",
      },
      {
        id: "sla",
        path: routes.ticket_sla,
        label: "SLA",
      },
      {
        id: "config",
        path: routes.ticket_notification_config,
        label: "Notification Config",
      },
      {
        id: "template",
        path: routes.ticket_notification_template,
        label: "Notification Template",
      },
      {
        id: "business-hour",
        path: routes.ticket_business_hour,
        label: "Business Hour",
      },
      {
        id: "auto-response-template",
        path: routes.ticket_auto_response_template,
        label: "Auto Respone Template",
      },
      {
        id: "assign-reassing-tickets",
        path: routes.ticket_assign_reassign_tasks,
        label: "Assign/Reassign Tickets",
      },
    ],
  },
  {
    id: "web-api",
    path: routes.web_api,
    label: "Web Api",
    icon: Network,
  },
];
