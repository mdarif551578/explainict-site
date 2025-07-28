import Link from 'next/link';
import { Code, Facebook, Youtube, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'YouTube', icon: Youtube, href: '#' },
  ];

  const quickLinks = [
    { href: '/courses', label: 'Courses' },
    { href: '/blog', label: 'Blog' },
    { href: '/about', label: 'About Sir' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <footer className="bg-secondary/20 border-t border-border/40">
      <div className="container mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Code className="h-8 w-8 text-primary" />
              <span className="font-bold text-xl">ICT HSC Guide</span>
            </Link>
            <p className="text-muted-foreground">
              Your complete guide to mastering ICT for the HSC exam with SakhawoaT SunnY SiR.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <link.icon className="h-6 w-6" />
                  <span className="sr-only">{link.name}</span>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
            <address className="space-y-2 not-italic text-muted-foreground">
              <p className="flex items-start gap-2">
                <MapPin className="h-5 w-5 mt-1 shrink-0 text-primary" />
                <span>DC Bridge, Madaripur, Bangladesh</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-primary" />
                <a href="tel:01788811826" className="hover:text-primary transition-colors">01788811826</a>
              </p>
            </address>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
                <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link></li>
                <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

        </div>
        <div className="mt-12 pt-8 border-t border-border/40 text-center text-muted-foreground text-sm">
          <p>&copy; {new Date().getFullYear()} Explain ICT HSC. All Rights Reserved. Designed with ❤️ for SakhawoaT SunnY SiR.</p>
        </div>
      </div>
    </footer>
  );
}
