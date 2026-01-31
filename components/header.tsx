"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

const navItems = [
  { label: "能力", href: "#capabilities" },
  { label: "行业", href: "#industries" },
  { label: "方法论", href: "#framework" },
  { label: "洞察", href: "#insights" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-paper border-b border-border">
      <div className="container-editorial">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="font-serif text-xl lg:text-2xl text-navy tracking-tight">
            鸿亿鸿
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-[11px] font-medium uppercase tracking-[0.15em] text-charcoal hover:text-cobalt transition-colors duration-300"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Client Login */}
          <div className="hidden lg:block">
            <Link
              href="#login"
              className="text-[11px] font-medium uppercase tracking-[0.15em] text-charcoal link-underline"
            >
              客户登录
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="lg:hidden p-2 text-charcoal"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "关闭菜单" : "打开菜单"}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="lg:hidden py-6 border-t border-border">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-[11px] font-medium uppercase tracking-[0.15em] text-charcoal hover:text-cobalt transition-colors duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="#login"
                className="text-[11px] font-medium uppercase tracking-[0.15em] text-charcoal mt-4 pt-4 border-t border-border"
                onClick={() => setMobileMenuOpen(false)}
              >
                客户登录
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
