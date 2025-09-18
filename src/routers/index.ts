import { routes } from "./routes";

import Dialer from "../pages/Dialer";
import RealTimeReport from "../pages/RealTimeReport";
import OmniDashboard from "../pages/OmniDashboard";
import QcDashboard from "../pages/QcDashboard";
import Reports from "../pages/Reports";
import Users from "../pages/Users";
import Campaigns from "../pages/Campaigns";
import Dashboard from "../pages/Dashboard";
import ListAndLead from "../pages/ListAndLead";
import List from "../pages/List";
import Lead from "../pages/Lead";
import LeadSearch from "../pages/LeadSearch";
import DncNumbers from "../pages/DncNumbers";
import DropList from "../pages/DropList";
import Templates from "../pages/Templates";
import BulkLead from "../pages/BulkLead";
import BulkLeadStatus from "../pages/BulkLeadStatus";
import PaymentUtility from "../pages/PaymentUtility";
import Scripts from "../pages/Scripts";
import Filters from "../pages/Filters";
import Inbound from "../pages/Inbound";
import InboundInGroups from "../pages/InboundInGroups";
import InboundDids from "../pages/InboundDids";
import InboundCallMenu from "../pages/InboundCallMenu";
import InboundFilterPhoneGroup from "../pages/InboundFilterPhoneGroup";
import InboundEmailGroup from "../pages/InboundEmailGroup";
import InboundChatGroup from "../pages/InboundChatGroup";
import InboundRaExtension from "../pages/InboundRaExtension";
import BroadcastingAgents from "../pages/BroadcastingAgents";
import ShowBroadcastingAgents from "../pages/ShowBroadcastingAgents";
import ShowExtensionGroups from "../pages/ShowExtensionGroups";
import Recording from "../pages/Recording";
import RecordingLogs from "../pages/RecordingLogs";
import OmniChannel from "../pages/OmniChannel";
import Email from "../pages/Email";
import Messaging from "../pages/Messaging";
import Facebook from "../pages/Facebook";
import Twitter from "../pages/Twitter";
import MessageBoard from "../pages/MessageBoard";
import StickyAgents from "../pages/StickyAgents";
import UserGroup from "../pages/UserGroup";
import Bucket from "../pages/Bucket";
import Admin from "../pages/Admin";
import Webapi from "../pages/Webapi";
import Ticket from "../pages/Ticket";
import TicketDashboard from "../pages/TicketDashboard";
import TicketReport from "../pages/TicketReport";
import TicketDepartment from "../pages/TicketDepartment";
import TicketTag from "../pages/TicketTag";
import TicketCannedResponse from "../pages/TicketCannedResponse";
import TicketStatus from "../pages/TicketStatus";
import TicketPriority from "../pages/TicketPriority";
import TicketMail from "../pages/TicketMail";
import TicketWhatsapp from "../pages/TicketWhatsapp";
import TicketWeb from "../pages/TicketWeb";
import TicketCall from "../pages/TicketCall";
import TicketCustomField from "../pages/TicketCustomField";
import TicketDisposition from "../pages/TicketDisposition";
import TicketSla from "../pages/TicketSla";
import TicketSignature from "../pages/TicketSignature";
import TicketNotificationConfig from "../pages/TicketNotificationConfig";
import TicketNotificationTemplate from "../pages/TicketNotificationTemplate";
import TicketBusinessHour from "../pages/TicketBusinessHour";
import TicketAutoResponse from "../pages/TicketAutoResponse";
import TicketAssignReassign from "../pages/TicketAssignReassign";

export const ROUTES = [
  {
    id: "dashboard",
    label: "Dashboard",
    path: routes.dashboard,
    element: Dashboard,
    children: [
      {
        id: "dialer",
        label: "Dialer",
        path: routes.dashboard_dialer,
        element: Dialer,
      },
      {
        id: "realtime-report",
        label: "Real-Time",
        path: routes.dashboard_real_time_report,
        element: RealTimeReport,
      },
      {
        id: "omnichannel-dashboard",
        label: "Omni",
        path: routes.dashboard_omni_dashboard,
        element: OmniDashboard,
      },
      {
        id: "qc-dashboard",
        label: "QC Dashboard",
        path: routes.dashboard_qc_dashboard,
        element: QcDashboard,
      },
    ],
  },
  {
    id: "report",
    label: "Reports",
    path: routes.report,
    element: Reports,
  },
  {
    id: "users",
    path: routes.users,
    label: "Users",
    element: Users,
  },
  {
    id: "campaigns",
    path: routes.campaigns,
    label: "Campaigns",
    element: Campaigns,
  },
  {
    id: "list-lead",
    path: routes.listlead,
    label: "List & Lead",
    element: ListAndLead,
    children: [
      {
        id: "list",
        path: routes.listlead_list,
        label: "List",
        element: List,
      },
      {
        id: "lead",
        path: routes.listlead_lead,
        label: "Lead",
        element: Lead,
      },
      {
        id: "list-lead-advancesearch",
        path: routes.listlead_serach_for_a_lead,
        label: "Search For a Lead",
        element: LeadSearch,
      },
      {
        id: "dnc",
        path: routes.listlead_dnc_numbers,
        label: "DNC Numbers",
        element: DncNumbers,
      },
      {
        id: "drop-list",
        path: routes.listlead_droplist,
        label: "Drop List",
        element: DropList,
      },
      {
        id: "templates",
        path: routes.listlead_template,
        label: "Template",
        element: Templates,
      },
      {
        id: "bulk-lead-movement",
        path: routes.listlead_bulk_lead_movement,
        label: "Bulk Lead Movement",
        element: BulkLead,
      },
      {
        id: "update-lead-tools",
        path: routes.listlead_bulk_lead_status_change,
        label: "Bulk Lead Status Change",
        element: BulkLeadStatus,
      },
      {
        id: "payment-utility",
        path: routes.listlead_payment_utility,
        label: "Payment Utility",
        element: PaymentUtility,
      },
    ],
  },
  {
    id: "scripts",
    path: routes.scripts,
    label: "Scripts",
    element: Scripts,
  },
  {
    id: "filters",
    path: routes.filters,
    label: "Filters",
    element: Filters,
  },
  {
    id: "inbound",
    path: routes.inbound,
    label: "Inbound",
    element: Inbound,
    children: [
      {
        id: "in-group",
        path: routes.inbound_in_groups,
        label: "In-Groups",
        element: InboundInGroups,
      },
      {
        id: "did",
        path: routes.inbound_dids,
        label: "DIDs",
        element: InboundDids,
      },
      {
        id: "call-menu",
        path: routes.inbound_call_menu,
        label: "Call Menus",
        element: InboundCallMenu,
      },
      {
        id: "filter-phone-group",
        path: routes.inbound_filter_phone_group,
        label: "Filter Phone Group",
        element: InboundFilterPhoneGroup,
      },
      {
        id: "email-group",
        path: routes.inbound_email_group,
        label: "Email Group",
        element: InboundEmailGroup,
      },
      {
        id: "chat-group",
        path: routes.inbound_chat_group,
        label: "Chat Group",
        element: InboundChatGroup,
      },
      {
        id: "ra-extension",
        path: routes.inbound_ra_extension,
        label: "RA Extension",
        element: InboundRaExtension,
      },
    ],
  },
  {
    id: "remote-agents",
    path: routes.broadcasting_agents,
    label: "Broadcasting Agent",
    element: BroadcastingAgents,
    children: [
      {
        id: "show-remote-agents",
        path: routes.broadcasting_agents_show_broadcasting_agent,
        label: "Show Broadcasting Agent",
        element: ShowBroadcastingAgents,
      },
      {
        id: "show-extension-groups",
        path: routes.broadcasting_agents_show_extension_groups,
        label: "Show Extension Groups",
        element: ShowExtensionGroups,
      },
    ],
  },
  {
    id: "recording",
    path: routes.recording,
    label: "Recording",
    element: Recording,
    children: [
      {
        id: "recording-logs",
        path: routes.recording_recording_logs,
        label: "Recording Logs",
        element: RecordingLogs,
      },
    ],
  },
  {
    id: "omni-channel",
    path: routes.omnichannel,
    label: "Omnichannel",
    element: OmniChannel,
    children: [
      {
        id: "email",
        path: routes.omnichannel_email,
        label: "Email",
        element: Email,
      },
      {
        id: "messaging",
        path: routes.omnichannel_messaging,
        label: "Messaging",
        element: Messaging,
      },
      {
        id: "facebook",
        path: routes.omnichannel_facebook,
        label: "Facebook",
        element: Facebook,
      },
      {
        id: "twitter",
        path: routes.omnichannel_twitter,
        label: "Twitter",
        element: Twitter,
      },
    ],
  },
  {
    id: "message-board",
    path: routes.message_board,
    label: "Message Board",
    element: MessageBoard,
  },
  {
    id: "sticky-agents",
    path: routes.sticky_agent,
    label: "Sticky Agent",
    element: StickyAgents,
  },
  {
    id: "user-group",
    path: routes.user_group,
    label: "User Group",
    element: UserGroup,
  },
  {
    id: "bucket",
    path: routes.bucket,
    label: "Bucket",
    element: Bucket,
  },
  {
    id: "admin",
    path: routes.admin,
    label: "Admin",
    element: Admin,
  },
  {
    id: "ticket",
    path: routes.ticket,
    label: "Ticket",
    element: Ticket,
    children: [
      {
        id: "ticket-dashboard",
        path: routes.ticket_ticket_dashboard,
        label: "Ticket Dashboard",
        element: TicketDashboard,
      },
      {
        id: "reports",
        path: routes.ticket_report,
        label: "Report",
        element: TicketReport,
      },
      {
        id: "department",
        path: routes.ticket_department,
        label: "Department",
        element: TicketDepartment,
      },
      {
        id: "tag",
        path: routes.ticket_tag,
        label: "Tag",
        element: TicketTag,
      },
      {
        id: "canned-response",
        path: routes.ticket_canned_response,
        label: "Canned Response",
        element: TicketCannedResponse,
      },
      {
        id: "status",
        path: routes.ticket_status,
        label: "Status",
        element: TicketStatus,
      },
      {
        id: "priority",
        path: routes.ticket_priority,
        label: "Priority",
        element: TicketPriority,
      },
      {
        id: "mail",
        path: routes.ticket_channel_mail_config,
        label: "Channel Mail Config",
        element: TicketMail,
      },
      {
        id: "whatsapp",
        path: routes.ticket_channel_whatsapp_config,
        label: "Channel Whatsapp Config",
        element: TicketWhatsapp,
      },
      {
        id: "web",
        path: routes.ticket_channel_web_config,
        label: "Channel Web Config",
        element: TicketWeb,
      },
      {
        id: "call",
        path: routes.ticket_channel_call_config,
        label: "Channel Call Config",
        element: TicketCall,
      },
      {
        id: "field",
        path: routes.ticket_custom_field,
        label: "Custom Field",
        element: TicketCustomField,
      },
      {
        id: "disposition",
        path: routes.ticket_disposition,
        label: "Disposition",
        element: TicketDisposition,
      },
      {
        id: "signature",
        path: routes.ticket_signture,
        label: "Signature",
        element: TicketSignature,
      },
      {
        id: "sla",
        path: routes.ticket_sla,
        label: "SLA",
        element: TicketSla,
      },
      {
        id: "config",
        path: routes.ticket_notification_config,
        label: "Notification Config",
        element: TicketNotificationConfig,
      },
      {
        id: "template",
        path: routes.ticket_notification_template,
        label: "Notification Template",
        element: TicketNotificationTemplate,
      },
      {
        id: "business-hour",
        path: routes.ticket_business_hour,
        label: "Business Hour",
        element: TicketBusinessHour,
      },
      {
        id: "auto-response-template",
        path: routes.ticket_auto_response_template,
        label: "Auto Respone Template",
        element: TicketAutoResponse,
      },
      {
        id: "assign-reassing-tickets",
        path: routes.ticket_assign_reassign_tasks,
        label: "Assign/Reassign Tickets",
        element: TicketAssignReassign,
      },
    ],
  },
  {
    id: "web-api",
    path: routes.web_api,
    label: "Web Api",
    element: Webapi,
  },
];
