import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type {ReactNode} from "react";
import {whatsapp} from "@/lib/whatsapp";
export function Art({name,alt,portrait=false,priority=false}:{name:string;alt:string;portrait?:boolean;priority?:boolean}){return <div className={`art ${portrait?"portrait":""}`}><Image src={`/images/${name}.webp`} alt={alt} fill sizes="(max-width: 700px) 100vw, 50vw" priority={priority}/></div>}
export function Button({children,href=whatsapp(),secondary=false}:{children:ReactNode;href?:string;secondary?:boolean}){return <Link className={`button ${secondary?"secondary":""}`} href={href}>{children}<ArrowUpRight size={18}/></Link>}
export function Title({eyebrow,title,text}:{eyebrow:string;title:string;text?:string}){return <div className="section-title"><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{text&&<p>{text}</p>}</div>}
export function PageHero({eyebrow,title,text}:{eyebrow:string;title:string;text:string}){return <section className="page-hero dark"><div className="container"><span className="eyebrow">{eyebrow}</span><h1>{title}</h1><p>{text}</p><Button>Book a Free Discovery Call</Button></div></section>}
export function CTA(){return <section className="cta dark"><Image src="/images/connect-cta-bg.webp" alt="An open network of glowing nodes representing collaboration" fill sizes="100vw"/><div className="container"><span className="eyebrow">YOUR NEXT CHAPTER</span><h2>Let’s build what’s next.<br/><em>Together.</em></h2><p>A question, an idea, or a challenge. That’s all we need to start.</p><Button>Book a Free Discovery Call</Button></div></section>}
