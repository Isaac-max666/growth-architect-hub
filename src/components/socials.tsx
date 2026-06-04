import { Instagram, Linkedin, type LucideIcon } from "lucide-react";

// Custom inline SVGs for platforms not in lucide
const Fiverr = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M23.004 15.588a1.024 1.024 0 1 0 0-2.05 1.024 1.024 0 0 0 0 2.05Zm-2.05 6.668h-3.585V13.36h-4.17v8.896H9.613V13.36H6.572v8.896H2.987V10.286h3.585V8.749c0-2.376 1.798-3.928 4.354-3.928h2.273v3.073h-1.594c-.819 0-1.286.412-1.286 1.235v1.157h6.973v8.896h2.611c.82 0 1.287-.412 1.287-1.235V13.36h3.586v6.13c0 1.764-1.42 2.766-3.821 2.766Z"/>
  </svg>
);
const Pinterest = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.097.118.112.221.085.343-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.748-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12.017 24c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
  </svg>
);
const Skool = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H8l-5 4V5Zm6.5 4.75a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0ZM7 14.25c.6-1.5 2.65-2.5 5-2.5s4.4 1 5 2.5H7Z"/>
  </svg>
);
const TikTok = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.3 20.1a6.34 6.34 0 0 0 10.86-4.43V8.55a8.16 8.16 0 0 0 4.77 1.52V6.66a4.85 4.85 0 0 1-1.34-.02Z"/>
  </svg>
);
const XLogo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M18.244 2H21.5l-7.5 8.57L22.5 22h-6.84l-5.36-6.96L4.16 22H.9l8.02-9.17L.5 2h6.96l4.84 6.4L18.244 2Zm-1.2 18h1.86L7.04 4H5.07l11.974 16Z"/>
  </svg>
);

export type SocialLink = {
  name: string;
  href: string;
  Icon: LucideIcon | ((p: React.SVGProps<SVGSVGElement>) => JSX.Element);
};

export const socials: SocialLink[] = [
  { name: "Instagram", href: "https://www.instagram.com/isaacsolutions", Icon: Instagram },
  { name: "X",         href: "https://x.com/Isaacsolutions",             Icon: XLogo },
  { name: "LinkedIn",  href: "https://www.linkedin.com/in/isaacsolutions", Icon: Linkedin },
  { name: "TikTok",    href: "https://www.tiktok.com/@isaacsolutiions",   Icon: TikTok },
  { name: "Fiverr",    href: "https://www.fiverr.com/temzymarketer",      Icon: Fiverr },
  { name: "Skool",     href: "https://www.skool.com/@temzy-marketer-7857", Icon: Skool },
  { name: "Pinterest", href: "https://www.pinterest.com/isaacsolutions",  Icon: Pinterest },
];
