import type {Metadata} from "next";
import {Space_Grotesk,Sora} from "next/font/google";
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";
import {Providers} from "@/components/Providers";
import {site} from "@/lib/content";
import "./globals.css";
import {Enhancements} from "@/components/Enhancements";
const heading=Space_Grotesk({subsets:["latin"],display:"swap",variable:"--font-heading"});
const body=Sora({subsets:["latin"],display:"swap",variable:"--font-body"});
export const metadata:Metadata={metadataBase:new URL(site.url),title:{default:"Vihaan AI Verse | Learn AI. Apply AI. Amplify Human Potential.",template:"%s | Vihaan AI Verse"},description:"Vihaan AI Verse helps students, businesses and professionals thrive in the age of AI through coaching, websites, apps, marketing and e-books.",openGraph:{type:"website",siteName:site.name,images:[{url:"/images/og-image.png",width:1200,height:630}]},twitter:{card:"summary_large_image",images:["/images/og-image.png"]},icons:{icon:"/icon.svg"}};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="en"><body className={`${heading.variable} ${body.variable}`}><a className="skip-link" href="#main">Skip to content</a><Providers><Header/><Enhancements/><main id="main">{children}</main><Footer/></Providers><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({"@context":"https://schema.org","@type":"EducationalOrganization",name:site.name,url:site.url,email:site.email,telephone:site.phone,description:"AI coaching, digital transformation, websites, apps and digital marketing. Remote collaboration.",sameAs:["https://instagram.com/reachvihaan","https://facebook.com/reachvihaan","https://youtube.com/@reachvihaan"]})}}/></body></html>}
