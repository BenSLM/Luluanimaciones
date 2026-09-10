import { motion } from "motion/react"
import { fadeUp, staggerContainer, VIEWPORT } from "../lib/animations"

interface SectionHeadingProps {
  eyebrow?: string
  title: string
  description?: string
  align?: "left" | "center"
  as?: "h2" | "h1"
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  as: Tag = "h2",
}: SectionHeadingProps) {
  return (
    <motion.div
      variants={staggerContainer(0.1, 0.05)}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      className={`flex flex-col gap-3 ${align === "center" ? "items-center text-center" : ""}`}
    >
      {eyebrow && (
        <motion.span
          variants={fadeUp}
          className="inline-flex w-fit items-center rounded-full bg-rosa-suave px-3.5 py-1 text-xs font-bold uppercase tracking-wide text-tinta"
        >
          {eyebrow}
        </motion.span>
      )}
      <motion.div variants={fadeUp}>
        <Tag className="max-w-2xl text-balance text-3xl font-extrabold md:text-4xl lg:text-5xl">
          {title}
        </Tag>
      </motion.div>
      {description && (
        <motion.p
          variants={fadeUp}
          className="max-w-xl text-pretty text-base leading-relaxed text-tinta-suave md:text-lg"
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  )
}