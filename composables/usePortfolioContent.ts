import type { PortfolioContent, ProjectItem, SocialLink } from '~/types/portfolio'

export const portfolioQuery = groq`{
  "banner": *[_type == "banner"][0]{
    "title": banner_title,
    "bannerImage": banner_image
  },
  "experience": *[_type == "experience"][0]{
    "title": experience_title,
    "subtitle": experience_subtitle,
    experiences[]{ _key, role, company, logo, start, end }
  },
  "philosophy": *[_type == "philosophy"][0]{
    "title": philosophy_title,
    "subtitle": philosophy_subtitle,
    image
  },
  "skillset": *[_type == "skillset"][0]{
    title,
    subtitle,
    skills[]{ _key, title, "description": desc, icon }
  },
  "frameworks": *[_type == "frameworks"][0].frameworks[]{ _key, title, icon },
  "projects": *[_type == "projects"][0].projects[]{
    _key,
    title,
    "description": coalesce(description, decs),
    image,
    url,
    "mobile": coalesce(mobile, false)
  },
  "about": *[_type == "about"][0]{ title, subtitle, image },
  "footer": *[_type == "footer"][0]{
    title,
    subtitle,
    "bannerImage": banner_image,
    "cv": cv.asset->url,
    socials[]{
      _key,
      icon,
      link,
      "label": coalesce(label, select(
        link match "*linkedin*" => "LinkedIn",
        link match "*github*" => "GitHub",
        link match "*instagram*" => "Instagram",
        link match "*twitter*" => "X / Twitter",
        "Social profile"
      ))
    }
  }
}`

export const projectsQuery = groq`*[_type == "projects"][0].projects[]{
  _key,
  title,
  "description": coalesce(description, decs),
  image,
  url,
  "mobile": coalesce(mobile, false)
}`

export const socialsQuery = groq`*[_type == "footer"][0].socials[]{
  _key,
  icon,
  link,
  "label": coalesce(label, select(
    link match "*linkedin*" => "LinkedIn",
    link match "*github*" => "GitHub",
    link match "*instagram*" => "Instagram",
    link match "*twitter*" => "X / Twitter",
    "Social profile"
  ))
}`

export function usePortfolioContent() {
  const sanity = useSanity()
  return useAsyncData<PortfolioContent>('portfolio-content', () => sanity.fetch(portfolioQuery), {
    deep: false,
  })
}

export function useProjectsContent() {
  const sanity = useSanity()
  return useAsyncData<ProjectItem[]>('projects-content', () => sanity.fetch(projectsQuery), {
    default: () => [],
    deep: false,
  })
}

export function useSocialLinks() {
  const sanity = useSanity()
  return useAsyncData<SocialLink[]>('social-links', () => sanity.fetch(socialsQuery), {
    default: () => [],
    deep: false,
  })
}
