"use client";
import {motion,useReducedMotion} from "motion/react";
import type {ReactNode} from "react";
export function Reveal({children}:{children:ReactNode}){const reduce=useReducedMotion();return <motion.div initial={false} whileInView={reduce?undefined:{y:[16,0]}} viewport={{once:true,amount:.15}} transition={{duration:.65,ease:[.22,1,.36,1]}}>{children}</motion.div>}
