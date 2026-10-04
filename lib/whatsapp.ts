import {site} from "@/lib/content";
export const whatsapp=(text="Hi Vihaan AI Verse, I found you on your website and would like to know more.")=>`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
export const whatsappUrl=whatsapp;
export type Enquiry={name:string;phone:string;email?:string;service?:string;date?:string;message?:string};
export function buildWhatsAppMessage(e:Enquiry){const lines=[`Hi ${site.name}! I'd like to enquire.`,"",`*Name:* ${e.name.trim()}`,`*Phone:* ${e.phone.trim()}`];if(e.email?.trim())lines.push(`*Email:* ${e.email.trim()}`);if(e.service?.trim())lines.push(`*Interested in:* ${e.service.trim()}`);if(e.date?.trim())lines.push(`*Preferred date/time:* ${e.date.trim()}`);if(e.message?.trim())lines.push("",`*Message:* ${e.message.trim()}`);lines.push("","_Sent from the website_");return lines.join("\n")}
