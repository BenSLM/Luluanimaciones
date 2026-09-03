interface LegalSection {
  heading: string
  body: string[]
}

interface LegalPageProps {
  title: string
  intro: string
  sections: LegalSection[]
}

export function LegalPage({ title, intro, sections }: LegalPageProps) {
  return (
    <>
      <section className="border-b border-borde bg-crema py-14 md:py-20">
        <div className="contenedor max-w-3xl">
          <h1 className="text-balance text-4xl font-extrabold md:text-5xl">
            {title}
          </h1>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-tinta-suave">
            {intro}
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <article className="contenedor flex max-w-3xl flex-col gap-8">
          {sections.map((section) => (
            <div key={section.heading} className="flex flex-col gap-3">
              <h2 className="text-2xl font-bold">{section.heading}</h2>
              {section.body.map((paragraph, i) => (
                <p
                  key={i}
                  className="text-pretty leading-relaxed text-tinta-suave"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          ))}
        </article>
      </section>
    </>
  )
}
