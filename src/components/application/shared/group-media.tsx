import {
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  LucideIcon,
} from "lucide-react";

const data: ISocial[] = [
  {
    socialLabel: "GitHub",
    socialUrl: "https://github.com/imneli/",
    icon: GithubIcon,
  },
  {
    socialLabel: "Instagram",
    socialUrl: "https://www.instagram.com/theuwsx/",
    icon: InstagramIcon,
  },
  {
    socialLabel: "Linkedin",
    socialUrl: "https://www.linkedin.com/in/matheusmontovaneli/",
    icon: LinkedinIcon,
  },
];

interface ISocial {
  socialLabel: string;
  socialUrl: string;
  icon: LucideIcon;
}

const GroupMedia = () => {
  return (
    <div className="flex gap-4">
      {data.map((social, index) => (
        <div key={index} className="relative inline-block group">
          <div className="absolute inset-0 bg-black translate-x-0.5 translate-y-0.5 -z-10"></div>

          <a
            href={social.socialUrl}
            target="_blank"
            className="relative block p-2 bg-white border-2 border-black text-black
                       transition-transform duration-75
                       active:translate-x-0.5 active:translate-y-0.5"
          >
            <social.icon className="w-6 h-6" />
          </a>
        </div>
      ))}
    </div>
  );
};

export default GroupMedia;
