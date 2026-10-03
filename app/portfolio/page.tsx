import {PageHero,CTA} from "@/components/UI";
import {Gallery} from "@/components/Gallery";
import {projects} from "@/lib/content";
export const metadata={title:"Portfolio",description:"Explore digital product concepts, project directions and AI experiments from Vihaan Reddy.",alternates:{canonical:"/portfolio"}};
export default function Portfolio(){return <><PageHero eyebrow="PORTFOLIO / FROM POSSIBILITY TO PRACTICE" title="Ideas, built." text="A place for projects, experiments and the next good question. Explore the kinds of digital experiences we can shape together."/><section className="section"><div className="container"><p className="notice">[Portfolio entries are illustrative samples. Real clients, completion status, project details and results are pending confirmation.]</p><Gallery items={projects} kind="work"/></div></section><CTA/></>}
