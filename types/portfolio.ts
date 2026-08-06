export interface SanityImage {
  _type?: 'image'
  asset?: {
    _ref?: string
    _type?: 'reference'
    url?: string
  }
  crop?: Record<string, number>
  hotspot?: Record<string, number>
}

export interface BannerContent {
  bannerImage: SanityImage | null
  title: string
}

export interface ExperienceItem {
  _key: string
  company: string
  end?: string
  logo: SanityImage | null
  role: string
  start: string
}

export interface ExperienceContent {
  experiences: ExperienceItem[]
  subtitle: string
  title: string
}

export interface PhilosophyContent {
  image: SanityImage | null
  subtitle: string
  title: string
}

export interface SkillItem {
  _key: string
  description: string
  icon: SanityImage | null
  title: string
}

export interface SkillsetContent {
  skills: SkillItem[]
  subtitle: string
  title: string
}

export interface FrameworkItem {
  _key: string
  icon: SanityImage | null
  title: string
}

export interface ProjectItem {
  _key: string
  description: string
  image: SanityImage | null
  mobile: boolean
  title: string
  url?: string
}

export interface AboutContent {
  image: SanityImage | null
  subtitle: string
  title: string
}

export interface SocialLink {
  _key: string
  icon: string
  label: string
  link: string
}

export interface FooterContent {
  bannerImage: SanityImage | null
  cv?: string
  socials: SocialLink[]
  subtitle: string
  title: string
}

export interface PortfolioContent {
  about: AboutContent | null
  banner: BannerContent | null
  experience: ExperienceContent | null
  footer: FooterContent | null
  frameworks: FrameworkItem[]
  philosophy: PhilosophyContent | null
  projects: ProjectItem[]
  skillset: SkillsetContent | null
}
