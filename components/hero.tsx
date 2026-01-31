import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="min-h-[90vh] flex items-center justify-center bg-paper pt-20">
      <div className="container-editorial text-center">
        <div className="max-w-4xl mx-auto">
          {/* Tag */}
          <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-8">Demand-OS</p>
          
          {/* Main Headline */}
          <h1 className="heading-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-navy leading-[1.1] mb-8 text-balance">
            全球贸易操作系统
          </h1>
          
          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed font-light">
            通过严谨的数据科学，连接东方供应链与西方需求。
            <br className="hidden md:block" />
            为跨境电商企业提供战略级咨询服务。
          </p>
          
          {/* CTA Links */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              href="#capabilities"
              className="group flex items-center gap-2 text-sm font-medium text-navy link-underline"
            >
              探索我们的能力
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              href="#insights"
              className="text-sm font-medium text-muted-foreground hover:text-navy transition-colors duration-300"
            >
              阅读最新洞察
            </Link>
          </div>
        </div>
        
        {/* Decorative Line */}
        <div className="mt-20 lg:mt-28">
          <div className="w-px h-20 bg-border mx-auto" />
        </div>
      </div>
    </section>
  )
}
