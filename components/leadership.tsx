import Image from "next/image"

const partners = [
  {
    name: "张明远",
    nameEn: "Michael Zhang",
    title: "创始合伙人",
    titleEn: "Founding Partner",
    image: "/images/partner-1.jpg",
    quote:
      "跨境贸易的本质不是卖货，而是价值的跨文化传递。理解这一点，才能真正做到品牌出海。",
  },
  {
    name: "林思雨",
    nameEn: "Sarah Lin",
    title: "战略合伙人",
    titleEn: "Strategy Partner",
    image: "/images/partner-2.jpg",
    quote:
      "数据只是起点，洞察才是终点。我们的工作是在海量数据中找到那条通往增长的路径。",
  },
  {
    name: "王建国",
    nameEn: "James Wang",
    title: "运营合伙人",
    titleEn: "Operations Partner",
    image: "/images/partner-3.jpg",
    quote:
      "战略的价值在于执行。一个无法落地的战略，不过是一份精美的PPT。",
  },
]

export function Leadership() {
  return (
    <section className="section-padding bg-paper">
      <div className="container-editorial">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 lg:mb-24">
          <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">Leadership & Perspectives</p>
          <h2 className="heading-serif text-3xl md:text-4xl lg:text-5xl text-navy mb-6">
            合伙人视点
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            咨询的核心是人与智慧。我们的合伙人团队深耕跨境电商领域多年，
            以战略视野与实战经验，为客户提供真正有价值的指导。
          </p>
        </div>

        {/* Partner Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border border border-border">
          {partners.map((partner) => (
            <div key={partner.name} className="bg-paper">
              {/* Portrait */}
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={partner.image || "/placeholder.svg"}
                  alt={partner.name}
                  fill
                  className="object-cover img-bw"
                />
              </div>

              {/* Content */}
              <div className="p-6 lg:p-8">
                {/* Quote */}
                <blockquote className="mb-8">
                  <span className="heading-serif text-4xl text-navy/20 leading-none block mb-2">
                    {'"'}
                  </span>
                  <p className="text-sm text-charcoal leading-relaxed italic">
                    {partner.quote}
                  </p>
                </blockquote>

                {/* Name & Title */}
                <div className="pt-6 border-t border-border">
                  <h3 className="heading-serif text-xl text-navy mb-1">
                    {partner.name}
                  </h3>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                    {partner.nameEn}
                  </p>
                  <p className="text-sm text-cobalt">{partner.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
