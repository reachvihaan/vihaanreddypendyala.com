"use client";
import {motion,useReducedMotion} from "motion/react";
import type {ReactNode} from "react";
export function PageTransition({children}:{children:ReactNode}){const reduce=useReducedMotion();return <motion.div initial={false} animate={reduce?undefined:{y:[8,0]}} transition={{duration:.5}}>{children}</motion.div>}
